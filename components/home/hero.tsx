import Image from "next/image"
import { CustomButton } from "@/components/custom-button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Background pattern" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete Digital Marketing For <span className="text-amber-400">Service Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              From professional websites to Google Ads and social media, we help service businesses like yours get more
              customers online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton asChild variant="amber" size="lg" href="/services">
                View Our Services
              </CustomButton>
              <CustomButton
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 border-white"
                href="/contact"
              >
                Free Consultation
              </CustomButton>
            </div>
          </div>

          <div className="relative">
            <Card className="glass-effect">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Complete Digital Marketing</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-900">Professional websites that convert visitors into customers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-900">Google Ads to reach customers searching for your services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-900">Facebook & Instagram advertising to build brand awareness</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-900">
                      Social media management to showcase your work and engage customers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-500 rounded-full p-1 mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-900">Bundle discounts when you combine services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

