import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import TopBar from "@/components/top-bar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GoSoftwareBuy - Microsoft Office, Windows & More",
  description: "Buy genuine Microsoft software products at the best prices"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}


