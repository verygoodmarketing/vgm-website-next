import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Cleaning & Janitorial Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for cleaning and janitorial businesses. Build recurring contracts and showcase your professional services with our proven marketing solutions.',
}

export default function CleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/cleaning.jpg" 
          alt="Cleaning & Janitorial Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cleaning & Janitorial Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Build recurring contracts and showcase your professional services with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your cleaning or janitorial business with marketing strategies that build trust and showcase your professionalism. We help cleaning companies attract high-value clients and establish recurring service contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Standing out in a competitive market</li>
                <li>• Building trust with residential and commercial clients</li>
                <li>• Converting one-time cleanings to recurring contracts</li>
                <li>• Targeting high-value commercial properties</li>
                <li>• Showcasing your professional standards and training</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Cleaning Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Trust-building content strategies</li>
                <li>• Before/after photo campaigns</li>
                <li>• Commercial contract acquisition campaigns</li>
                <li>• Recurring service program promotion</li>
                <li>• Employee background check highlighting</li>
                <li>• Local SEO domination strategies</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Cleaning Companies Choose Us</h2>
            <p className="mb-6">
              We understand the unique challenges of marketing cleaning services in a competitive industry. Our strategies focus on building your professional brand image and helping you secure long-term, profitable client relationships.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Cleaning Business?</h3>
            <p className="mb-4">Let's discuss how we can help you attract more customers and increase your recurring revenue.</p>
            {/* Add your ContactForm component here */}
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
              Get Your Free Marketing Consultation
            </button>
          </div>
        </Container>
      </section>
    
      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Grow Your Cleaning Business?"
        description="Let's create a marketing strategy that builds trust and secures long-term contracts."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
