import PrivacyClient from "@/components/privacy-client"

export default function PrivacyPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const hl = (searchParams?.hl as string) || undefined
  const locale = hl === "en" ? "en" : "de"
  return <PrivacyClient locale={locale} />
}
