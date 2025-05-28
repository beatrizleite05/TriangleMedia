"use client"

import { motion } from "framer-motion"
import { Palette, Target, Megaphone, TrendingUp, Clapperboard, Users, Zap } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: <Palette size={32} className="text-white" />,
      title: t.services.socialMedia.title,
      description: t.services.socialMedia.description,
      gradient: "from-orange-500 to-red-500",
      features: t.services.socialMedia.features,
      price: "250€",
      period: language === "pt" ? "mês" : "month",
    },
    {
      icon: <Target size={32} className="text-white" />,
      title: language === "pt" ? "Conteúdo" : "Content",
      description: language === "pt" 
        ? "Presença digital essencial com gestão estratégica, conteúdo semanal e interação com o público para fortalecer sua marca nas redes sociais."
        : "Essential digital presence with strategic management, weekly content and audience interaction to strengthen your brand on social media.",
      gradient: "from-yellow-400 to-orange-500",
      features: language === "pt" 
        ? ["Pacote Redes Sociais", "Captação de conteúdo (1 vez p/ mês)"]
        : ["Social Media Package", "Content capture (1x per month)"],
      price: "350€",
      period: language === "pt" ? "mês" : "month",
    },
    {
      icon: <Clapperboard size={32} className="text-white" />,
      title: "Reels",
      description: language === "pt"
        ? "Conteúdo dinâmico e criativo, incluindo vídeos em formato Reels, para destacar sua marca e aumentar o engajamento de forma visual e impactante."
        : "Dynamic and creative content, including Reels format videos, to highlight your brand and increase engagement in a visual and impactful way.",
      gradient: "from-orange-500 to-yellow-400",
      features: language === "pt"
        ? ["Pacote Redes Sociais", "Captação de conteúdo (1 vez p/ mês)", "Produção de Reels (2 p/ mês)"]
        : ["Social Media Package", "Content capture (1x per month)", "Reels production (2x per month)"],
      price: "400€",
      period: language === "pt" ? "mês" : "month",
    },
    {
      icon: <Megaphone size={32} className="text-white" />,
      title: language === "pt" ? "Social Ads" : "Social Ads",
      description: language === "pt"
        ? "Anúncios otimizados nas redes sociais para alcançar o público certo, maximizando resultados com gestão profissional e acompanhamento diário."
        : "Optimized social media ads to reach the right audience, maximizing results with professional management and daily monitoring.",
      gradient: "from-red-500 to-orange-500",
      features: language === "pt"
        ? ["Análise de Mercado", "Criação/Gestão de Ads (até 500€)", "Otimização e Monitorização Diária", "Relatório Mensal"]
        : ["Market Analysis", "Ad Creation/Management (up to €500)", "Daily Optimization and Monitoring", "Monthly Report"],
      price: "250€",
      period: language === "pt" ? "mês" : "month",
    },
    {
      icon: <TrendingUp size={32} className="text-white" />,
      title: "Google Ads",
      description: language === "pt"
        ? "Visibilidade garantida no Google com campanhas estratégicas, direcionadas a quem realmente busca o que sua marca oferece."
        : "Guaranteed visibility on Google with strategic campaigns, targeted to those who really search for what your brand offers.",
      gradient: "from-yellow-400 to-red-500",
      features: language === "pt"
        ? ["Análise de Mercado", "Criação/Gestão de Ads (até 500€)", "Otimização e Monitorização Diária", "Relatório Mensal"]
        : ["Market Analysis", "Ad Creation/Management (up to €500)", "Daily Optimization and Monitoring", "Monthly Report"],
      price: "250€",
      period: language === "pt" ? "mês" : "month",
    },
    {
      icon: <Zap size={32} className="text-white" />,
      title: "Extra",
      description: language === "pt"
        ? "Soluções personalizadas em publicidade digital para necessidades específicas, com gestão dedicada e relatórios claros."
        : "Customized digital advertising solutions for specific needs, with dedicated management and clear reports.",
      gradient: "from-orange-500 to-yellow-400",
      features: language === "pt"
        ? ["Análise de Mercado", "Criação/Gestão de Ads (até 500€)", "Otimização e Monitorização Diária", "Relatório Mensal"]
        : ["Market Analysis", "Ad Creation/Management (up to €500)", "Daily Optimization and Monitoring", "Monthly Report"],
      price: "250€",
      period: language === "pt" ? "mês" : "month",
    },
  ]

  return (
    <section id="services" className="py-12 lg:py-16 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF6A00_1px,transparent_1px),linear-gradient(to_bottom,#FFC801_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
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
            {t.services.title.split(" ")[0]} <span className="gradient-text">{t.services.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HoverEffect items={services} key={language} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255, 106, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="gradient-bg text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <span className="relative z-10">{t.services.viewAll}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
