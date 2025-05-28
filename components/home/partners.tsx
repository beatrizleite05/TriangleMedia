"use client"

import { motion } from "framer-motion"
import ClientOnly from "@/components/ui/client-only"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

const partners = [
  { name: "TechCorp" },
  { name: "InnovateLab" },
  { name: "FutureVision" },
  { name: "NextGen Solutions" },
  { name: "Digital Dynamics" },
  { name: "Creative Studios" },
  { name: "Growth Partners" },
  { name: "Brand Builders" },
  { name: "Market Leaders" },
  { name: "Success Stories" },
]

export default function Partners() {
  const { language } = useLanguage()
  const t = translations[language]

  const StaticFallback = () => (
    <section className="py-16 lg:py-24 bg-black overflow-hidden">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.partners.title.split(" ").slice(0, -2).join(" ")} <span className="gradient-text">{t.partners.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-gray-400 whitespace-nowrap"
              >
                {partner.name}
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )

  const AnimatedVersion = () => (
    <section className="py-8 lg:py-12 bg-gray-900/30 overflow-hidden">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.partners.title.split(" ").slice(0, -2).join(" ")} <span className="gradient-text">{t.partners.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee">
            {partners.concat(partners).map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 text-2xl md:text-3xl font-bold text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.1 }}
              >
                {partner.name}
              </motion.div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
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
