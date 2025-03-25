import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Snow Removal Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for snow removal businesses. Build seasonal contracts and maximize your winter revenue with our proven marketing solutions.',
}

export default function SnowRemovalPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/snow-removal.jpg" 
          alt="Snow Removal Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Snow Removal Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Build seasonal contracts and maximize your winter revenue with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Maximize your snow removal business with marketing strategies designed for seasonal success. We help snow removal companies secure contracts before the first snowfall and build a reliable client base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Securing contracts before the snow season begins</li>
                <li>• Building a reliable client base for recurring service</li>
                <li>• Marketing during the off-season</li>
                <li>• Targeting commercial properties with high-value contracts</li>
                <li>• Showcasing your reliability and equipment</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Snow Removal Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Pre-season contract acquisition campaigns</li>
                <li>• Commercial property targeting strategies</li>
                <li>• Equipment and reliability showcasing</li>
                <li>• Emergency response marketing</li>
                <li>• Off-season marketing planning</li>
                <li>• Local SEO domination strategies</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Snow Removal Companies Choose Us</h2>
            <p className="mb-6">
              We understand the seasonal nature of snow removal and how to maximize your marketing impact before and during the winter months. Our strategies focus on securing contracts early and positioning your company as the most reliable choice in your market.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Snow Removal Business?</h3>
            <p className="mb-4">Let's discuss how we can help you secure more contracts and maximize your winter revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Maximize Your Snow Removal Season?"
        description="Let's create a marketing strategy that secures contracts early and builds your reputation."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
