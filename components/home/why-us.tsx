"use client"

import { motion } from "framer-motion"
import {
  DollarSign,
  Users,
  Shield,
  Zap,
  ArrowRight,
  MessageCircle,
  Target,
  Briefcase,
  Network,
  Eye,
  Award,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function WhyUs() {
  const { language } = useLanguage()
  const t = translations[language]

  const differentiators = [
    {
      icon: DollarSign,
      title: t.whyUs.differentiators.accessiblePricing.title,
      description: t.whyUs.differentiators.accessiblePricing.description,
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: t.whyUs.differentiators.focusedApproach.title,
      description: t.whyUs.differentiators.focusedApproach.description,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: t.whyUs.differentiators.expertNetwork.title,
      description: t.whyUs.differentiators.expertNetwork.description,
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: Zap,
      title: t.whyUs.differentiators.agileExecution.title,
      description: t.whyUs.differentiators.agileExecution.description,
      gradient: "from-red-500 to-orange-500",
    },
  ]

  const workSteps = [
    {
      icon: Briefcase,
      title: t.whyUs.howWeWork.businessAnalysis.title,
      description: t.whyUs.howWeWork.businessAnalysis.description,
      step: "01",
    },
    {
      icon: Network,
      title: t.whyUs.howWeWork.expertMatching.title,
      description: t.whyUs.howWeWork.expertMatching.description,
      step: "02",
    },
    {
      icon: Users,
      title: t.whyUs.howWeWork.supervisedExecution.title,
      description: t.whyUs.howWeWork.supervisedExecution.description,
      step: "03",
    },
  ]

  const qualityFeatures = [
    {
      icon: Shield,
      title: t.whyUs.qualityAssurance.continuousSupervision.title,
      description: t.whyUs.qualityAssurance.continuousSupervision.description,
    },
    {
      icon: Eye,
      title: t.whyUs.qualityAssurance.qualityControl.title,
      description: t.whyUs.qualityAssurance.qualityControl.description,
    },
    {
      icon: Award,
      title: t.whyUs.qualityAssurance.provenExpertise.title,
      description: t.whyUs.qualityAssurance.provenExpertise.description,
    },
    {
      icon: CheckCircle,
      title: t.whyUs.qualityAssurance.consistentResults.title,
      description: t.whyUs.qualityAssurance.consistentResults.description,
    },
  ]

  return (
    <section id="why-us" className="py-12 lg:py-16 relative overflow-hidden">
      <div className="container-max section-padding relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t.whyUs.title.split(" ").slice(0, -2).join(" ")} <span className="gradient-text">{t.whyUs.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* What Sets Us Apart */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.whyUs.differentiators.title.split(" ").slice(0, -2).join(" ")} <span className="gradient-text">{t.whyUs.differentiators.title.split(" ").slice(-2).join(" ")}</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${index === 1 || index === 2 ? "bg-black text-gray-300" : "bg-gray-800/50"} backdrop-blur-sm rounded-2xl p-8 border ${index === 1 || index === 2 ? "border-gray-200" : "border-gray-700"} hover:border-orange-400/50 transition-all duration-300 group`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon size={32} className="text-white" />
                </div>

                <h4
                  className={`text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors "text-white"`}
                >
                  {item.title}
                </h4>

                <p className={`leading-relaxed ${index === 1 || index === 2 ? "text-gray-400" : "text-gray-300"}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-24 bg-gray-900/50 rounded-3xl p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.whyUs.howWeWork.title.split(" ").slice(0, -2).join(" ")} <span className="gradient-text">{t.whyUs.howWeWork.title.split(" ").slice(-2).join(" ")}</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t.whyUs.howWeWork.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step connector */}
                {index < workSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-orange-500 to-yellow-400 opacity-30 z-0">
                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight size={16} className="text-orange-400" />
                    </motion.div>
                  </div>
                )}

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center relative z-10 hover:border-orange-400/50 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} className="text-white" />
                  </div>

                  <h4 className="text-lg font-bold mb-3 group-hover:text-orange-400 transition-colors">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t.whyUs.qualityAssurance.title.split(" ").slice(0, -1).join(" ")} <span className="gradient-text">{t.whyUs.qualityAssurance.title.split(" ").slice(-1).join(" ")}</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t.whyUs.qualityAssurance.subtitle}
              </p>

              <div className="space-y-4">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">{feature.title}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300">
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 gradient-bg rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />

                <div className="text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield size={40} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{t.whyUs.qualityAssurance.qualityFirst}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {t.whyUs.qualityAssurance.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
