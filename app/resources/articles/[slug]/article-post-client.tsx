'use client'

import type React from 'react'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import type { Article, Comment } from '@/types/article'
import { addComment } from '@/lib/article-service'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CustomButton } from '@/components/custom-button'
import { Facebook, Twitter, Linkedin, Clock, Calendar, User, MessageSquare } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface ArticlePostClientProps {
	article: Article
}

export default function ArticlePostClient({ article }: ArticlePostClientProps) {
	const [comments, setComments] = useState<Comment[]>(article.comments || [])
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [commentForm, setCommentForm] = useState({
		name: '',
		email: '',
		content: '',
	})
	const [commentSuccess, setCommentSuccess] = useState(false)

	const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setCommentForm(prev => ({ ...prev, [name]: value }))
	}

	const handleCommentSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!commentForm.name || !commentForm.email || !commentForm.content) {
			return
		}

		try {
			setIsSubmitting(true)
			const newComment = await addComment(
				article.slug,
				{ name: commentForm.name, email: commentForm.email },
				commentForm.content
			)

			if (newComment) {
				setComments(prev => [newComment, ...prev])
				setCommentForm({ name: '', email: '', content: '' })
				setCommentSuccess(true)

				setTimeout(() => {
					setCommentSuccess(false)
				}, 5000)
			}
		} catch (err) {
			console.error('Failed to submit comment:', err)
		} finally {
			setIsSubmitting(false)
		}
	}

	const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
	const shareTitle = encodeURIComponent(article.title)

	return (
		<div className="container mx-auto px-4 py-12">
			<div className="max-w-4xl mx-auto">
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
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

					<div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
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

						<div className="flex items-center">
							<MessageSquare className="h-4 w-4 mr-1" />
							<span>{comments.length} comments</span>
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
				</div>

				{/* Featured Image */}
				{article.featuredImage && (
					<div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
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
				<div className="prose max-w-none mb-12">
					<ReactMarkdown>{article.content}</ReactMarkdown>
				</div>

				{/* Social Sharing */}
				<div className="border-t border-b py-6 mb-8">
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
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Share on Twitter</span>
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
				<div className="bg-gray-50 rounded-lg p-6 mb-12">
					<div className="flex items-start">
						{article.author.avatar && (
							<div className="mr-4 flex-shrink-0">
								<Image
									src={article.author.avatar || '/placeholder.svg'}
									alt={article.author.name}
									width={60}
									height={60}
									className="rounded-full"
								/>
							</div>
						)}
						<div>
							<h3 className="text-lg font-bold text-gray-900 mb-2">About {article.author.name}</h3>
							<p className="text-gray-700">
								{article.author.bio || 'Marketing specialist with years of experience helping small businesses grow.'}
							</p>
						</div>
					</div>
				</div>

				{/* Comments Section */}
				<div
					id="comments"
					className="mb-12"
				>
					<h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h2>

					{/* Comment Form */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-4">Leave a Comment</h3>

							{commentSuccess ? (
								<div className="bg-green-50 text-green-800 p-4 rounded-md mb-4">
									Your comment has been submitted successfully!
								</div>
							) : (
								<form
									onSubmit={handleCommentSubmit}
									className="space-y-4"
								>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												name="name"
												value={commentForm.name}
												onChange={handleCommentChange}
												required
											/>
										</div>
										<div>
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={commentForm.email}
												onChange={handleCommentChange}
												required
											/>
										</div>
									</div>
									<div>
										<Label htmlFor="content">Comment</Label>
										<Textarea
											id="content"
											name="content"
											rows={4}
											value={commentForm.content}
											onChange={handleCommentChange}
											required
										/>
									</div>
									<CustomButton
										type="submit"
										variant="blue"
										disabled={isSubmitting}
									>
										{isSubmitting ? 'Submitting...' : 'Post Comment'}
									</CustomButton>
								</form>
							)}
						</CardContent>
					</Card>

					{/* Comments List */}
					{comments.length > 0 ? (
						<div className="space-y-6">
							{comments.map(comment => (
								<div
									key={comment.id}
									className="border-b pb-6"
								>
									<div className="flex items-start">
										{comment.author.avatar && (
											<div className="mr-4 flex-shrink-0">
												<Image
													src={comment.author.avatar || '/placeholder.svg'}
													alt={comment.author.name}
													width={40}
													height={40}
													className="rounded-full"
												/>
											</div>
										)}
										<div>
											<div className="flex items-center mb-2">
												<h4 className="font-bold text-gray-900 mr-2">{comment.author.name}</h4>
												<span className="text-sm text-gray-500">
													{format(new Date(comment.createdAt), 'MMM d, yyyy')}
												</span>
											</div>
											<p className="text-gray-700">{comment.content}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="text-center py-8 bg-gray-50 rounded-lg">
							<p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
						</div>
					)}
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
			</div>
		</div>
	)
}
