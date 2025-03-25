import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Home Service Industry Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for home service businesses. Find your industry-specific marketing solutions to grow your business.',
}

export default function IndustryIndexPage() {
  const industries = [
    { name: 'Lawn Care', slug: 'lawn-care', description: 'Marketing solutions for lawn care businesses' },
    { name: 'Landscaping', slug: 'landscaping', description: 'Marketing solutions for landscaping companies' },
    { name: 'Tree Service', slug: 'tree-service', description: 'Marketing solutions for tree service businesses' },
    { name: 'Pressure Washing', slug: 'pressure-washing', description: 'Marketing solutions for pressure washing companies' },
    { name: 'Window Cleaning', slug: 'window-cleaning', description: 'Marketing solutions for window cleaning businesses' },
    { name: 'Cleaning & Janitorial', slug: 'cleaning', description: 'Marketing solutions for cleaning and janitorial services' },
    { name: 'Snow Removal', slug: 'snow-removal', description: 'Marketing solutions for snow removal companies' },
    { name: 'Painting', slug: 'painting', description: 'Marketing solutions for painting contractors' },
    { name: 'Roofing', slug: 'roofing', description: 'Marketing solutions for roofing contractors' },
    { name: 'HVAC', slug: 'hvac', description: 'Marketing solutions for HVAC contractors' },
    { name: 'Plumbing', slug: 'plumbing', description: 'Marketing solutions for plumbing businesses' },
    { name: 'Electrical', slug: 'electrical', description: 'Marketing solutions for electrical contractors' },
    { name: 'Handyman', slug: 'handyman', description: 'Marketing solutions for handyman services' },
    { name: 'General Contracting', slug: 'general-contracting', description: 'Marketing solutions for general contractors' },
    { name: 'Fencing', slug: 'fencing', description: 'Marketing solutions for fencing contractors' },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-blue-900">
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Industry-Specific Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Specialized marketing strategies for home service businesses. Find your industry and discover how we can help you grow.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-xl mb-8">
              We provide specialized marketing strategies for home service businesses. Select your industry below to learn how we can help you grow your business with targeted marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry) => (
              <Link 
                href={`/industry/${industry.slug}`} 
                key={industry.slug}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{industry.name}</h2>
                <p className="text-gray-600">{industry.description}</p>
                <div className="mt-4 text-primary-600 font-medium">Learn more →</div>
              </Link>
            ))}
          </div>

          <div className="bg-primary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Don't See Your Industry?</h3>
            <p className="mb-4">We work with many other home service businesses. Contact us to discuss your specific marketing needs.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
      
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Grow Your Home Service Business?"
        description="Let's create a marketing strategy tailored to your specific industry and business goals."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
