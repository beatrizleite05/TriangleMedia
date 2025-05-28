import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingLanguageSwitcher from "@/components/floating-language-switcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Triangle Media - Creative Marketing Agency",
  description:
    "Bold, creative marketing solutions that drive results. Triangle Media delivers high-impact campaigns that stand out in the digital landscape.",
  keywords: ["marketing agency", "creative agency", "digital marketing", "branding", "advertising"],
  authors: [{ name: "Triangle Media" }],
  creator: "Triangle Media",
  publisher: "Triangle Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trianglemedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trianglemedia.com",
    title: "Triangle Media - Creative Marketing Agency",
    description: "Bold, creative marketing solutions that drive results.",
    siteName: "Triangle Media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triangle Media - Creative Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triangle Media - Creative Marketing Agency",
    description: "Bold, creative marketing solutions that drive results.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} bg-black text-white antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingLanguageSwitcher />
      </body>
    </html>
  )
}
