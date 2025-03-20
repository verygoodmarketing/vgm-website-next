import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/shared/page-header'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import { Heart, LineChart, Lightbulb, Zap, MessageSquare, Target } from 'lucide-react'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
	title: 'About | Small Service Business Marketing Specialist',
	description:
		'Specialized marketing services for small service businesses like cleaning, landscaping, and home services - with professional websites as the foundation.',
}

export default function AboutPage() {
	return (
		<div>
			<PageHeader
				title="About Very Good Marketing"
				description="Founded in 2022 to help home service businesses grow without overpaying for marketing. Transparency and results are our promise."
			/>

			<section className="py-16 md:py-24">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">Small Service Business Marketing Specialist</h1>
							<p className="text-xl text-gray-600 mb-6">
								We specialize in marketing for small service businesses like cleaning, landscaping, and home services,
								with professional websites as the foundation of all marketing strategies.
							</p>
							<p className="text-xl text-gray-600 mb-6">
								Unlike generic marketers or web designers, we create comprehensive marketing solutions tailored
								specifically to generate leads for service businesses. Every effective marketing strategy starts with a
								website that:
							</p>
							<ul className="space-y-4 mb-6">
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Builds trust with potential customers who need your services</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Shows up in local searches when people need your services</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Makes it easy for customers to contact you immediately</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Highlights your service areas, licenses, and insurance</span>
								</li>
							</ul>
							<p className="text-xl text-gray-600">
								We've helped many service businesses get more customers with effective marketing strategies built on
								professional websites that actually work.
							</p>
						</div>
						<div className="relative h-[500px] rounded-lg overflow-hidden">
							<Image
								src="/images/service-business-marketing.jpg"
								alt="Small service business marketing"
								priority={true}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-16 bg-gray-50">
				<Container>
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service-First Values</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							These principles guide everything we do, ensuring we always put your business needs first.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<Heart className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold mb-3">Results-Focused</h3>
							<p className="text-gray-600">
								We measure success by how many new customers your website brings you, not by how pretty it looks.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<LineChart className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
							<p className="text-gray-600">
								We specialize in service businesses like yours, so we understand what works to attract your ideal
								customers.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<Lightbulb className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold mb-3">No Tech Jargon</h3>
							<p className="text-gray-600">
								We explain everything in plain English, so you always understand what we're doing and why it matters.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<Zap className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold mb-3">Fast Implementation</h3>
							<p className="text-gray-600">
								We know you're busy running your business, so we handle everything and get your website live in weeks,
								not months.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<MessageSquare className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
							<p className="text-gray-600">
								We don't disappear after your website launches. We provide ongoing support to ensure it continues to
								bring you customers.
							</p>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-md">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
								<Target className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
							<p className="text-gray-600">
								No hidden fees or surprise charges. You'll always know exactly what you're paying for and what you're
								getting.
							</p>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-16 bg-white">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-2 lg:order-1">
							<h2 className="text-3xl font-bold mb-6">How We Compare to Other Marketing Companies</h2>
							<p className="text-lg text-gray-600 mb-6">
								When comparing Very Good Marketing to other marketing companies, there are several key differences:
							</p>
							<ul className="space-y-4 mb-6">
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										We focus exclusively on small service businesses, unlike generalist marketers who work with anyone
									</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										We start with a strong website foundation first, then build other marketing strategies on top
									</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										We provide personal service and focused attention, not a cookie-cutter approach where you're just
										another client
									</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										We offer transparent, affordable pricing without long-term contracts that lock you in
									</span>
								</li>
							</ul>
							<p className="text-lg text-gray-600">
								This specialized approach allows us to create marketing strategies that truly understand the needs of
								your customers and effectively convert them into leads for your business.
							</p>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
							<Image
								src="/images/service-business.jpg"
								alt="Service businesses"
								fill
								sizes="100vw"
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-16 bg-gray-50">
				<Container>
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Focus on Small Service Businesses</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Small service businesses face unique marketing challenges that require specialized solutions.
						</p>
					</div>

					<div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
						<p className="text-lg text-gray-700 mb-6">
							We've chosen to focus exclusively on small service businesses because we believe they're the backbone of
							local communities and deserve marketing that actually works for their unique needs.
						</p>

						<p className="text-lg text-gray-700 mb-6">
							Many small service businesses struggle with marketing because most agencies either charge too much or use
							cookie-cutter approaches that don't address the specific challenges of service-based companies.
						</p>

						<p className="text-lg text-gray-700 mb-6">
							By specializing in this niche, we've developed proven strategies that help service businesses like yours
							connect with ideal customers who need your services right now - starting with a professional website that
							serves as the foundation for all your marketing efforts.
						</p>

						<p className="text-lg text-gray-700">
							Whether you're a cleaning company, landscaper, home service provider, or other local service business, our
							approach focuses on practical, results-driven marketing that generates real leads instead of just looking
							pretty.
						</p>
					</div>
				</Container>
			</section>

			<CallToAction
				title="Ready to get more customers with effective marketing?"
				description="Schedule a free discovery call to discuss how we can help your service business grow."
				buttonText="Schedule Free Call"
				buttonLink="/contact"
			/>
		</div>
	)
}
