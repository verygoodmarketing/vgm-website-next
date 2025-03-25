import type { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/article-service'
import type { Article } from '@/types/article'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://verygoodmarketing.com'

	// Get all published articles
	const articles = await getPublishedArticles()

	// Static pages with their configurations
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/pricing`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/resources`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/resources/articles`,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/success-stories`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.5,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.5,
		},
	]

	// Industry pages
	const industryPages = [
		{
			url: `${baseUrl}/industry`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/industry/cleaning`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/electrical`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/fencing`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/general-contracting`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/handyman`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/hvac`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/landscaping`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/lawn-care`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/painting`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/plumbing`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/pressure-washing`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/roofing`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/snow-removal`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/tree-service`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/industry/window-cleaning`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
	]

	// Generate sitemap entries for articles
	const articleEntries = articles.map((article: Article) => ({
		url: `${baseUrl}/resources/articles/${article.slug}`,
		lastModified: new Date(article.updatedAt || article.createdAt),
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}))

	// Combine all entries
	return [...staticPages, ...industryPages, ...articleEntries]
}
