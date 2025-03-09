"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps {
  children: React.ReactNode
  variant?: "blue" | "outline" | "white"
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function CustomButton({
  children,
  variant = "blue",
  href,
  onClick,
  className,
  disabled,
  type = "button",
}: CustomButtonProps) {
  const variantStyles = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
    white: "bg-white hover:bg-gray-100 text-blue-600",
  }

  const buttonContent = (
    <Button className={cn(variantStyles[variant], className)} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </Button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}

