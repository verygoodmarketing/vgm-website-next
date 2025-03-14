import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface ArticleCardProps {
	post: {
		title: string
		excerpt: string
		date: string
		image: string
		slug: string
		tags?: { id: string; name: string; slug: string }[]
	}
}

export default function ArticleCard({ post }: ArticleCardProps) {
	return (
		<Card className="overflow-hidden">
			<div className="relative h-48 overflow-hidden">
				<Image
					src={post.image || '/placeholder.svg'}
					alt={post.title}
					fill
					className="object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<CardContent className="p-6">
				<p className="text-sm text-gray-800 font-medium mb-2">{post.date}</p>
				<h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
				<p className="text-gray-800 mb-4">{post.excerpt}</p>
			</CardContent>
			<CardFooter>
				<Link
					href={post.slug === '#' ? '#' : `/resources/articles/${post.slug}`}
					className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
				>
					Read More <ArrowRight className="ml-2 h-4 w-4" />
				</Link>
			</CardFooter>
		</Card>
	)
}
