"use server"

import { cookies } from "next/headers"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "your-secret-password-123"

export async function authenticateAdmin(password: string) {
  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("admin-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return { success: true }
  }
  return { success: false, error: "Invalid password" }
}

export async function isAuthenticated() {
  const cookieStore = await cookies()
  return cookieStore.get("admin-auth")?.value === "authenticated"
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-auth")
}
