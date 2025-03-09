"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface AnimatedContentProps {
  children: ReactNode
}

export default function AnimatedContent({ children }: AnimatedContentProps) {
  const pathname = usePathname()
  const [key, setKey] = useState(pathname)

  useEffect(() => {
    setKey(pathname)
  }, [pathname])

  return (
    <motion.div key={key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
      {children}
    </motion.div>
  )
}

