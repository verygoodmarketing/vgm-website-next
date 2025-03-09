"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

interface HubspotFormEmbedProps {
  portalId: string
  formId: string
  title?: string
}

export default function HubspotFormEmbed({ portalId, formId, title = "Get in Touch" }: HubspotFormEmbedProps) {
  const formContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if we have valid credentials
    if (!portalId || !formId) {
      setError("HubSpot form configuration is missing. Please check your environment variables.")
      setIsLoading(false)
      return
    }

    // Create the HubSpot script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    document.body.appendChild(script)

    // Initialize the form when the script loads
    script.addEventListener("load", () => {
      if (window.hbspt && formContainerRef.current) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: portalId,
            formId: formId,
            target: formContainerRef.current,
            onFormReady: () => {
              setIsLoading(false)
            },
            onFormSubmit: () => {
              // Handle form submission if needed
            },
          })
        } catch (err) {
          console.error("Error creating HubSpot form:", err)
          setError("Failed to load the contact form. Please try again later.")
          setIsLoading(false)
        }
      }
    })

    script.addEventListener("error", () => {
      setError("Failed to load the contact form script. Please try again later.")
      setIsLoading(false)
    })

    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [portalId, formId])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
            <div>
              <p className="font-medium">There was a problem loading the contact form</p>
              <p>{error}</p>
              <p className="mt-2">Please email us directly at info@verygoodmarketing.com</p>
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
          onFormReady?: () => void
          onFormSubmit?: () => void
        }) => void
      }
    }
  }
}

