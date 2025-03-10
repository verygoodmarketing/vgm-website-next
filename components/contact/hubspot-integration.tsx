"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface HubspotIntegrationProps {
  url?: string
  styles?: React.CSSProperties
}

export default function HubspotIntegration({
  url = "https://app.verygoodmarketing.com/meetings/brad-bodine/consultation",
  styles = { minHeight: "700px", width: "100%", border: "none" },
}: HubspotIntegrationProps) {
  const [hubspotUrl, setHubspotUrl] = useState<string>(url || "")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // If URL is provided as prop or set as default, use it directly
    if (url) {
      setHubspotUrl(url)
      setIsLoading(false)
    } else {
      setIsLoading(true)
      // Could add API fetch here if needed in the future
      setError("Hubspot URL not provided")
      setIsLoading(false)
    }
  }, [url])

  // Ensure the URL is properly formatted for iframe embedding
  const getEmbedUrl = () => {
    if (!hubspotUrl) {
      return null
    }

    // Make sure we're using the embed version of the URL
    let embedUrl = hubspotUrl

    // Add necessary parameters for embedding if needed
    if (!embedUrl.includes("?")) {
      embedUrl += "?"
    } else {
      embedUrl += "&"
    }

    embedUrl += "embed=true"
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
            data-testid="hubspot-embed"
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