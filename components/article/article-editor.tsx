'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { ArticleFormData, Tag } from '@/types/article'
import { getAllTags, createArticle, updateArticle, getArticleBySlug, getAllArticles } from '@/lib/article-service'
import { generateSlug, calculateReadingTime } from '@/lib/article-utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import CustomButton from '@/components/shared/custom-button'
import { Checkbox } from '@/components/ui/checkbox'
import { AlertCircle, Save, X, Plus, Image } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import ReactMarkdown from 'react-markdown'

interface ArticleEditorProps {
	slug?: string // Updated to use slug instead of postId
}

export default function ArticleEditor({ slug }: ArticleEditorProps) {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [success, setSuccess] = useState<string | null>(null)
	const [availableTags, setAvailableTags] = useState<Tag[]>([])
	const [newTagName, setNewTagName] = useState('')
	const [activeTab, setActiveTab] = useState('edit')
	const [imageUrl, setImageUrl] = useState('')

	const [formData, setFormData] = useState<ArticleFormData>({
		title: '',
		excerpt: '',
		content: '',
		author: {
			id: '1', // Default author for demo
			name: 'Marketing Expert',
			avatar: '/placeholder.svg?height=100&width=100',
		},
		tags: [],
		isPublished: false,
		featuredImage: '/placeholder.svg?height=600&width=1200',
	})

	// Load article data if editing an existing article
	useEffect(() => {
		const loadData = async () => {
			try {
				setIsLoading(true)

				// Load available tags
				const tags = await getAllTags()
				setAvailableTags(tags)

				// If editing an existing article, load its data
				if (slug) {
					const article = await getArticleBySlug(slug)

					if (article) {
						setFormData({
							id: article.id,
							title: article.title,
							excerpt: article.excerpt,
							content: article.content,
							author: article.author,
							tags: article.tags,
							isPublished: article.isPublished,
							featuredImage: article.featuredImage,
						})
					} else {
						setError('Article not found')
					}
				}
			} catch (err) {
				setError('Failed to load data')
				console.error(err)
			} finally {
				setIsLoading(false)
			}
		}

		loadData()
	}, [slug])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleTagToggle = (tag: Tag) => {
		setFormData(prev => {
			const isSelected = prev.tags.some(t => t.id === tag.id)

			if (isSelected) {
				return {
					...prev,
					tags: prev.tags.filter(t => t.id !== tag.id),
				}
			} else {
				return {
					...prev,
					tags: [...prev.tags, tag],
				}
			}
		})
	}

	const handleCreateTag = async () => {
		if (!newTagName.trim()) return

		try {
			// Create a new tag
			const id = `tag-${Date.now()}`
			const slug = generateSlug(newTagName)

			const newTag: Tag = {
				id,
				name: newTagName,
				slug,
			}

			setAvailableTags(prev => [...prev, newTag])
			setFormData(prev => ({
				...prev,
				tags: [...prev.tags, newTag],
			}))
			setNewTagName('')
		} catch (err) {
			setError('Failed to create tag')
			console.error(err)
		}
	}

	const handlePublishToggle = () => {
		setFormData(prev => ({
			...prev,
			isPublished: !prev.isPublished,
		}))
	}

	const handleInsertImage = () => {
		if (!imageUrl) return

		// Insert markdown image syntax at cursor position or at the end
		const imageMarkdown = `\n![Image](${imageUrl})\n`
		setFormData(prev => ({
			...prev,
			content: prev.content + imageMarkdown,
		}))

		setImageUrl('')
	}

	const handleSave = async () => {
		try {
			setIsLoading(true)
			setError(null)

			// Validate form
			if (!formData.title.trim()) {
				setError('Title is required')
				return
			}

			if (!formData.content.trim()) {
				setError('Content is required')
				return
			}

			// Save the article
			if (slug) {
				await updateArticle(slug, formData)
				setSuccess('Article updated successfully')
			} else {
				await createArticle(formData)
				setSuccess('Article created successfully')
			}

			// Redirect after a short delay
			setTimeout(() => {
				router.push('/')
			}, 1500)
		} catch (err) {
			setError('Failed to save article')
			console.error(err)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>{slug ? 'Edit Article' : 'Create New Article'}</CardTitle>
			</CardHeader>
			<CardContent>
				{error && (
					<Alert
						variant="destructive"
						className="mb-6"
					>
						<AlertCircle className="h-4 w-4" />
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}

				{success && (
					<Alert className="mb-6 bg-green-50 border-green-200">
						<AlertDescription className="text-green-800">{success}</AlertDescription>
					</Alert>
				)}

				<div className="space-y-6">
					<div className="grid grid-cols-1 gap-6">
						<div>
							<Label htmlFor="title">Title</Label>
							<Input
								id="title"
								name="title"
								value={formData.title}
								onChange={handleInputChange}
								placeholder="Enter article title"
								className="mt-1"
							/>
						</div>

						<div>
							<Label htmlFor="excerpt">Excerpt</Label>
							<Textarea
								id="excerpt"
								name="excerpt"
								value={formData.excerpt}
								onChange={handleInputChange}
								placeholder="Brief summary of the article"
								className="mt-1"
								rows={3}
							/>
						</div>

						<div>
							<Label htmlFor="featuredImage">Featured Image URL</Label>
							<Input
								id="featuredImage"
								name="featuredImage"
								value={formData.featuredImage || ''}
								onChange={handleInputChange}
								placeholder="https://example.com/image.jpg"
								className="mt-1"
							/>
						</div>

						<div>
							<div className="flex justify-between items-center mb-2">
								<Label>Content</Label>
								<div className="flex items-center space-x-2">
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												size="sm"
												className="flex items-center"
											>
												<Image className="h-4 w-4 mr-2" />
												Insert Image
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-80">
											<div className="space-y-2">
												<Label htmlFor="image-url">Image URL</Label>
												<Input
													id="image-url"
													value={imageUrl}
													onChange={e => setImageUrl(e.target.value)}
													placeholder="https://example.com/image.jpg"
												/>
												<Button
													size="sm"
													onClick={handleInsertImage}
												>
													Insert
												</Button>
											</div>
										</PopoverContent>
									</Popover>
								</div>
							</div>

							<Tabs
								value={activeTab}
								onValueChange={setActiveTab}
								className="mt-2"
							>
								<TabsList className="mb-2">
									<TabsTrigger value="edit">Edit</TabsTrigger>
									<TabsTrigger value="preview">Preview</TabsTrigger>
								</TabsList>

								<TabsContent value="edit">
									<Textarea
										id="content"
										name="content"
										value={formData.content}
										onChange={handleInputChange}
										placeholder="Write your article content here... (Markdown supported)"
										className="min-h-[400px] font-mono"
									/>
								</TabsContent>

								<TabsContent value="preview">
									<div className="border rounded-md p-4 min-h-[400px] prose max-w-none">
										<ReactMarkdown>{formData.content}</ReactMarkdown>
									</div>
								</TabsContent>
							</Tabs>
							<p className="text-sm text-gray-500 mt-2">
								Supports Markdown formatting: **bold**, *italic*, # headings, [links](url), ![images](url), etc.
							</p>
						</div>

						<div>
							<Label className="mb-2 block">Tags</Label>
							<div className="flex flex-wrap gap-2 mb-3">
								{availableTags.map(tag => (
									<Badge
										key={tag.id}
										variant={formData.tags.some(t => t.id === tag.id) ? 'default' : 'outline'}
										className="cursor-pointer"
										onClick={() => handleTagToggle(tag)}
									>
										{tag.name}
									</Badge>
								))}
							</div>

							<div className="flex items-center mt-2">
								<Input
									value={newTagName}
									onChange={e => setNewTagName(e.target.value)}
									placeholder="Add new tag"
									className="mr-2"
									onKeyDown={e => {
										if (e.key === 'Enter') {
											e.preventDefault()
											handleCreateTag()
										}
									}}
								/>
								<Button
									type="button"
									size="sm"
									onClick={handleCreateTag}
									disabled={!newTagName.trim()}
								>
									<Plus className="h-4 w-4 mr-1" /> Add
								</Button>
							</div>
						</div>

						<div className="flex items-center space-x-2">
							<Checkbox
								id="isPublished"
								checked={formData.isPublished}
								onCheckedChange={handlePublishToggle}
							/>
							<Label htmlFor="isPublished">Publish this article</Label>
						</div>
					</div>

					<div className="flex justify-end space-x-4 pt-4">
						<Button
							variant="outline"
							onClick={() => router.push('/')}
							disabled={isLoading}
						>
							<X className="h-4 w-4 mr-2" /> Cancel
						</Button>

						<CustomButton
							variant="blue"
							onClick={handleSave}
							disabled={isLoading}
						>
							<Save className="h-4 w-4 mr-2" />
							{isLoading ? 'Saving...' : 'Save Article'}
						</CustomButton>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
