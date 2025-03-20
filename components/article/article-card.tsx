'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tag } from '@/types/article'
import { useRouter } from 'next/navigation'

interface ArticleCardProps {
	post: {
		title: string
		excerpt: string
		date: string
		image: string
		slug: string
		tags?: Tag[]
	}
	onTagClick?: (tagSlug: string) => void
}

// Create a separate client component for the tag button
function TagButton({ tag, onClick }: { tag: Tag; onClick?: (slug: string) => void }) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		if (onClick) {
			onClick(tag.slug)
		}
	}

	return (
		<button
			onClick={handleClick}
			className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
			type="button"
		>
			{tag.name}
		</button>
	)
}

export default function ArticleCard({ post, onTagClick }: ArticleCardProps) {
	const router = useRouter()
	const isPlaceholder = !post.slug || post.slug === '#'

	// Handle article card click to navigate to the article page
	const handleCardClick = () => {
		if (!isPlaceholder) {
			router.push(`/resources/articles/${post.slug}`)
		}
	}

	return (
		<Card
			className={`overflow-hidden transition-shadow duration-300 ${!isPlaceholder ? 'hover:shadow-md cursor-pointer' : ''}`}
			onClick={!isPlaceholder ? handleCardClick : undefined}
		>
			<div className="relative h-48 overflow-hidden">
				<Image
					src={post.image || '/placeholder.svg'}
					alt={post.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<CardContent className="p-6">
				<p className="text-sm text-gray-800 font-medium mb-2">{post.date}</p>
				<h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
				<p className="text-gray-800 mb-4">{post.excerpt}</p>

				{post.tags && post.tags.length > 0 && (
					<div
						className="flex flex-wrap gap-2 mt-3"
						onClick={e => e.stopPropagation()}
					>
						{post.tags.map(tag => (
							<TagButton
								key={tag.id}
								tag={tag}
								onClick={onTagClick}
							/>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter>
				{isPlaceholder ? (
					<div className="inline-flex items-center text-amber-600 font-medium">
						<Clock className="mr-2 h-4 w-4" /> Coming soon
					</div>
				) : (
					<Link
						href={`/resources/articles/${post.slug}`}
						className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors btn-blue-outline px-4 py-2 rounded-md border border-blue-700 hover:bg-blue-50"
						onClick={e => e.stopPropagation()}
					>
						Read More <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				)}
			</CardFooter>
		</Card>
	)
}
