import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Electrical Contractor Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for electrical businesses. Generate more service calls and showcase your expertise with our proven marketing solutions.',
}

export default function ElectricalPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/electrical.jpg" 
          alt="Electrical Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Electrical Contractor Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Generate more service calls and showcase your expertise with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your electrical business with marketing strategies designed to generate qualified leads and build trust. We help electrical contractors showcase their expertise and create a steady flow of service calls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Building trust for safety-critical services</li>
                <li>• Generating emergency service calls</li>
                <li>• Showcasing your licensing and certifications</li>
                <li>• Standing out from unlicensed competitors</li>
                <li>• Converting one-time repairs to ongoing clients</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Electrical Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Safety and certification-focused content</li>
                <li>• Emergency service advertising strategies</li>
                <li>• Local SEO domination strategies</li>
                <li>• Commercial client acquisition campaigns</li>
                <li>• Customer review management systems</li>
                <li>• Technician profile highlighting</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Electrical Companies Choose Us</h2>
            <p className="mb-6">
              We understand the unique challenges of marketing electrical services. Our strategies focus on building trust with homeowners and businesses by highlighting your expertise, certifications, and commitment to safety.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Electrical Business?</h3>
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
        title="Ready to Transform Your Electrical Business?"
        description="Let's create a marketing strategy that builds trust and generates qualified leads."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
