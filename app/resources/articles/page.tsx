import type { Metadata } from 'next'
import PageHeader from '@/components/shared/page-header'
import ArticlesList from '@/components/article/articles-list'
import CallToAction from '@/components/shared/call-to-action'
import { getPublishedArticles, getAllTags } from '@/lib/article-service'
import { Tag } from '@/types/article'

export const metadata: Metadata = {
	title: 'Articles & Blog - Very Good Marketing',
	description: 'Browse our collection of marketing articles and guides for service business owners.',
}

export default async function ArticlesPage() {
	const articles = await getPublishedArticles()
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
