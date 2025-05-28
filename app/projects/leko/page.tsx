"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Award, Heart, MessageCircle, Share2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function LekoProject() {
  const { language } = useLanguage()
  const t = translations[language]

  const projectData = {
    title: "Leko",
    category: t.work.projects.leko.category,
    description: t.work.projects.leko.description,
    client: "Leko",
    duration: "8 months",
    team: "10 specialists",
    results: "1M+ followers gained",
    year: "2023",
    services: ["Social Media Strategy", "Content Creation", "Influencer Marketing", "Community Management"],
    challenge: language === "pt" 
      ? "A Leko precisava de uma estratégia de redes sociais viral que gerasse consciência massiva da marca e construísse uma comunidade engajada."
      : "Leko needed a viral social media strategy that would generate massive brand awareness and build an engaged community.",
    solution: language === "pt"
      ? "Desenvolvemos uma estratégia de conteúdo viral, parcerias com influenciadores e gestão de comunidade que resultou em crescimento exponencial."
      : "We developed a viral content strategy, influencer partnerships and community management that resulted in exponential growth.",
    impact: [
      { metric: "1M+", label: language === "pt" ? "Novos seguidores" : "New followers" },
      { metric: "500%", label: language === "pt" ? "Aumento no engajamento" : "Engagement increase" },
      { metric: "300%", label: language === "pt" ? "Crescimento na consciência da marca" : "Brand awareness growth" },
      { metric: "250%", label: language === "pt" ? "Aumento no tráfego do site" : "Website traffic increase" }
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-black text-sm font-semibold rounded-full mb-6"
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
              src="/leko.jpg"
              alt="Leko Project"
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

      {/* Social Media Strategy */}
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
              {language === "pt" ? "Estratégia de Redes Sociais" : "Social Media Strategy"}
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
              <Heart className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {language === "pt" ? "Conteúdo Viral" : "Viral Content"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" 
                  ? "Criação de conteúdo altamente compartilhável que ressoa com o público-alvo e gera engajamento orgânico."
                  : "Creation of highly shareable content that resonates with the target audience and generates organic engagement."
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
              <MessageCircle className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {language === "pt" ? "Gestão de Comunidade" : "Community Management"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" 
                  ? "Construção e gestão ativa de uma comunidade engajada através de interações autênticas e consistentes."
                  : "Building and actively managing an engaged community through authentic and consistent interactions."
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
              <Share2 className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                {language === "pt" ? "Parcerias Estratégicas" : "Strategic Partnerships"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {language === "pt" 
                  ? "Colaborações com influenciadores e criadores de conteúdo para amplificar o alcance da marca."
                  : "Collaborations with influencers and content creators to amplify brand reach."
                }
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Showcase */}
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
              {language === "pt" ? "Showcase de Conteúdo" : "Content Showcase"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
              >
                <Image
                  src={`/projects/leko/leko-${item}.${item === 1 ? 'jpg' : 'png'}`}
                  alt={`Leko Content ${item}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span className="flex items-center gap-1">
                      <Heart size={16} />
                      {Math.floor(Math.random() * 50) + 10}k
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      {Math.floor(Math.random() * 10) + 1}k
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 size={16} />
                      {Math.floor(Math.random() * 5) + 1}k
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
              {language === "pt" ? "Cronograma do Projeto" : "Project Timeline"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-yellow-400"></div>
            
            <div className="space-y-12">
              {[
                {
                  phase: language === "pt" ? "Fase 1: Estratégia" : "Phase 1: Strategy",
                  duration: language === "pt" ? "Mês 1-2" : "Month 1-2",
                  description: language === "pt" 
                    ? "Desenvolvimento da estratégia de conteúdo e identificação de influenciadores-chave."
                    : "Content strategy development and key influencer identification."
                },
                {
                  phase: language === "pt" ? "Fase 2: Criação" : "Phase 2: Creation",
                  duration: language === "pt" ? "Mês 3-4" : "Month 3-4",
                  description: language === "pt" 
                    ? "Produção de conteúdo viral e estabelecimento de parcerias estratégicas."
                    : "Viral content production and strategic partnership establishment."
                },
                {
                  phase: language === "pt" ? "Fase 3: Lançamento" : "Phase 3: Launch",
                  duration: language === "pt" ? "Mês 5-6" : "Month 5-6",
                  description: language === "pt" 
                    ? "Lançamento das campanhas e início da gestão ativa da comunidade."
                    : "Campaign launch and active community management initiation."
                },
                {
                  phase: language === "pt" ? "Fase 4: Otimização" : "Phase 4: Optimization",
                  duration: language === "pt" ? "Mês 7-8" : "Month 7-8",
                  description: language === "pt" 
                    ? "Otimização baseada em dados e expansão das estratégias mais eficazes."
                    : "Data-driven optimization and expansion of most effective strategies."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
                      <h3 className="text-xl font-bold mb-2 text-orange-400">{item.phase}</h3>
                      <p className="text-sm text-gray-400 mb-3">{item.duration}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full border-4 border-black relative z-10"></div>
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
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
              {language === "pt" ? "Pronto para viralizar?" : "Ready to go viral?"}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "pt" 
                ? "Vamos criar uma estratégia de redes sociais que faça sua marca se destacar e conquistar milhões."
                : "Let's create a social media strategy that makes your brand stand out and reach millions."
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