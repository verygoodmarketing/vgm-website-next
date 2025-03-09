"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0)
  }, []) // This effect runs only once after the initial render

  return null // This component doesn't render anything
}

