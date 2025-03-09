"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReliableHubspotForm() {
  const [isLoading, setIsLoading] = useState(true)
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Clear any existing scripts
    const existingScript = document.getElementById("hubspot-form-script")
    if (existingScript) {
      existingScript.remove()
    }

    // Create HubSpot script
    const script = document.createElement("script")
    script.id = "hubspot-form-script"
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.async = true
    script.onload = () => {
      if (window.hbspt && formContainerRef.current) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "45346445",
            formId: "6e5038ce-76d8-4b3f-a1ec-8e369da8c48e",
            target: "#hubspot-form-container",
            onFormReady: () => {
              setIsLoading(false)
            }
          })
        } catch (err) {
          console.error("Error creating HubSpot form:", err)
          setIsLoading(false)
        }
      }
    }
    
    document.head.appendChild(script)
    
    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex flex-col justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-500">Loading contact form...</p>
          </div>
        )}
        
        <div 
          id="hubspot-form-container" 
          ref={formContainerRef}
          className={isLoading ? "hidden" : ""}
        ></div>
      </CardContent>
    </Card>
  )
}

// Add HubSpot types
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
        }) => void
      }
    }
  }
}