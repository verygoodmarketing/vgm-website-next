import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Handyman Service Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for handyman businesses. Generate more jobs and build a loyal customer base with our proven marketing solutions.',
}

export default function HandymanPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/handyman.jpg" 
          alt="Handyman Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Handyman Service Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Generate more jobs and build a loyal customer base with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your handyman business with marketing strategies designed to showcase your versatility and build trust. We help handyman services attract more clients and create a steady flow of projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Standing out in a competitive market</li>
                <li>• Building trust with homeowners</li>
                <li>• Showcasing your range of services</li>
                <li>• Converting one-time jobs to repeat customers</li>
                <li>• Targeting the right neighborhoods</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Handyman Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Before/after project showcases</li>
                <li>• Trust-building content strategies</li>
                <li>• Local SEO domination</li>
                <li>• Customer review management</li>
                <li>• Service area targeting</li>
                <li>• Multi-service promotion campaigns</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Handyman Services Choose Us</h2>
            <p className="mb-6">
              We understand the diverse nature of handyman services and how to market your versatility effectively. Our strategies focus on building trust with homeowners and positioning you as their go-to solution for home repairs and improvements.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Handyman Business?</h3>
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
        title="Ready to Transform Your Handyman Business?"
        description="Let's create a marketing strategy that showcases your versatility and builds a loyal customer base."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
