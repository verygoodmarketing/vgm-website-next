import { NextResponse } from "next/server"

// Simple in-memory storage for form submissions when HubSpot is unavailable
// In a production app, you would use a database instead
const formSubmissions: any[] = []

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, phone, company } = data

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Store the submission in our local storage
    const submission = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      phone,
      company,
      timestamp: new Date().toISOString(),
      source: request.headers.get("referer") || "Unknown",
    }

    formSubmissions.push(submission)
    console.log("Form submission stored locally:", submission)

    // Get HubSpot credentials from environment variables
    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formId = process.env.HUBSPOT_FORM_ID

    // If HubSpot credentials are missing, just return success with the local submission
    if (!portalId || !formId) {
      return NextResponse.json({
        success: true,
        fallback: true,
        message: "Form submitted successfully via fallback method (missing credentials)",
      })
    }

    // Try to submit to HubSpot, but don't wait for it to complete
    // This way, we can return a success response to the user immediately
    submitToHubSpot(portalId, formId, { firstName, lastName, email, phone, company })
      .then((result) => {
        if (result.success) {
          console.log("HubSpot submission successful")
        } else {
          console.error("HubSpot submission failed:", result.error)
        }
      })
      .catch((error) => {
        console.error("Error submitting to HubSpot:", error)
      })

    // Return success immediately
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      id: submission.id,
    })
  } catch (error) {
    console.error("Error in form submission:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Function to submit to HubSpot in the background
async function submitToHubSpot(
  portalId: string,
  formId: string,
  data: any,
): Promise<{ success: boolean; error?: any }> {
  try {
    const { firstName, lastName, email, phone, company } = data

    // Prepare the data for HubSpot
    const hubspotData = {
      fields: [
        { name: "firstname", value: firstName },
        { name: "lastname", value: lastName },
        { name: "email", value: email },
        { name: "phone", value: phone || "" },
        { name: "company", value: company },
      ],
      context: {
        pageUri: "https://verygoodmarketing.com/contact",
        pageName: "Contact Page",
      },
    }

    // Try different regions for HubSpot API
    const regions = ["na1", "eu1", ""]

    for (const region of regions) {
      try {
        const regionPrefix = region ? `${region}.` : ""
        const apiUrl = `https://api.${regionPrefix}hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

        console.log(`Trying HubSpot API endpoint: ${apiUrl}`)

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        })

        // Check if response is JSON
        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          const textResponse = await response.text()
          console.error(`Non-JSON response from HubSpot (${region}):`, textResponse)
          continue // Try next region
        }

        // Parse JSON response
        const responseData = await response.json()

        if (!response.ok) {
          console.error(`HubSpot API error (${region}):`, responseData)
          continue // Try next region
        }

        // Success!
        return { success: true }
      } catch (err) {
        console.error(`Error with HubSpot region ${region}:`, err)
      }
    }

    return { success: false, error: "All HubSpot regions failed" }
  } catch (error) {
    return { success: false, error }
  }
}

// API route to get submissions (for admin purposes)
export async function GET() {
  return NextResponse.json({ submissions: formSubmissions })
}

