import type { Metadata } from 'next'
import { getTestimonials } from '@/lib/testimonial-service'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
	title: 'Success Stories | Very Good Marketing',
	description:
		'See how service businesses like yours have achieved real results with Very Good Marketing. Read our client success stories and case studies.',
}

export default async function SuccessStoriesPage() {
	// Fetch all testimonials
	const testimonials = await getTestimonials()

	// Group testimonials by industry
	const testimonialsByIndustry = testimonials.reduce(
		(acc, testimonial) => {
			const industry = testimonial.industry || 'Other'
			if (!acc[industry]) {
				acc[industry] = []
			}
			acc[industry].push(testimonial)
			return acc
		},
		{} as Record<string, typeof testimonials>
	)

	// Sort industries by number of testimonials (descending)
	const sortedIndustries = Object.keys(testimonialsByIndustry).sort(
		(a, b) => testimonialsByIndustry[b].length - testimonialsByIndustry[a].length
	)

	return (
		<div className="pb-20">
			<PageHeader
				title="Client Success Stories"
				description="Real businesses, real results. See how service businesses like yours have transformed their online presence and grown their customer base with our help."
			/>

			<Container>
				{/* Featured testimonials */}
				<section className="my-16">
					<h2 className="text-2xl font-bold mb-6">Featured Success Stories</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials
							.filter(t => t.featured)
							.slice(0, 3)
							.map(testimonial => (
								<Card
									key={testimonial.id}
									className="p-6 border-blue-200 shadow-md"
								>
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

									<p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>

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
								</Card>
							))}
					</div>
				</section>

				{/* Testimonials by industry */}
				<section>
					<h2 className="text-2xl font-bold mb-8">Success Stories By Industry</h2>

					{sortedIndustries.map(industry => (
						<div
							key={industry}
							className="mb-16"
						>
							<h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">{industry}</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{testimonialsByIndustry[industry].map(testimonial => (
									<Card
										key={testimonial.id}
										className="p-6"
									>
										{testimonial.rating && (
											<div className="flex text-amber-500 mb-3">
												{[...Array(testimonial.rating)].map((_, i) => (
													<Star
														key={i}
														className="w-4 h-4 fill-current"
													/>
												))}
											</div>
										)}

										<p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>

										<div className="flex items-center">
											<div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
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
												<p className="text-sm text-gray-500">{testimonial.company}</p>
											</div>
										</div>
									</Card>
								))}
							</div>
						</div>
					))}
				</section>

				{/* CTA section */}
				<section className="mt-20 text-center bg-blue-50 p-10 rounded-lg">
					<h2 className="text-2xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
					<p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
						We've helped hundreds of service businesses transform their online presence and grow their customer base.
						Let's talk about how we can help your business too.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							size="lg"
						>
							<Link href="/contact">Get Started Today</Link>
						</Button>
						<Button
							variant="outline"
							asChild
							size="lg"
						>
							<Link href="/services">View Our Services</Link>
						</Button>
					</div>
				</section>
			</Container>
		</div>
	)
}
