import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Palette } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Landscaping Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for landscaping businesses. Attract high-value clients and showcase your design expertise with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your landscaping business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that showcases your design expertise and targets high-value clients in your service area.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your landscaping business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to landscaping
const testimonials = [
  {
    name: "Michael Roberts",
    company: "Elite Landscapes",
    quote: "Since working with Very Good Marketing, we've seen a 65% increase in high-value projects. Their ability to showcase our design expertise has transformed our client base.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Jennifer Williams",
    company: "Green Vision Landscaping",
    quote: "The portfolio-focused website they created for us has been a game-changer. We're now attracting clients with much larger project budgets.",
    rating: 5,
    initials: "JW"
  }
];

export default function LandscapingPage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/landscaping.jpg" 
          alt="Landscaping Services" 
          fill 
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-block bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Industry Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Landscaping Marketing <span className="text-emerald-300">Solutions</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Attract high-value clients and showcase your design expertise with our specialized marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-emerald-900 px-6 py-3 rounded-lg hover:bg-emerald-50 transition font-medium inline-flex items-center"
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Landscaping Businesses</h2>
              <p className="text-lg text-gray-700 mb-6">
                Elevate your landscaping business with marketing strategies that showcase your design expertise and craftsmanship. We help landscaping companies attract high-value clients and build a premium brand.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our landscaping marketing solutions are designed to highlight your portfolio, demonstrate your expertise, and connect you with clients who value quality and are willing to invest in their outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition"
                >
                  Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">72%</div>
                <p className="text-gray-700">Increase in project value</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">58%</div>
                <p className="text-gray-700">More design consultations</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">45%</div>
                <p className="text-gray-700">Higher conversion rate</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4.8x</div>
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
            <h2 className="text-3xl font-bold mb-4">Landscaping Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges landscaping businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Attracting Premium Clients"
              description="We help you target and attract clients with higher project budgets who value quality design and craftsmanship."
              icon={<Target className="h-6 w-6" />}
              color="bg-emerald-50 text-emerald-600"
            />
            <FeatureCard
              title="Showcasing Design Expertise"
              description="Our portfolio-focused strategies highlight your best work and demonstrate your design capabilities to potential clients."
              icon={<Palette className="h-6 w-6" />}
              color="bg-emerald-50 text-emerald-600"
            />
            <FeatureCard
              title="Differentiating Your Services"
              description="We help you stand out from basic lawn care providers by emphasizing your design expertise and comprehensive services."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-emerald-50 text-emerald-600"
            />
            <FeatureCard
              title="Building a Premium Brand"
              description="We develop a professional brand identity that commands premium pricing and attracts quality clients."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-emerald-50 text-emerald-600"
            />
            <FeatureCard
              title="Targeted Neighborhood Marketing"
              description="Our geo-targeting strategies focus your marketing budget on affluent neighborhoods in your service area."
              icon={<Target className="h-6 w-6" />}
              color="bg-emerald-50 text-emerald-600"
            />
            <FeatureCard
              title="Converting Consultations"
              description="We implement systems to increase your consultation-to-contract conversion rate through effective follow-up strategies."
              icon={<Users className="h-6 w-6" />}
              color="bg-emerald-50 text-emerald-600"
            />
          </div>
        </Container>
      </section>

      {/* Before/After Section - conditionally rendered based on feature flag */}
      {showBeforeAfterSection && (
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Landscaping Businesses</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for landscaping businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Portfolio Website Transformation"
                description="Modern, design-focused website that generates 3x more high-value leads"
              />
              <BeforeAfter
                beforeImage="/images/placeholder-before.svg"
                afterImage="/images/placeholder-after.svg"
                beforeAlt="Before implementing our marketing strategy"
                afterAlt="After implementing our marketing strategy"
                title="Project Value Increase"
                description="From small residential jobs to premium design-build projects"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Landscaping Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for landscaping businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Landscaping Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from landscaping business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-linear-to-r from-emerald-600 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Landscaping Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that showcases your design expertise and attracts premium clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-emerald-800 px-8 py-4 rounded-lg hover:bg-emerald-50 transition font-medium inline-flex items-center"
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
