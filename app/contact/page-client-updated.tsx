"use client"

import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HubspotIntegration from "@/components/contact/hubspot-integration"
import { useSearchParams } from "next/navigation"
import ReliableHubspotForm from "@/components/contact/reliable-hubspot-form"
import { SiteSettings } from "@/lib/settings-service"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Loading component
function LoadingForm() {
  return (
    <div className="h-[600px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
}

// Custom contact info component that accepts settings directly
function ContactInfoDisplay({ settings }: { settings: SiteSettings }) {
  // Check if we should show the address
  const showAddress = settings.address && 
    (settings.display?.showAddressOnContact === undefined || settings.display.showAddressOnContact === true);
  
  return (
    <Card className="bg-gray-50 h-full">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <a href={`mailto:${settings.email}`} className="text-blue-600 hover:underline">
              {settings.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <a href={settings.phone.href} className="text-blue-600 hover:underline">
              {settings.phone.display}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold">Office Hours</h4>
            <p>{settings.hours || "Monday - Friday: 9am - 5pm"}</p>
          </div>
        </div>

        {showAddress && (
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p>{settings.address.street}</p>
              <p>{settings.address.city}, {settings.address.state} {settings.address.zip}</p>
            </div>
          </div>
        )}

        <div className="mt-4">
          <h4 className="font-semibold mb-3">Our Response Guarantee</h4>
          <p className="text-gray-700">
            We guarantee a response to all inquiries within 24 business hours. Your business is important to us, and
            we're committed to providing timely, helpful communication.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

interface ContactPageClientProps {
  settings: SiteSettings;
}

export default function ContactPageClient({ settings }: ContactPageClientProps) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Suspense fallback={<LoadingForm />}>
            <ReliableHubspotForm />
          </Suspense>
          <ContactInfoDisplay settings={settings} />
        </div>
      </TabsContent>

      <TabsContent value="schedule">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Suspense fallback={<LoadingForm />}>
            <HubspotIntegration url="https://app.verygoodmarketing.com/meetings/brad-bodine/consultation" />
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
  )
}