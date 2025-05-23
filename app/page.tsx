import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/shared/container'
import { Search, Star, DollarSign, Clock, Phone, MapPin, Shield } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import InteractiveHero from '@/components/home/interactive-hero'
import Testimonials from '@/components/home/testimonials'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
	title: 'Your Website: Your #1 Marketing Asset for Service Businesses',
	description:
		'For service businesses like cleaning, landscaping, and home services, your website is your most powerful marketing tool. Learn why and how to leverage it.',
}

export default function Home() {
	// List of service industries we target - ordered by priority
	const serviceIndustries = [
		'Lawn Care', // New default first (most important)
		'Landscaping',
		'Tree Service',
		'Pressure Washing',
		'Window Cleaning',
		'Cleaning',
		'Janitorial',
		'Snow Removal',
		'Painting',
		'Roofing',
		'HVAC',
		'Plumbing',
		'Electrical',
		'Handyman',
		'General Contracting',
		'Fencing',
	]

	return (
		<div>
			{/* Interactive Hero Section */}
			<InteractiveHero serviceIndustries={serviceIndustries} />

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

			{/* Testimonials Section */}
			<Testimonials />

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
							<Button
								asChild
								variant="white"
							>
								<Link href="/success-stories">Get Your Professional Website</Link>
							</Button>
							<Button
								asChild
								variant="outline"
							>
								<Link href="/pricing">See Our Pricing</Link>
							</Button>
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
