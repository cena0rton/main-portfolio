import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/firebase-blog-storage"

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-zinc-800 mb-4">Blog</h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto my-10">
              Thoughts on Philosophy, Cricket, and lessons learned from real-world Observations.
            </p>
          </div>

          

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="border-0 shadow-none bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-2xl font-medium text-zinc-800 hover:text-zinc-600 transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-zinc-600 leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-stone-200 text-zinc-700 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
