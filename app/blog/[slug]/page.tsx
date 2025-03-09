import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogService } from "@/lib/blog-service"
import BlogPostClient from "./blog-post-client"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await BlogService.getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage || "/placeholder.svg?height=600&width=1200",
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await BlogService.getPostBySlug(params.slug)

  if (!post || !post.isPublished) {
    notFound()
  }

  return <BlogPostClient post={post} />
}

