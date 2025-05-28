"use client"

import { motion } from "framer-motion"
import { Globe, Mail, Palette, Search, Camera, PenTool, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

const otherServices = [
  {
    icon: Globe,
    title: "Website Development",
    key: "web"
  },
  {
    icon: Mail,
    title: "Email Marketing", 
    key: "email"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    key: "design"
  },
  {
    icon: Search,
    title: "SEO",
    key: "seo"
  },
  {
    icon: Camera,
    title: "Photography",
    key: "photography"
  },
  {
    icon: PenTool,
    title: "Copywriting",
    key: "content"
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    key: "influencer"
  },
]

export default function OtherServices() {
  const { language } = useLanguage()
  const t = translations[language]

  // Map service keys to translation titles
  const getServiceTitle = (key: string) => {
    const serviceMap: { [key: string]: string } = {
      web: t.otherServices.web.title,
      email: t.otherServices.email.title,
      design: t.otherServices.design.title,
      seo: t.otherServices.seo.title,
      photography: t.otherServices.photography.title,
      content: t.otherServices.content.title,
      influencer: t.otherServices.influencer.title
    }
    return serviceMap[key] || key
  }

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-400/5"></div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Triangle decorations */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-orange-500"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-yellow-400"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-orange-500"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            {t.otherServices.title.toUpperCase()}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t.otherServices.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-100 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-yellow-400">
                  <service.icon
                    size={32}
                    className="text-gray-700 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {getServiceTitle(service.key)}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t.otherServices.exploreAll}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
