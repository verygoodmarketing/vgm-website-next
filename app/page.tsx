import type { Metadata } from "next"
import Image from "next/image"
import CustomButton from "@/components/shared/custom-button"
import Container from "@/components/shared/container"
import { Search, Star, DollarSign, Clock, Phone, MapPin, Shield } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Your Website: Your #1 Marketing Asset for Service Businesses",
  description:
    "For service businesses like cleaning, landscaping, and home services, your website is your most powerful marketing tool. Learn why and how to leverage it.",
}

export default function Home() {
  // List of service industries we target
  const serviceIndustries = [
    "Cleaning",
    "Janitorial",
    "Pressure Washing",
    "Window Cleaning",
    "Lawn Care",
    "Tree Service",
    "Landscaping",
    "Snow Removal",
    "General Contracting",
    "Plumbing",
    "Handyman",
    "HVAC",
    "Electrical",
    "Painting",
    "Roofing",
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Service business website" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Website Is Your <span className="text-amber-400">Most Powerful</span> Marketing Asset
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              For service businesses like yours, a professional website isn't just nice to have—it's essential. 97% of
              consumers search online for local services before making a call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="blue" href="/contact">
                Get Your Professional Website
              </CustomButton>
              <CustomButton variant="outline" href="/services">
                See How It Works
              </CustomButton>
            </div>

            {/* Service Industries */}
            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-sm uppercase tracking-wider mb-4">Specialized in websites for:</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {serviceIndustries.map((industry, index) => (
                  <span key={index} className="text-sm bg-white/10 px-3 py-1 rounded-full">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Your Website Matters Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Your Website Is Your #1 Marketing Asset</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For service businesses like cleaning, landscaping, and home services, your website is the foundation of
              all your marketing efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Google Is The New Yellow Pages</h3>
              <p className="text-gray-600">
                97% of consumers search online for local services. Without a professional website, you're invisible to
                potential customers who need your services right now.
              </p>
            </Card>

            <Card className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Credibility</h3>
              <p className="text-gray-600">
                75% of consumers judge a business's credibility based on their website. A professional site instantly
                positions you as established and trustworthy.
              </p>
            </Card>

            <Card className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Sales Machine</h3>
              <p className="text-gray-600">
                Your website works around the clock, generating leads while you sleep. It's the only marketing asset
                that never takes a day off or calls in sick.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Website Problems We Solve For Service Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If any of these sound familiar, you're leaving money on the table every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">"I don't have a website at all"</h3>
              <p className="text-gray-700 mb-4">
                You're missing out on the 97% of customers who search online before hiring a service business. Your
                competitors are getting these customers instead.
              </p>
              <p className="text-gray-700">
                <strong>Our solution:</strong> We'll build you a professional, lead-generating website in as little as 2
                weeks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">"My website looks unprofessional or outdated"</h3>
              <p className="text-gray-700 mb-4">
                An outdated website can actually hurt your business. 75% of consumers judge your credibility based on
                your website design.
              </p>
              <p className="text-gray-700">
                <strong>Our solution:</strong> We'll redesign your site with a modern, professional look that builds
                trust and converts visitors into customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">"My website doesn't generate leads"</h3>
              <p className="text-gray-700 mb-4">
                Having a website that doesn't generate leads is like having a sales rep who never makes calls. It's a
                wasted asset.
              </p>
              <p className="text-gray-700">
                <strong>Our solution:</strong> We'll optimize your website with proven lead generation elements that
                turn visitors into paying customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-600">"I can't be found on Google"</h3>
              <p className="text-gray-700 mb-4">
                If you're not on the first page of Google for your services, you're essentially invisible to most
                potential customers.
              </p>
              <p className="text-gray-700">
                <strong>Our solution:</strong> We build websites with local SEO fundamentals baked in, so you can start
                climbing the Google rankings.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What Makes Our Websites Different */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Our Service Business Websites Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just build pretty websites. We build lead-generating machines specifically designed for service
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Prominent Contact Information</h3>
                <p className="text-gray-600">
                  Your phone number is visible on every page, making it easy for customers to call you immediately when
                  they need your services.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Local SEO Optimization</h3>
                <p className="text-gray-600">
                  We optimize your website to show up when local customers search for your services on Google, bringing
                  you more relevant leads.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Fast Loading Speed</h3>
                <p className="text-gray-600">
                  Our websites load in under 2 seconds, preventing the 40% of visitors who leave slow websites and
                  ensuring you don't lose potential customers.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Trust-Building Elements</h3>
                <p className="text-gray-600">
                  We prominently feature reviews, testimonials, licenses, and insurance information to build instant
                  trust with potential customers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Business Success Stories */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Businesses Like Yours Are Succeeding With Our Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's how other service businesses have transformed their results with a
              professional website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">JC</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Johnson Cleaning Services</h3>
                    <p className="text-sm text-gray-600">Residential & Commercial Cleaning</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Our new website generates 15-20 leads per month, compared to the 2-3 we were getting before. It's
                  completely transformed our business."
                </p>
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">GL</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Green Leaf Landscaping</h3>
                    <p className="text-sm text-gray-600">Lawn Care & Landscaping</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Within 3 months of launching our new website, we were ranking on the first page of Google for
                  'landscaping near me'. Now we have more leads than we can handle."
                </p>
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">RP</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Reliable Plumbing</h3>
                    <p className="text-sm text-gray-600">Residential Plumbing Services</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Our professional website has helped us stand out from competitors. Customers tell us they called us
                  because our website made us look more trustworthy."
                </p>
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="text-blue-600 hover:underline">
              See more success stories →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Losing Customers to Competitors With Better Websites
            </h2>
            <p className="text-xl mb-8">
              Every day without a professional website is a day you're losing potential customers. Let's fix that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CustomButton variant="white" href="/contact">
                Get Your Professional Website
              </CustomButton>
              <CustomButton variant="outline" href="/services">
                See Our Pricing
              </CustomButton>
            </div>
            <p className="mt-8 text-sm opacity-80">
              No long-term contracts. No hidden fees. Just a professional website that brings you customers.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}

