import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Tree Service Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for tree service businesses. Generate more leads and showcase your expertise with our proven marketing solutions.',
}

export default function TreeServicePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/tree-service.jpg" 
          alt="Tree Service" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tree Service Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Generate more leads and showcase your expertise with specialized marketing strategies for tree service businesses.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your tree service business with marketing strategies designed to highlight your expertise and generate qualified leads. We understand the unique challenges of marketing specialized tree care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Generating emergency service calls</li>
                <li>• Showcasing your specialized equipment and expertise</li>
                <li>• Building trust with homeowners for high-risk services</li>
                <li>• Seasonal marketing for preventative tree care</li>
                <li>• Standing out from uninsured/uncertified competitors</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Tree Service Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Emergency service advertising strategies</li>
                <li>• Safety and certification-focused content</li>
                <li>• Before/after project showcases</li>
                <li>• Seasonal storm preparation campaigns</li>
                <li>• Local SEO to dominate "near me" searches</li>
                <li>• Video marketing showcasing specialized equipment</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Tree Service Companies Choose Us</h2>
            <p className="mb-6">
              We understand the unique marketing challenges tree service companies face. Our strategies focus on building trust, showcasing your expertise, and generating leads for both emergency and planned tree services.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Tree Service Business?</h3>
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
        title="Ready to Elevate Your Tree Service Business?"
        description="Let's create a marketing strategy that showcases your expertise and generates more qualified leads."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
