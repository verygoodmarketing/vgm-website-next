"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { BlogPostFormData, Tag } from "@/types/blog"
import { BlogService, TagService } from "@/lib/blog-service"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import CustomButton from "@/components/shared/custom-button"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Save, X, Plus, Image } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import ReactMarkdown from "react-markdown"

interface BlogEditorProps {
  postId?: string
}

export default function BlogEditor({ postId }: BlogEditorProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [availableTags, setAvailableTags] = useState<Tag[]>([])
  const [newTagName, setNewTagName] = useState("")
  const [activeTab, setActiveTab] = useState("edit")
  const [imageUrl, setImageUrl] = useState("")

  const [formData, setFormData] = useState<BlogPostFormData>({
    title: "",
    excerpt: "",
    content: "",
    author: {
      id: "1", // Default author for demo
      name: "Marketing Expert",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    tags: [],
    isPublished: false,
    featuredImage: "/placeholder.svg?height=600&width=1200",
  })

  // Load post data if editing an existing post
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)

        // Load available tags
        const tags = await TagService.getAllTags()
        setAvailableTags(tags)

        // If editing an existing post, load its data
        if (postId) {
          const posts = await BlogService.getAllPosts()
          const post = posts.find((p) => p.id === postId)

          if (post) {
            setFormData({
              id: post.id,
              title: post.title,
              excerpt: post.excerpt,
              content: post.content,
              author: post.author,
              tags: post.tags,
              isPublished: post.isPublished,
              featuredImage: post.featuredImage,
            })
          } else {
            setError("Post not found")
          }
        }
      } catch (err) {
        setError("Failed to load data")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [postId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTagToggle = (tag: Tag) => {
    setFormData((prev) => {
      const isSelected = prev.tags.some((t) => t.id === tag.id)

      if (isSelected) {
        return {
          ...prev,
          tags: prev.tags.filter((t) => t.id !== tag.id),
        }
      } else {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        }
      }
    })
  }

  const handleCreateTag = async () => {
    if (!newTagName.trim()) return

    try {
      const newTag = await TagService.createTag(newTagName)
      setAvailableTags((prev) => [...prev, newTag])
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }))
      setNewTagName("")
    } catch (err) {
      setError("Failed to create tag")
      console.error(err)
    }
  }

  const handlePublishToggle = () => {
    setFormData((prev) => ({
      ...prev,
      isPublished: !prev.isPublished,
    }))
  }

  const handleInsertImage = () => {
    if (!imageUrl) return

    // Insert markdown image syntax at cursor position or at the end
    const imageMarkdown = `\n![Image](${imageUrl})\n`
    setFormData((prev) => ({
      ...prev,
      content: prev.content + imageMarkdown,
    }))

    setImageUrl("")
  }

  const handleSave = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Validate form
      if (!formData.title.trim()) {
        setError("Title is required")
        return
      }

      if (!formData.content.trim()) {
        setError("Content is required")
        return
      }

      // Save the post
      if (formData.id) {
        await BlogService.updatePost(formData)
        setSuccess("Post updated successfully")
      } else {
        const newPost = await BlogService.createPost(formData)
        setFormData((prev) => ({ ...prev, id: newPost.id }))
        setSuccess("Post created successfully")
      }

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/admin/blog")
      }, 1500)
    } catch (err) {
      setError("Failed to save post")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{postId ? "Edit Post" : "Create New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">{success}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter post title"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                placeholder="Brief summary of the post"
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                name="featuredImage"
                value={formData.featuredImage || ""}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                className="mt-1"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Content</Label>
                <div className="flex items-center space-x-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Image className="h-4 w-4 mr-2" />
                        Insert Image
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <Label htmlFor="image-url">Image URL</Label>
                        <Input
                          id="image-url"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          placeholder="https://example.com/image.jpg"
                        />
                        <Button size="sm" onClick={handleInsertImage}>
                          Insert
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-2">
                <TabsList className="mb-2">
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>

                <TabsContent value="edit">
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your post content here... (Markdown supported)"
                    className="min-h-[400px] font-mono"
                  />
                </TabsContent>

                <TabsContent value="preview">
                  <div className="border rounded-md p-4 min-h-[400px] prose max-w-none">
                    <ReactMarkdown>{formData.content}</ReactMarkdown>
                  </div>
                </TabsContent>
              </Tabs>
              <p className="text-sm text-gray-500 mt-2">
                Supports Markdown formatting: **bold**, *italic*, # headings, [links](url), ![images](url), etc.
              </p>
            </div>

            <div>
              <Label className="mb-2 block">Tags</Label>
              <div className="flex flex-wrap gap-2 mb-3">
                {availableTags.map((tag) => (
                  <Badge
                    key={tag.id}
                    variant={formData.tags.some((t) => t.id === tag.id) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center mt-2">
                <Input
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                  placeholder="Add new tag"
                  className="mr-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleCreateTag()
                    }
                  }}
                />
                <Button type="button" size="sm" onClick={handleCreateTag} disabled={!newTagName.trim()}>
                  <Plus className="h-4 w-4 mr-1" /> Add
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="isPublished" checked={formData.isPublished} onCheckedChange={handlePublishToggle} />
              <Label htmlFor="isPublished">Publish this post</Label>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline" onClick={() => router.push("/admin/blog")} disabled={isLoading}>
              <X className="h-4 w-4 mr-2" /> Cancel
            </Button>

            <CustomButton variant="blue" onClick={handleSave} disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? "Saving..." : "Save Post"}
            </CustomButton>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

