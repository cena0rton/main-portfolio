import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { getBlogPost } from "@/lib/firebase-blog-storage"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  
  // Now slug is the Firebase document ID
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Simple markdown-to-HTML conversion for basic formatting
  const formatContent = (content: string) => {
    return content
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-medium text-zinc-800 mt-8 mb-4">$1</h2>')
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc pl-6 space-y-2 mb-6">$1</ul>')
      .replace(/\n\n/g, '</p><p class="mb-6">')
      .replace(/^(.*)$/gm, '<p class="mb-6">$1</p>')
      .replace(/<p class="mb-6"><h2/g, "<h2")
      .replace(/<\/h2><\/p>/g, "</h2>")
      .replace(/<p class="mb-6"><ul/g, "<ul")
      .replace(/<\/ul><\/p>/g, "</ul>")
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl font-light text-zinc-800 mb-6 leading-tight">{post.title}</h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-stone-200 text-zinc-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="text-zinc-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </article>
        </div>
      </main>
    </div>
  )
}