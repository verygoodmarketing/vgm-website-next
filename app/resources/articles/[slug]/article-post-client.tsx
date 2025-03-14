'use client'

import type React from 'react'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import type { Article } from '@/types/article'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CustomButton } from '@/components/custom-button'
import { Facebook, Linkedin, Clock, Calendar, User, Share2, ChevronUp } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { cn } from '@/lib/utils'
import './markdown-styles.css'

interface ArticlePostClientProps {
	article: Article
}

// Custom X Logo component
const XLogo = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		color="currentColor"
		fill="none"
	>
		<path
			d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default function ArticlePostClient({ article }: ArticlePostClientProps) {
	const [showScrollTop, setShowScrollTop] = useState(false)
	const articleContentRef = useRef<HTMLDivElement>(null)

	// Track scroll for the scroll to top button
	useEffect(() => {
		const handleScroll = () => {
			// Show scroll to top button when scrolled down enough
			setShowScrollTop(window.scrollY > 500)
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll() // Initial calculation

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
	const shareTitle = encodeURIComponent(article.title)

	return (
		<>
			{/* Scroll to Top Button */}
			{showScrollTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
					aria-label="Scroll to top"
				>
					<ChevronUp className="h-5 w-5" />
				</button>
			)}

			{/* Social Sharing Sidebar (visible on larger screens) */}
			<div className="hidden lg:flex fixed left-4 top-1/4 flex-col space-y-4 z-40">
				<div className="bg-white p-3 rounded-full shadow-md">
					<Share2 className="h-5 w-5 text-gray-500" />
				</div>
				<a
					href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-white p-3 rounded-full shadow-md text-gray-500 hover:text-blue-600 transition-colors"
					aria-label="Share on Facebook"
				>
					<Facebook className="h-5 w-5" />
				</a>
				<a
					href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-white p-3 rounded-full shadow-md text-gray-500 hover:text-black transition-colors"
					aria-label="Share on X"
				>
					<XLogo />
				</a>
				<a
					href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-white p-3 rounded-full shadow-md text-gray-500 hover:text-blue-700 transition-colors"
					aria-label="Share on LinkedIn"
				>
					<Linkedin className="h-5 w-5" />
				</a>
			</div>

			<div className="container mx-auto px-4 py-12">
				<div className="max-w-3xl mx-auto">
					{/* Main Content */}
					<main>
						{/* Breadcrumbs */}
						<div className="mb-8">
							<nav className="text-sm text-gray-500">
								<Link
									href="/"
									className="hover:text-blue-600"
								>
									Home
								</Link>
								<span className="mx-2">/</span>
								<Link
									href="/resources"
									className="hover:text-blue-600"
								>
									Resources
								</Link>
								<span className="mx-2">/</span>
								<Link
									href="/resources/articles"
									className="hover:text-blue-600"
								>
									Articles
								</Link>
								<span className="mx-2">/</span>
								<span className="text-gray-900">{article.title}</span>
							</nav>
						</div>

						{/* Article Header */}
						<header className="mb-10">
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								{article.title}
							</h1>

							<div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
								<div className="flex items-center">
									<Calendar className="h-4 w-4 mr-1" />
									<span>{format(new Date(article.createdAt), 'MMMM d, yyyy')}</span>
								</div>

								<div className="flex items-center">
									<Clock className="h-4 w-4 mr-1" />
									<span>{article.readingTime} min read</span>
								</div>

								<div className="flex items-center">
									<User className="h-4 w-4 mr-1" />
									<span>{article.author.name}</span>
								</div>
							</div>

							<div className="flex flex-wrap gap-2 mb-6">
								{article.tags.map(tag => (
									<Link
										key={tag.id}
										href={`/resources/articles?tag=${tag.slug}`}
									>
										<Badge variant="secondary">{tag.name}</Badge>
									</Link>
								))}
							</div>
						</header>

						{/* Featured Image */}
						{article.featuredImage && (
							<div className="relative h-[300px] md:h-[400px] lg:h-[500px] mb-10 rounded-lg overflow-hidden">
								<Image
									src={article.featuredImage || '/placeholder.svg'}
									alt={article.title}
									fill
									className="object-cover"
									priority
								/>
							</div>
						)}

						{/* Article Content */}
						<div
							ref={articleContentRef}
							className="prose prose-lg max-w-none mb-12 markdown-content"
						>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeSlug, rehypeRaw]}
							>
								{article.content}
							</ReactMarkdown>
						</div>

						{/* Social Sharing (mobile) */}
						<div className="lg:hidden border-t border-b py-6 mb-8">
							<div className="flex items-center justify-between">
								<span className="font-medium text-gray-900">Share this article:</span>
								<div className="flex space-x-4">
									<a
										href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-500 hover:text-blue-600"
									>
										<Facebook className="h-5 w-5" />
										<span className="sr-only">Share on Facebook</span>
									</a>
									<a
										href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-500 hover:text-blue-400"
									>
										<XLogo />
										<span className="sr-only">Share on X</span>
									</a>
									<a
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-500 hover:text-blue-700"
									>
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">Share on LinkedIn</span>
									</a>
								</div>
							</div>
						</div>

						{/* Author Bio */}
						<div className="bg-gray-50 rounded-lg p-6 mb-12 shadow-sm">
							<div className="flex items-start">
								{article.author.avatar && (
									<div className="mr-4 flex-shrink-0">
										<Image
											src={article.author.avatar || '/placeholder.svg'}
											alt={article.author.name}
											width={80}
											height={80}
											className="rounded-full"
										/>
									</div>
								)}
								<div>
									<h3 className="text-lg font-bold text-gray-900 mb-2">About {article.author.name}</h3>
									<p className="text-gray-700 leading-relaxed">
										{article.author.bio ||
											'Marketing specialist with years of experience helping small businesses grow.'}
									</p>
								</div>
							</div>
						</div>

						{/* Back to Articles */}
						<div className="text-center">
							<CustomButton
								asChild
								variant="outline"
							>
								<Link href="/resources/articles">Back to All Articles</Link>
							</CustomButton>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}
