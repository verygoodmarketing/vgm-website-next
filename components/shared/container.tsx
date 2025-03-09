import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl", className)}>{children}</div>
}

