import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'HVAC Contractor Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for HVAC businesses. Generate more service calls and maintenance contracts with our proven marketing solutions.',
}

export default function HVACPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/hvac.jpg" 
          alt="HVAC Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                HVAC Contractor Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Generate more service calls and maintenance contracts with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your HVAC business with marketing strategies designed to generate service calls and maintenance contracts. We help HVAC contractors build their brand and create a steady flow of qualified leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Generating emergency service calls</li>
                <li>• Converting one-time repairs to maintenance contracts</li>
                <li>• Seasonal marketing for heating and cooling</li>
                <li>• Standing out from larger competitors</li>
                <li>• Building trust with homeowners</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our HVAC Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Emergency service advertising strategies</li>
                <li>• Maintenance contract promotion campaigns</li>
                <li>• Seasonal marketing planning</li>
                <li>• Technician trust-building content</li>
                <li>• Local SEO domination strategies</li>
                <li>• Customer review management systems</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why HVAC Companies Choose Us</h2>
            <p className="mb-6">
              We understand the seasonal nature of HVAC services and how to keep your phone ringing year-round. Our strategies focus on building your brand reputation and creating a steady flow of service calls and maintenance contracts.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your HVAC Business?</h3>
            <p className="mb-4">Let's discuss how we can help you generate more service calls and increase your revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Transform Your HVAC Business?"
        description="Let's create a marketing strategy that generates more service calls and maintenance contracts."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
