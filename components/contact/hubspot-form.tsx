"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { CustomButton } from "@/components/custom-button"

export default function HubspotForm({ title = "Get in Touch" }: { title?: string }) {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string>("")

  // Get HubSpot credentials from environment variables
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

  useEffect(() => {
    // Log environment variables (without exposing sensitive data)
    console.log("HubSpot Portal ID available:", !!portalId)
    console.log("HubSpot Form ID available:", !!formId)

    // Check if we have valid credentials
    if (!portalId || !formId) {
      setError("HubSpot form configuration is missing. Please check your environment variables.")
      setIsLoading(false)
      return
    }

    // Set debug info
    setDebugInfo(`Using Portal ID: ${portalId.substring(0, 3)}... and Form ID: ${formId.substring(0, 3)}...`)

    // Create the HubSpot script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    document.body.appendChild(script)

    // Initialize the form when the script loads
    script.addEventListener("load", () => {
      console.log("HubSpot script loaded successfully")

      if (window.hbspt && formContainerRef.current) {
        try {
          // Get the current domain for embedding
          const embedDomain = window.location.host
          console.log("Using embed domain:", embedDomain)

          window.hbspt.forms.create({
            region: "na1", // Try different regions if needed: na1, eu1, etc.
            portalId: portalId,
            formId: formId,
            target: formContainerRef.current,
            embedDomain: embedDomain, // Explicitly set the embed domain
            onFormReady: () => {
              console.log("HubSpot form created successfully")
              setIsLoading(false)
            },
            onFormSubmit: () => {
              console.log("Form submitted")
            },
          })
        } catch (err) {
          console.error("Error creating HubSpot form:", err)
          setError(`Failed to load the contact form: ${err instanceof Error ? err.message : "Unknown error"}`)
          setIsLoading(false)

          // Dispatch custom event to notify parent components
          window.dispatchEvent(new CustomEvent("hubspot-form-error"))
        }
      } else {
        console.error("HubSpot script loaded but hbspt object not available")
        setError("Failed to initialize HubSpot form. Please try again later.")
        setIsLoading(false)
      }
    })

    script.addEventListener("error", (e) => {
      console.error("Failed to load HubSpot script:", e)
      setError("Failed to load the contact form script. Please try again later.")
      setIsLoading(false)

      // Dispatch custom event to notify parent components
      window.dispatchEvent(new CustomEvent("hubspot-form-error"))
    })

    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [portalId, formId])

  // Fallback contact form
  const handleEmailClick = () => {
    window.location.href = "mailto:info@verygoodmarketing.com"
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex flex-col justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-500">Loading contact form...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex flex-col">
            <div className="flex items-start mb-4">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">There was a problem loading the contact form</p>
                <p>{error}</p>
                {debugInfo && <p className="text-xs mt-2 text-gray-500">{debugInfo}</p>}
              </div>
            </div>

            <div className="bg-white p-6 rounded-md mt-2">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact us directly instead</h3>
              <p className="mb-4">
                We apologize for the inconvenience. Please contact us through one of these methods:
              </p>
              <div className="space-y-4">
                <CustomButton variant="blue" onClick={handleEmailClick} className="w-full">
                  Email Us
                </CustomButton>
                <p className="text-sm text-gray-600">
                  Or call us at:{" "}
                  <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <div ref={formContainerRef} className="hubspot-form-container"></div>
      </CardContent>
    </Card>
  )
}

// Add HubSpot types to the global Window interface
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string
          portalId: string
          formId: string
          target: HTMLElement
          embedDomain?: string
          onFormReady?: () => void
          onFormSubmit?: () => void
        }) => void
      }
    }
  }
}

