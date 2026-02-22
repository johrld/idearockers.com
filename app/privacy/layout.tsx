import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy Policy of idearockers GmbH: information on hosting/server logs, cookies (technical only), retention, recipients, and GDPR rights.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", de: "/privacy?hl=de" },
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}


