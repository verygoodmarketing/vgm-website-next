import type { Metadata } from "next"
import BlogEditor from "@/components/blog/blog-editor"

export const metadata: Metadata = {
  title: "Create New Blog Post",
  description: "Create a new blog post for your website",
}

export default function NewBlogPostPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <BlogEditor />
    </div>
  )
}

