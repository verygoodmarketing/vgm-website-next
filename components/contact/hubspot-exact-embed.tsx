"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { CustomButton } from "@/components/custom-button"

interface HubspotExactEmbedProps {
  title?: string
}

export default function HubspotExactEmbed({ title = "Get in Touch" }: HubspotExactEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const formInitializedRef = useRef(false)
  const uniqueFormId = "hubspot-form-container"

  // HubSpot credentials
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "45346445"
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "6e5038ce-76d8-4b3f-a1ec-8e369da8c48e"

  useEffect(() => {
    // Reset state
    setIsLoading(true)
    setError(null)
    formInitializedRef.current = false

    // Clear any existing content in the container
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = ""
    }

    // Create a new div with the exact structure HubSpot expects
    const formDiv = document.createElement("div")
    formDiv.className = "hbspt-form"
    formDiv.id = uniqueFormId

    // Add the div to our container
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(formDiv)
    }

    // Function to load the HubSpot script
    const loadHubspotScript = () => {
      // Remove any existing script to avoid conflicts
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current)
      }

      // Create the script element exactly as HubSpot recommends
      const script = document.createElement("script")
      script.src = "//js.hsforms.net/forms/embed/v2.js"
      script.charset = "utf-8"
      script.type = "text/javascript"
      script.defer = true
      scriptRef.current = script

      // Add the script to the document
      document.head.appendChild(script)

      // Set up the onload handler
      script.onload = () => {
        console.log("HubSpot script loaded successfully")

        // Wait a moment to ensure the HubSpot object is fully initialized
        setTimeout(() => {
          if (window.hbspt && window.hbspt.forms) {
            try {
              console.log("Creating HubSpot form")
              window.hbspt.forms.create({
                region: "na1",
                portalId: portalId,
                formId: formId,
                target: `#${uniqueFormId}`,
                onFormReady: () => {
                  console.log("HubSpot form ready")
                  setIsLoading(false)
                  formInitializedRef.current = true
                },
                onFormSubmit: () => {
                  console.log("Form submitted")
                },
                onFormError: (errors) => {
                  console.error("HubSpot form error:", errors)
                  setError("There was an error with the form. Please try again later or contact us directly.")
                  setIsLoading(false)
                },
              })
            } catch (err) {
              console.error("Error creating HubSpot form:", err)
              setError("There was an error initializing the form. Please try again later or contact us directly.")
              setIsLoading(false)
            }
          } else {
            console.error("HubSpot forms object not available after script load")
            setError("Unable to load the contact form. Please try again later or contact us directly.")
            setIsLoading(false)
          }
        }, 1000)
      }

      script.onerror = (e) => {
        console.error("Failed to load HubSpot script:", e)
        setError("Failed to load the contact form. Please try again later or contact us directly.")
        setIsLoading(false)
      }
    }

    // Load the script
    loadHubspotScript()

    // Cleanup function
    return () => {
      // We intentionally don't remove the script on unmount to avoid reloading issues
    }
  }, [portalId, formId])

  // Handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:info@verygoodmarketing.com"
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && !error && (
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

        <div ref={formContainerRef} className={isLoading || error ? "hidden" : ""} aria-live="polite"></div>
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
          target: string
          onFormReady?: () => void
          onFormSubmit?: () => void
          onFormError?: (errors: any) => void
        }) => void
      }
    }
  }
}

