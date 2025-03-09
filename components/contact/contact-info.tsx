import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactInfo() {
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
            <a href="mailto:info@verygoodmarketing.com" className="text-blue-600 hover:underline">
              info@verygoodmarketing.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <a href="tel:+15551234567" className="text-blue-600 hover:underline">
              (555) 123-4567
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold">Office Hours</h4>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold">Location</h4>
            <p>123 Marketing Street</p>
            <p>Business City, ST 12345</p>
          </div>
        </div>

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

