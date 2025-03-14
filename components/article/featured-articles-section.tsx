'use client'

import { useRouter } from 'next/navigation'
import ArticleCard from './article-card'
import { Tag } from '@/types/article'

interface ArticleData {
	title: string
	excerpt: string
	date: string
	image: string
	slug: string
	tags?: Tag[]
}

interface FeaturedArticlesSectionProps {
	articles: ArticleData[]
	allTags: Tag[]
}

export default function FeaturedArticlesSection({ articles, allTags }: FeaturedArticlesSectionProps) {
	const router = useRouter()

	// When a tag is clicked, navigate to the articles page with the tag filter
	const handleTagClick = (tagSlug: string) => {
		router.push(`/resources/articles?tag=${tagSlug}`)
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{articles.map((post, index) => (
				<ArticleCard
					key={index}
					post={post}
					onTagClick={handleTagClick}
				/>
			))}
		</div>
	)
}
