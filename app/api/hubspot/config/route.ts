import { NextResponse } from "next/server"

export async function GET() {
  // Get HubSpot credentials from environment variables
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formId = process.env.HUBSPOT_FORM_ID

  // Check if credentials are available
  if (!portalId || !formId) {
    console.warn("HubSpot credentials are missing or invalid")
    return NextResponse.json(
      {
        error: "HubSpot configuration is incomplete",
        configured: false,
      },
      { status: 200 },
    )
  }

  // Return the credentials
  return NextResponse.json({
    portalId,
    formId,
    configured: true,
  })
}

