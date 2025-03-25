import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'General Contractor Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for general contractors. Win more projects and showcase your expertise with our proven marketing solutions.',
}

export default function GeneralContractingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/general-contracting.jpg" 
          alt="General Contracting Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                General Contractor Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Win more projects and showcase your expertise with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your general contracting business with marketing strategies designed to win larger projects and showcase your expertise. We help general contractors build their reputation and attract higher-value opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Attracting higher-value renovation projects</li>
                <li>• Building trust for major investments</li>
                <li>• Showcasing your portfolio effectively</li>
                <li>• Standing out in competitive bids</li>
                <li>• Converting consultations to contracts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our General Contractor Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Project portfolio development</li>
                <li>• Before/after transformation showcases</li>
                <li>• Trust-building content strategies</li>
                <li>• High-end client targeting</li>
                <li>• Local SEO domination</li>
                <li>• Commercial project acquisition campaigns</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why General Contractors Choose Us</h2>
            <p className="mb-6">
              We understand the unique challenges of marketing general contracting services. Our strategies focus on building your reputation as a trusted contractor and helping you win more valuable projects.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Contracting Business?</h3>
            <p className="mb-4">Let's discuss how we can help you attract better projects and increase your revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Elevate Your General Contracting Business?"
        description="Let's create a marketing strategy that attracts higher-value projects and builds your reputation."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
