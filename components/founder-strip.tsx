"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import enMain from "@translations/en/main.json"
import deMain from "@translations/de/main.json"
import { Globe, Linkedin } from "lucide-react"

export default function FounderStrip() {
  const searchParams = useSearchParams()
  const hl = searchParams?.get("hl")
  const t = hl === "en" ? enMain.founder : deMain.founder

  return (
    <section className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="flex items-start gap-4 md:gap-6">
          <Image
            src="/images/johannes-herold.jpg"
            alt={t.alt}
            width={72}
            height={72}
            className="rounded-xl object-cover w-[72px] h-[72px]"
            loading="lazy"
          />
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">{t.quote}</p>
            <div className="mt-3 text-sm text-gray-400">
              <span className="font-medium text-white">{t.name}</span> · {t.role}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.jh.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{t.websiteLabel}</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/johannesherold/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">{t.linkedinLabel}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


