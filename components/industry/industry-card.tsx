import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface IndustryCardProps {
  name: string
  slug: string
  description: string
  color: string
  icon: string
}

export default function IndustryCard({ name, slug, description, color, icon }: IndustryCardProps) {
  return (
    <Link href={`/industry/${slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md">
        <div className={`h-40 relative bg-gradient-to-r ${color}`}>
          <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] mix-blend-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4 text-4xl" aria-hidden="true">
            {icon}
          </div>
        </div>
        <CardContent className="p-6 relative">
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors flex items-center">
            {name}
          </h2>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
