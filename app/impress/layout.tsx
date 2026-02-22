import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Legal disclosure and company information (Impressum) of idearockers GmbH, Lübeck, Germany.",
  alternates: {
    canonical: "/impress",
    languages: { en: "/impress", de: "/impress?hl=de" },
  },
}

export default function ImpressLayout({ children }: { children: React.ReactNode }) {
  return children
}


