import Image from "next/image"
import Link from "next/link"
import CustomButton from "@/components/shared/custom-button"
import Container from "@/components/shared/container"

export default function ResourcesPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketing Resources That Put Your Website First</h1>
            <p className="text-xl text-gray-600">
              Explore our collection of articles, guides, and insights designed to help you build a website-centered
              marketing strategy that drives real business growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Website+Marketing"
                  alt="Why Your Website Is Your Most Important Marketing Asset"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <Link
                  href="/resources/posts/why-your-website-is-your-most-important-marketing-asset"
                  className="hover:text-blue-600 transition-colors"
                >
                  Why Your Website Is Your Most Important Marketing Asset
                </Link>
              </h3>
              <p className="text-gray-600 mb-6">
                In today's digital-first world, your website isn't just a digital brochure—it's the foundation of your
                entire marketing strategy and often the difference between a thriving business and one that struggles to
                grow.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>March 8, 2025</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
              <CustomButton
                variant="blue"
                href="/resources/posts/why-your-website-is-your-most-important-marketing-asset"
              >
                Read Article
              </CustomButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

