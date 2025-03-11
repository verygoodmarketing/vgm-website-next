import type { Metadata } from "next"
import ArticleEditor from "@/components/blog/blog-editor"

export const metadata: Metadata = {
  title: "Create New Article",
  description: "Create a new article for your website",
}

export default function NewArticlePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Create New Article</h1>
      <ArticleEditor />
    </div>
  )
}

