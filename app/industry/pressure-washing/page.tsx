import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Droplets } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Pressure Washing Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for pressure washing businesses. Generate consistent leads and showcase your impressive results with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your pressure washing business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that showcases your impressive results and targets your ideal customers in your service area.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your pressure washing business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to pressure washing
const testimonials = [
  {
    name: "Mark Johnson",
    company: "Pristine Power Wash",
    quote: "Very Good Marketing has transformed our business. Their before/after campaign strategy has been incredibly effective, and we've seen a 92% increase in leads.",
    rating: 5,
    initials: "MJ"
  },
  {
    name: "Samantha Lee",
    company: "Superior Pressure Washing",
    quote: "The seasonal marketing approach they created for us has eliminated our slow periods. We now maintain steady business year-round and have added two new trucks.",
    rating: 5,
    initials: "SL"
  }
];

export default function PressureWashingPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/pressure-washing.jpg" 
          alt="Pressure Washing Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Pressure Washing <span className="text-blue-300">Marketing</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Generate consistent leads and showcase your impressive results with our specialized marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium inline-flex items-center"
                >
                  Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                  View Success Stories
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      
      {/* Introduction Section with Stats */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Pressure Washing Companies</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your pressure washing business with marketing strategies designed specifically for your industry. We understand the seasonal nature of pressure washing and how to showcase your dramatic before/after results.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our pressure washing marketing solutions are designed to help you attract high-quality leads, convert them into customers, and maximize your revenue throughout the year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-gray-700">Increase in qualified leads</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">68%</div>
                <p className="text-gray-700">Higher conversion rate</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">53%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6.2x</div>
                <p className="text-gray-700">Marketing ROI</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 bg-gray-50" id="services">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pressure Washing Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges pressure washing businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Seasonal Demand Fluctuations"
              description="We create year-round marketing strategies that keep your schedule full even during traditionally slower seasons."
              icon={<Droplets className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Showcasing Dramatic Results"
              description="We implement before/after visual campaigns that highlight the impressive transformation your services provide."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your pressure washing business from competitors through unique value propositions and messaging."
              icon={<Target className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Targeting Commercial Clients"
              description="Our B2B marketing strategies help you secure lucrative contracts with property managers and businesses."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Neighborhood Targeting"
              description="Our geo-targeting strategies focus your marketing budget on the most profitable neighborhoods in your service area."
              icon={<Users className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Building Recurring Revenue"
              description="We implement strategies to convert one-time customers into recurring maintenance contracts for stable revenue."
              icon={<MessageSquare className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Pressure Washing Companies</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for pressure washing businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Lead Generation Results"
                description="From inconsistent leads to a steady stream of qualified service requests"
              />
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Seasonal Business Stability"
                description="From extreme seasonal peaks and valleys to year-round stability"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Pressure Washing Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for pressure washing businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Pressure Washing Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from pressure washing business owners who have transformed their marketing with our industry-specific solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
                initials={testimonial.initials}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Pressure Washing Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that showcases your impressive results and helps your business thrive year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-medium inline-flex items-center"
              >
                Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
