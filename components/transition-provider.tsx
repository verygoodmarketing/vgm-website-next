"use client"

import { type ReactNode, createContext, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface TransitionContextType {
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
})

export const useTransition = () => useContext(TransitionContext)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Only trigger transition when pathname actually changes
    if (pathname !== prevPathname) {
      // Start transition
      setIsTransitioning(true)

      // Scroll to top immediately when route changes
      window.scrollTo(0, 0)

      // After a short delay, update the previous pathname
      const timer = setTimeout(() => {
        setPrevPathname(pathname)

        // After transition completes, reset the state
        setTimeout(() => {
          setIsTransitioning(false)
        }, 300) // Match this with your CSS transition duration
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [pathname, prevPathname])

  return (
    <TransitionContext.Provider value={{ isTransitioning }}>
      {children}
      <div
        className="fixed inset-0 bg-white pointer-events-none z-50 transition-opacity duration-300"
        style={{
          opacity: isTransitioning ? 1 : 0,
        }}
        aria-hidden="true"
      />
    </TransitionContext.Provider>
  )
}

