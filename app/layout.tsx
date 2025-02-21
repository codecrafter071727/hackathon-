import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "./component/Header"
import Footer from "./component/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stress Level Analysis",
  description: "Analyze your stress, track your progress, and unlock peace of mind.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-soft-gray text-gray-800`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

