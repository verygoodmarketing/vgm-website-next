"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HubspotRawEmbedProps {
  title?: string
}

export default function HubspotRawEmbed({ title = "Get in Touch" }: HubspotRawEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a script element
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/embed/45346445.js"
    script.defer = true

    // Append the script to the document
    document.head.appendChild(script)

    // Clean up
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef}>
          <div
            className="hs-form-frame"
            data-region="na1"
            data-form-id="6e5038ce-76d8-4b3f-a1ec-8e369da8c48e"
            data-portal-id="45346445"
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}

