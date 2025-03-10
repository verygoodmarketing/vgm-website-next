"use client"

import { defaultSettings } from "@/lib/settings-service"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This client component can be used directly in other client components
export default function ContactInfoWrapper() {
  const settings = defaultSettings;
  
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