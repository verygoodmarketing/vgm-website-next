"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)

  // Skip animation on first mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstMount(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Add an effect to handle scroll restoration
  useEffect(() => {
    if (!isFirstMount) {
      window.scrollTo(0, 0)
    }
  }, [isFirstMount])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={isFirstMount ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

