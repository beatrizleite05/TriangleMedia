"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const beams = beamsRef.current
    if (!beams) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      beams.style.setProperty("--mouse-x", `${x}px`)
      beams.style.setProperty("--mouse-y", `${y}px`)
    }

    beams.addEventListener("mousemove", handleMouseMove)
    return () => beams.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={beamsRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `
          radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(255, 106, 0, 0.05), 
            transparent 40%),
          radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(255, 200, 1, 0.03), 
            transparent 40%)
        `,
      }}
    >
      {/* Animated beams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          style={{
            width: "100%",
            top: `${20 + i * 15}%`,
            left: 0,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Vertical beams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent"
          style={{
            height: "100%",
            left: `${25 + i * 20}%`,
            top: 0,
          }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.7,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
