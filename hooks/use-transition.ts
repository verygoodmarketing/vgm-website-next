"use client"

import { useContext } from "react"
import { TransitionContext } from "@/context/transition-context"

export function useTransition() {
  const context = useContext(TransitionContext)

  if (context === undefined) {
    throw new Error("useTransition must be used within a TransitionProvider")
  }

  return context
}

