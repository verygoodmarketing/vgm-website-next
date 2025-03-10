import type { Metadata } from "next"
import Container from "@/components/shared/container"
import ContactPageClient from "./page-client-updated"

export const metadata: Metadata = {
  title: "Contact Us | Get Your Service Business Website",
  description:
    "Contact us to discuss how we can help your cleaning, landscaping, or home service business get more customers with a professional website.",
}

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Get Your Service Business More Customers</h1>
            <p className="text-xl text-gray-600">
              Schedule a free discovery call to discuss how a professional website can help your cleaning, landscaping,
              or home service business grow.
            </p>
          </div>
        </Container>
      </section>

      <ContactPageClient
        intro={
          <div className="max-w-md mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
            <p className="text-gray-600">
              Fill out the form below or schedule a call. We'll discuss your business goals and how we can help you
              achieve them with a professional website.
            </p>
          </div>
        }
      />
    </>
  )
}