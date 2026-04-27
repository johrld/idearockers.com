import type React from "react"

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

export async function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }]
}
