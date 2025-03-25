import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Industries We Serve | Very Good Marketing',
  description: 'Digital marketing solutions tailored for service businesses across various industries including lawn care, cleaning, home services, and more.',
}

const industries = [
  { name: 'Lawn Care', slug: 'lawn-care', description: 'Digital marketing for lawn care companies, landscapers, and lawn maintenance businesses.' },
  { name: 'Landscaping', slug: 'landscaping', description: 'Website design and digital advertising for landscaping companies and garden designers.' },
  { name: 'Tree Service', slug: 'tree-service', description: 'Online marketing solutions for arborists, tree removal, and tree care companies.' },
  { name: 'Pressure Washing', slug: 'pressure-washing', description: 'Lead generation websites for pressure washing and exterior cleaning businesses.' },
  { name: 'Window Cleaning', slug: 'window-cleaning', description: 'Digital marketing for residential and commercial window cleaning services.' },
  { name: 'Cleaning & Janitorial', slug: 'cleaning', description: 'Website design and online advertising for cleaning companies and maid services.' },
  { name: 'Snow Removal', slug: 'snow-removal', description: 'Seasonal marketing campaigns for snow plowing and ice management companies.' },
  { name: 'Painting', slug: 'painting', description: 'Lead generation websites for interior and exterior painting contractors.' },
  { name: 'Roofing', slug: 'roofing', description: 'Digital marketing for residential and commercial roofing contractors.' },
  { name: 'HVAC', slug: 'hvac', description: 'Online advertising for heating, ventilation, and air conditioning companies.' },
  { name: 'Plumbing', slug: 'plumbing', description: 'Website design and SEO for plumbers and plumbing companies.' },
  { name: 'Electrical', slug: 'electrical', description: 'Digital marketing for electricians and electrical contractors.' },
  { name: 'Handyman', slug: 'handyman', description: 'Lead generation websites for handyman services and home repair businesses.' },
  { name: 'General Contracting', slug: 'general-contracting', description: 'Online marketing for general contractors and construction companies.' },
  { name: 'Fencing', slug: 'fencing', description: 'Digital advertising for fence installation and repair companies.' },
]

export default function IndustriesPage() {
  return (
    <div className="pb-20">
      <PageHeader
        title="Industries We Serve"
        description="Digital marketing solutions tailored for service businesses across various industries."
      />

      <Container>
        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industry/${industry.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2">{industry.name}</h2>
                    <p className="text-gray-600">{industry.description}</p>
                    <div className="mt-4 text-blue-600 font-medium">Learn more →</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Don't See Your Industry?</h2>
          <p className="text-center text-gray-700 mb-6">
            We work with many types of service businesses. Contact us to discuss your specific industry needs.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
