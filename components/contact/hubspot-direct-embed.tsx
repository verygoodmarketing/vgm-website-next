"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HubspotDirectEmbedProps {
  title?: string
}

export default function HubspotDirectEmbed({ title = "Get in Touch" }: HubspotDirectEmbedProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only create the script if it doesn't already exist
    if (!document.querySelector('script[src="https://js.hsforms.net/forms/embed/45346445.js"]')) {
      const script = document.createElement("script")
      script.src = "https://js.hsforms.net/forms/embed/45346445.js"
      script.defer = true
      document.body.appendChild(script)
      scriptRef.current = script
    }

    // Cleanup function
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current)
      }
    }
  }, [])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* This is the exact div from the provided embed code */}
        <div
          ref={containerRef}
          className="hs-form-frame"
          data-region="na1"
          data-form-id="6e5038ce-76d8-4b3f-a1ec-8e369da8c48e"
          data-portal-id="45346445"
        ></div>
      </CardContent>
    </Card>
  )
}

