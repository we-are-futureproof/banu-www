import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Banu Dalamanli, Psychologist | Professional Therapy Practice",
  description:
    "A professional therapy practice where you'll find compassionate care, meaningful support, and a safe space where healing begins.",
  generator: 'v0.dev',
  openGraph: {
    title: "Banu Dalamanli, Psychologist | Professional Therapy Practice",
    description: "A professional therapy practice where you'll find compassionate care, meaningful support, and a safe space where healing begins.",
    images: [{
      url: "/banu-dalamanli.jpg",
      width: 1200,
      height: 630,
      alt: "Banu Dalamanli, Psychologist"
    }],
    type: "website",
    locale: "en_US",
    siteName: "Banu Dalamanli, Psychologist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banu Dalamanli, Psychologist | Professional Therapy Practice",
    description: "A professional therapy practice where you'll find compassionate care, meaningful support, and a safe space where healing begins.",
    images: ["/banu-dalamanli.jpg"],
    creator: "@beyondborderscounseling"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'