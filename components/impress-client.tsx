"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import enImpress from "@translations/en/impress.json"
import deImpress from "@translations/de/impress.json"

export default function ImpressClient({ locale = "en" }: { locale?: "en" | "de" }) {
  const t = locale === "de" ? deImpress : enImpress

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">{t.title}</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              {/* Sections */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.provider.title}</h2>
                <div className="space-y-2">
                  <p>
                    <strong>{t.sections.provider.company}</strong>
                  </p>
                  <p>{t.sections.provider.street}</p>
                  <p>{t.sections.provider.city}</p>
                  <p>{t.sections.provider.country}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.contact.title}</h2>
                <div className="space-y-2">
                  <p>{t.sections.contact.email}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.representative.title}</h2>
                <p>{t.sections.representative.name}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.register.title}</h2>
                <div className="space-y-2">
                  <p>{t.sections.register.entry}</p>
                  <p>{t.sections.register.number}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.vat.title}</h2>
                <p>{t.sections.vat.text}</p>
                <p>{t.sections.vat.id}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.responsible.title}</h2>
                <div className="space-y-2">
                  <p>{t.sections.responsible.name}</p>
                  <p>{t.sections.responsible.street}</p>
                  <p>{t.sections.responsible.city}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t.sections.disclaimer.title}</h2>
                <h3 className="text-xl font-medium text-white mb-3">{t.sections.disclaimer.content.contentTitle}</h3>
                <p className="mb-4">{t.sections.disclaimer.content.contentText}</p>
                <h3 className="text-xl font-medium text-white mb-3">{t.sections.disclaimer.content.linksTitle}</h3>
                <p className="mb-4">{t.sections.disclaimer.content.linksText}</p>
                <h3 className="text-xl font-medium text-white mb-3">{t.sections.disclaimer.content.copyrightTitle}</h3>
                <p>{t.sections.disclaimer.content.copyrightText}</p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


