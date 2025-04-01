import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CustomButton from '@/components/shared/custom-button'
import Container from '@/components/shared/container'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import ArticleCard from '@/components/article/article-card'
import { getFeaturedArticles, getAllTags } from '@/lib/article-service'
import { Tag } from '@/types/article'
import FeaturedArticlesSection from '@/components/article/featured-articles-section'

export const metadata: Metadata = {
	title: 'Resources - Very Good Marketing',
	description:
		'Marketing resources that put your website first. Explore our collection of articles, guides, and insights.',
}

export default async function ResourcesPage() {
	const featuredArticles = await getFeaturedArticles(3)
	const allTags = await getAllTags()

	// Create demo tags if no real tags exist
	const demoTags: Tag[] =
		allTags.length > 0
			? allTags
			: [
					{ id: 'website', name: 'Website', slug: 'website' },
					{ id: 'seo', name: 'SEO', slug: 'seo' },
					{ id: 'marketing', name: 'Marketing', slug: 'marketing' },
					{ id: 'business', name: 'Business', slug: 'business' },
				]

	// Make sure each tag has a valid slug
	const validatedTags = demoTags.map(tag => ({
		...tag,
		slug: tag.slug || tag.name.toLowerCase().replace(/\s+/g, '-'),
	}))

	// Map featured articles to the format expected by ArticleCard
	const articlesList =
		featuredArticles.length > 0
			? featuredArticles.map(article => ({
					title: article.title,
					excerpt: article.excerpt,
					date: new Date(article.createdAt).toLocaleDateString(),
					image: article.featuredImage || '/placeholder.svg?height=400&width=600',
					slug: article.slug,
					tags: article.tags,
				}))
			: [
					// Fallback static featured article if no markdown files exist
					{
						title: 'Why Your Website Is Your Most Important Marketing Asset',
						excerpt:
							"In today's digital-first world, your website isn't just a digital brochure—it's the foundation of your entire marketing strategy.",
						date: new Date().toLocaleDateString(),
						image: '/placeholder.svg?height=600&width=1200&text=Website+Marketing',
						slug: '#',
						tags: [validatedTags[0], validatedTags[2]], // Website, Marketing
					},
				]

	return (
		<main>
			<section className="py-16 md:py-24">
				<Container>
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">Marketing Resources That Put Your Website First</h1>
						<p className="text-xl text-gray-600">
							Explore our collection of articles, guides, and insights designed to help you build a website-centered
							marketing strategy that drives real business growth.
						</p>
					</div>
				</Container>
			</section>

			<section className="py-12 bg-gray-50">
				<Container>
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-3xl font-bold">Featured Articles</h2>
						<Link
							href="/resources/articles"
							className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
						>
							View All Articles <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</div>

					<FeaturedArticlesSection
						articles={articlesList}
						allTags={validatedTags}
					/>
				</Container>
			</section>

			<section className="py-12 md:py-20">
				<Container>
					<h2 className="text-3xl font-bold mb-8">Free Website Audit Tools</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">Website Speed Analyzer</h3>
								<p className="text-gray-700 mb-4">
									Slow websites lose customers. Our speed analyzer will check your site's performance and provide
									actionable recommendations.
								</p>
							</CardContent>
							<CardFooter>
								<CustomButton
									variant="outline"
									href="/tools/speed-analyzer"
								>
									Analyze Your Site
								</CustomButton>
							</CardFooter>
						</Card>

						<Card>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold mb-3">SEO Health Checker</h3>
								<p className="text-gray-700 mb-4">
									See how well your website is optimized for search engines and discover opportunities to improve your
									rankings.
								</p>
							</CardContent>
							<CardFooter>
								<CustomButton
									variant="outline"
									href="/tools/seo-checker"
								>
									Check SEO Health
								</CustomButton>
							</CardFooter>
						</Card>
					</div>
				</Container>
			</section>

			<section className="py-12 bg-gray-50">
				<Container>
					<h2 className="text-3xl font-bold mb-8">Marketing Resources</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Link
							href="/resources/templates"
							className="block group"
						>
							<div className="bg-white p-6 rounded-lg shadow-xs transition-shadow hover:shadow-md">
								<div className="mb-4 flex justify-center">
									<Image
										src="/images/marketing-templates.jpg"
										alt="Templates"
										width={500}
										height={200}
										className="rounded-md"
									/>
								</div>
								<h3 className="text-xl font-bold mb-2">Marketing Templates</h3>
								<p className="text-gray-700 mb-4">
									Download ready-to-use templates for marketing plans, content calendars, and more.
								</p>
								<div className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors">
									Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
								</div>
							</div>
						</Link>

						<Link
							href="/resources/guides"
							className="block group"
						>
							<div className="bg-white p-6 rounded-lg shadow-xs transition-shadow hover:shadow-md">
								<div className="mb-4 flex justify-center">
									<Image
										src="/images/marketing-guides.png"
										alt="Guides"
										width={500}
										height={200}
										className="rounded-md"
									/>
								</div>
								<h3 className="text-xl font-bold mb-2">Marketing Guides</h3>
								<p className="text-gray-700 mb-4">
									Step-by-step guides to help you implement effective marketing strategies for your business.
								</p>
								<div className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors">
									View Guides <ArrowRight className="ml-2 h-4 w-4" />
								</div>
							</div>
						</Link>

						<Link
							href="/resources/webinars"
							className="block group"
						>
							<div className="bg-white p-6 rounded-lg shadow-xs transition-shadow hover:shadow-md">
								<div className="mb-4 flex justify-center">
									<Image
										src="/images/webinars-events.jpg"
										alt="Webinars"
										width={500}
										height={200}
										className="rounded-md"
									/>
								</div>
								<h3 className="text-xl font-bold mb-2">Webinars & Events</h3>
								<p className="text-gray-700 mb-4">
									Join our upcoming webinars or watch recordings of past events on marketing topics.
								</p>
								<div className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-800 transition-colors">
									See Schedule <ArrowRight className="ml-2 h-4 w-4" />
								</div>
							</div>
						</Link>
					</div>
				</Container>
			</section>
		</main>
	)
}
