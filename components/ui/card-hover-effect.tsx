"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon: React.ReactNode
    gradient: string
    features?: string[]
    price?: string
    period?: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatedBorder
            className="absolute inset-0 h-full w-full bg-black rounded-2xl"
            hoveredIndex={hoveredIndex}
            index={idx}
          />
          <Card>
            <div className="relative z-20 p-6">
              {/* Price Badge */}
              {item.price && (
                <div className="absolute -top-1 -right-1 z-30">
                  <div className="gradient-bg text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {item.price}
                    {item.period && <span className="text-xs opacity-80">{item.period}</span>}
                  </div>
                </div>
              )}
              
              <div
                className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
              {item.features && (
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
    className={`rounded-2xl h-full w-full bg-black border border-gray-700 overflow-hidden relative z-20 ${className}`}
    >
      <div className="relative z-50 h-full">{children}</div>
    </div>
  )
}

export const AnimatedBorder = ({
  className,
  hoveredIndex,
  index,
}: {
  className?: string
  hoveredIndex: number | null
  index: number
}) => {
  return (
    <motion.div
      className={`${className} bg-black`}
      layoutId={hoveredIndex === index ? "hovered-border" : undefined}
      animate={{
        borderColor: hoveredIndex === index ? "rgba(255, 106, 0, 0.5)" : "rgba(75, 85, 99, 1)",
        boxShadow: hoveredIndex === index ? "0 0 20px rgba(255, 106, 0, 0.3), 0 0 40px rgba(255, 200, 1, 0.1)" : "none",
      }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.3,
      }}
    />
  )
}
