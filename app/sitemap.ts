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
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9,
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

	// Generate sitemap entries for articles
	const articleEntries = articles.map((article: Article) => ({
		url: `${baseUrl}/resources/articles/${article.slug}`,
		lastModified: new Date(article.updatedAt || article.createdAt),
		changeFrequency: 'monthly' as const,
		priority: 0.7,
	}))

	// Combine all entries
	return [...staticPages, ...articleEntries]
}
