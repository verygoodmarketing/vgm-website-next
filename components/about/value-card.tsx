import { Book, Eye, PiggyBank, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ValueCardProps {
  value: {
    title: string
    description: string
    icon: string
  }
}

export default function ValueCard({ value }: ValueCardProps) {
  const getIcon = () => {
    switch (value.icon) {
      case "eye":
        return <Eye className="h-8 w-8 text-blue-600" />
      case "book-open":
        return <Book className="h-8 w-8 text-blue-600" />
      case "piggy-bank":
        return <PiggyBank className="h-8 w-8 text-blue-600" />
      case "trending-up":
        return <TrendingUp className="h-8 w-8 text-blue-600" />
      default:
        return <Eye className="h-8 w-8 text-blue-600" />
    }
  }

  return (
    <Card className="text-center">
      <CardContent className="p-8">
        <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
        <p className="text-gray-700">{value.description}</p>
      </CardContent>
    </Card>
  )
}

