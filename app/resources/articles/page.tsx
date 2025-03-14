import type { Metadata } from 'next'
import PageHeader from '@/components/shared/page-header'
import ArticlesList from '@/components/article/articles-list'
import CallToAction from '@/components/shared/call-to-action'
import { getPublishedArticles, getAllTags } from '@/lib/article-service'
import { Tag } from '@/types/article'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Articles & Blog - Very Good Marketing',
	description: 'Browse our collection of marketing articles and guides for service business owners.',
}

export default async function ArticlesPage() {
	const articles = await getPublishedArticles()
	const allTags = await getAllTags()
	const isDev = process.env.NODE_ENV === 'development'

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

	// If we have published articles from markdown files, use those
	const articlesList =
		articles.length > 0
			? articles.map(article => ({
					title: article.title,
					excerpt: article.excerpt,
					date: new Date(article.createdAt).toLocaleDateString(),
					image: article.featuredImage || '/placeholder.svg?height=400&width=600',
					slug: article.slug,
					tags: article.tags,
				}))
			: [
					// Fallback static articles if no markdown files exist
					{
						title: 'Why Your Service Business Website Is Your Most Valuable Marketing Asset',
						excerpt:
							'Learn why your website is crucial for getting new customers and how to make it work harder for your business.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
						tags: [validatedTags[0], validatedTags[2]], // Website, Marketing
					},
					{
						title: '5 Website Mistakes Service Businesses Make That Cost Them Customers',
						excerpt:
							'Avoid these common website mistakes that drive potential customers away from your service business.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
						tags: [validatedTags[0], validatedTags[3]], // Website, Business
					},
					{
						title: 'Local SEO Guide for Cleaning, Landscaping, and Home Service Businesses',
						excerpt: 'How to optimize your website to show up when local customers search for your services on Google.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
						tags: [validatedTags[1], validatedTags[3]], // SEO, Business
					},
					{
						title: 'How to Use Your Website to Book More Service Appointments',
						excerpt: 'Practical tips for turning your website visitors into booked appointments and paying customers.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
						tags: [validatedTags[0], validatedTags[2], validatedTags[3]], // Website, Marketing, Business
					},
				]

	return (
		<div>
			<PageHeader
				title="Articles & Blog"
				description="Browse our collection of marketing articles and guides for service business owners. Filter by tag to find content on specific topics."
			/>

			<section className="py-12 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					{isDev && (
						<div className="mb-8 p-6 bg-blue-50 rounded-lg">
							<h3 className="text-xl font-semibold text-blue-700 mb-2">Developer Mode Notice</h3>
							<p className="text-blue-700 mb-4">
								You're viewing the static version of the articles page. For a better development experience with hot
								reloading of markdown content:
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/resources/articles/client"
									className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
								>
									Switch to Hot Reloading Articles Page
								</Link>
								<Link
									href="/"
									className="inline-block px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center"
								>
									Continue with Static Page
								</Link>
							</div>
							<p className="mt-4 text-sm text-blue-600">
								<strong>Note:</strong> The hot reloading version will automatically detect changes to your markdown
								files and update the preview without a full page refresh.
							</p>
						</div>
					)}
					<ArticlesList
						articles={articlesList}
						allTags={validatedTags}
					/>
				</div>
			</section>

			<CallToAction
				title="Need help with your service business website?"
				description="Contact us for personalized advice tailored to your business needs."
				buttonText="Get in Touch"
				buttonLink="/contact"
			/>
		</div>
	)
}
