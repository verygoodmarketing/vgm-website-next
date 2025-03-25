import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Roofing Contractor Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for roofing businesses. Generate more leads and build trust with homeowners using our proven marketing solutions.',
}

export default function RoofingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/roofing.jpg" 
          alt="Roofing Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Roofing Contractor Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Generate more leads and build trust with homeowners using specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your roofing business with marketing strategies designed to build trust and generate qualified leads. We help roofing contractors showcase their expertise and stand out in a competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Building trust for high-ticket services</li>
                <li>• Standing out from storm chasers and fly-by-night operators</li>
                <li>• Generating leads for both emergency and planned roof replacements</li>
                <li>• Showcasing your quality materials and workmanship</li>
                <li>• Converting estimates into signed contracts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Roofing Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Trust-building content strategies</li>
                <li>• Before/after project showcases</li>
                <li>• Storm damage response campaigns</li>
                <li>• Warranty and guarantee highlighting</li>
                <li>• Local SEO domination strategies</li>
                <li>• Neighborhood targeting after storms</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Roofing Companies Choose Us</h2>
            <p className="mb-6">
              We understand the unique challenges of marketing roofing services. Our strategies focus on building trust with homeowners and helping you stand out as a reliable, professional roofing contractor in your market.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Roofing Business?</h3>
            <p className="mb-4">Let's discuss how we can help you generate more qualified leads and increase your revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Transform Your Roofing Business?"
        description="Let's create a marketing strategy that builds trust and generates qualified leads."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
