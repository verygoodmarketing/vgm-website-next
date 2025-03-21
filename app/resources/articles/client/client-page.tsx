'use client'

import { useState, useEffect, useRef } from 'react'
import PageHeader from '@/components/shared/page-header'
import ArticlesList from '@/components/article/articles-list'
import CallToAction from '@/components/shared/call-to-action'
import { Article, Tag } from '@/types/article'

export default function ArticlesClientPage() {
	const [articles, setArticles] = useState<Article[]>([])
	const [tags, setTags] = useState<Tag[]>([])
	const [loading, setLoading] = useState(true)
	const [lastUpdated, setLastUpdated] = useState<string>('')
	const [autoRefresh, setAutoRefresh] = useState(true)
	const autoRefreshIntervalRef = useRef<NodeJS.Timeout | null>(null)

	const fetchArticles = async () => {
		setLoading(true)
		try {
			const response = await fetch(`/api/articles?t=${Date.now()}`)
			const data = await response.json()

			setArticles(data.articles)
			setTags(data.tags)
			setLastUpdated(new Date().toLocaleTimeString())
		} catch (error) {
			console.error('Error fetching articles:', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchArticles()

		// Set up auto-refresh interval in development mode
		if (autoRefresh) {
			autoRefreshIntervalRef.current = setInterval(() => {
				console.log('Auto-refreshing articles...')
				fetchArticles()
			}, 5000) // Check for updates every 5 seconds
		}

		return () => {
			// Clean up interval on component unmount
			if (autoRefreshIntervalRef.current) {
				clearInterval(autoRefreshIntervalRef.current)
			}
		}
	}, [autoRefresh])

	// Toggle auto-refresh
	const toggleAutoRefresh = () => {
		setAutoRefresh(prev => !prev)
	}

	// Transform articles into the format expected by ArticlesList
	const articlesList = articles.map(article => ({
		title: article.title,
		excerpt: article.excerpt,
		date: new Date(article.createdAt).toLocaleDateString(),
		image: article.featuredImage || '/placeholder.svg?height=400&width=600',
		slug: article.slug,
		tags: article.tags,
	}))

	// Make sure each tag has a valid slug
	const validatedTags = tags.map(tag => ({
		...tag,
		slug: tag.slug || tag.name.toLowerCase().replace(/\s+/g, '-'),
	}))

	return (
		<div>
			<PageHeader
				title="Articles & Blog"
				description="Browse our collection of marketing articles and guides for service business owners. Filter by tag to find content on specific topics."
			/>

			<section className="py-12 md:py-20 bg-white">
				<div className="container mx-auto px-4">
					{loading ? (
						<div className="flex justify-center py-20">
							<div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
						</div>
					) : (
						<>
							<div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
								<div>
									<p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
									<div className="flex items-center mt-2">
										<label className="inline-flex items-center cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={autoRefresh}
												onChange={toggleAutoRefresh}
											/>
											<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
											<span className="ms-3 text-sm font-medium text-gray-700">Auto-refresh</span>
										</label>
									</div>
								</div>
								<button
									onClick={fetchArticles}
									className="px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors text-sm"
								>
									Refresh Articles
								</button>
							</div>
							<ArticlesList
								articles={articlesList}
								allTags={validatedTags}
							/>
						</>
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
