import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Home } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Roofing Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for roofing contractors. Generate consistent leads and build trust with homeowners using our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your roofing business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that builds trust with homeowners and generates consistent leads for your roofing company.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your roofing business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to roofing
const testimonials = [
  {
    name: "David Thompson",
    company: "Thompson Roofing",
    quote: "Very Good Marketing transformed our lead generation. We're now booking 3x more estimates each month and our close rate has improved significantly.",
    rating: 5,
    initials: "DT"
  },
  {
    name: "Sarah Miller",
    company: "Premier Roofing Solutions",
    quote: "Their storm damage marketing campaign was a game-changer for us. We've been able to help more homeowners and grow our business substantially.",
    rating: 5,
    initials: "SM"
  }
];

export default function RoofingPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/roofing.jpg" 
          alt="Roofing Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Roofing Marketing <span className="text-red-300">Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Generate consistent leads and build trust with homeowners using our specialized marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-red-900 px-6 py-3 rounded-lg hover:bg-red-50 transition font-medium inline-flex items-center"
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Roofing Contractors</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your roofing business with marketing strategies designed specifically for your industry. We understand the unique challenges roofing contractors face and how to generate consistent, high-quality leads.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our roofing marketing solutions are designed to help you build trust with homeowners, showcase your expertise, and convert more estimates into signed contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-red-600 font-medium flex items-center hover:text-red-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">215%</div>
                <p className="text-gray-700">Increase in qualified leads</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">42%</div>
                <p className="text-gray-700">Higher close rate</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">68%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">4.3x</div>
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
            <h2 className="text-3xl font-bold mb-4">Roofing Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges roofing contractors face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Building Homeowner Trust"
              description="We help you establish credibility and trust with homeowners through reviews, testimonials, and professional branding."
              icon={<Users className="h-6 w-6" />}
              color="bg-red-50 text-red-600"
            />
            <FeatureCard
              title="Consistent Lead Generation"
              description="Our multi-channel marketing strategies ensure a steady flow of qualified leads, even during traditionally slower seasons."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-red-50 text-red-600"
            />
            <FeatureCard
              title="Storm Response Marketing"
              description="We create rapid-deployment campaigns to help you respond quickly and effectively after severe weather events."
              icon={<Target className="h-6 w-6" />}
              color="bg-red-50 text-red-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your roofing business from competitors through unique value propositions and messaging."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-red-50 text-red-600"
            />
            <FeatureCard
              title="Insurance Claim Expertise"
              description="We showcase your insurance claim expertise to position you as the go-to contractor for insurance work."
              icon={<Home className="h-6 w-6" />}
              color="bg-red-50 text-red-600"
            />
            <FeatureCard
              title="Converting Estimates to Jobs"
              description="We implement follow-up systems and materials that help you convert more estimates into signed contracts."
              icon={<MessageSquare className="h-6 w-6" />}
              color="bg-red-50 text-red-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Roofing Contractors</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for roofing businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Lead Generation Results"
                description="From sporadic leads to consistent, high-quality prospects every month"
              />
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Online Presence Transformation"
                description="From basic website to comprehensive digital presence that builds trust"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Roofing Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for roofing contractors.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Roofing Contractors Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from roofing business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Roofing Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that generates consistent leads and helps your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-800 px-8 py-4 rounded-lg hover:bg-red-50 transition font-medium inline-flex items-center"
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
