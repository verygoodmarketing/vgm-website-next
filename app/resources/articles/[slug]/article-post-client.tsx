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
import { Facebook, Linkedin, Clock, Calendar, User, Share2, ChevronUp, RefreshCw } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { cn } from '@/lib/utils'
import './markdown-styles.css'

interface ArticlePostClientProps {
	article: Article
}

// X Logo component for social sharing
const XLogo = () => (
	<svg
		viewBox="0 0 24 24"
		className="h-5 w-5"
		aria-hidden="true"
		fill="currentColor"
	>
		<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
	</svg>
)

export default function ArticlePostClient({ article: initialArticle }: ArticlePostClientProps) {
	const [showScrollTop, setShowScrollTop] = useState(false)
	const [article, setArticle] = useState<Article>(initialArticle)
	const [loading, setLoading] = useState(false)
	const [autoRefresh, setAutoRefresh] = useState(true)
	const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleTimeString())
	const autoRefreshIntervalRef = useRef<NodeJS.Timeout | null>(null)
	const articleContentRef = useRef<HTMLDivElement>(null)

	// Get the URL for sharing
	const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
	const shareTitle = encodeURIComponent(article.title)

	// Fetch the latest article data
	const fetchArticle = async () => {
		setLoading(true)
		try {
			const response = await fetch(`/api/articles/${article.slug}?t=${Date.now()}`)
			const data = await response.json()

			if (data.article) {
				setArticle(data.article)
				setLastUpdated(new Date().toLocaleTimeString())
			}
		} catch (error) {
			console.error('Error refreshing article:', error)
		} finally {
			setLoading(false)
		}
	}

	// Set up scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Set up auto-refresh in development mode
	useEffect(() => {
		// Only setup auto-refresh if we're in development mode
		if (process.env.NODE_ENV === 'development' && autoRefresh) {
			autoRefreshIntervalRef.current = setInterval(() => {
				console.log('Auto-refreshing article...')
				fetchArticle()
			}, 5000) // Check for updates every 5 seconds
		}

		return () => {
			// Clean up interval on component unmount
			if (autoRefreshIntervalRef.current) {
				clearInterval(autoRefreshIntervalRef.current)
			}
		}
	}, [autoRefresh, article.slug])

	// Toggle auto-refresh
	const toggleAutoRefresh = () => {
		setAutoRefresh(prev => !prev)
	}

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	// Check if we're in dev mode
	const isDev = process.env.NODE_ENV === 'development'

	return (
		<div className="bg-white">
			{/* Scroll to top button */}
			<button
				onClick={scrollToTop}
				className={cn(
					'fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all z-50',
					showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
				)}
				aria-label="Scroll to top"
			>
				<ChevronUp className="h-5 w-5" />
			</button>

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

						{/* Dev mode controls */}
						{isDev && (
							<div className="mb-6 p-4 bg-blue-50 rounded-lg">
								<div className="flex flex-wrap items-center justify-between gap-3">
									<div>
										<p className="text-blue-700 text-sm">Developer Mode: Last updated at {lastUpdated}</p>
									</div>
									<div className="flex items-center gap-4">
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
										<button
											onClick={fetchArticle}
											disabled={loading}
											className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
										>
											{loading ? (
												<>
													<RefreshCw className="h-4 w-4 animate-spin" />
													<span>Refreshing...</span>
												</>
											) : (
												<>
													<RefreshCw className="h-4 w-4" />
													<span>Refresh Article</span>
												</>
											)}
										</button>
									</div>
								</div>
							</div>
						)}

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

						{/* Author Box */}
						<Card className="mb-12">
							<CardContent className="p-6">
								<div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
									{article.author.avatar && (
										<div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
											<Image
												src={article.author.avatar}
												alt={article.author.name}
												width={80}
												height={80}
												className="object-cover w-full h-full"
											/>
										</div>
									)}
									<div className="flex-1 text-center md:text-left">
										<h3 className="font-bold text-xl mb-2 text-gray-900">About the Author</h3>
										<h4 className="font-medium text-lg mb-3 text-gray-800">{article.author.name}</h4>
										<p className="text-gray-600 mb-4">{article.author.bio}</p>
										<div className="flex justify-center md:justify-start">
											<CustomButton
												variant="outline"
												size="sm"
												href="/contact"
											>
												Contact the Author
											</CustomButton>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Related Articles Section (Placeholder) */}
						<div className="mb-12">
							<h2 className="text-2xl font-bold mb-6 text-gray-900">You might also like</h2>
							{/* This would be populated with actual related articles */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Card>
									<CardContent className="p-4">
										<h3 className="font-bold text-lg mb-2 hover:text-blue-600">
											<Link href="/resources/articles">More marketing tips for your business</Link>
										</h3>
										<p className="text-gray-600 text-sm mb-3">Explore our collection of marketing articles</p>
										<Link
											href="/resources/articles"
											className="text-blue-600 text-sm font-medium hover:underline"
										>
											Read more articles
										</Link>
									</CardContent>
								</Card>
								<Card>
									<CardContent className="p-4">
										<h3 className="font-bold text-lg mb-2 hover:text-blue-600">
											<Link href="/contact">Need personalized marketing advice?</Link>
										</h3>
										<p className="text-gray-600 text-sm mb-3">Get in touch for a free consultation</p>
										<Link
											href="/contact"
											className="text-blue-600 text-sm font-medium hover:underline"
										>
											Contact us
										</Link>
									</CardContent>
								</Card>
							</div>
						</div>

						{/* Social Sharing (desktop) - Fixed on right */}
						<div className="hidden lg:block fixed right-10 top-1/3 transform -translate-y-1/2">
							<div className="flex flex-col items-center space-y-4 bg-white p-3 rounded-full shadow-md">
								<span className="font-medium text-gray-900 text-sm mb-2">Share</span>
								<a
									href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-blue-600 p-2"
									aria-label="Share on Facebook"
								>
									<Facebook className="h-5 w-5" />
								</a>
								<a
									href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-blue-400 p-2"
									aria-label="Share on X"
								>
									<XLogo />
								</a>
								<a
									href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-500 hover:text-blue-700 p-2"
									aria-label="Share on LinkedIn"
								>
									<Linkedin className="h-5 w-5" />
								</a>
								<button
									onClick={() => {
										navigator.clipboard.writeText(shareUrl)
										alert('Link copied to clipboard!')
									}}
									className="text-gray-500 hover:text-green-600 p-2"
									aria-label="Copy link"
								>
									<Share2 className="h-5 w-5" />
								</button>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}
