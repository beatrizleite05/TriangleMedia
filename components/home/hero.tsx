"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Beams */}
      <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black"></div>
        <BackgroundBeams />

        {/* Floating orbs with mouse interaction */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 gradient-bg rounded-full opacity-10 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      <div className="relative z-10 container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 text-sm"
          >
            <div className="w-2 h-2 gradient-bg rounded-full animate-pulse"></div>
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Enhanced Main Heading with Text Generate Effect */}
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <TextGenerateEffect
              words={t.hero.title}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              onClick={scrollToServices}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 106, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">{t.hero.startProject}</span>
              <ArrowRight size={20} className="relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255, 106, 0, 1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:border-orange-400 transition-colors relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <Play size={20} className="relative z-10" />
              <span className="relative z-10">{t.hero.watchWork}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
