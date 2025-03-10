"use client"

import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HubspotIntegration from "@/components/contact/hubspot-integration"
import { useSearchParams } from "next/navigation"
import ReliableHubspotForm from "@/components/contact/reliable-hubspot-form"

// Loading component
function LoadingForm() {
  return (
    <div className="h-[600px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
}

export default function ContactPageClient() {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") === "schedule" ? "schedule" : "contact"

  return (
    <Tabs defaultValue={defaultTab} className="mb-12">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="schedule">Schedule a Consultation</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="contact">
        <Suspense fallback={<LoadingForm />}>
          <ReliableHubspotForm />
        </Suspense>
      </TabsContent>

      <TabsContent value="schedule">
        <Suspense fallback={<LoadingForm />}>
          <HubspotIntegration url="https://app.verygoodmarketing.com/meetings/brad-bodine/consultation" />
        </Suspense>
        <div className="mt-6">
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
      </TabsContent>
    </Tabs>
  )
}