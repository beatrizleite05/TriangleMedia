import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import OtherServices from "@/components/home/other-services"
import Stats from "@/components/home/stats"
import Partners from "@/components/home/partners"
import Projects from "@/components/home/projects"
import FinalCTA from "@/components/home/final-cta"
import WhyUs from "@/components/home/why-us"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <OtherServices />
      <Stats />
      <Partners />
      <Projects />
      <WhyUs />
      <FinalCTA />
    </>
  )
}
