"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Award } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function SoulProject() {
  const { language } = useLanguage()
  const t = translations[language]

  const projectData = {
    title: "Soul",
    category: t.work.projects.soul.category,
    description: t.work.projects.soul.description,
    client: "Soul",
    duration: "4 months",
    team: "6 specialists",
    results: "500% conversion increase",
    year: "2023",
    services: ["Digital Marketing", "PPC Campaigns", "Social Media Ads", "Email Marketing"],
    challenge: language === "pt" 
      ? "A Soul precisava de uma estratégia digital abrangente para aumentar suas conversões online e expandir sua presença no mercado digital."
      : "Soul needed a comprehensive digital strategy to increase their online conversions and expand their digital market presence.",
    solution: language === "pt"
      ? "Implementamos uma campanha multi-canal integrada com PPC, redes sociais e email marketing, otimizada por dados em tempo real."
      : "We implemented an integrated multi-channel campaign with PPC, social media and email marketing, optimized by real-time data.",
    impact: [
      { metric: "500%", label: language === "pt" ? "Aumento nas conversões" : "Conversion increase" },
      { metric: "350%", label: language === "pt" ? "Crescimento no tráfego" : "Traffic growth" },
      { metric: "280%", label: language === "pt" ? "Melhoria no ROI" : "ROI improvement" },
      { metric: "90%", label: language === "pt" ? "Redução no custo por aquisição" : "Cost per acquisition reduction" }
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full mb-6"
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
              src="/soul.jpg"
              alt="Soul Project"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent"></div>
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

      {/* Campaign Strategy */}
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
              {language === "pt" ? "Estratégia da Campanha" : "Campaign Strategy"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-orange-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {language === "pt" ? "Análise de Dados" : "Data Analysis"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" 
                  ? "Análise profunda do comportamento do usuário e identificação de oportunidades de otimização."
                  : "Deep analysis of user behavior and identification of optimization opportunities."
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-orange-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {language === "pt" ? "Segmentação Avançada" : "Advanced Targeting"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" 
                  ? "Segmentação precisa de audiências para maximizar a relevância e eficácia das campanhas."
                  : "Precise audience targeting to maximize campaign relevance and effectiveness."
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-orange-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {language === "pt" ? "Otimização Contínua" : "Continuous Optimization"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" 
                  ? "Monitoramento em tempo real e ajustes constantes para melhorar performance."
                  : "Real-time monitoring and constant adjustments to improve performance."
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
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
                  src={`/projects/soul/soul-${item}.${item === 1 ? 'jpg' : 'png'}`}
                  alt={`Soul Gallery ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "pt" ? "Pronto para aumentar suas conversões?" : "Ready to boost your conversions?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "pt" 
                ? "Vamos criar uma estratégia digital que gere resultados reais para seu negócio."
                : "Let's create a digital strategy that generates real results for your business."
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