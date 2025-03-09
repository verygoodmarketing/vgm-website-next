import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, X } from 'lucide-react'
import CustomButton from '@/components/shared/custom-button'
import Container from '@/components/shared/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
	title: 'Digital Marketing Services for Service Businesses',
	description:
		'Professional website and digital marketing services designed specifically for service businesses like cleaning, landscaping, and home services.',
}

export default function ServicesPage() {
	return (
		<div>
			<section className="py-16 md:py-24">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Digital Marketing For Service Businesses</h1>
						<p className="text-xl text-gray-600">
							From professional websites to paid advertising and social media, we offer everything service businesses
							need to get more customers online.
						</p>
					</div>
				</Container>
			</section>

			{/* Service Business Website Package */}
			<section className="py-16 bg-gray-50">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">Service Business Website Package</h2>
							<p className="text-lg text-gray-600 mb-6">
								A complete website solution designed specifically for service businesses like cleaning, landscaping,
								plumbing, HVAC, electrical, and other home services.
							</p>

							<div className="space-y-4 mb-8">
								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Professional Design That Builds Trust</h3>
										<p className="text-gray-600">
											Custom design that reflects your brand and builds instant credibility with potential customers.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Lead Generation Features</h3>
										<p className="text-gray-600">
											Contact forms, click-to-call buttons, and service area maps that convert visitors into leads.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Local SEO Fundamentals</h3>
										<p className="text-gray-600">
											Built-in SEO features to help you rank in local searches for your services.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Mobile-Friendly Design</h3>
										<p className="text-gray-600">
											Looks perfect on all devices, especially smartphones where most customers will find you.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg mb-6">
								<h3 className="font-bold text-lg mb-2">Pricing</h3>
								<p className="text-2xl font-bold text-blue-600 mb-1">
									$1,499 <span className="text-base font-normal text-gray-600">one-time setup</span>
								</p>
								<p className="text-xl font-bold text-blue-600">
									$99 <span className="text-base font-normal text-gray-600">per month maintenance</span>
								</p>
								<p className="text-sm text-gray-600 mt-2">Includes hosting, security updates, and regular backups</p>
							</div>

							<CustomButton
								variant="blue"
								href="/contact?service=website"
							>
								Get Started
							</CustomButton>
						</div>

						<div className="relative h-[500px] rounded-lg overflow-hidden">
							<Image
								src="/images/service-business-website.png"
								alt="Service business website example"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			{/* Google Ads Management */}
			<section className="py-16 bg-white">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-2 lg:order-1">
							<h2 className="text-3xl font-bold mb-6">Google Ads Management</h2>
							<p className="text-lg text-gray-600 mb-6">
								Get in front of customers actively searching for your services right now. Our Google Ads management
								service helps service businesses appear at the top of Google when local customers are looking for
								exactly what you offer.
							</p>

							<div className="space-y-4 mb-8">
								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Targeted Local Campaigns</h3>
										<p className="text-gray-600">
											We target your specific service area so you only pay for clicks from potential customers in your
											area.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Service-Specific Keywords</h3>
										<p className="text-gray-600">
											We target high-intent keywords like "emergency plumber near me" or "house cleaning service" that
											indicate someone is ready to hire.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Call Tracking & Reporting</h3>
										<p className="text-gray-600">
											Know exactly how many calls and leads your ads generate with detailed reporting and call tracking.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Continuous Optimization</h3>
										<p className="text-gray-600">
											We constantly refine your campaigns to improve performance and reduce your cost per lead over
											time.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg mb-6">
								<h3 className="font-bold text-lg mb-2">Pricing</h3>
								<p className="text-2xl font-bold text-blue-600 mb-1">
									$499 <span className="text-base font-normal text-gray-600">monthly management fee</span>
								</p>
								<p className="text-base text-gray-600">Plus your ad spend (minimum $500/month recommended)</p>
								<div className="mt-4 bg-green-100 p-3 rounded-md">
									<p className="text-sm font-bold text-green-800">Website Bundle Discount: $399/month</p>
									<p className="text-xs text-green-700">When you bundle with our website package</p>
								</div>
							</div>

							<CustomButton
								variant="blue"
								href="/contact?service=google-ads"
							>
								Start Getting Leads Now
							</CustomButton>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
							<Image
								src="/images/google-image-search.png"
								alt="Google Ads Management"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			{/* Facebook & Instagram Ads */}
			<section className="py-16 bg-gray-50">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">Facebook & Instagram Advertising</h2>
							<p className="text-lg text-gray-600 mb-6">
								Reach potential customers in your area before they even know they need you. Our social media advertising
								puts your services in front of local homeowners with compelling visuals and targeted messaging.
							</p>

							<div className="space-y-4 mb-8">
								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Precise Audience Targeting</h3>
										<p className="text-gray-600">
											Target homeowners in specific neighborhoods, income levels, and with interests relevant to your
											services.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Eye-Catching Ad Creative</h3>
										<p className="text-gray-600">
											Professional images and videos that showcase your work and stop people from scrolling.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Lead Generation Campaigns</h3>
										<p className="text-gray-600">
											Capture contact information directly through Facebook with easy-to-complete lead forms.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Retargeting Campaigns</h3>
										<p className="text-gray-600">
											Stay in front of people who visited your website but didn't contact you yet.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg mb-6">
								<h3 className="font-bold text-lg mb-2">Pricing</h3>
								<p className="text-2xl font-bold text-blue-600 mb-1">
									$399 <span className="text-base font-normal text-gray-600">monthly management fee</span>
								</p>
								<p className="text-base text-gray-600">Plus your ad spend (minimum $400/month recommended)</p>
								<div className="mt-4 bg-green-100 p-3 rounded-md">
									<p className="text-sm font-bold text-green-800">Website Bundle Discount: $299/month</p>
									<p className="text-xs text-green-700">When you bundle with our website package</p>
								</div>
							</div>

							<CustomButton
								variant="blue"
								href="/contact?service=social-ads"
							>
								Start Your Campaign
							</CustomButton>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden">
							<Image
								src="/images/facebook-instagram.jpg"
								alt="Facebook and Instagram Advertising"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			{/* Social Media Marketing */}
			<section className="py-16 bg-white">
				<Container>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-2 lg:order-1">
							<h2 className="text-3xl font-bold mb-6">Social Media Marketing</h2>
							<p className="text-lg text-gray-600 mb-6">
								Build your brand, showcase your work, and engage with your community through professional social media
								management. We handle everything from content creation to posting and community management.
							</p>

							<div className="space-y-4 mb-8">
								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Content Creation</h3>
										<p className="text-gray-600">
											Professional posts that showcase your work, share helpful tips, and highlight your team.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Consistent Posting Schedule</h3>
										<p className="text-gray-600">
											Regular posts to keep your audience engaged and your business top-of-mind.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Review Management</h3>
										<p className="text-gray-600">
											We help you get more positive reviews and respond professionally to all reviews.
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
									<div>
										<h3 className="font-bold text-lg">Community Engagement</h3>
										<p className="text-gray-600">
											We respond to comments and messages, building relationships with your audience.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg mb-6">
								<h3 className="font-bold text-lg mb-2">Pricing</h3>
								<p className="text-2xl font-bold text-blue-600 mb-1">
									$349 <span className="text-base font-normal text-gray-600">monthly</span>
								</p>
								<p className="text-base text-gray-600">
									Includes management of 2 platforms (Facebook, Instagram, etc.)
								</p>
								<div className="mt-4 bg-green-100 p-3 rounded-md">
									<p className="text-sm font-bold text-green-800">Website Bundle Discount: $249/month</p>
									<p className="text-xs text-green-700">When you bundle with our website package</p>
								</div>
							</div>

							<CustomButton
								variant="blue"
								href="/contact?service=social-media"
							>
								Boost Your Social Presence
							</CustomButton>
						</div>
						<div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
							<Image
								src="/images/social-media-marketing.jpg"
								alt="Social Media Marketing"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</Container>
			</section>

			{/* Bundle Packages */}
			<section className="py-16 bg-gray-50">
				<Container>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Save With Our Digital Marketing Bundles</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Get the best results and the best value by combining our services into a comprehensive digital marketing
							strategy.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="border-2 border-blue-100">
							<CardHeader className="bg-blue-50">
								<CardTitle className="text-center">Essential Bundle</CardTitle>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-4 mb-6">
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Professional Website</span>
									</div>
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Google Ads Management</span>
									</div>
									<div className="flex items-start">
										<X className="w-5 h-5 text-gray-300 mr-2" />
										<span className="text-gray-400">Social Media Advertising</span>
									</div>
									<div className="flex items-start">
										<X className="w-5 h-5 text-gray-300 mr-2" />
										<span className="text-gray-400">Social Media Management</span>
									</div>
								</div>

								<div className="text-center">
									<p className="text-3xl font-bold text-blue-600 mb-1">$1,898</p>
									<p className="text-sm text-gray-500 mb-4">Initial setup + $498/month</p>
									<p className="text-sm font-medium text-green-600 mb-6">Save $100/month</p>
									<CustomButton
										variant="blue"
										href="/contact?bundle=essential"
										className="w-full"
									>
										Get Started
									</CustomButton>
								</div>
							</CardContent>
						</Card>

						<Card className="border-2 border-blue-600 shadow-lg relative">
							<div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
								MOST POPULAR
							</div>
							<CardHeader className="bg-blue-600 text-white">
								<CardTitle className="text-center">Complete Bundle</CardTitle>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-4 mb-6">
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Professional Website</span>
									</div>
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Google Ads Management</span>
									</div>
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Social Media Advertising</span>
									</div>
									<div className="flex items-start">
										<X className="w-5 h-5 text-gray-300 mr-2" />
										<span className="text-gray-400">Social Media Management</span>
									</div>
								</div>

								<div className="text-center">
									<p className="text-3xl font-bold text-blue-600 mb-1">$2,297</p>
									<p className="text-sm text-gray-500 mb-4">Initial setup + $797/month</p>
									<p className="text-sm font-medium text-green-600 mb-6">Save $200/month</p>
									<CustomButton
										variant="blue"
										href="/contact?bundle=complete"
										className="w-full"
									>
										Get Started
									</CustomButton>
								</div>
							</CardContent>
						</Card>

						<Card className="border-2 border-blue-100">
							<CardHeader className="bg-blue-50">
								<CardTitle className="text-center">Ultimate Bundle</CardTitle>
							</CardHeader>
							<CardContent className="p-6">
								<div className="space-y-4 mb-6">
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Professional Website</span>
									</div>
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Google Ads Management</span>
									</div>
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Social Media Advertising</span>
									</div>
									<div className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2" />
										<span>Social Media Management</span>
									</div>
								</div>

								<div className="text-center">
									<p className="text-3xl font-bold text-blue-600 mb-1">$2,546</p>
									<p className="text-sm text-gray-500 mb-4">Initial setup + $1,046/month</p>
									<p className="text-sm font-medium text-green-600 mb-6">Save $300/month</p>
									<CustomButton
										variant="blue"
										href="/contact?bundle=ultimate"
										className="w-full"
									>
										Get Started
									</CustomButton>
								</div>
							</CardContent>
						</Card>
					</div>
				</Container>
			</section>

			{/* What's Included */}
			<section className="py-16 bg-white">
				<Container>
					<h2 className="text-3xl font-bold mb-12 text-center">What's Included In Your Service Business Website</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card>
							<CardHeader>
								<CardTitle>Homepage</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Hero section with clear service offering</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Service area map</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Featured services section</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Customer testimonials</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Trust badges (licenses, insurance, etc.)</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Contact form and call button</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Services Pages</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Detailed description of each service</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Service-specific benefits</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Pricing information (if applicable)</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Service area information</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Service-specific FAQs</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Call-to-action buttons</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>About & Contact</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>About your business page</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Team member profiles (optional)</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Contact page with form</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Google Maps integration</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Business hours</span>
									</li>
									<li className="flex items-start">
										<Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
										<span>Service area list</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</Container>
			</section>

			{/* Process Section */}
			<section className="py-16 bg-gray-50">
				<Container>
					<h2 className="text-3xl font-bold mb-12 text-center">Our Simple 4-Step Process</h2>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
								1
							</div>
							<h3 className="text-xl font-bold mb-2">Discovery Call</h3>
							<p className="text-gray-600">
								We learn about your business, services, and goals to create the perfect digital marketing strategy.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
								2
							</div>
							<h3 className="text-xl font-bold mb-2">Custom Strategy</h3>
							<p className="text-gray-600">
								We create a tailored digital marketing plan based on your business needs and budget.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
								3
							</div>
							<h3 className="text-xl font-bold mb-2">Implementation</h3>
							<p className="text-gray-600">
								We build your website, set up your campaigns, and launch your digital marketing strategy.
							</p>
						</div>

						<div className="text-center">
							<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
								4
							</div>
							<h3 className="text-xl font-bold mb-2">Optimization & Growth</h3>
							<p className="text-gray-600">
								We continuously monitor, report, and improve your campaigns to maximize your ROI.
							</p>
						</div>
					</div>

					<div className="text-center mt-12">
						<CustomButton
							variant="blue"
							href="/contact"
						>
							Schedule Your Discovery Call
						</CustomButton>
					</div>
				</Container>
			</section>

			{/* FAQ Section */}
			<section className="py-16 bg-white">
				<Container>
					<h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-2">How long does it take to build a website?</h3>
							<p className="text-gray-600 mb-6">
								Most service business websites are completed within 2-3 weeks from our initial discovery call. This
								includes design, content creation, and revisions.
							</p>

							<h3 className="text-xl font-bold mb-2">Do I need to provide content for my website?</h3>
							<p className="text-gray-600 mb-6">
								No, we handle all content creation for you. We'll ask you some questions about your business and
								services, and our team will write professional content that appeals to your target customers.
							</p>

							<h3 className="text-xl font-bold mb-2">How quickly will I see results from digital advertising?</h3>
							<p className="text-gray-600 mb-6">
								Google Ads typically start generating leads within the first week of launching. Social media advertising
								may take 2-4 weeks to optimize for best results. Both platforms continue to improve over time as we
								refine your campaigns.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-bold mb-2">What's the difference between the advertising services?</h3>
							<p className="text-gray-600 mb-6">
								Google Ads targets people actively searching for your services right now, making it ideal for immediate
								lead generation. Social media advertising helps build brand awareness and reaches potential customers
								before they start searching, which is great for services that aren't urgent needs.
							</p>

							<h3 className="text-xl font-bold mb-2">Do I need all these services?</h3>
							<p className="text-gray-600 mb-6">
								No, you can choose the services that best fit your business goals and budget. However, our bundles offer
								the best value and most comprehensive approach to digital marketing for service businesses.
							</p>

							<h3 className="text-xl font-bold mb-2">Do you offer any guarantees?</h3>
							<p className="text-gray-600 mb-6">
								While we can't guarantee specific results (no ethical agency can), we do offer a 30-day satisfaction
								guarantee on our website services. For advertising, we provide transparent reporting so you can see
								exactly what results you're getting for your investment.
							</p>
						</div>
					</div>
				</Container>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-blue-600 text-white">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Complete Digital Marketing Strategy?</h2>
						<p className="text-xl mb-8">
							Schedule a free discovery call to discuss how our website and digital marketing services can help your
							service business get more customers.
						</p>
						<CustomButton
							variant="white"
							href="/contact"
						>
							Schedule Your Free Discovery Call
						</CustomButton>
						<p className="mt-8 text-sm opacity-80">
							No obligation. No sales pressure. Just a friendly conversation about your business goals.
						</p>
					</div>
				</Container>
			</section>
		</div>
	)
}
