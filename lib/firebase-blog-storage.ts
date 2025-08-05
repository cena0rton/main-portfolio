"use server"

import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "./firebase"
import { revalidatePath } from "next/cache"

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  published: boolean
  createdAt?: any
  updatedAt?: any
}

const COLLECTION_NAME = "blog-posts"

// Helper function to serialize Firebase data
function serializeBlogPost(doc: any): BlogPost {
  const data = doc.data()
  return {
    id: doc.id,
    title: data.title || "",
    content: data.content || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    readTime: data.readTime || "",
    tags: data.tags || [],
    published: data.published || false,
    // Convert Firebase timestamps to strings
    createdAt: data.createdAt?.toDate?.()?.toISOString() || null,
    updatedAt: data.updatedAt?.toDate?.()?.toISOString() || null,
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    try {
      // Simplified query - just get all posts and filter in code
      const q = query(collection(db, COLLECTION_NAME))
      const querySnapshot = await getDocs(q)
      const posts: BlogPost[] = []
  
      querySnapshot.forEach((doc) => {
        const post = serializeBlogPost(doc)
        // Filter published posts and sort by date in JavaScript
        if (post.published) {
          posts.push(post)
        }
      })
  
      // Sort by createdAt in JavaScript instead of Firestore
      posts.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
  
      return posts
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      return []
    }
  }

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists() && docSnap.data().published) {
      return serializeBlogPost(docSnap)
    }

    return null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export async function getAllBlogPostsAdmin(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    const posts: BlogPost[] = []

    querySnapshot.forEach((doc) => {
      posts.push(serializeBlogPost(doc))
    })

    return posts
  } catch (error) {
    console.error("Error fetching admin blog posts:", error)
    return []
  }
}

export async function createBlogPost(post: Omit<BlogPost, "id" | "date">): Promise<BlogPost> {
  try {
    const newPost = {
      ...post,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    const docRef = await addDoc(collection(db, COLLECTION_NAME), newPost)

    revalidatePath("/blog")
    revalidatePath("/admin")

    // Return serialized data
    return {
      id: docRef.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      date: newPost.date,
      readTime: post.readTime,
      tags: post.tags,
      published: post.published,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error creating blog post:", error)
    throw error
  }
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id)

    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    })

    revalidatePath("/blog")
    revalidatePath("/admin")

    // Fetch and return serialized data
    const updatedDoc = await getDoc(docRef)
    if (updatedDoc.exists()) {
      return serializeBlogPost(updatedDoc)
    }

    return null
  } catch (error) {
    console.error("Error updating blog post:", error)
    return null
  }
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id)
    await deleteDoc(docRef)

    revalidatePath("/blog")
    revalidatePath("/admin")

    return true
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return false
  }
}