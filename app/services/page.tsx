import type { Metadata } from 'next'
import Container from '@/components/shared/container'
import ServiceSection from '@/components/services/service-section'
import BundlePricingSection from '@/components/services/bundle-pricing'
import CustomButton from '@/components/shared/custom-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { getServicePricing, getBundlePricing } from '@/lib/pricing-service'
import SectionScrollHandler from '@/components/services/section-scroll-handler'

export const metadata: Metadata = {
	title: 'Digital Marketing Services for Service Businesses',
	description:
		'Professional website and digital marketing services designed specifically for service businesses like cleaning, landscaping, and home services.',
}

export default function ServicesPage() {
	// Get all service pricing data
	const websitePricing = getServicePricing('website')
	const googleAdsPricing = getServicePricing('google-ads')
	const socialAdsPricing = getServicePricing('social-ads')
	const socialMediaPricing = getServicePricing('social-media')

	// Get bundle pricing data
	const bundleData = getBundlePricing()

	return (
		<div>
			{/* Client-side scroll handler */}
			<SectionScrollHandler />

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
			{websitePricing && (
				<section id="website-creation">
					<ServiceSection
						pricing={websitePricing}
						imagePath="/images/service-business-website.png"
						imageAlt="Service business website example"
					/>
				</section>
			)}

			{/* Google Ads Management */}
			{googleAdsPricing && (
				<section id="google-ads">
					<ServiceSection
						pricing={googleAdsPricing}
						imagePath="/images/google-image-search.png"
						imageAlt="Google Ads Management"
						reversed={true}
					/>
				</section>
			)}

			{/* Facebook & Instagram Ads */}
			{socialAdsPricing && (
				<section id="social-ads">
					<ServiceSection
						pricing={socialAdsPricing}
						imagePath="/images/facebook-instagram-ads.png"
						imageAlt="Facebook and Instagram Advertising"
					/>
				</section>
			)}

			{/* Social Media Marketing */}
			{socialMediaPricing && (
				<section id="social-media">
					<ServiceSection
						pricing={socialMediaPricing}
						imagePath="/images/social-media-marketing.jpg"
						imageAlt="Social Media Marketing"
						reversed={true}
					/>
				</section>
			)}

			{/* Bundle Packages */}
			<section
				id="bundle-packages"
				className="py-16 bg-gray-50"
			>
				<Container>
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Save With Our Digital Marketing Bundles</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Get the best results and the best value by combining our services into a comprehensive digital marketing
							strategy.
						</p>
					</div>

					{bundleData && <BundlePricingSection bundles={bundleData.bundles} />}
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
