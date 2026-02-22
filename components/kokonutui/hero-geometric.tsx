"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import enMain from "@translations/en/main.json"
import deMain from "@translations/de/main.json"

function BreathingCircle({
  className,
  delay = 0,
  size = 300,
  gradient = "from-blue-500/20",
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

// Floating dots removed for a cleaner, more minimal background

function MovingLine({
  delay = 0,
  x = 0,
  y = 0,
  width = 100,
  rotation = 0,
  duration = 15,
}: {
  delay?: number
  x?: number
  y?: number
  width?: number
  rotation?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0,
      }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.8, 0],
        scaleX: [0, 1, 0.8, 1, 0],
        rotate: [rotation, rotation + 5, rotation - 3, rotation + 2, rotation],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent shadow-sm shadow-blue-400/30"
      style={{
        width,
        left: x,
        top: y,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  )
}

function TechGrid({
  delay = 0,
  x = 0,
  y = 0,
}: {
  delay?: number
  x?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: [0, 0.4, 0.2, 0.6, 0.1],
        scale: [0.8, 1, 1.1, 0.9, 1],
        rotate: [0, 2, -1, 1, 0],
      }}
      transition={{
        duration: 25,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="absolute"
      style={{
        left: x,
        top: y,
      }}
    >
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0.2, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-3 h-3 border border-blue-400/40 rounded-sm bg-blue-400/10"
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function HeroGeometric({
  title1 = "Create clarity. Unlock growth. Live better.",
  title2 = "",
}: {
  title1?: string
  title2?: string
}) {
  const searchParams = useSearchParams()
  const hl = searchParams?.get("hl")
  const t = hl === "en" ? enMain.hero : deMain.hero
  const fadeUpVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1] as any,
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Very subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]" />


      {/* Logo at top center */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute top-[calc(env(safe-area-inset-top)+3rem)] sm:top-[calc(env(safe-area-inset-top)+3.5rem)] md:top-[10vh] w-full z-20 flex justify-center items-center"
      >
        <Image
          src="/images/idearockers.svg"
          alt="Idearockers"
          width={300}
          height={75}
          className="h-6 w-auto sm:h-7 md:h-8 md:w-auto opacity-90"
          priority
        />
      </motion.div>

      {/* Breathing circles */}
      <div className="absolute inset-0 overflow-hidden">
        <BreathingCircle
          delay={0.2}
          size={600}
          gradient="from-blue-500/8 via-blue-400/4 to-transparent"
          className="left-[-25%] top-[15%]"
          breathingDuration={12}
        />

        <BreathingCircle
          delay={0.8}
          size={450}
          gradient="from-blue-600/8 via-blue-500/4 to-transparent"
          className="right-[-20%] top-[50%]"
          breathingDuration={15}
        />

        <BreathingCircle
          delay={1.2}
          size={350}
          gradient="from-blue-400/6 via-blue-300/3 to-transparent"
          className="left-[15%] bottom-[-10%]"
          breathingDuration={10}
        />
      </div>

      {/* Modern tech elements (minimal) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving lines */}
         <MovingLine delay={1} x={150} y={200} width={180} rotation={12} duration={18} />
         <MovingLine delay={3} x={800} y={400} width={220} rotation={-6} duration={22} />
         <MovingLine delay={5} x={400} y={600} width={140} rotation={45} duration={16} />
         <MovingLine delay={7} x={600} y={150} width={160} rotation={-30} duration={20} />

        {/* Tech grids */}
        <TechGrid delay={2} x={80} y={300} />
        <TechGrid delay={4} x={1000} y={180} />
        <TechGrid delay={6} x={700} y={500} />
        <TechGrid delay={8} x={300} y={100} />

        {/* Connection lines - Start immediately */}
        <svg className="absolute inset-0 w-full h-full">
           <motion.path
            d="M 100 200 Q 400 100 700 300 T 1200 400"
             stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{
              pathLength: [0, 1, 0.5, 1, 0],
              opacity: [0.6, 0.8, 0.2, 0.6, 0.6],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
           <motion.path
            d="M 200 600 Q 600 400 900 200 T 1100 500"
             stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,8"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{
              pathLength: [0, 1, 0.3, 1, 0],
              opacity: [0.4, 0.6, 0.1, 0.4, 0.4],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline - each sentence on its own line */}
          <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-300 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                {t.headlineLines[0]}
                <br />
                {t.headlineLines[1]}
                <br />
                {t.headlineLines[2]}
              </span>
            </h1>
          </motion.div>

          {/* Minimal separator */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-8"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
          </motion.div>

          {/* Updated subheadline */}
          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide max-w-4xl mx-auto">
              {(() => {
                const sentenceSplit = String(t.subheadline).split(". ")
                if (sentenceSplit.length < 2) return t.subheadline
                const first = sentenceSplit[0] + "."
                const rest = sentenceSplit.slice(1).join(" ")
                return (
                  <>
                    {first}
                    <span className="inline md:hidden"> </span>
                    <br className="hidden md:block" />
                    <span>{rest}</span>
                  </>
                )
              })()}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  )
}
