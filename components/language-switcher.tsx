"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full p-1">
      <motion.button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
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
        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
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
  )
}
