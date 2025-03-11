import type { Metadata } from "next"
import Link from "next/link"
import { CustomButton } from "@/components/custom-button"
import ArticleAdminClient from "./blog-admin-client"

export const metadata: Metadata = {
  title: "Articles Management",
  description: "Manage your articles and content",
}

export default function ArticleAdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Articles Management</h1>
        <div className="flex space-x-4">
          <CustomButton asChild variant="blue">
            <Link href="/admin/blog/new">Create New Article</Link>
          </CustomButton>
          <CustomButton asChild variant="outline">
            <Link href="/articles">View Articles</Link>
          </CustomButton>
        </div>
      </div>

      <ArticleAdminClient />
    </div>
  )
}

