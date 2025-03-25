import { Metadata } from 'next'
import Image from 'next/image'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
  title: 'Window Cleaning Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for window cleaning businesses. Build recurring revenue and showcase your professional services with our proven marketing solutions.',
}

export default function WindowCleaningPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image 
          src="/images/articles/window-cleaning.jpg" 
          alt="Window Cleaning Services" 
          fill 
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Window Cleaning Marketing Solutions
              </h1>
              <p className="text-xl text-white">
                Build recurring revenue and showcase your professional services with specialized marketing strategies.
              </p>
            </div>
          </Container>
        </div>
      </div>
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xl mb-8">
              Grow your window cleaning business with marketing strategies that highlight your professionalism and attention to detail. We help window cleaning companies build recurring revenue and expand their client base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Challenges We Solve</h2>
              <ul className="space-y-3">
                <li>• Converting one-time clients to recurring customers</li>
                <li>• Building trust with residential and commercial clients</li>
                <li>• Showcasing your professional equipment and expertise</li>
                <li>• Targeting high-value commercial properties</li>
                <li>• Standing out from amateur competitors</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Window Cleaning Marketing Services</h2>
              <ul className="space-y-3">
                <li>• Before/after photo campaigns</li>
                <li>• Commercial property targeting strategies</li>
                <li>• Recurring service program promotion</li>
                <li>• Professional brand development</li>
                <li>• Local SEO optimization</li>
                <li>• Customer referral programs</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Why Window Cleaning Companies Choose Us</h2>
            <p className="mb-6">
              We understand the unique challenges of marketing window cleaning services. Our strategies focus on building long-term relationships with clients and establishing your company as the premier choice in your market.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Window Cleaning Business?</h3>
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
        title="Ready to Transform Your Window Cleaning Business?"
        description="Let's create a marketing strategy that builds recurring revenue and expands your client base."
        buttonText="Get Your Free Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
