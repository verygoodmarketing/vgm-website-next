"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HubspotEmbedFormProps {
  title?: string
  portalId?: string
  formId?: string
  region?: string
}

export default function HubspotEmbedForm({
  title = "Get in Touch",
  portalId = "45346445",
  formId = "6e5038ce-76d8-4b3f-a1ec-8e369da8c48e",
  region = "na1",
}: HubspotEmbedFormProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Don't load the script if it's already loaded
    if (scriptLoadedRef.current) return

    // Check if the script is already in the document
    const existingScript = document.querySelector(`script[src*="${portalId}.js"]`)
    if (existingScript) {
      scriptLoadedRef.current = true
      setIsLoading(false)
      return
    }

    // Create and load the HubSpot script
    const script = document.createElement("script")
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`
    script.defer = true
    script.onload = () => {
      scriptLoadedRef.current = true
      setIsLoading(false)
    }
    script.onerror = () => {
      setError("Failed to load the HubSpot form script. Please try again later.")
      setIsLoading(false)
    }

    document.body.appendChild(script)

    // Cleanup function
    return () => {
      // We don't remove the script on unmount because other instances might need it
      // But we can clean up any event listeners if needed
    }
  }, [portalId])

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
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
            <p className="mt-2">
              Please email us directly at{" "}
              <a href="mailto:info@verygoodmarketing.com" className="underline">
                info@verygoodmarketing.com
              </a>
            </p>
          </div>
        )}

        <div
          ref={formContainerRef}
          className={`hs-form-frame ${isLoading ? "hidden" : ""}`}
          data-region={region}
          data-form-id={formId}
          data-portal-id={portalId}
        ></div>
      </CardContent>
    </Card>
  )
}

