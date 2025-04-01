import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Industries We Serve | Very Good Marketing',
  description: 'Digital marketing solutions tailored for service businesses across various industries including lawn care, cleaning, home services, and more.',
}

// Industry data with color themes and icons
const industries = [
  { 
    name: 'Lawn Care', 
    slug: 'lawn-care', 
    description: 'Digital marketing for lawn care companies, landscapers, and lawn maintenance businesses.',
    color: 'from-green-500 to-green-700',
    icon: '🌿'
  },
  { 
    name: 'Landscaping', 
    slug: 'landscaping', 
    description: 'Website design and digital advertising for landscaping companies and garden designers.',
    color: 'from-emerald-500 to-emerald-700',
    icon: '🌳'
  },
  { 
    name: 'Tree Service', 
    slug: 'tree-service', 
    description: 'Online marketing solutions for arborists, tree removal, and tree care companies.',
    color: 'from-green-600 to-green-800',
    icon: '🌲'
  },
  { 
    name: 'Pressure Washing', 
    slug: 'pressure-washing', 
    description: 'Lead generation websites for pressure washing and exterior cleaning businesses.',
    color: 'from-blue-400 to-blue-600',
    icon: '💦'
  },
  { 
    name: 'Window Cleaning', 
    slug: 'window-cleaning', 
    description: 'Digital marketing for residential and commercial window cleaning services.',
    color: 'from-sky-400 to-sky-600',
    icon: '🪟'
  },
  { 
    name: 'Cleaning & Janitorial', 
    slug: 'cleaning', 
    description: 'Website design and online advertising for cleaning companies and maid services.',
    color: 'from-cyan-500 to-cyan-700',
    icon: '🧹'
  },
  { 
    name: 'Snow Removal', 
    slug: 'snow-removal', 
    description: 'Seasonal marketing campaigns for snow plowing and ice management companies.',
    color: 'from-indigo-300 to-indigo-500',
    icon: '❄️'
  },
  { 
    name: 'Painting', 
    slug: 'painting', 
    description: 'Lead generation websites for interior and exterior painting contractors.',
    color: 'from-amber-400 to-amber-600',
    icon: '🎨'
  },
  { 
    name: 'Roofing', 
    slug: 'roofing', 
    description: 'Digital marketing for residential and commercial roofing contractors.',
    color: 'from-red-500 to-red-700',
    icon: '🏠'
  },
  { 
    name: 'HVAC', 
    slug: 'hvac', 
    description: 'Online advertising for heating, ventilation, and air conditioning companies.',
    color: 'from-blue-500 to-blue-700',
    icon: '❄️'
  },
  { 
    name: 'Plumbing', 
    slug: 'plumbing', 
    description: 'Website design and SEO for plumbers and plumbing companies.',
    color: 'from-blue-600 to-blue-800',
    icon: '🔧'
  },
  { 
    name: 'Electrical', 
    slug: 'electrical', 
    description: 'Digital marketing for electricians and electrical contractors.',
    color: 'from-yellow-500 to-yellow-700',
    icon: '⚡'
  },
  { 
    name: 'Handyman', 
    slug: 'handyman', 
    description: 'Lead generation websites for handyman services and home repair businesses.',
    color: 'from-orange-500 to-orange-700',
    icon: '🔨'
  },
  { 
    name: 'General Contracting', 
    slug: 'general-contracting', 
    description: 'Online marketing for general contractors and construction companies.',
    color: 'from-stone-500 to-stone-700',
    icon: '🏗️'
  },
  { 
    name: 'Fencing', 
    slug: 'fencing', 
    description: 'Digital advertising for fence installation and repair companies.',
    color: 'from-amber-600 to-amber-800',
    icon: '🔒'
  },
]

// Component for animated statistics
const StatCard = ({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function IndustriesPage() {
  return (
    <div className="pb-20">
      {/* Enhanced Hero Section */}
      <div className="relative bg-linear-to-r from-blue-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] bg-repeat"></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-blue-500 bg-opacity-20 backdrop-blur-xs text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Specialized Marketing Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Industries We <span className="text-blue-300">Serve</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Digital marketing solutions tailored for service businesses across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link 
                href="/contact" 
                className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="#industry-cards" 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition flex items-center justify-center"
              >
                Explore Industries <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Industry Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've helped hundreds of service businesses across multiple industries grow their customer base and increase revenue.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="15+" label="Industries Served" delay={0} />
            <StatCard number="500+" label="Businesses Helped" delay={200} />
            <StatCard number="10M+" label="Leads Generated" delay={400} />
            <StatCard number="98%" label="Client Satisfaction" delay={600} />
          </div>
        </Container>
      </div>

      {/* Enhanced Industry Cards */}
      <Container className="my-16" id="industry-cards">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Specialized Marketing Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your industry to discover how our tailored marketing strategies can help your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link key={industry.slug} href={`/industry/${industry.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-md">
                <div className={`h-40 relative bg-linear-to-r ${industry.color}`}>
                  <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] mix-blend-overlay opacity-20"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl" aria-hidden="true">
                    {industry.icon}
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors flex items-center">
                    {industry.name}
                  </h2>
                  <p className="text-gray-600">{industry.description}</p>
                  <div className="mt-4 text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="mt-20 bg-linear-to-r from-blue-600 to-indigo-600 p-10 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white text-center">Don't See Your Industry?</h2>
            <p className="text-center text-white/90 mb-8 max-w-2xl mx-auto">
              We work with many types of service businesses. Our marketing strategies can be adapted to your specific industry needs.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from business owners who have transformed their marketing with our industry-specific solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  JD
                </div>
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-sm text-gray-600">Lawn Care Pro</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Very Good Marketing transformed our business. Our schedule is now consistently full, and we've been able to expand our service area."
              </p>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  JS
                </div>
                <div>
                  <h3 className="font-bold">Jane Smith</h3>
                  <p className="text-sm text-gray-600">Cleaning Service</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The industry-specific approach made all the difference. They understood our business and created marketing that actually works."
              </p>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                  RJ
                </div>
                <div>
                  <h3 className="font-bold">Robert Johnson</h3>
                  <p className="text-sm text-gray-600">Roofing Contractor</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Our leads have increased by 300% since working with Very Good Marketing. Their industry knowledge is unmatched."
              </p>
              <div className="flex text-yellow-400 mt-4">
                {'★'.repeat(5)}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
