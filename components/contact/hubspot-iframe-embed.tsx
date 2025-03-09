"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HubspotIframeEmbedProps {
  title?: string
}

export default function HubspotIframeEmbed({ title = "Get in Touch" }: HubspotIframeEmbedProps) {
  // HubSpot form URL - this is a generic format, you may need to adjust based on your specific form
  const formUrl = "https://share.hsforms.com/1-_z3_-iiQTCYhzXX_BDMlQ45346445"

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <iframe
          src={formUrl}
          width="100%"
          height="600"
          style={{ border: "none" }}
          title="Contact Form"
          loading="lazy"
        ></iframe>
      </CardContent>
    </Card>
  )
}

