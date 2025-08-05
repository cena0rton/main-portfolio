"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut } from "lucide-react"
import { getAllBlogPostsAdmin, createBlogPost, updateBlogPost, deleteBlogPost, type BlogPost } from "@/lib/firebase-blog-storage"
import { logout } from "@/lib/auth"
import { useRouter } from "next/navigation"

export function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    readTime: "",
    tags: "",
    published: true,
  })

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const allPosts = await getAllBlogPostsAdmin()
      setPosts(allPosts)
    } catch (error) {
      console.error("Failed to load posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const postData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    }

    try {
      if (editingPost) {
        await updateBlogPost(editingPost.id, postData)
      } else {
        await createBlogPost(postData)
      }

      await loadPosts()
      resetForm()
    } catch (error) {
      console.error("Failed to save post:", error)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      readTime: post.readTime,
      tags: post.tags.join(", "),
      published: post.published,
    })
    setShowEditor(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteBlogPost(id)
        await loadPosts()
      } catch (error) {
        console.error("Failed to delete post:", error)
      }
    }
  }

  const togglePublished = async (post: BlogPost) => {
    try {
      await updateBlogPost(post.id, { published: !post.published })
      await loadPosts()
    } catch (error) {
      console.error("Failed to update post:", error)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      readTime: "",
      tags: "",
      published: true,
    })
    setEditingPost(null)
    setShowEditor(false)
  }

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-light text-zinc-800">Blog Admin</h1>
          <div className="flex gap-4">
            <Button onClick={() => setShowEditor(true)}>
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {showEditor && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Post Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />

                <Textarea
                  placeholder="Post Excerpt (2-3 lines for the blog listing)"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  required
                  rows={3}
                />

                <Textarea
                  placeholder="Post Content (Markdown supported)"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={15}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Read Time (e.g., 5 min read)"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    required
                  />

                  <Input
                    placeholder="Tags (comma separated)"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    />
                    Published
                  </label>
                </div>

                <div className="flex gap-4">
                  <Button type="submit">{editingPost ? "Update Post" : "Create Post"}</Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-medium text-zinc-800">{post.title}</h3>
                      <Badge variant={post.published ? "default" : "secondary"}>
                        {post.published ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <p className="text-zinc-600 text-sm mb-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                      <div className="flex gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => togglePublished(post)}>
                      {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
