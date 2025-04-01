import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Hammer } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Handyman Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for handyman businesses. Generate consistent leads and build a trusted brand with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your handyman business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that showcases your versatility and targets your ideal customers in your service area.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your handyman business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to handyman
const testimonials = [
  {
    name: "Robert Davis",
    company: "Davis Home Solutions",
    quote: "Very Good Marketing has transformed my handyman business. I've gone from struggling to find work to having a waitlist of clients, and I've been able to raise my rates.",
    rating: 5,
    initials: "RD"
  },
  {
    name: "Kevin Wilson",
    company: "Wilson's Handyman Services",
    quote: "Their targeted marketing approach has helped me focus on the most profitable types of jobs. I'm now working less hours but making more money than ever before.",
    rating: 5,
    initials: "KW"
  }
];

export default function HandymanPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-orange-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/handyman.jpg" 
          alt="Handyman Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Handyman Marketing <span className="text-orange-300">Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Generate consistent leads and build a trusted brand with our specialized marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-orange-900 px-6 py-3 rounded-lg hover:bg-orange-50 transition font-medium inline-flex items-center"
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Handyman Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your handyman business with marketing strategies designed specifically for your industry. We understand the unique challenges handymen face and how to showcase your versatility and reliability.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our handyman marketing solutions are designed to help you attract high-quality leads, build trust with homeowners, and develop a steady stream of recurring customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-orange-600 font-medium flex items-center hover:text-orange-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">83%</div>
                <p className="text-gray-700">Increase in service calls</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">42%</div>
                <p className="text-gray-700">Higher job value</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">65%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5.1x</div>
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
            <h2 className="text-3xl font-bold mb-4">Handyman Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges handyman businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Building Homeowner Trust"
              description="We help you establish credibility and trust with homeowners through reviews, testimonials, and professional branding."
              icon={<Users className="h-6 w-6" />}
              color="bg-orange-50 text-orange-600"
            />
            <FeatureCard
              title="Showcasing Versatility"
              description="We implement strategies that highlight your diverse skills and ability to handle a wide range of home repair projects."
              icon={<Hammer className="h-6 w-6" />}
              color="bg-orange-50 text-orange-600"
            />
            <FeatureCard
              title="Consistent Lead Generation"
              description="Our multi-channel marketing strategies ensure a steady flow of qualified leads throughout the year."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-orange-50 text-orange-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your handyman business from competitors through unique value propositions and messaging."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-orange-50 text-orange-600"
            />
            <FeatureCard
              title="Targeted Service Area Marketing"
              description="Our geo-targeting strategies focus your marketing budget on the most profitable neighborhoods in your service area."
              icon={<Target className="h-6 w-6" />}
              color="bg-orange-50 text-orange-600"
            />
            <FeatureCard
              title="Building Recurring Revenue"
              description="We implement strategies to convert one-time service calls into recurring maintenance customers for stable revenue."
              icon={<MessageSquare className="h-6 w-6" />}
              color="bg-orange-50 text-orange-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Handyman Businesses</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for handyman businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Lead Generation Results"
                description="From inconsistent calls to a steady stream of qualified service requests"
              />
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Brand Perception Improvement"
                description="From basic handyman to trusted home improvement professional"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Handyman Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for handyman businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Handyman Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from handyman business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-linear-to-r from-orange-600 to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Handyman Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that generates consistent leads and helps your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-orange-800 px-8 py-4 rounded-lg hover:bg-orange-50 transition font-medium inline-flex items-center"
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
