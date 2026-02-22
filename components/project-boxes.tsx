"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import enMain from "@translations/en/main.json"
import deMain from "@translations/de/main.json"
import enProjects from "@translations/en/projects.json"
import deProjects from "@translations/de/projects.json"

const projects = [
  {
    iconType: "image" as const,
    iconSrc: "/images/wynd-icon.png",
    title: "wynd",
    description:
      "Next-generation wind app for kiters, wing foilers, and wind sports enthusiasts. Built entirely with AI – delivering live wind data and spot insights in real-time.",
    features: ["Live wind data", "Spot insights", "Real-time updates", "Built by riders, for riders"],
    status: "Live",
    gradient: "from-blue-500/20 to-cyan-500/20",
    url: "https://www.wynd.live",
  },
  {
    iconType: "image" as const,
    iconSrc: "/images/flowboost-icon.png",
    title: "flowboost",
    description:
      "AI-driven middleware solution that revolutionizes business efficiency by optimizing data sources as a central nervous system for enhanced company-audience interactions.",
    features: [
      "Hyper-personalized content",
      "Data aggregation platform",
      "Technology integration",
      "Engagement optimization",
    ],
    status: "Early Access",
    gradient: "from-purple-500/20 to-blue-500/20",
    url: "https://www.flowboost.ai",
  },
  {
    iconType: "image" as const,
    iconSrc: "/images/breathe-icon.png",
    title: "breathe meditation",
    description:
      "In a time that is becoming ever faster and more artificial, the breathe meditation app brings more mindfulness and relaxation into people's everyday lives.",
    features: ["Mindfulness practices", "Daily relaxation", "Stress reduction", "Present moment awareness"],
    status: "Live",
    gradient: "from-cyan-500/20 to-teal-500/20",
    url: "https://www.breathe-meditation.com",
  },
]

type ProjectCardData = {
  iconType: "image" | "letter"
  iconSrc?: string
  iconBg?: string
  iconLetter?: string
  title: string
  description: string
  features: string[]
  status: string
  gradient: string
  url: string
  bulletClass?: string
  hoverOverlayClass?: string
  arrowHoverClass?: string
  badgeClass?: string
}

function AppIcon({ project }: { project: ProjectCardData }) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(project.url, "_blank", "noopener,noreferrer")
  }

  if (project.iconType === "image") {
    return (
      <div
        className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={handleClick}
      >
        <Image
          src={project.iconSrc! || "/images/idearockers.svg"}
          alt={`${project.title} icon`}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200", project.iconBg)}
      onClick={handleClick}
    >
      <span className="text-white text-2xl font-bold">{project.iconLetter}</span>
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectCardData
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative h-full"
    >
      {/* Card Background */}
      <div
        className={cn(
          "relative p-8 rounded-2xl border border-gray-800/50 backdrop-blur-sm",
          "bg-gradient-to-br from-gray-900/80 to-gray-950/80",
          "hover:border-blue-500/30 transition-all duration-500",
          "overflow-hidden h-full flex flex-col",
        )}
      >
        {/* Gradient Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100",
            "transition-opacity duration-500",
            project.gradient,
          )}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col"
        >
          {/* Header with App Icon */}
          <div className="flex items-start mb-6">
            <div className="flex items-center gap-4">
              <AppIcon project={project} />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <span
                  className={cn(
                    "text-sm font-medium px-2 py-1 rounded-full",
                    project.badgeClass ?? "bg-blue-500/20 text-blue-300 border border-blue-500/30",
                  )}
                >
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

          {/* Features */}
          <div className="space-y-2 mt-auto"
          >
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${project.bulletClass ?? "bg-blue-400"}`} />
                <span className="text-sm text-gray-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <div className={cn("absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500", project.hoverOverlayClass ?? "from-blue-500/5")} />
      </div>
    </motion.div>
  )
}

export default function ProjectBoxes() {
  const searchParams = useSearchParams()
  const hl = searchParams?.get("hl")
  const t = hl === "en" ? enMain.products : deMain.products
  const p = hl === "en" ? enProjects : deProjects
  return (
    <section className="relative pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{t.title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {[
            {
              iconType: "image" as const,
              iconSrc: "/images/wynd-icon.png",
              title: p.wynd.title,
              description: p.wynd.description,
              features: p.wynd.features,
              status: p.wynd.status,
              gradient: "from-blue-500/20 to-cyan-500/20",
              url: "https://www.wynd.live",
              bulletClass: "bg-blue-400",
              arrowHoverClass: "group-hover:text-blue-400",
              badgeClass: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
            },
            {
              iconType: "image" as const,
              iconSrc: "/images/flowboost-icon.png",
              title: p.flowboost.title,
              description: p.flowboost.description,
              features: p.flowboost.features,
              status: p.flowboost.status,
              gradient: "from-gray-700/20 to-gray-600/20",
              url: "https://www.flowboost.ai",
              bulletClass: "bg-gray-400",
              hoverOverlayClass: "from-gray-400/10",
              arrowHoverClass: "group-hover:text-gray-400",
              badgeClass: "bg-gray-500/20 text-gray-300 border border-gray-500/30",
            },
            {
              iconType: "image" as const,
              iconSrc: "/images/breathe-icon.png",
              title: p.breathe.title,
              description: p.breathe.description,
              features: p.breathe.features,
              status: p.breathe.status,
              gradient: "from-cyan-500/20 to-teal-500/20",
              url: "https://www.breathe-meditation.com",
              bulletClass: "bg-emerald-400",
              arrowHoverClass: "group-hover:text-emerald-400",
              badgeClass: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
            },
          ].map((project, index) => (
            <div key={project.title} className="h-full">
              <ProjectCard project={project as any} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
