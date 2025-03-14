import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/article-service"
import ArticlePostClient from "./article-post-client"

interface ArticlePostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePostPageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage || "/placeholder.svg?height=600&width=1200",
          width: 1200,
          height: 600,
          alt: article.title,
        },
      ],
    },
  }
}

export default async function ArticlePostPage({ params }: ArticlePostPageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article || !article.isPublished) {
    notFound()
  }

  return <ArticlePostClient article={article} />
}