import type { Metadata } from 'next'
import PageHeader from '@/components/shared/page-header'
import ArticleCard from '@/components/article/article-card'
import CallToAction from '@/components/shared/call-to-action'
import { getPublishedArticles } from '@/lib/article-service'

export const metadata: Metadata = {
	title: 'Resources for Service Business Owners',
	description: 'Educational resources and marketing tips for cleaning, landscaping, and home service businesses.',
}

export default async function ArticlesPage() {
	const articles = await getPublishedArticles()

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
					},
					{
						title: '5 Website Mistakes Service Businesses Make That Cost Them Customers',
						excerpt:
							'Avoid these common website mistakes that drive potential customers away from your service business.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
					},
					{
						title: 'Local SEO Guide for Cleaning, Landscaping, and Home Service Businesses',
						excerpt: 'How to optimize your website to show up when local customers search for your services on Google.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
					},
					{
						title: 'How to Use Your Website to Book More Service Appointments',
						excerpt: 'Practical tips for turning your website visitors into booked appointments and paying customers.',
						date: 'Coming Soon',
						image: '/placeholder.svg?height=400&width=600',
						slug: '#',
					},
				]

	return (
		<div>
			<PageHeader
				title="Resources for Service Businesses"
				description="Educational content to help you get more customers for your cleaning, landscaping, or home service business."
			/>

			<section className="py-12 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{articlesList.map((post, index) => (
							<ArticleCard
								key={index}
								post={post}
							/>
						))}
					</div>
					{articlesList[0].slug === '#' && (
						<div className="text-center mt-12">
							<p className="text-lg text-gray-600">
								More educational content coming soon! Subscribe to our newsletter to be notified when new resources are
								available.
							</p>
						</div>
					)}
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
