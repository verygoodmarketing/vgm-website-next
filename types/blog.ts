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

export interface Comment {
  id: string
  postId: string
  author: {
    name: string
    email: string
    avatar?: string
  }
  content: string
  createdAt: string
  isApproved: boolean
}

export interface BlogPost {
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
  comments?: Comment[]
}

export type BlogPostFormData = Omit<
  BlogPost,
  "id" | "slug" | "createdAt" | "updatedAt" | "readingTime" | "comments"
> & {
  id?: string
}

