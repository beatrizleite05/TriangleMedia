"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const projects = [
    {
      title: t.work.projects.oyaSwim.title,
      category: t.work.projects.oyaSwim.category,
      description: t.work.projects.oyaSwim.description,
      image: "/oya-swim.jpg",
      color: "from-orange-500 to-red-500",
      slug: "oya-swim",
    },
    {
      title: t.work.projects.soul.title,
      category: t.work.projects.soul.category,
      description: t.work.projects.soul.description,
      image: "/soul.jpg",
      color: "from-yellow-400 to-orange-500",
      slug: "soul",
    },
    {
      title: t.work.projects.leko.title,
      category: t.work.projects.leko.category,
      description: t.work.projects.leko.description,
      image: "/leko.jpg",
      color: "from-orange-500 to-yellow-400",
      slug: "leko",
    },
  ]

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="work" className="py-12 lg:py-16">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t.work.title.split(" ")[0]} <span className="gradient-text">{t.work.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.work.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-2 md:pl-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group h-full"
                  >
                    <Link href={`/projects/${project.slug}`} className="block h-full">
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 h-full shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                          ></div>
                          <div className="absolute top-4 right-4">
                            <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                              <ExternalLink size={20} className="text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="p-8">
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className={`text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white shadow-md`}
                            >
                              {project.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors leading-tight">
                            {project.title}
                          </h3>

                          <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-gray-800/80 border-gray-600 hover:bg-orange-500 hover:border-orange-400 text-white shadow-lg" />
            <CarouselNext className="right-4 bg-gray-800/80 border-gray-600 hover:bg-orange-500 hover:border-orange-400 text-white shadow-lg" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current - 1
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
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
            <span className="relative z-10">{t.work.viewAll}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
