"use client"

import { useState, useEffect } from "react"
import type { BlogPost, Tag } from "@/types/blog"
import { BlogService, TagService } from "@/lib/blog-service"
import BlogCard from "@/components/blog/blog-card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function BlogPageClient() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        const [allPosts, allTags] = await Promise.all([BlogService.getPublishedPosts(), TagService.getAllTags()])

        setPosts(allPosts)
        setFilteredPosts(allPosts)
        setTags(allTags)
      } catch (err) {
        console.error("Failed to load blog data:", err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    // Filter posts based on selected tag and search query
    let result = [...posts]

    if (selectedTag) {
      result = result.filter((post) => post.tags.some((tag) => tag.slug === selectedTag))
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.name.toLowerCase().includes(query)),
      )
    }

    setFilteredPosts(result)
  }, [posts, selectedTag, searchQuery])

  const handleTagClick = (tagSlug: string) => {
    setSelectedTag(selectedTag === tagSlug ? null : tagSlug)
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
      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Filter by topic:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                variant={selectedTag === tag.slug ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleTagClick(tag.slug)}
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-500">
            {selectedTag || searchQuery
              ? "Try adjusting your filters or search query"
              : "Check back soon for new content!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={{
                title: post.title,
                excerpt: post.excerpt,
                date: new Date(post.createdAt).toLocaleDateString(),
                image: post.featuredImage || "/placeholder.svg?height=400&width=600",
                slug: post.slug,
                tags: post.tags,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

