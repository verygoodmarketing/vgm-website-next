'use client'

import type React from 'react'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CustomButtonProps {
	children: React.ReactNode
	variant?: 'blue' | 'outline' | 'white'
	size?: 'sm' | 'md' | 'lg'
	href?: string
	onClick?: () => void
	className?: string
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
}

export default function CustomButton({
	children,
	variant = 'blue',
	size = 'md',
	href,
	onClick,
	className,
	disabled,
	type = 'button',
}: CustomButtonProps) {
	const variantStyles = {
		blue: 'bg-blue-600 hover:bg-blue-700 text-white',
		outline: 'bg-transparent border border-white text-white hover:bg-white/10',
		white: 'bg-white hover:bg-gray-100 text-blue-600',
	}

	const sizeStyles = {
		sm: 'text-sm px-4 py-2',
		md: 'text-base px-6 py-3',
		lg: 'text-lg px-8 py-4',
	}

	const buttonContent = (
		<Button
			className={cn(variantStyles[variant], className)}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</Button>
	)

	if (href) {
		return <Link href={href}>{buttonContent}</Link>
	}

	return buttonContent
}
