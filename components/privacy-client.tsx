"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import enPrivacy from "@translations/en/privacy.json"
import dePrivacy from "@translations/de/privacy.json"

export default function PrivacyClient({ locale = "en" }: { locale?: "en" | "de" }) {
  const t = locale === "de" ? dePrivacy : enPrivacy

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6 md:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href={locale === "de" ? "/?hl=de" : "/"}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-end justify-between mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.title}</h1>
            {t.lastUpdated ? (
              <span className="text-sm text-gray-500">{t.lastUpdatedLabel || "Last updated"}: {t.lastUpdated}</span>
            ) : null}
          </div>
          <div className="h-[1px] w-full bg-gray-800/60 mb-6" />

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              {t.sections?.map((section: any, idx: number) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  {section.content.map((para: string, pIdx: number) => (
                    <p key={pIdx} className="text-gray-300">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


