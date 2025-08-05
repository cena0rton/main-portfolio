import type React from "react"
import type { Metadata } from "next"
import { Lexend_Exa } from "next/font/google"
import "./globals.css"

const lexendExa = Lexend_Exa({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Pawan",
  description: "Pawan Mishra",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexendExa.className}>{children}</body>
    </html>
  )
}
