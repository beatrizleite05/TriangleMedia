"use client"
import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [key, setKey] = useState(0)
  const wordsArray = words.split(" ")

  // Reset animation when words change
  useEffect(() => {
    setHasAnimated(false)
    setKey(prev => prev + 1)
    
    // Reset all spans to initial state immediately
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        {
          duration: 0,
        },
      )
    }
  }, [words, animate, filter, scope])

  useEffect(() => {
    if (hasAnimated || !scope.current) return

    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        },
      )
      setHasAnimated(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [scope.current, hasAnimated, words, animate, filter, duration])

  const renderWords = () => {
    return (
      <motion.div ref={scope} key={key}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}-${words}-${key}`}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={className}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  )
}
