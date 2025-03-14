export interface Author {
	id: string
	name: string
	avatar?: string
	bio?: string
}

export interface Tag {
	id: string
	name: string
	slug: string
}

export interface Article {
	id: string
	title: string
	slug: string
	excerpt: string
	content: string
	featuredImage?: string
	author: Author
	tags: Tag[]
	createdAt: string
	updatedAt: string
	isPublished: boolean
	readingTime?: number
	featured?: boolean
}

export type ArticleFormData = Omit<Article, 'id' | 'slug' | 'createdAt' | 'updatedAt' | 'readingTime'> & {
	id?: string
}
