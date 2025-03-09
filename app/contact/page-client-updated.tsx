"use client"

import type React from "react"

import { Suspense, useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ContactInfo from "@/components/contact/contact-info"
import CalendlyIntegration from "@/components/contact/calendly-integration"
import { Card, CardContent } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import HubspotFormEmbed from "@/components/contact/hubspot-form-embed"
import ContactForm from "@/components/contact/contact-form"

// Error fallback component
function ErrorFallback() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Unable to load scheduling</h3>
          <p className="text-gray-600 mb-4">
            We're having trouble loading our scheduling system. Please try again later or contact us directly.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Loading component
function LoadingForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactPageClient({ intro }: { intro?: React.ReactNode }) {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") === "schedule" ? "schedule" : "contact"

  const [hubspotConfig, setHubspotConfig] = useState<{
    portalId: string
    formId: string
    configured: boolean
    loading: boolean
    error: string | null
  }>({
    portalId: "",
    formId: "",
    configured: false,
    loading: true,
    error: null,
  })

  useEffect(() => {
    // Fetch HubSpot configuration from the server
    async function fetchHubspotConfig() {
      try {
        const response = await fetch("/api/hubspot/config")
        const data = await response.json()

        if (data.error) {
          setHubspotConfig({
            portalId: "",
            formId: "",
            configured: false,
            loading: false,
            error: data.error,
          })
        } else {
          setHubspotConfig({
            portalId: data.portalId,
            formId: data.formId,
            configured: data.configured,
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        setHubspotConfig({
          portalId: "",
          formId: "",
          configured: false,
          loading: false,
          error: "Failed to load form configuration",
        })
      }
    }

    fetchHubspotConfig()
  }, [])

  return (
    <div>
      {intro}

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={defaultTab} className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                <TabsTrigger value="schedule">Schedule a Consultation</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="contact">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {hubspotConfig.loading ? (
                  <LoadingForm />
                ) : hubspotConfig.configured ? (
                  <HubspotFormEmbed portalId={hubspotConfig.portalId} formId={hubspotConfig.formId} />
                ) : (
                  <ContactForm />
                )}
                <ContactInfo />
              </div>
            </TabsContent>

            <TabsContent value="schedule">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Suspense fallback={<div className="h-[600px] bg-gray-100 animate-pulse rounded-lg"></div>}>
                  <CalendlyIntegration />
                </Suspense>
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Why Schedule a Consultation?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Get personalized marketing advice for your specific business needs</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Discuss your marketing goals and challenges with our experts</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Learn about our transparent pricing and approach</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>No obligation - our consultations are completely free</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">What to Expect</h3>
                    <p className="mb-4">
                      Our consultations are designed to understand your business and provide initial guidance on your
                      marketing strategy.
                    </p>
                    <p className="mb-4">Before your call, it's helpful to think about:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Your current marketing efforts and results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Specific goals you want to achieve</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Your target audience and ideal customer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Budget considerations for your marketing initiatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

