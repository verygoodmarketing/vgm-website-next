"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface CalendlyIntegrationProps {
  url?: string
  styles?: React.CSSProperties
}

export default function CalendlyIntegration({
  url,
  styles = { minHeight: "700px", width: "100%", border: "none" },
}: CalendlyIntegrationProps) {
  const [calendlyUrl, setCalendlyUrl] = useState<string>(url || "")
  const [isLoading, setIsLoading] = useState(!url)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // If URL is not provided as prop, fetch it from the API
    if (!url) {
      setIsLoading(true)
      fetch("/api/config")
        .then((response) => response.json())
        .then((data) => {
          if (data?.calendly?.url && typeof data.calendly.url === "string") {
            // Check if the URL is the placeholder or a real URL
            if (data.calendly.url.includes("your-calendly-username")) {
              setError("Calendly URL has not been configured. Please set up your CALENDLY_URL environment variable.")
            } else {
              setCalendlyUrl(data.calendly.url)
            }
          } else {
            setError("Invalid Calendly URL configuration")
          }
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Failed to load Calendly configuration:", error)
          setError("Failed to load scheduling configuration")
          setIsLoading(false)
        })
    }
  }, [url])

  // Ensure the URL is properly formatted for iframe embedding
  const getEmbedUrl = () => {
    if (!calendlyUrl || calendlyUrl.includes("your-calendly-username")) {
      return null
    }

    // Make sure we're using the embed version of the URL
    let embedUrl = calendlyUrl

    // Add necessary parameters for embedding
    if (!embedUrl.includes("?")) {
      embedUrl += "?"
    } else {
      embedUrl += "&"
    }

    embedUrl += "embed_domain=" + window.location.host + "&embed_type=Inline"
    return embedUrl
  }

  // If there's a configuration error, show a friendly message
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Schedule a Consultation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <AlertCircle className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scheduling Temporarily Unavailable</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Our scheduling system is currently being configured. Please use our contact form or call us directly to
              schedule a consultation.
            </p>
            <Button
              onClick={() => (window.location.href = "mailto:info@verygoodmarketing.com")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Email Us Instead
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const embedUrl = getEmbedUrl()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Schedule a Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center h-[600px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            frameBorder="0"
            title="Schedule a consultation"
            style={styles}
            data-testid="calendly-embed"
            className="min-h-[700px] w-full"
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <AlertCircle className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scheduling Temporarily Unavailable</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Our scheduling system is currently being configured. Please use our contact form or call us directly to
              schedule a consultation.
            </p>
            <Button
              onClick={() => (window.location.href = "mailto:info@verygoodmarketing.com")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Email Us Instead
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

