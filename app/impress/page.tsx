import ImpressClient from "@/components/impress-client"

export default function ImpressPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const hl = (searchParams?.hl as string) || undefined
  const locale = hl === "en" ? "en" : "de"
  return <ImpressClient locale={locale} />
}
