"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

export default function FloatingLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-full p-1 shadow-lg">
        <motion.button
          onClick={() => setLanguage("pt")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            language === "pt"
              ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black"
              : "text-gray-300 hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PT
        </motion.button>
        <motion.button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            language === "en"
              ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black"
              : "text-gray-300 hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
      </div>
    </motion.div>
  )
} 