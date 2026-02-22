"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import enMain from "@translations/en/main.json"
import deMain from "@translations/de/main.json"

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentLocale = (() => {
    const hl = searchParams?.get("hl")
    return hl === "en" ? "en" : "de"
  })()

  const t = currentLocale === "de" ? deMain.footer : enMain.footer

  const makeLocaleHref = (href: string) => {
    if (currentLocale === "en") {
      const url = new URL(href, "http://dummy")
      const params = new URLSearchParams(url.search)
      params.set("hl", "en")
      const qs = params.toString()
      return `${url.pathname}${qs ? `?${qs}` : ""}`
    }
    return href
  }

  const switchLocale = (nextLocale: "en" | "de") => {
    if (!pathname) return
    // Normalize any legacy /de prefix back to root
    const basePath = pathname.replace(/^\/de(\/|$)/, "/")
    const params = new URLSearchParams(searchParams?.toString() || "")
    if (nextLocale === "en") {
      params.set("hl", "en")
    } else {
      params.delete("hl")
    }
    const qs = params.toString()
    const nextUrl = `${basePath}${qs ? `?${qs}` : ""}`
    router.push(nextUrl)
  }

  return (
    <footer className="relative bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            <p>{t.copyright}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <Link href={makeLocaleHref("/impress")} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              {t.impress}
            </Link>
            <Link href={makeLocaleHref("/privacy")} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              {t.privacy}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  aria-label="Change language"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLocale === "de" ? t.german : t.english}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[10rem]">
                <DropdownMenuItem onClick={() => switchLocale("en")}>{t.english}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLocale("de")}>{t.german}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
