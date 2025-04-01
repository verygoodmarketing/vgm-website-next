import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Trees } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'
import { isFeatureEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Tree Service Marketing Solutions | Very Good Marketing',
  description: 'Specialized marketing strategies for tree service businesses. Generate consistent leads and showcase your expertise with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
  {
    title: "Discovery & Analysis",
    description: "We analyze your current marketing, competitors, and target audience to identify opportunities specific to your tree service business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Strategy Development",
    description: "We create a custom marketing strategy that showcases your expertise and targets your ideal customers in your service area.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Implementation",
    description: "Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your tree service business.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Optimization & Growth",
    description: "We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.",
    icon: <CheckCircle className="h-4 w-4" />
  }
];

// Testimonials specific to tree service
const testimonials = [
  {
    name: "Michael Green",
    company: "Green Tree Experts",
    quote: "Very Good Marketing has transformed our business. Their before/after campaign strategy has been incredibly effective, and we've seen a 95% increase in leads for high-value jobs.",
    rating: 5,
    initials: "MG"
  },
  {
    name: "Sarah Johnson",
    company: "Johnson's Tree Care",
    quote: "The emergency response marketing strategy they created for us has been a game-changer. After storms, our phone rings non-stop with qualified leads.",
    rating: 5,
    initials: "SJ"
  }
];

export default function TreeServicePage() {
  const showBeforeAfterSection = isFeatureEnabled('BEFORE_AFTER_SECTION');
  
  return (
    <>
      {/* Enhanced Hero Section with Overlay Text and Parallax */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-green-900/80 to-black/50 z-10"></div>
        <Image 
          src="/images/articles/tree-service.jpg" 
          alt="Tree Service" 
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
                Tree Service <span className="text-green-300">Marketing</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Generate consistent leads and showcase your expertise with our specialized marketing strategies.
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
              <h2 className="text-3xl font-bold mb-6">Specialized Marketing for Tree Service Companies</h2>
              <p className="text-lg text-gray-700 mb-6">
                Grow your tree service business with marketing strategies designed specifically for your industry. We understand the unique challenges arborists and tree care companies face and how to showcase your expertise.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our tree service marketing solutions are designed to help you attract high-quality leads, secure higher-value jobs, and build a reputation as the go-to tree care experts in your area.
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
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <p className="text-gray-700">Increase in qualified leads</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                <p className="text-gray-700">Higher job value</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">58%</div>
                <p className="text-gray-700">Revenue growth</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5.9x</div>
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
            <h2 className="text-3xl font-bold mb-4">Tree Service Marketing Challenges We Solve</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand the unique challenges tree service businesses face and have developed specialized solutions to overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              title="Showcasing Expertise & Safety"
              description="We help you demonstrate your professional knowledge, certifications, and safety protocols to build trust with potential clients."
              icon={<Trees className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Emergency Response Marketing"
              description="We implement rapid-response marketing systems that capture emergency tree service calls after storms and severe weather."
              icon={<BarChart3 className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Attracting Higher-Value Jobs"
              description="Our targeting strategies help you connect with clients who need complex, higher-value tree services."
              icon={<TrendingUp className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Standing Out From Competition"
              description="We help you differentiate your tree service business from competitors through unique value propositions and messaging."
              icon={<Target className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Building Trust & Credibility"
              description="We help you establish credibility and trust with homeowners through reviews, testimonials, and professional branding."
              icon={<Users className="h-6 w-6" />}
              color="bg-green-50 text-green-600"
            />
            <FeatureCard
              title="Seasonal Marketing Strategies"
              description="We create year-round marketing approaches that address different tree care needs throughout the seasons."
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
              <h2 className="text-3xl font-bold mb-4">Real Results for Tree Service Companies</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                See the transformation our marketing strategies have created for tree service businesses like yours.
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
                title="Job Value Increase"
                description="From basic tree trimming to complete tree removal and land clearing projects"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tree Service Marketing Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven process to create and implement marketing strategies that deliver results for tree service businesses.
            </p>
          </div>

          <ProcessTimeline steps={marketingProcess} />
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Tree Service Professionals Say</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Hear from tree service business owners who have transformed their marketing with our industry-specific solutions.
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
      <section className="py-16 bg-linear-to-r from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your Tree Service Business?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a marketing strategy that showcases your expertise and helps your business thrive year-round.
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
