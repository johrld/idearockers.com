import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.idearockers.com"),
  title: {
    default: "Idearockers — Create clarity. Unlock growth. Live better.",
    template: "Idearockers - %s",
  },
  description: "Built with AI, designed for humans.",
  keywords: [
    "Idearockers",
    "AI products",
    "productivity",
    "focus",
    "digital tools",
  ],
  authors: [{ name: "idearockers GmbH" }],
  creator: "idearockers",
  publisher: "idearockers GmbH",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Idearockers",
    title: "Idearockers — Create clarity. Unlock growth. Live better.",
    description: "Built with AI, designed for humans.",
    locale: "de_DE",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idearockers — Create clarity. Unlock growth. Live better.",
    description: "Built with AI, designed for humans.",
  },
  // Rely on App Router auto-discovery of app/icon.svg
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/?hl=en",
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Idearockers",
                url: process.env.NEXT_PUBLIC_APP_URL || "https://www.idearockers.com",
                logo: "/images/idearockers.svg",
                sameAs: [],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
