import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Lawn Care Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for lawn care businesses. Grow your customer base and increase revenue with our proven marketing solutions.',
}

export default function LawnCarePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/lawn-care.jpg" 
          alt="Lawn Care Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Lawn Care Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Grow your customer base and increase revenue with marketing strategies designed for lawn care businesses.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your lawn care business with marketing strategies designed specifically for your industry. We understand the seasonal nature of lawn care and how to keep your schedule full year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Seasonal demand fluctuations</li>
                <li>• Standing out in a competitive market</li>
                <li>• Converting one-time customers to recurring clients</li>
                <li>• Building a professional brand that commands premium pricing</li>
                <li>• Targeting the right neighborhoods and demographics</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Lawn Care Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Local SEO to dominate Google searches in your service area</li>
                <li>• Before/after photo campaigns that showcase your quality</li>
                <li>• Seasonal promotion strategies</li>
                <li>• Customer referral programs</li>
                <li>• Automated review collection systems</li>
                <li>• Targeted social media advertising</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Lawn Care Companies Choose Us</h2>
            <p className="mb-6">
              We've helped dozens of lawn care businesses increase their customer base and revenue. Our strategies are designed specifically for the lawn care industry, taking into account seasonal trends, local competition, and customer acquisition costs.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Lawn Care Business?</h3>
            <p className="mb-4">Let's discuss how we can help you attract more customers and increase your revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Transform Your Lawn Care Marketing?"
        description="Let's create a marketing strategy that keeps your schedule full year-round."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
