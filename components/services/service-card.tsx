import Link from "next/link"
import { ArrowRight, Laptop, Search, Share } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
    features: string[]
    pricing: {
      upfront: number
      recurring: number
      recurringPeriod: string
      custom?: string
    }
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  const getIcon = () => {
    switch (service.icon) {
      case "laptop":
        return <Laptop className="h-10 w-10 text-blue-600" />
      case "search":
        return <Search className="h-10 w-10 text-blue-600" />
      case "share":
        return <Share className="h-10 w-10 text-blue-600" />
      default:
        return <Laptop className="h-10 w-10 text-blue-600" />
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="mb-4">{getIcon()}</div>
        <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 mb-6">{service.description}</p>

        <h4 className="font-semibold text-lg mb-3 text-gray-800">Features:</h4>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="border-t pt-6">
          <h4 className="font-semibold text-lg mb-3 text-gray-800">Pricing:</h4>
          {service.pricing.custom ? (
            <p className="text-gray-800">{service.pricing.custom}</p>
          ) : (
            <div>
              {service.pricing.upfront > 0 && <p className="text-gray-800">${service.pricing.upfront} upfront</p>}
              {service.pricing.recurring > 0 && (
                <p className="text-gray-800">
                  ${service.pricing.recurring}/{service.pricing.recurringPeriod} recurring
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/contact?service=${service.id}`}
          className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

