import Link from "next/link"
import { ArrowRight, Globe, Search, Facebook, Instagram } from "lucide-react"
import Container from "../shared/container"

export default function ServicesOverview() {
  const services = [
    {
      title: "Website Design & Development",
      description: "Professional, responsive websites designed to convert visitors into customers.",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      link: "/services#website-creation",
    },
    {
      title: "Google Ads Management",
      description: "Targeted advertising to reach customers at the moment they're looking for you.",
      icon: <Search className="h-8 w-8 text-blue-600" />,
      link: "/services#google-ads",
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Reach potential customers in your area with compelling social media advertising.",
      icon: <Facebook className="h-8 w-8 text-blue-600" />,
      link: "/services#social-ads",
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand, showcase your work, and engage with your community.",
      icon: <Instagram className="h-8 w-8 text-blue-600" />,
      link: "/services#social-media",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Digital Marketing For Service Businesses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From professional websites to paid advertising and social media, we offer everything service businesses need
            to get more customers online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Bundle & Save</h3>
            <p className="text-gray-600">
              Get the best results and the best value by combining our services into a comprehensive digital marketing
              strategy.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/services#bundles"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
            >
              View Bundle Packages
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

