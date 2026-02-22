"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import enMain from "@translations/en/main.json"
import deMain from "@translations/de/main.json"
import Image from "next/image"
import Link from "next/link"
import { Globe, Linkedin } from "lucide-react"

function BreathingCircle({
  className,
  delay = 0,
  size = 300,
  gradient = "from-blue-500/12",
  breathingDuration = 8,
}: {
  className?: string
  delay?: number
  size?: number
  gradient?: string
  breathingDuration?: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: breathingDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-radial to-transparent",
            gradient,
            "backdrop-blur-sm",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function AboutSection() {
  const searchParams = useSearchParams()
  const hl = searchParams?.get("hl")
  const t = hl === "en" ? enMain.about : deMain.about
  const tf = hl === "en" ? enMain.founder : deMain.founder
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-black">
      {/* Breathing wave circles */}
      <div className="absolute inset-0 overflow-hidden">
        <BreathingCircle
          delay={0.3}
          size={400}
          gradient="from-blue-500/10 via-blue-400/5 to-transparent"
          className="left-[-10%] top-[20%]"
          breathingDuration={11}
        />

        <BreathingCircle
          delay={0.7}
          size={300}
          gradient="from-blue-600/10 via-blue-500/5 to-transparent"
          className="right-[-5%] bottom-[30%]"
          breathingDuration={13}
        />

        <BreathingCircle
          delay={1.1}
          size={250}
          gradient="from-blue-400/8 via-blue-300/4 to-transparent"
          className="left-[20%] bottom-[-5%]"
          breathingDuration={9}
        />
      </div>

      <div className="relative px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-14 items-start">
          {/* Founder column */}
          <div className="md:sticky md:top-24 order-2 md:order-1">
            <div className="flex md:block items-start gap-4">
              <Link href="https://www.linkedin.com/in/johannesherold/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/johannes-herold.jpg"
                  alt={tf.alt}
                  width={220}
                  height={220}
                  className="rounded-2xl object-cover w-[120px] h-[120px] md:w-[220px] md:h-[220px]"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-col">
                <div className="mt-3">
                  <Link href="https://www.linkedin.com/in/johannesherold/" target="_blank" rel="noopener noreferrer" className="text-white font-medium leading-none hover:underline">
                    {tf.name}
                  </Link>
                  <div className="text-gray-400 text-sm">{tf.role}</div>
                </div>
                <div className="mt-3 md:mt-5 flex flex-row gap-4 flex-wrap">
                  <Link href="https://www.linkedin.com/in/johannesherold/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                    <Linkedin className="w-4 h-4" />
                    {tf.linkedinLabel}
                  </Link>
                  <Link href="https://www.jh.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                    <Globe className="w-4 h-4" />
                    {tf.websiteLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
          {/* New headline */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-left mb-6 md:mb-8"
          >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t.headline}</h2>
          </motion.div>

          {/* New body content */}
            <div className="space-y-8 text-left">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-base text-gray-300 leading-relaxed mb-6">{t.p1}</p>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-base text-gray-300 leading-relaxed mb-6">{t.p2}</p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-left pt-4"
            >
                <p className="text-base font-light text-blue-200 italic">{t.quote}</p>
            </motion.div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
