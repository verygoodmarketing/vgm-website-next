import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Sparkles } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Cleaning & Janitorial Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for cleaning companies. Attract high-value clients and build a premium brand with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your cleaning business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that targets your ideal customers and showcases your cleaning company's unique value proposition.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your cleaning business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to cleaning
const testimonials = [
  {
    name: "Maria Rodriguez",
    company: "Pristine Cleaning Services",
    quote: "Since working with Very Good Marketing, we've been able to focus on higher-value clients and recurring contracts. Our revenue has increased by 62% in just 8 months.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Daniel Kim",
    company: "Elite Janitorial",
    quote: "Their commercial client acquisition strategy has transformed our business. We've secured three major corporate contracts that have doubled our monthly revenue.",
    rating: 5,
    initials: "DK"
  }
];

export default function CleaningPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/cleaning.jpg" 
          alt="Cleaning Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Cleaning Marketing <span className="text-cyan-300">Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Attract high-value clients and build a premium brand with our specialized marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-cyan-900 px-6 py-3 rounded-lg hover:bg-cyan-50 transition font-medium inline-flex items-center"
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Cleaning Companies</h2>
              <p className="text-lg text-gray-700 mb-6">
                Elevate your cleaning business with marketing strategies designed specifically for your industry. We help cleaning companies attract high-value clients, secure recurring contracts, and build a premium brand.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our cleaning marketing solutions are designed to help you stand out in a competitive market, showcase your quality service, and connect with clients who value professional cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-cyan-600 font-medium flex items-center hover:text-cyan-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">62%</div>
                <p className="text-gray-700">Revenue increase</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">78%</div>
                <p className="text-gray-700">More recurring clients</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">45%</div>
                <p className="text-gray-700">Higher contract value</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">4.6x</div>
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
            <h2 className="text-3xl font-bold mb-4">Cleaning Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges cleaning businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your cleaning business in a crowded market through unique branding and messaging."
              icon={<Target className="h-6 w-6" />}
              color="bg-cyan-50 text-cyan-600"
            />
            <FeatureCard
              title="Attracting Premium Clients"
              description="Our targeting strategies help you connect with clients who value quality and are willing to pay for professional service."
              icon={<Users className="h-6 w-6" />}
              color="bg-cyan-50 text-cyan-600"
            />
            <FeatureCard
              title="Building Recurring Revenue"
              description="We implement strategies to convert one-time cleanings into recurring service contracts for stable revenue."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-cyan-50 text-cyan-600"
            />
            <FeatureCard
              title="Commercial Client Acquisition"
              description="Our B2B marketing approaches help you secure lucrative commercial cleaning contracts with businesses and property managers."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-cyan-50 text-cyan-600"
            />
            <FeatureCard
              title="Building Trust & Credibility"
              description="We help you establish trust through professional branding, reviews, and security-focused messaging."
              icon={<Sparkles className="h-6 w-6" />}
              color="bg-cyan-50 text-cyan-600"
            />
            <FeatureCard
              title="Targeted Service Area Marketing"
              description="Our geo-targeting strategies focus your marketing budget on the most profitable neighborhoods in your service area."
              icon={<MessageSquare className="h-6 w-6" />}
              color="bg-cyan-50 text-cyan-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Cleaning Companies</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for cleaning businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Client Quality Transformation"
                description="From one-time budget clients to premium recurring contracts"
              />
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Brand Perception Improvement"
                description="From basic cleaning service to premium, trusted provider"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cleaning Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for cleaning businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Cleaning Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from cleaning business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Cleaning Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that attracts premium clients and helps your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-cyan-800 px-8 py-4 rounded-lg hover:bg-cyan-50 transition font-medium inline-flex items-center"
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
