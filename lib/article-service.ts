'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, Author, Tag } from '@/types/article'
import crypto from 'crypto'
import { generateSlug, calculateReadingTime } from './article-utils'

// Get articles directory path
async function getArticlesDirectoryPath(): Promise<string> {
	return path.join(process.cwd(), 'content/articles')
}

// Get all article file paths
async function getArticleFilePaths(): Promise<string[]> {
	const articlesDir = await getArticlesDirectoryPath()

	if (!fs.existsSync(articlesDir)) {
		fs.mkdirSync(articlesDir, { recursive: true })
		return []
	}

	return fs
		.readdirSync(articlesDir)
		.filter(filename => filename.endsWith('.md'))
		.map(filename => path.join(articlesDir, filename))
}

// Read an article from a markdown file
async function readArticleFromFile(filePath: string): Promise<Article | null> {
	try {
		const fileContents = fs.readFileSync(filePath, 'utf8')
		const { data, content } = matter(fileContents)

		if (!data.title || !data.slug) {
			console.error(`Article in ${filePath} is missing required fields`)
			return null
		}

		return {
			id: data.id || path.basename(filePath, '.md'),
			title: data.title,
			slug: data.slug,
			excerpt: data.excerpt || '',
			content: content,
			featuredImage: data.featuredImage || '/placeholder.svg?height=600&width=1200',
			author: data.author as Author,
			tags: (data.tags || []) as Tag[],
			createdAt: data.createdAt || new Date().toISOString(),
			updatedAt: data.updatedAt || new Date().toISOString(),
			isPublished: data.isPublished !== false, // Default to true if not specified
			readingTime: data.readingTime || calculateReadingTime(content),
		}
	} catch (error) {
		console.error(`Error reading article from ${filePath}:`, error)
		return null
	}
}

// Save an article to a markdown file
async function saveArticleToFile(article: Article): Promise<void> {
	const articlesDir = await getArticlesDirectoryPath()
	const filePath = path.join(articlesDir, `${article.slug}.md`)

	// Extract content from article object
	const { content, ...frontmatterData } = article

	const fileContent = matter.stringify(content, frontmatterData)

	// Ensure directory exists
	if (!fs.existsSync(articlesDir)) {
		fs.mkdirSync(articlesDir, { recursive: true })
	}

	fs.writeFileSync(filePath, fileContent)
}

// Get all articles
export async function getAllArticles(): Promise<Article[]> {
	try {
		const filePaths = await getArticleFilePaths()
		const articlePromises = filePaths.map(filePath => readArticleFromFile(filePath))
		const articleResults = await Promise.all(articlePromises)

		const articles = articleResults
			.filter((article): article is Article => article !== null)
			.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

		return articles
	} catch (error) {
		console.error('Error loading articles:', error)
		return []
	}
}

// Get published articles
export async function getPublishedArticles(): Promise<Article[]> {
	const articles = await getAllArticles()
	return articles.filter(article => article.isPublished)
}

// Get featured articles
export async function getFeaturedArticles(limit: number = 3): Promise<Article[]> {
	const articles = await getPublishedArticles()
	return articles
		.filter(article => article.featured)
		.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		.slice(0, limit)
}

// Get an article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
	const articles = await getAllArticles()
	return articles.find(article => article.slug === slug) || null
}

// Create a new article
export async function createArticle(
	articleData: Omit<Article, 'id' | 'slug' | 'createdAt' | 'updatedAt' | 'readingTime'>
): Promise<Article> {
	const newArticle: Article = {
		...articleData,
		id: crypto.randomBytes(4).toString('hex'),
		slug: generateSlug(articleData.title),
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		readingTime: calculateReadingTime(articleData.content),
	}

	await saveArticleToFile(newArticle)
	return newArticle
}

// Update an existing article
export async function updateArticle(slug: string, articleData: Partial<Article>): Promise<Article | null> {
	const article = await getArticleBySlug(slug)

	if (!article) {
		return null
	}

	const updatedArticle: Article = {
		...article,
		...articleData,
		updatedAt: new Date().toISOString(),
		readingTime: articleData.content ? calculateReadingTime(articleData.content) : article.readingTime,
	}

	// If title changed, update slug
	if (articleData.title && articleData.title !== article.title) {
		updatedArticle.slug = generateSlug(articleData.title)
	}

	await saveArticleToFile(updatedArticle)

	// If slug changed, delete old file
	if (updatedArticle.slug !== slug) {
		const articlesDir = await getArticlesDirectoryPath()
		const oldFilePath = path.join(articlesDir, `${slug}.md`)
		if (fs.existsSync(oldFilePath)) {
			fs.unlinkSync(oldFilePath)
		}
	}

	return updatedArticle
}

// Delete an article
export async function deleteArticle(slug: string): Promise<boolean> {
	const articlesDir = await getArticlesDirectoryPath()
	const filePath = path.join(articlesDir, `${slug}.md`)

	if (!fs.existsSync(filePath)) {
		return false
	}

	fs.unlinkSync(filePath)
	return true
}

// Get articles by tag
export async function getArticlesByTag(tagSlug: string): Promise<Article[]> {
	const articles = await getPublishedArticles()
	return articles.filter(article => article.tags.some(tag => tag.slug === tagSlug))
}

// Get all tags
export async function getAllTags(): Promise<Tag[]> {
	const articles = await getAllArticles()
	const tagsMap = new Map<string, Tag>()

	articles.forEach(article => {
		article.tags.forEach(tag => {
			tagsMap.set(tag.id, tag)
		})
	})

	return Array.from(tagsMap.values())
}

// Create a sample article if none exist
export async function createSampleArticleIfNoneExist(): Promise<void> {
	const articles = await getAllArticles()

	if (articles.length === 0) {
		const sampleTags: Tag[] = [
			{ id: '1', name: 'Marketing', slug: 'marketing' },
			{ id: '2', name: 'Small Business', slug: 'small-business' },
		]

		const sampleArticle: Omit<Article, 'id' | 'slug' | 'createdAt' | 'updatedAt' | 'readingTime'> = {
			title: 'How to Create an Effective Marketing Strategy on a Small Budget',
			excerpt: 'Learn practical tips for maximizing your marketing impact without breaking the bank.',
			content: `
# How to Create an Effective Marketing Strategy on a Small Budget

Small businesses often face the challenge of making a big impact with limited resources. Here are some practical tips to help you maximize your marketing efforts without breaking the bank.

## 1. Define Your Target Audience

Before spending a single dollar, make sure you know exactly who you're trying to reach. Creating detailed buyer personas can help you understand your ideal customers' needs, pain points, and behaviors.

## 2. Focus on Value, Not Volume

Instead of trying to reach as many people as possible, focus on reaching the right people with the right message. Quality always trumps quantity when it comes to effective marketing.

## 3. Leverage Free and Low-Cost Digital Tools

- **Social Media**: Build a presence on platforms where your audience spends time
- **Email Marketing**: Use services like Mailchimp that offer free plans for small lists
- **Content Marketing**: Create valuable blog posts, videos, or podcasts that address your audience's needs

## 4. Network and Build Partnerships

Collaborate with complementary businesses to cross-promote each other's services. This can help you reach new audiences without additional costs.

## 5. Track and Measure Results

Use free analytics tools to track the performance of your marketing efforts. This data will help you identify what's working and where to allocate your limited resources.

Remember, effective marketing isn't about having the biggest budget—it's about being strategic, consistent, and authentic in your approach.
      `,
			author: {
				id: '1',
				name: 'Marketing Expert',
				avatar: '/placeholder.svg?height=100&width=100',
				bio: 'Marketing specialist with 10+ years of experience helping small businesses grow.',
			},
			tags: sampleTags,
			isPublished: true,
			featuredImage: '/placeholder.svg?height=600&width=1200',
			featured: true,
		}

		await createArticle(sampleArticle)
	}
}
