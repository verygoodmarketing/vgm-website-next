import type { Metadata } from "next"
import ArticleEditor from "@/components/blog/blog-editor"

interface EditArticlePageProps {
  params: {
    id: string // This ID is now the slug
  }
}

export const metadata: Metadata = {
  title: "Edit Article",
  description: "Edit an existing article",
}

export default function EditArticlePage({ params }: EditArticlePageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Article</h1>
      <ArticleEditor slug={params.id} />
    </div>
  )
}

