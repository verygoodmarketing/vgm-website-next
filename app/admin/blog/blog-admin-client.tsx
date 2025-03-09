"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { BlogPost } from "@/types/blog"
import { BlogService } from "@/lib/blog-service"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/custom-button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, AlertCircle } from "lucide-react"
import { format } from "date-fns"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function BlogAdminClient() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true)
        const allPosts = await BlogService.getAllPosts()
        setPosts(allPosts)
      } catch (err) {
        setError("Failed to load blog posts")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

  const handleDeletePost = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return
    }

    try {
      await BlogService.deletePost(id)
      setPosts(posts.filter((post) => post.id !== id))
    } catch (err) {
      setError("Failed to delete post")
      console.error(err)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {posts.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-gray-500 mb-4">No blog posts found</p>
            <CustomButton asChild variant="blue">
              <Link href="/admin/blog/new">Create Your First Post</Link>
            </CustomButton>
          </CardContent>
        </Card>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Tags</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="font-medium text-gray-900">{post.title}</div>
                    <div className="text-sm text-gray-500 truncate max-w-md">{post.excerpt}</div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">{format(new Date(post.createdAt), "MMM d, yyyy")}</td>
                  <td className="px-4 py-4">
                    <Badge variant={post.isPublished ? "default" : "outline"}>
                      {post.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag.id} variant="secondary" className="text-xs">
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeletePost(post.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

