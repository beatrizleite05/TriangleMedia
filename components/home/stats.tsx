"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import ClientOnly from "@/components/ui/client-only"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

function CountUp({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
      className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
    >
      {count}
      {suffix}
    </motion.div>
  )
}

function StaticStat({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
        {number}
        {suffix}
      </div>
      <p className="text-gray-300 mt-4 text-sm md:text-base font-medium">{label}</p>
    </div>
  )
}

export default function Stats() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = [
    { number: 250, suffix: "+", label: t.stats.projectsCompleted },
    { number: 98, suffix: "%", label: t.stats.clientSatisfaction },
    { number: 150, suffix: "+", label: t.stats.happyClients },
    { number: 5, suffix: "x", label: t.stats.roiIncrease },
  ]

  const StaticFallback = () => (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF6A00 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FFC801 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t.stats.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-text">{t.stats.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.stats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StaticStat key={stat.label} number={stat.number} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )

  const AnimatedVersion = () => (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FF6A00 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FFC801 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t.stats.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-text">{t.stats.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.stats.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUp end={stat.number} suffix={stat.suffix} />
              <p className="text-gray-300 mt-4 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <ClientOnly fallback={<StaticFallback />}>
      <AnimatedVersion />
    </ClientOnly>
  )
}
