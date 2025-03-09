import Image from "next/image"
import Container from "../shared/container"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Very Good Marketing transformed our online presence. Our website now generates more leads in a month than we used to get in a quarter.",
      author: "Jane Smith",
      company: "Local Plumbing Co.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Unlike other agencies we've worked with, they actually care about our long-term success, not just collecting a monthly fee.",
      author: "John Doe",
      company: "City Dental Practice",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Their transparent approach to marketing is refreshing. We always know exactly what we're paying for and the results we're getting.",
      author: "Sarah Johnson",
      company: "Johnson Law Firm",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <p className="italic text-gray-600">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

