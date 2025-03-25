import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Droplet } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Plumbing Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for plumbing companies. Generate consistent leads and build a trusted brand with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your plumbing business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that builds trust with homeowners and generates consistent leads for your plumbing company.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your plumbing business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to plumbing
const testimonials = [
  {
    name: "James Peterson",
    company: "Peterson Plumbing",
    quote: "Since working with Very Good Marketing, our phone rings consistently with quality leads. We've grown from 2 trucks to 5 in just 18 months.",
    rating: 5,
    initials: "JP"
  },
  {
    name: "Lisa Martinez",
    company: "Reliable Plumbing Solutions",
    quote: "Their emergency service marketing strategy has been a game-changer. We're now the go-to plumber in our area for urgent calls, which has dramatically increased our revenue.",
    rating: 5,
    initials: "LM"
  }
];

export default function PlumbingPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/plumbing.jpg" 
          alt="Plumbing Services" 
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
                Plumbing Marketing <span className="text-blue-300">Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Generate consistent leads and build a trusted brand with our specialized marketing strategies.
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Plumbing Companies</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your plumbing business with marketing strategies designed specifically for your industry. We understand the unique challenges plumbers face and how to generate consistent, high-quality leads.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our plumbing marketing solutions are designed to help you build trust with homeowners, capture emergency service calls, and develop a steady stream of recurring maintenance customers.
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
                <div className="text-3xl font-bold text-blue-600 mb-2">178%</div>
                <p className="text-gray-700">Increase in service calls</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">52%</div>
                <p className="text-gray-700">More emergency calls</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">43%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.9x</div>
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
            <h2 className="text-3xl font-bold mb-4">Plumbing Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges plumbing businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Emergency Service Marketing"
              description="We implement rapid-response marketing systems that capture emergency service calls when customers need you most."
              icon={<Droplet className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Building Homeowner Trust"
              description="We help you establish credibility and trust with homeowners through reviews, testimonials, and professional branding."
              icon={<Users className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Consistent Lead Generation"
              description="Our multi-channel marketing strategies ensure a steady flow of qualified leads throughout the year."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your plumbing business from competitors through unique value propositions and messaging."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Targeted Service Area Marketing"
              description="Our geo-targeting strategies focus your marketing budget on the most profitable neighborhoods in your service area."
              icon={<Target className="h-6 w-6" />}
              color="bg-blue-50 text-blue-600"
            />
            <FeatureCard
              title="Building Recurring Revenue"
              description="We implement strategies to convert one-time service calls into maintenance plan customers for stable revenue."
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
              <h2 className="text-3xl font-bold mb-4">Real Results for Plumbing Companies</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for plumbing businesses like yours.
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
                title="Emergency Call Capture"
                description="From missing urgent calls to dominating emergency service in your area"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Plumbing Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for plumbing businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Plumbing Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from plumbing business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Plumbing Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that generates consistent leads and helps your business thrive.
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
