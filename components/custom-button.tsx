"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "secondary" | "ghost" | "link" | "amber" | "blue"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  href?: string
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      href,
      children,
      onClick,
      disabled,
      type,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      amber: "bg-amber-500 text-white hover:bg-amber-600",
      blue: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    }

    const sizeStyles = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-9 px-3 text-xs rounded-md",
      lg: "h-11 px-8 text-base rounded-md",
      icon: "h-10 w-10",
    }

    const buttonStyles = cn(baseStyles, sizeStyles[size], className)

    const buttonContent = (
      <Button
        className={cn(variantStyles[variant], className)}
        onClick={onClick}
        disabled={disabled}
        type={type}
        {...props}
        ref={ref}
      >
        {children}
      </Button>
    )

    if (href) {
      return <Link href={href}>{buttonContent}</Link>
    }

    return buttonContent
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }

