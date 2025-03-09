"use client"

import { createContext, useState, type ReactNode } from "react"

type TransitionType = "fade" | "slideUp" | "slideLeft" | "scale" | "none"

interface TransitionContextType {
  transitionType: TransitionType
  duration: number
  setTransitionType: (type: TransitionType) => void
  setDuration: (duration: number) => void
}

export const TransitionContext = createContext<TransitionContextType>({
  transitionType: "fade",
  duration: 0.3,
  setTransitionType: () => {},
  setDuration: () => {},
})

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [transitionType, setTransitionType] = useState<TransitionType>("fade")
  const [duration, setDuration] = useState(0.3)

  return (
    <TransitionContext.Provider
      value={{
        transitionType,
        duration,
        setTransitionType,
        setDuration,
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

