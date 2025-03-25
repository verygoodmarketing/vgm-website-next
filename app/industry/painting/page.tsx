import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Painting Contractor Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for painting businesses. Showcase your craftsmanship and attract higher-value projects with our proven marketing solutions.',
}

export default function PaintingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/painting.jpg" 
          alt="Painting Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Painting Contractor Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Showcase your craftsmanship and attract higher-value projects with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your painting business with marketing strategies that showcase your craftsmanship and attention to detail. We help painting contractors attract higher-value projects and build a premium brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Standing out in a competitive market</li>
                <li>• Showcasing your quality and craftsmanship</li>
                <li>• Attracting higher-value residential and commercial projects</li>
                <li>• Building trust with potential clients</li>
                <li>• Managing seasonal demand fluctuations</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Painting Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Before/after photo campaigns</li>
                <li>• Professional portfolio development</li>
                <li>• Targeted advertising to premium neighborhoods</li>
                <li>• Commercial client acquisition strategies</li>
                <li>• Seasonal promotion planning</li>
                <li>• Local SEO domination strategies</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Painting Companies Choose Us</h2>
            <p className="mb-6">
              We understand the visual nature of painting services and how to showcase your craftsmanship effectively. Our marketing strategies focus on highlighting your quality work and helping you attract clients who value professional results.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Painting Business?</h3>
            <p className="mb-4">Let's discuss how we can help you attract better clients and increase your revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Elevate Your Painting Business?"
        description="Let's create a marketing strategy that showcases your craftsmanship and attracts premium clients."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
