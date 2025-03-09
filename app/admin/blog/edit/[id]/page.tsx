import type { Metadata } from "next"
import BlogEditor from "@/components/blog/blog-editor"

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: "Edit Blog Post",
  description: "Edit an existing blog post",
}

export default function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Blog Post</h1>
      <BlogEditor postId={params.id} />
    </div>
  )
}

