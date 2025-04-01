'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ArticleCard from './article-card'
import TagFilter from './tag-filter'
import { Tag } from '@/types/article'

interface ArticleData {
	title: string
	excerpt: string
	date: string
	image: string
	slug: string
	tags?: Tag[]
}

interface ArticlesListProps {
	articles: ArticleData[]
	allTags: Tag[]
}

// Separate client component for the filter status
function FilterStatus({
	selectedTag,
	tagName,
	onClear,
}: {
	selectedTag: string | null
	tagName: string | undefined
	onClear: () => void
}) {
	if (!selectedTag) return null

	return (
		<div className="mt-4 text-sm text-gray-600">
			<p>
				Currently showing articles tagged with: <span className="font-semibold">{tagName}</span>{' '}
				<button
					onClick={onClear}
					className="text-blue-600 hover:underline"
					type="button"
				>
					Clear filter
				</button>
			</p>
		</div>
	)
}

export default function ArticlesList({ articles, allTags }: ArticlesListProps) {
	const searchParams = useSearchParams()
	const tagParam = searchParams.get('tag')

	const [selectedTag, setSelectedTag] = useState<string | null>(tagParam)
	const [isFiltering, setIsFiltering] = useState(false)

	// Update selectedTag when tag URL parameter changes
	useEffect(() => {
		if (tagParam) {
			setSelectedTag(tagParam)
			setIsFiltering(true)
		}
	}, [tagParam])

	// Filter articles based on selected tag
	const filteredArticles = selectedTag
		? articles.filter(article => article.tags?.some(tag => tag.slug === selectedTag))
		: articles

	// Handler for when a tag is clicked in an article card
	const handleTagClick = (tagSlug: string) => {
		console.log('Tag clicked:', tagSlug)
		setIsFiltering(true)
		// Toggle tag selection if clicking the same tag
		setSelectedTag(tagSlug === selectedTag ? null : tagSlug)

		// Update the URL with the selected tag (without page reload)
		const url = new URL(window.location.href)
		if (tagSlug === selectedTag) {
			url.searchParams.delete('tag')
		} else {
			url.searchParams.set('tag', tagSlug)
		}
		window.history.pushState({}, '', url)
	}

	// Handler to clear the tag filter
	const clearFilter = () => {
		setIsFiltering(true)
		setSelectedTag(null)

		// Remove the tag parameter from the URL
		const url = new URL(window.location.href)
		url.searchParams.delete('tag')
		window.history.pushState({}, '', url)
	}

	// Reset the filtering animation effect after it's been shown
	useEffect(() => {
		if (isFiltering) {
			const timer = setTimeout(() => {
				setIsFiltering(false)
			}, 500)
			return () => clearTimeout(timer)
		}
	}, [isFiltering])

	const selectedTagName = selectedTag ? allTags.find(t => t.slug === selectedTag)?.name : undefined

	return (
		<div>
			<div
				className={`mb-10 p-6 bg-gray-50 rounded-lg border ${isFiltering ? 'border-blue-300 shadow-md' : 'border-gray-100'} transition-all duration-300`}
			>
				<h2 className="text-xl font-bold mb-4">Filter Articles by Topic</h2>
				<TagFilter
					allTags={allTags}
					onTagSelect={tag => {
						setIsFiltering(true)
						setSelectedTag(tag)

						// Update the URL with the selected tag
						const url = new URL(window.location.href)
						if (tag === null) {
							url.searchParams.delete('tag')
						} else {
							url.searchParams.set('tag', tag)
						}
						window.history.pushState({}, '', url)
					}}
					selectedTag={selectedTag}
				/>
				<FilterStatus
					selectedTag={selectedTag}
					tagName={selectedTagName}
					onClear={clearFilter}
				/>
			</div>

			<div className={`transition-opacity duration-300 ${isFiltering ? 'opacity-80' : 'opacity-100'}`}>
				{filteredArticles.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-lg text-gray-600">No articles found with this tag.</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredArticles.map((post, index) => (
							<ArticleCard
								key={index}
								post={post}
								onTagClick={handleTagClick}
							/>
						))}
					</div>
				)}

				{articles[0]?.slug === '#' && selectedTag === null && (
					<div className="text-center mt-12">
						<p className="text-lg text-gray-600">
							More educational content coming soon! Subscribe to our newsletter to be notified when new resources are
							available.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
