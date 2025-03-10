import CustomButton from "@/components/shared/custom-button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import { ServicePricing } from "@/lib/pricing-service"

interface PricingTableProps {
  pricing: ServicePricing
}

export default function PricingTable({ pricing }: PricingTableProps) {
  const {
    title,
    setupPrice,
    recurringPrice,
    recurringPeriod,
    features,
    note,
    discountBundle,
    ctaText,
    ctaUrl
  } = pricing

  return (
    <Card className="max-w-lg mx-auto overflow-hidden">
      <CardHeader className="bg-blue-600 text-white p-6 text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          {setupPrice > 0 && (
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold">${setupPrice}</span>
              <span className="text-gray-600 ml-2">one-time setup</span>
            </div>
          )}
          <div className="flex items-center justify-center mt-2">
            <span className="text-2xl font-bold">${recurringPrice}</span>
            <span className="text-gray-600 ml-2">per {recurringPeriod}</span>
          </div>
          {note && <p className="text-sm text-gray-600 mt-2">{note}</p>}
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <h4 className="font-bold text-lg">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>

        {discountBundle && (
          <div className="mt-4 bg-green-100 p-3 rounded-md mb-6">
            <p className="text-sm font-bold text-green-800">Website Bundle Discount: ${discountBundle.price}/month</p>
            <p className="text-xs text-green-700">{discountBundle.note}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-8 pt-0 flex justify-center">
        <CustomButton
          variant="blue"
          href={ctaUrl}
          className="w-full"
        >
          {ctaText}
        </CustomButton>
      </CardFooter>
    </Card>
  )
}

