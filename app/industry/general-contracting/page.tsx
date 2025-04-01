import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BarChart3, Users, Target, TrendingUp, MessageSquare, Building } from 'lucide-react'
import CallToAction from '@/components/shared/call-to-action'
import Container from '@/components/shared/container'
import ProcessTimeline from '@/components/industry/process-timeline'
import FeatureCard from '@/components/industry/feature-card'
import BeforeAfter from '@/components/industry/before-after'
import TestimonialCard from '@/components/industry/testimonial-card'

export const metadata: Metadata = {
	title: 'General Contracting Marketing Solutions | Very Good Marketing',
	description:
		'Specialized marketing strategies for general contractors. Generate high-quality leads and build a premium brand with our proven marketing solutions.',
}

// Process steps for the timeline
const marketingProcess = [
	{
		title: 'Discovery & Analysis',
		description:
			'We analyze your current marketing, competitors, and target audience to identify opportunities specific to your general contracting business.',
		icon: <CheckCircle className="h-4 w-4" />,
	},
	{
		title: 'Strategy Development',
		description:
			'We create a custom marketing strategy that showcases your expertise and targets your ideal customers in your service area.',
		icon: <CheckCircle className="h-4 w-4" />,
	},
	{
		title: 'Implementation',
		description:
			'Our team builds your marketing assets and launches campaigns designed to generate high-quality leads for your general contracting business.',
		icon: <CheckCircle className="h-4 w-4" />,
	},
	{
		title: 'Optimization & Growth',
		description:
			'We continuously monitor performance, make data-driven improvements, and scale successful campaigns to grow your business.',
		icon: <CheckCircle className="h-4 w-4" />,
	},
]

// Testimonials specific to general contracting
const testimonials = [
	{
		name: 'Richard Thompson',
		company: 'Thompson Construction Group',
		quote:
			"Very Good Marketing has transformed our business. Their portfolio-focused strategy has been incredibly effective, and we've seen a 125% increase in high-value project inquiries.",
		rating: 5,
		initials: 'RT',
	},
	{
		name: 'Melissa Carter',
		company: 'Carter Building Solutions',
		quote:
			'The targeted marketing approach they created for us has helped us focus on the most profitable types of projects. Our average project value has increased by 85% in just one year.',
		rating: 5,
		initials: 'MC',
	},
]

export default function GeneralContractingPage() {
	return (
		<>
			{/* Enhanced Hero Section with Overlay Text and Parallax */}
			<div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-r from-stone-900/80 to-black/50 z-10"></div>
				<Image
					src="/images/articles/general-contracting.jpg"
					alt="General Contracting Services"
					fill
					className="object-cover scale-110 animate-subtle-zoom"
					priority
				/>
				<div className="absolute inset-0 flex items-center z-20">
					<Container>
						<div className="max-w-3xl">
							<div className="inline-block bg-stone-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
								Industry Solutions
							</div>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
								General Contracting <span className="text-stone-300">Marketing</span>
							</h1>
							<p className="text-xl text-white/90 mb-8">
								Generate high-quality leads and build a premium brand with our specialized marketing strategies.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/contact"
									className="bg-white text-stone-900 px-6 py-3 rounded-lg hover:bg-stone-50 transition font-medium inline-flex items-center"
								>
									Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
								<button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
									View Success Stories
								</button>
							</div>
						</div>
					</Container>
				</div>
			</div>

			{/* Introduction Section with Stats */}
			<section className="py-16 bg-white">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">Specialized Marketing for General Contractors</h2>
							<p className="text-lg text-gray-700 mb-6">
								Grow your general contracting business with marketing strategies designed specifically for your
								industry. We understand the unique challenges general contractors face and how to showcase your
								expertise and quality craftsmanship.
							</p>
							<p className="text-lg text-gray-700 mb-8">
								Our general contracting marketing solutions are designed to help you attract high-quality leads, secure
								larger projects, and build a premium brand that commands higher rates.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="#services"
									className="text-stone-600 font-medium flex items-center hover:text-stone-700 transition"
								>
									Explore Our Services <ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="bg-stone-50 p-6 rounded-lg text-center">
								<div className="text-3xl font-bold text-stone-600 mb-2">125%</div>
								<p className="text-gray-700">More high-value leads</p>
							</div>
							<div className="bg-stone-50 p-6 rounded-lg text-center">
								<div className="text-3xl font-bold text-stone-600 mb-2">85%</div>
								<p className="text-gray-700">Higher project value</p>
							</div>
							<div className="bg-stone-50 p-6 rounded-lg text-center">
								<div className="text-3xl font-bold text-stone-600 mb-2">67%</div>
								<p className="text-gray-700">Revenue growth</p>
							</div>
							<div className="bg-stone-50 p-6 rounded-lg text-center">
								<div className="text-3xl font-bold text-stone-600 mb-2">7.2x</div>
								<p className="text-gray-700">Marketing ROI</p>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Challenges & Solutions Section */}
			<section
				className="py-16 bg-gray-50"
				id="services"
			>
				<Container>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">General Contracting Marketing Challenges We Solve</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">
							We understand the unique challenges general contractors face and have developed specialized solutions to
							overcome them.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						<FeatureCard
							title="Showcasing Portfolio & Expertise"
							description="We implement portfolio-focused strategies that highlight your best work and demonstrate your capabilities to potential clients."
							icon={<Building className="h-6 w-6" />}
							color="bg-stone-50 text-stone-600"
						/>
						<FeatureCard
							title="Attracting Higher-Value Projects"
							description="Our targeting strategies help you connect with clients who have larger budgets and more substantial project needs."
							icon={<BarChart3 className="h-6 w-6" />}
							color="bg-stone-50 text-stone-600"
						/>
						<FeatureCard
							title="Standing Out From Competition"
							description="We help you differentiate your general contracting business from competitors through unique value propositions and messaging."
							icon={<Target className="h-6 w-6" />}
							color="bg-stone-50 text-stone-600"
						/>
						<FeatureCard
							title="Building Trust & Credibility"
							description="We help you establish credibility and trust with potential clients through reviews, testimonials, and professional branding."
							icon={<Users className="h-6 w-6" />}
							color="bg-stone-50 text-stone-600"
						/>
						<FeatureCard
							title="Converting Consultations to Contracts"
							description="We implement follow-up systems and materials that help you convert more consultations into signed contracts."
							icon={<TrendingUp className="h-6 w-6" />}
							color="bg-stone-50 text-stone-600"
						/>
						<FeatureCard
							title="Targeted Marketing Strategies"
							description="Our geo-targeting and demographic targeting strategies focus your marketing budget on the most profitable potential clients."
							icon={<MessageSquare className="h-6 w-6" />}
							color="bg-stone-50 text-stone-600"
						/>
					</div>
				</Container>
			</section>

			{/* Before/After Section */}
			<section className="py-16 bg-white">
				<Container>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Real Results for General Contractors</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">
							See the transformation our marketing strategies have created for general contracting businesses like
							yours.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<BeforeAfter
							beforeImage="/images/industry/contractor/contractor1-before.jpg"
							afterImage="/images/industry/contractor/contractor1-after.jpg"
							beforeAlt="Before implementing our marketing strategy"
							afterAlt="After implementing our marketing strategy"
							title="Lead Quality Improvement"
							description="From small renovation inquiries to major construction projects"
						/>
						<BeforeAfter
							beforeImage="/images/industry/contractor/contractor2-before.jpg"
							afterImage="/images/industry/contractor/contractor2-after.jpg"
							beforeAlt="Before implementing our marketing strategy"
							afterAlt="After implementing our marketing strategy"
							title="Brand Perception Transformation"
							description="From basic contractor to premium construction firm"
						/>
					</div>
				</Container>
			</section>

			{/* Process Section */}
			<section className="py-16 bg-gray-50">
				<Container>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Our General Contracting Marketing Process</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">
							We follow a proven process to create and implement marketing strategies that deliver results for general
							contractors.
						</p>
					</div>

					<ProcessTimeline steps={marketingProcess} />
				</Container>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 bg-white">
				<Container>
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">What General Contractors Say</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">
							Hear from general contractors who have transformed their marketing with our industry-specific solutions.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard
								key={index}
								name={testimonial.name}
								company={testimonial.company}
								quote={testimonial.quote}
								rating={testimonial.rating}
								initials={testimonial.initials}
							/>
						))}
					</div>
				</Container>
			</section>

			{/* Enhanced CTA Section */}
			<section className="py-16 bg-linear-to-r from-stone-600 to-stone-800 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] opacity-10"></div>
				<Container className="relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl font-bold text-white mb-6">Ready to Grow Your General Contracting Business?</h2>
						<p className="text-xl text-white/90 mb-8">
							Let's create a marketing strategy that attracts higher-value projects and helps your business thrive.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/contact"
								className="bg-white text-stone-800 px-8 py-4 rounded-lg hover:bg-stone-50 transition font-medium inline-flex items-center"
							>
								Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
