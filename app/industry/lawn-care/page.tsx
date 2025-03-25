import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Lawn Care Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for lawn care businesses. Grow your customer base and increase revenue with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your lawn care business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that addresses seasonal fluctuations and targets your ideal customers in your service area.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your lawn care business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to lawn care
const testimonials = [
  {
    name: "John Smith",
    company: "Green Lawn Pros",
    quote: "Since working with Very Good Marketing, our schedule is consistently full and we've expanded our service area by 40%. Their lawn care specific strategies really work!",
    rating: 5,
    initials: "JS"
  },
  {
    name: "Sarah Johnson",
    company: "Perfect Turf LLC",
    quote: "The seasonal marketing approach has eliminated our slow periods. We now maintain steady business year-round and have added three new crew members.",
    rating: 5,
    initials: "SJ"
  }
];

export default function LawnCarePage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/lawn-care.jpg" 
          alt="Lawn Care Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Lawn Care Marketing <span className="text-green-300">Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Grow your customer base and increase revenue with marketing strategies designed for lawn care businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-50 transition font-medium inline-flex items-center"
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Lawn Care Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your lawn care business with marketing strategies designed specifically for your industry. We understand the seasonal nature of lawn care and how to keep your schedule full year-round.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our lawn care marketing solutions are designed to help you attract high-quality leads, convert them into recurring customers, and maximize your revenue throughout the year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-green-600 font-medium flex items-center hover:text-green-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                <p className="text-gray-700">Increase in qualified leads</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">63%</div>
                <p className="text-gray-700">Higher customer retention</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">42%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5.2x</div>
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
            <h2 className="text-3xl font-bold mb-4">Lawn Care Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges lawn care businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Seasonal Demand Fluctuations"
              description="We create year-round marketing strategies that keep your schedule full even during traditionally slower seasons."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you develop a unique brand identity and value proposition that differentiates you from other lawn care providers."
              icon={<Target className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Converting One-Time Customers"
              description="Our strategies focus on turning one-time service calls into recurring maintenance contracts for stable revenue."
              icon={<Users className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Premium Pricing Strategy"
              description="We help you build a professional brand that commands premium pricing and attracts quality clients."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Neighborhood Targeting"
              description="Our geo-targeting strategies focus your marketing budget on the most profitable neighborhoods in your service area."
              icon={<Target className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Review Management"
              description="We implement automated systems to collect and showcase positive reviews that build trust with potential customers."
              icon={<MessageSquare className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Lawn Care Businesses</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for lawn care businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Website Transformation"
                description="Modern, conversion-focused website design that generates 3x more leads"
              />
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Google Search Rankings"
                description="From page 3 to page 1 rankings for key lawn care search terms"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Lawn Care Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for lawn care businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Lawn Care Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from lawn care business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Lawn Care Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that keeps your schedule full and helps your business thrive year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-800 px-8 py-4 rounded-lg hover:bg-green-50 transition font-medium inline-flex items-center"
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
