import type { Metadata } from "next"
import Link from "next/link"
import { CustomButton } from "@/components/custom-button"
import BlogAdminClient from "./blog-admin-client"

export const metadata: Metadata = {
  title: "Blog Management",
  description: "Manage your blog posts and content",
}

export default function BlogAdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <div className="flex space-x-4">
          <CustomButton asChild variant="blue">
            <Link href="/admin/blog/new">Create New Post</Link>
          </CustomButton>
          <CustomButton asChild variant="outline">
            <Link href="/blog">View Blog</Link>
          </CustomButton>
        </div>
      </div>

      <BlogAdminClient />
    </div>
  )
}

