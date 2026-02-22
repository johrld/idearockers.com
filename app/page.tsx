import HeroGeometric from "../components/kokonutui/hero-geometric"
import ProjectBoxes from "../components/project-boxes"
import AboutSection from "../components/about-section"
import { Suspense } from "react"

export default function Page() {
  return (
    <div>
      <Suspense fallback={null}>
        <HeroGeometric />
      </Suspense>
      <Suspense fallback={null}>
        <ProjectBoxes />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
    </div>
  )
}
