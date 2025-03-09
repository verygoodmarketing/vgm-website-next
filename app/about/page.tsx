import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/shared/page-header'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import { Heart, LineChart, Lightbulb, Zap, MessageSquare, Target } from 'lucide-react'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
	title: 'About Us | Website Specialists for Service Businesses',
	description:
		'We help service businesses like cleaning, landscaping, and home services get more customers with professional websites.',
}

export default function AboutPage() {
	return (
		<div>
			<PageHeader
				title="About Us"
				description="We help service businesses get more customers with professional websites."
			/>

			<section className="py-16 md:py-24">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">We Understand Service Businesses</h1>
							<p className="text-xl text-gray-600 mb-6">
								We specialize in creating websites for service businesses like cleaning, landscaping, and home services
								because we understand the unique challenges you face.
							</p>
							<p className="text-xl text-gray-600 mb-6">
								Unlike other web designers who create generic websites, we build websites specifically designed to
								generate leads for service businesses. We know that your website needs to:
							</p>
							<ul className="space-y-4 mb-6">
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Build trust with potential customers who need your services</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Show up in local searches when people need your services</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Make it easy for customers to contact you immediately</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">Highlight your service areas, licenses, and insurance</span>
								</li>
							</ul>
							<p className="text-xl text-gray-600">
								Our team has helped hundreds of service businesses get more customers with professional websites that
								actually work.
							</p>
						</div>
						<div className="relative h-[500px] rounded-lg overflow-hidden">
							<Image
								src="/images/about-team.jpg"
								alt="Our team"
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
							<h2 className="text-3xl font-bold mb-6">Why We Focus on Service Businesses</h2>
							<p className="text-lg text-gray-600 mb-6">
								We've chosen to specialize in websites for service businesses like cleaning, landscaping, and home
								services because:
							</p>
							<ul className="space-y-4 mb-6">
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										Service businesses have unique website needs that generic web designers don't understand
									</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										We've seen too many service businesses waste money on websites that don't generate leads
									</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										We believe service businesses are the backbone of local communities and deserve better
									</span>
								</li>
								<li className="flex items-start">
									<div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
										<Check className="h-4 w-4 text-blue-600" />
									</div>
									<span className="text-gray-700">
										By specializing, we can deliver better results than generalist web designers
									</span>
								</li>
							</ul>
							<p className="text-lg text-gray-600">
								Our focus allows us to create websites that truly understand the needs of your customers and effectively
								convert them into leads for your business.
							</p>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
							<Image
								src="/images/service-business.jpg"
								alt="Service businesses"
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
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							We're a small team of experts dedicated to helping service businesses succeed online.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="relative h-[300px]">
								<Image
									src="/placeholder.svg?height=600&width=600"
									alt="Team Member 1"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">John Smith</h3>
								<p className="text-gray-600 mb-4">Founder & Lead Strategist</p>
								<p className="text-gray-700">
									With over 10 years of experience working with service businesses, John understands what it takes to
									create websites that generate real leads.
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="relative h-[300px]">
								<Image
									src="/placeholder.svg?height=600&width=600"
									alt="Team Member 2"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
								<p className="text-gray-600 mb-4">Web Designer & SEO Specialist</p>
								<p className="text-gray-700">
									Sarah combines beautiful design with technical SEO expertise to create websites that not only look
									great but also rank well in local searches.
								</p>
							</div>
						</div>

						<div className="bg-white rounded-lg shadow-lg overflow-hidden">
							<div className="relative h-[300px]">
								<Image
									src="/placeholder.svg?height=600&width=600"
									alt="Team Member 3"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">Mike Williams</h3>
								<p className="text-gray-600 mb-4">Content Specialist</p>
								<p className="text-gray-700">
									Mike specializes in creating compelling content that speaks directly to the needs of your potential
									customers and motivates them to contact you.
								</p>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<CallToAction
				title="Ready to get more customers with a professional website?"
				description="Schedule a free discovery call to discuss how we can help your service business grow."
				buttonText="Schedule Free Call"
				buttonLink="/contact"
			/>
		</div>
	)
}
