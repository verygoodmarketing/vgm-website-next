import { CustomButton } from "@/components/custom-button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingTableProps {
  title: string
  price: number
  recurringPrice: number
  recurringPeriod: string
  features: string[]
}

export default function PricingTable({ title, price, recurringPrice, recurringPeriod, features }: PricingTableProps) {
  return (
    <Card className="max-w-lg mx-auto overflow-hidden">
      <CardHeader className="bg-blue-600 text-white p-6 text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-600 ml-2">upfront</span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <span className="text-2xl font-bold">+${recurringPrice}</span>
            <span className="text-gray-600 ml-2">/{recurringPeriod}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-8 pt-0 flex justify-center">
        <CustomButton asChild variant="blue" className="w-full" href="/contact?service=website-creation">
          Get Started
        </CustomButton>
      </CardFooter>
    </Card>
  )
}

