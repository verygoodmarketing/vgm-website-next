'use client'

import { useState, useEffect } from 'react'
import type { Article, Tag } from '@/types/article'
import { getAllArticles, getAllTags } from '@/lib/article-service'
import ArticleCard from '@/components/article/article-card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function ArticlesPageClient() {
	const [articles, setArticles] = useState<Article[]>([])
	const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
	const [tags, setTags] = useState<Tag[]>([])
	const [selectedTag, setSelectedTag] = useState<string | null>(null)
	const [searchQuery, setSearchQuery] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const loadData = async () => {
			try {
				setIsLoading(true)
				const [allArticles, allTags] = await Promise.all([getAllArticles(), getAllTags()])

				setArticles(allArticles.filter(article => article.isPublished))
				setFilteredArticles(allArticles.filter(article => article.isPublished))
				setTags(allTags)
			} catch (err) {
				console.error('Failed to load article data:', err)
			} finally {
				setIsLoading(false)
			}
		}

		loadData()
	}, [])

	useEffect(() => {
		// Filter articles based on selected tag and search query
		let result = [...articles]

		if (selectedTag) {
			result = result.filter(article => article.tags.some(tag => tag.slug === selectedTag))
		}

		if (searchQuery) {
			const query = searchQuery.toLowerCase()
			result = result.filter(
				article =>
					article.title.toLowerCase().includes(query) ||
					article.excerpt.toLowerCase().includes(query) ||
					article.content.toLowerCase().includes(query) ||
					article.tags.some(tag => tag.name.toLowerCase().includes(query))
			)
		}

		setFilteredArticles(result)
	}, [articles, selectedTag, searchQuery])

	const handleTagClick = (tagSlug: string) => {
		setSelectedTag(selectedTag === tagSlug ? null : tagSlug)
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
			</div>
		)
	}

	return (
		<div>
			<div className="mb-8">
				<div className="relative mb-6">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					<Input
						type="text"
						placeholder="Search articles..."
						className="pl-10"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</div>

				<div>
					<h3 className="text-sm font-medium text-gray-500 mb-2">Filter by topic:</h3>
					<div className="flex flex-wrap gap-2">
						{tags.map(tag => (
							<Badge
								key={tag.id}
								variant={selectedTag === tag.slug ? 'default' : 'outline'}
								className="cursor-pointer"
								onClick={() => handleTagClick(tag.slug)}
							>
								{tag.name}
							</Badge>
						))}
					</div>
				</div>
			</div>

			{filteredArticles.length === 0 ? (
				<div className="text-center py-12">
					<h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
					<p className="text-gray-500">
						{selectedTag || searchQuery
							? 'Try adjusting your filters or search query'
							: 'Check back soon for new content!'}
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{filteredArticles.map(article => (
						<ArticleCard
							key={article.id}
							post={{
								title: article.title,
								excerpt: article.excerpt,
								date: new Date(article.createdAt).toLocaleDateString(),
								image: article.featuredImage || '/placeholder.svg?height=400&width=600',
								slug: article.slug,
								tags: article.tags,
							}}
						/>
					))}
				</div>
			)}
		</div>
	)
}
