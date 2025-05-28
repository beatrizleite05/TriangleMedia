"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Award } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function OyaSwimProject() {
  const { language } = useLanguage()
  const t = translations[language]

  const projectData = {
    title: "Oya Swim",
    category: t.work.projects.oyaSwim.category,
    description: t.work.projects.oyaSwim.description,
    client: "Oya Swim",
    duration: "6 months",
    team: "8 specialists",
    results: "300% brand recognition increase",
    year: "2023",
    services: ["Brand Strategy", "Visual Identity", "Digital Marketing", "Social Media"],
    challenge: language === "pt" 
      ? "A Oya Swim precisava de uma identidade de marca forte que refletisse sua filosofia de sustentabilidade e elegância no mercado de moda praia premium."
      : "Oya Swim needed a strong brand identity that reflected their philosophy of sustainability and elegance in the premium swimwear market.",
    solution: language === "pt"
      ? "Desenvolvemos uma identidade visual completa, estratégia de marca e campanhas digitais que posicionaram a Oya Swim como líder em moda praia sustentável."
      : "We developed a complete visual identity, brand strategy and digital campaigns that positioned Oya Swim as a leader in sustainable swimwear.",
    impact: [
      { metric: "300%", label: language === "pt" ? "Aumento no reconhecimento da marca" : "Brand recognition increase" },
      { metric: "250%", label: language === "pt" ? "Crescimento nas vendas online" : "Online sales growth" },
      { metric: "150%", label: language === "pt" ? "Aumento no engajamento social" : "Social engagement increase" },
      { metric: "85%", label: language === "pt" ? "Melhoria na percepção da marca" : "Brand perception improvement" }
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container-max section-padding py-6"
      >
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>{language === "pt" ? "Voltar aos Projetos" : "Back to Projects"}</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full mb-6"
            >
              {projectData.category}
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              {projectData.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {projectData.description}
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-20"
          >
            <Image
              src="/oya-swim.jpg"
              alt="Oya Swim Project"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{language === "pt" ? "Duração" : "Duration"}</h3>
              <p className="text-gray-300">{projectData.duration}</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{language === "pt" ? "Equipe" : "Team"}</h3>
              <p className="text-gray-300">{projectData.team}</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{language === "pt" ? "Resultado" : "Results"}</h3>
              <p className="text-gray-300">{projectData.results}</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{language === "pt" ? "Ano" : "Year"}</h3>
              <p className="text-gray-300">{projectData.year}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-gray-900/50">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "pt" ? "O Desafio" : "The Challenge"}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {projectData.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "pt" ? "A Solução" : "The Solution"}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {projectData.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "pt" ? "Serviços Prestados" : "Services Provided"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {projectData.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-orange-400/50 transition-all duration-300"
              >
                <h3 className="font-semibold text-orange-400">{service}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-900/50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "pt" ? "Resultados Alcançados" : "Results Achieved"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {projectData.impact.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {item.metric}
                </div>
                <p className="text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "pt" ? "Galeria do Projeto" : "Project Gallery"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`/projects/oya/oya-${item}.${item === 1 ? 'jpg' : 'png'}`}
                  alt={`Oya Swim Gallery ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900/50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "pt" ? "Gostou do que viu?" : "Like what you see?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "pt" 
                ? "Vamos criar algo incrível juntos. Entre em contato para discutir seu próximo projeto."
                : "Let's create something amazing together. Get in touch to discuss your next project."
              }
            </p>
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
              <span className="relative z-10">
                {language === "pt" ? "Iniciar Projeto" : "Start Your Project"}
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 