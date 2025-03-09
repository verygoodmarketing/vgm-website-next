"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

interface HubspotEmbedFormEnhancedProps {
  title?: string
  portalId?: string
  formId?: string
  region?: string
}

export default function HubspotEmbedFormEnhanced({
  title = "Get in Touch",
  portalId = "45346445",
  formId = "6e5038ce-76d8-4b3f-a1ec-8e369da8c48e",
  region = "na1",
}: HubspotEmbedFormEnhancedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Don't load the script if it's already loaded
    if (scriptLoadedRef.current) return

    // Check if the script is already in the document
    const existingScript = document.querySelector(`script[src*="${portalId}.js"]`)
    if (existingScript) {
      scriptLoadedRef.current = true
      initializeForm()
      return
    }

    // Create and load the HubSpot script
    const script = document.createElement("script")
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`
    script.defer = true
    script.onload = () => {
      scriptLoadedRef.current = true
      initializeForm()
    }
    script.onerror = () => {
      setError("Failed to load the HubSpot form script. Please try again later.")
      setIsLoading(false)
    }

    document.body.appendChild(script)

    // Cleanup function
    return () => {
      // We don't remove the script on unmount because other instances might need it
    }
  }, [portalId, formId, region])

  const initializeForm = () => {
    if (!formContainerRef.current || !window.hbspt) {
      setError("Failed to initialize the form. Please try again later.")
      setIsLoading(false)
      return
    }

    try {
      // Clear the container first
      formContainerRef.current.innerHTML = ""

      // Create the form using HubSpot's JavaScript API
      window.hbspt.forms.create({
        region: region,
        portalId: portalId,
        formId: formId,
        target: formContainerRef.current,
        onFormReady: () => {
          setIsLoading(false)
        },
        onFormSubmit: () => {
          // This is called when the form is submitted
          console.log("Form submitted successfully")
        },
        onFormSubmitted: () => {
          // This is called after the form submission is processed
          setFormSubmitted(true)
        },
        onFormError: (errors) => {
          console.error("HubSpot form error:", errors)
        },
      })
    } catch (err) {
      console.error("Error creating HubSpot form:", err)
      setError("Failed to create the contact form. Please try again later.")
      setIsLoading(false)
    }
  }

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
              <p>{error}</p>
              <p className="mt-2">
                Please email us directly at{" "}
                <a href="mailto:info@verygoodmarketing.com" className="underline">
                  info@verygoodmarketing.com
                </a>
              </p>
            </div>
          </div>
        )}

        {formSubmitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded flex flex-col items-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-medium mb-2">Message Sent Successfully!</h3>
            <p className="text-center">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div ref={formContainerRef} className={isLoading || error ? "hidden" : ""}></div>
        )}
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
          onFormSubmitted?: () => void
          onFormError?: (errors: any) => void
        }) => void
      }
    }
  }
}

