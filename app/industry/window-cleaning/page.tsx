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
  title: 'Window Cleaning Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for window cleaning businesses. Generate consistent leads and build a premium brand with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your window cleaning business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that showcases your quality service and targets your ideal customers in your service area.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your window cleaning business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to window cleaning
const testimonials = [
  {
    name: "Brian Thompson",
    company: "Crystal Clear Windows",
    quote: "Very Good Marketing has transformed our business. Their before/after campaign strategy has been incredibly effective, and we've seen an 85% increase in leads.",
    rating: 5,
    initials: "BT"
  },
  {
    name: "Laura Stevens",
    company: "Pristine Window Solutions",
    quote: "The commercial client acquisition strategy they created for us has helped us secure three major contracts with office buildings that have doubled our monthly revenue.",
    rating: 5,
    initials: "LS"
  }
];

export default function WindowCleaningPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-sky-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/window-cleaning.jpg" 
          alt="Window Cleaning Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Window Cleaning <span className="text-sky-300">Marketing</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Generate consistent leads and build a premium brand with our specialized marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-sky-900 px-6 py-3 rounded-lg hover:bg-sky-50 transition font-medium inline-flex items-center"
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Window Cleaning Companies</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your window cleaning business with marketing strategies designed specifically for your industry. We understand the seasonal nature of window cleaning and how to showcase your quality results.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our window cleaning marketing solutions are designed to help you attract high-quality leads, secure recurring contracts, and build a premium brand that commands higher rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-sky-600 font-medium flex items-center hover:text-sky-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-sky-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">85%</div>
                <p className="text-gray-700">Increase in qualified leads</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">73%</div>
                <p className="text-gray-700">More recurring clients</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">52%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">6.4x</div>
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
            <h2 className="text-3xl font-bold mb-4">Window Cleaning Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges window cleaning businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Seasonal Demand Fluctuations"
              description="We create year-round marketing strategies that keep your schedule full even during traditionally slower seasons."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-sky-50 text-sky-600"
            />
            <FeatureCard
              title="Showcasing Quality Results"
              description="We implement before/after visual campaigns that highlight the impressive transformation your services provide."
              icon={<Sparkles className="h-6 w-6" />}
              color="bg-sky-50 text-sky-600"
            />
            <FeatureCard
              title="Commercial Client Acquisition"
              description="Our B2B marketing strategies help you secure lucrative contracts with property managers and businesses."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-sky-50 text-sky-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your window cleaning business from competitors through unique value propositions and messaging."
              icon={<Target className="h-6 w-6" />}
              color="bg-sky-50 text-sky-600"
            />
            <FeatureCard
              title="Building Trust & Credibility"
              description="We help you establish credibility and trust with homeowners through reviews, testimonials, and professional branding."
              icon={<Users className="h-6 w-6" />}
              color="bg-sky-50 text-sky-600"
            />
            <FeatureCard
              title="Building Recurring Revenue"
              description="We implement strategies to convert one-time cleanings into recurring service contracts for stable revenue."
              icon={<MessageSquare className="h-6 w-6" />}
              color="bg-sky-50 text-sky-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Window Cleaning Companies</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for window cleaning businesses like yours.
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
                title="Commercial Contract Acquisition"
                description="From residential-only to lucrative commercial contracts"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Window Cleaning Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for window cleaning businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Window Cleaning Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from window cleaning business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-linear-to-r from-sky-600 to-sky-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Window Cleaning Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that showcases your quality results and helps your business thrive year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-sky-800 px-8 py-4 rounded-lg hover:bg-sky-50 transition font-medium inline-flex items-center"
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
