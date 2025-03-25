import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Landscaping Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for landscaping businesses. Attract high-value clients and showcase your design expertise with our proven marketing solutions.',
}

export default function LandscapingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/landscaping.jpg" 
          alt="Landscaping Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Landscaping Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Attract high-value clients and showcase your design expertise with our specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Elevate your landscaping business with marketing strategies that showcase your design expertise and craftsmanship. We help landscaping companies attract high-value clients and build a premium brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Attracting clients with higher project budgets</li>
                <li>• Showcasing your design expertise and portfolio</li>
                <li>• Differentiating from basic lawn care services</li>
                <li>• Building a brand that commands premium pricing</li>
                <li>• Converting consultations into signed contracts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Landscaping Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Portfolio-focused website design</li>
                <li>• Professional photography services</li>
                <li>• Before/after project showcases</li>
                <li>• Targeted advertising to affluent neighborhoods</li>
                <li>• Content marketing highlighting design expertise</li>
                <li>• Local SEO domination strategies</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Landscaping Companies Choose Us</h2>
            <p className="mb-6">
              We understand the unique challenges of marketing high-end landscaping services. Our strategies focus on showcasing your craftsmanship and design expertise to attract clients who value quality and are willing to invest in their outdoor spaces.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Attract Higher-Value Landscaping Projects?</h3>
            <p className="mb-4">Let's discuss how we can help you showcase your expertise and attract your ideal clients.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Elevate Your Landscaping Business?"
        description="Let's create a marketing strategy that showcases your design expertise and attracts premium clients."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
