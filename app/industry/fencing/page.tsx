import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Fencing Contractor Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for fencing businesses. Generate more leads and showcase your craftsmanship with our proven marketing solutions.',
}

export default function FencingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/fencing.jpg" 
          alt="Fencing Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Fencing Contractor Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Generate more leads and showcase your craftsmanship with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your fencing business with marketing strategies designed to showcase your craftsmanship and generate qualified leads. We help fencing contractors build their brand and create a steady flow of projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Standing out in a competitive market</li>
                <li>• Showcasing different fencing styles and materials</li>
                <li>• Targeting the right neighborhoods</li>
                <li>• Converting estimates to signed contracts</li>
                <li>• Building a reputation for quality and reliability</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Fencing Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Before/after project showcases</li>
                <li>• Material and style galleries</li>
                <li>• Neighborhood targeting strategies</li>
                <li>• Local SEO domination</li>
                <li>• Customer review management</li>
                <li>• Warranty and quality highlighting</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Fencing Companies Choose Us</h2>
            <p className="mb-6">
              We understand the visual nature of fencing services and how to showcase your craftsmanship effectively. Our strategies focus on highlighting your quality work and helping you attract clients who value professional installation.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Fencing Business?</h3>
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
        title="Ready to Transform Your Fencing Business?"
        description="Let's create a marketing strategy that showcases your craftsmanship and generates qualified leads."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
