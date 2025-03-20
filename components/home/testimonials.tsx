import Image from 'next/image'
import Container from '../shared/container'
import { getFeaturedTestimonials } from '@/lib/testimonial-service'
import { Testimonial } from '@/types/testimonial'
import Link from 'next/link'
import { Star } from 'lucide-react'

// Server component that fetches and displays testimonials
export default async function Testimonials() {
	// Fetch featured testimonials (limit to 3)
	const testimonials = await getFeaturedTestimonials(3)

	return (
		<section className="py-16 bg-white">
			<Container>
				<div className="text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Don't just take our word for it. See what businesses like yours have to say about working with us.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map(testimonial => (
						<TestimonialCard
							key={testimonial.id}
							testimonial={testimonial}
						/>
					))}
				</div>

				<div className="text-center mt-10">
					<Link
						href="/success-stories"
						className="text-blue-600 hover:underline font-medium"
					>
						See more success stories →
					</Link>
				</div>
			</Container>
		</section>
	)
}

// Testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className="bg-gray-50 p-8 rounded-lg shadow-sm">
			<div className="flex flex-col h-full">
				{testimonial.rating && (
					<div className="flex text-amber-500 mb-4">
						{[...Array(testimonial.rating)].map((_, i) => (
							<Star
								key={i}
								className="w-5 h-5 fill-current"
							/>
						))}
					</div>
				)}

				<div className="mb-6 flex-grow">
					<p className="italic text-gray-600">"{testimonial.quote}"</p>
				</div>

				<div className="flex items-center">
					<div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
						<Image
							src={testimonial.image || '/placeholder.svg'}
							alt={testimonial.author}
							fill
							sizes="48px"
							className="object-cover"
						/>
					</div>
					<div>
						<p className="font-bold">{testimonial.author}</p>
						<div className="flex flex-col">
							<p className="text-sm text-gray-500">{testimonial.company}</p>
							{testimonial.industry && <p className="text-xs text-gray-400">{testimonial.industry}</p>}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
