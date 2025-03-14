import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/article-service'
import ArticlePostClient from './article-post-client'

// Update the interface to be compatible with Next.js 15
// In Next.js 15, params and searchParams need to be Promises
type ArticlePostPageProps = {
	params: Promise<{
		slug: string
	}>
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: ArticlePostPageProps): Promise<Metadata> {
	// Ensure params is always treated as a Promise
	const resolvedParams = await params
	const slug = resolvedParams?.slug

	if (!slug) {
		return {
			title: 'Article Not Found',
			description: 'The requested article could not be found.',
		}
	}

	try {
		const article = await getArticleBySlug(slug)

		if (!article) {
			return {
				title: 'Article Not Found',
				description: 'The requested article could not be found.',
			}
		}

		return {
			title: article.title,
			description: article.excerpt,
			openGraph: {
				title: article.title,
				description: article.excerpt,
				type: 'article',
				publishedTime: article.createdAt,
				modifiedTime: article.updatedAt,
				authors: [article.author.name],
				images: [
					{
						url: article.featuredImage || '/placeholder.svg?height=600&width=1200',
						width: 1200,
						height: 600,
						alt: article.title,
					},
				],
			},
		}
	} catch (error) {
		console.error('Error generating metadata:', error)
		return {
			title: 'Article',
			description: 'View our article',
		}
	}
}

export default async function ArticlePostPage({ params }: ArticlePostPageProps) {
	// Ensure params is always treated as a Promise
	const resolvedParams = await params
	const slug = resolvedParams?.slug

	if (!slug) {
		notFound()
	}

	try {
		const article = await getArticleBySlug(slug)

		if (!article || !article.isPublished) {
			notFound()
		}

		return <ArticlePostClient article={article} />
	} catch (error) {
		console.error('Error loading article:', error)
		notFound()
	}
}
