import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import Container from '@/components/shared/container'

export const metadata: Metadata = {
	title: 'Why Your Website Is Your Most Important Marketing Asset | Very Good Marketing',
	description:
		'Learn why your website should be the foundation of your marketing strategy and how it drives business growth in the digital age.',
}

export default function BlogPost() {
	return (
		<main className="pt-24">
			{/* Hero Section */}
			<section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/placeholder.svg?height=600&width=1200&text=Website+Marketing"
						alt="Website as a marketing asset"
						fill
						sizes="100vw"
						priority
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black/60" />
				</div>

				<Container className="relative z-10">
					<div className="max-w-4xl mx-auto text-center text-white">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
							Why Your Website Is Your Most Important Marketing Asset
						</h1>
						<div className="flex items-center justify-center space-x-4 text-sm">
							<span>Published: March 8, 2025</span>
							<span>•</span>
							<span>8 min read</span>
						</div>
					</div>
				</Container>
			</section>

			{/* Content Section */}
			<section className="py-16">
				<Container>
					<div className="max-w-3xl mx-auto">
						<Link
							href="/resources"
							className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
						>
							<ChevronLeft className="w-4 h-4 mr-1" />
							Back to Resources
						</Link>

						<div className="prose prose-lg max-w-none">
							<p className="lead">
								In today's digital-first world, your website isn't just a digital brochure—it's the foundation of your
								entire marketing strategy and often the difference between a thriving business and one that struggles to
								grow.
							</p>

							<h2>The Customer Journey Starts with Google</h2>
							<p>
								Consider this: 93% of online experiences begin with a search engine. When potential customers need a
								product or service, they don't open the Yellow Pages anymore—they turn to Google. And where does Google
								send them? To websites.
							</p>
							<p>
								This simple fact fundamentally changes how marketing works. Traditional marketing was about interrupting
								people with your message. Modern marketing is about being found when people are actively looking for
								solutions.
							</p>

							<h2>Your Website Is Your 24/7 Salesperson</h2>
							<p>Unlike your human sales team, your website:</p>
							<ul>
								<li>Never sleeps</li>
								<li>Can handle unlimited visitors simultaneously</li>
								<li>Delivers a consistent message every time</li>
								<li>Collects data on every interaction</li>
								<li>Can be optimized based on real user behavior</li>
							</ul>
							<p>
								A well-designed website doesn't just passively provide information—it actively guides visitors through a
								journey from awareness to consideration to decision.
							</p>

							<h2>Social Media Isn't Enough</h2>
							<p>
								Many businesses make the mistake of focusing their digital marketing efforts exclusively on social
								media, neglecting their website. This is a dangerous strategy for several reasons:
							</p>
							<ul>
								<li>You don't own your social media profiles—the platforms do</li>
								<li>Algorithm changes can instantly reduce your visibility</li>
								<li>Social platforms limit your ability to convert followers into customers</li>
								<li>Your content is competing with endless distractions</li>
							</ul>
							<p>Social media should be a tool to drive traffic to your website, not a replacement for it.</p>

							<h2>The Trust Factor</h2>
							<p>
								75% of consumers admit to making judgments about a company's credibility based on their website design.
								In a world where trust is increasingly difficult to earn, your website is often the first opportunity to
								establish credibility with potential customers.
							</p>
							<p>
								A professional, well-designed website signals that you're established, reliable, and invested in your
								business. A poor website experience (or no website at all) suggests the opposite.
							</p>

							<h2>The Data Advantage</h2>
							<p>
								Your website provides something invaluable that most other marketing channels can't: detailed data about
								how people interact with your business. With proper analytics, you can:
							</p>
							<ul>
								<li>See which products or services generate the most interest</li>
								<li>Understand which marketing channels drive the most valuable traffic</li>
								<li>Identify points in the user journey where people drop off</li>
								<li>Test different messages and designs to improve conversion rates</li>
								<li>Retarget visitors who showed interest but didn't convert</li>
							</ul>
							<p>
								This data allows you to continuously refine your marketing strategy based on actual customer behavior,
								not assumptions.
							</p>

							<h2>The ROI of Website Investment</h2>
							<p>
								Unlike many marketing expenses that provide temporary benefits, investing in your website creates a
								long-term asset that appreciates in value over time. As you build content, improve SEO, and refine the
								user experience, your website becomes increasingly effective at generating leads and sales.
							</p>
							<p>
								Many businesses make the mistake of treating their website as a one-time expense rather than an ongoing
								investment. The companies that understand the true value of their website and continuously improve it
								consistently outperform their competitors.
							</p>

							<h2>Why Many Marketing Agencies Get This Wrong</h2>
							<p>
								Unfortunately, many marketing agencies treat websites as an afterthought or a one-time project. They're
								more interested in selling you ongoing services like social media management or paid
								advertising—services that generate recurring revenue for them but may not address your fundamental
								marketing needs.
							</p>
							<p>
								At Very Good Marketing, we take a different approach. We believe your website should be the foundation
								of your marketing strategy, with all other channels supporting and driving traffic to it. We're not
								interested in quick wins that don't deliver long-term value. Instead, we focus on building a sustainable
								marketing system with your website at its center.
							</p>

							<h2>Is Your Website Working Hard Enough?</h2>
							<p>Ask yourself these questions about your current website:</p>
							<ul>
								<li>Does it clearly communicate what makes your business different?</li>
								<li>Is it optimized to appear in search results for relevant keywords?</li>
								<li>Does it provide clear paths for different types of visitors?</li>
								<li>Is it designed to convert visitors into leads or customers?</li>
								<li>Does it look professional and build credibility?</li>
								<li>Is it mobile-friendly and fast-loading?</li>
								<li>Do you regularly update it with fresh content?</li>
								<li>Are you using data from it to inform your marketing decisions?</li>
							</ul>
							<p>
								If you answered "no" to any of these questions, your website isn't working as hard as it could be—and
								your business is leaving money on the table.
							</p>

							<h2>The Path Forward</h2>
							<p>
								Whether you're starting from scratch or improving an existing website, the key is to approach it
								strategically. Your website isn't just a design project—it's a business tool that should be aligned with
								your overall marketing and business objectives.
							</p>
							<p>
								At Very Good Marketing, we help businesses build websites that serve as the foundation of their
								marketing strategy. We focus on creating websites that not only look great but also perform as powerful
								lead generation and sales tools.
							</p>
							<p>
								If you're ready to make your website the centerpiece of your marketing strategy, we'd love to talk.{' '}
								<a href="/contact">Contact us</a> today to schedule a free strategy call.
							</p>
						</div>

						<div className="mt-12 pt-8 border-t">
							<h3 className="text-xl font-bold mb-4">About the Author</h3>
							<div className="flex items-start space-x-4">
								<Image
									src="/placeholder.svg?height=100&width=100"
									alt="Marketing Expert"
									width={80}
									height={80}
									className="rounded-full"
								/>
								<div>
									<h4 className="font-bold">Marketing Expert</h4>
									<p className="text-gray-600">
										Marketing specialist with 10+ years of experience helping small businesses grow through effective
										website strategies and digital marketing.
									</p>
								</div>
							</div>
						</div>

						<div className="mt-12 pt-8 border-t">
							<h3 className="text-xl font-bold mb-4">Related Articles</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Link
									href="/resources/posts/5-common-marketing-mistakes-small-businesses"
									className="group"
								>
									<div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md">
										<div className="relative h-48">
											<Image
												src="/placeholder.svg?height=600&width=1200"
												alt="5 Common Marketing Mistakes Small Businesses Make"
												fill
												sizes="100vw"
												className="object-cover"
											/>
										</div>
										<div className="p-4">
											<h4 className="font-bold group-hover:text-blue-600 transition-colors">
												5 Common Marketing Mistakes Small Businesses Make
											</h4>
											<p className="text-gray-600 mt-2 text-sm">
												Avoid these pitfalls that can waste your marketing budget and limit your growth.
											</p>
										</div>
									</div>
								</Link>
								<Link
									href="/resources/posts/social-media-marketing-which-platforms-right-for-business"
									className="group"
								>
									<div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md">
										<div className="relative h-48">
											<Image
												src="/placeholder.svg?height=600&width=1200"
												alt="Social Media Marketing: Which Platforms Are Right for Your Business?"
												fill
												sizes="100vw"
												className="object-cover"
											/>
										</div>
										<div className="p-4">
											<h4 className="font-bold group-hover:text-blue-600 transition-colors">
												Social Media Marketing: Which Platforms Are Right for Your Business?
											</h4>
											<p className="text-gray-600 mt-2 text-sm">
												Not all social platforms are created equal. Find out which ones will work best for your specific
												business.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	)
}
