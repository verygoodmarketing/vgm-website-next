'use client'

import type React from 'react'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Mountain, X } from 'lucide-react'
import { CustomButton } from '@/components/custom-button'

export default function Header() {
	// Separate state for menu visibility and animation
	const [menuVisible, setMenuVisible] = useState(false)
	const [animationState, setAnimationState] = useState<'idle' | 'opening' | 'open' | 'closing'>('idle')
	const menuButtonRef = useRef<HTMLButtonElement>(null)
	const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
	const pathname = usePathname()

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Services', href: '/services' },
		{ name: 'About', href: '/about' },
		{ name: 'Resources', href: '/blog' },
		{ name: 'Contact', href: '/contact' },
	]

	const isActive = (path: string) => {
		return pathname === path
	}

	// Clear any existing timeouts to prevent race conditions
	const clearAnimationTimeout = useCallback(() => {
		if (animationTimeoutRef.current) {
			clearTimeout(animationTimeoutRef.current)
			animationTimeoutRef.current = null
		}
	}, [])

	const openMenu = useCallback(() => {
		// Clear any existing timeouts
		clearAnimationTimeout()

		// First make the menu visible
		setMenuVisible(true)

		// Then start the opening animation in the next frame
		// This ensures the menu is in the DOM before animation starts
		requestAnimationFrame(() => {
			setAnimationState('opening')

			// Set a timeout to mark animation as complete
			animationTimeoutRef.current = setTimeout(() => {
				setAnimationState('open')
			}, 500) // Match this with the CSS animation duration
		})

		// Lock body scroll
		document.body.style.overflow = 'hidden'
	}, [clearAnimationTimeout])

	const closeMenu = useCallback(() => {
		// Clear any existing timeouts
		clearAnimationTimeout()

		// Start the closing animation
		setAnimationState('closing')

		// Set a timeout to hide the menu after animation completes
		animationTimeoutRef.current = setTimeout(() => {
			setMenuVisible(false)
			setAnimationState('idle')
			// Restore body scroll
			document.body.style.overflow = ''
		}, 500) // Match this with the CSS animation duration
	}, [clearAnimationTimeout])

	// Handle escape key to close menu
	useEffect(() => {
		const handleEscKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && menuVisible) {
				closeMenu()
			}
		}

		window.addEventListener('keydown', handleEscKey)

		return () => {
			window.removeEventListener('keydown', handleEscKey)
			clearAnimationTimeout()
			// Ensure body scroll is restored when component unmounts
			document.body.style.overflow = ''
		}
	}, [menuVisible, closeMenu, clearAnimationTimeout])

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			clearAnimationTimeout()
		}
	}, [clearAnimationTimeout])

	// Calculate animation origin position
	const getAnimationOrigin = () => {
		if (!menuButtonRef.current) return 'top right'

		const rect = menuButtonRef.current.getBoundingClientRect()
		const x = rect.left + rect.width / 2
		const y = rect.top + rect.height / 2

		return `${x}px ${y}px`
	}

	return (
		<header className="sticky top-0 z-40 w-full bg-white shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex h-20 items-center justify-between">
					<div className="flex-shrink-0">
						<Link
							href="/"
							className="flex items-center"
						>
							<Image
								src="/vg-horizontal-blue.png"
								alt="Very Good Marketing"
								width={200}
								height={40}
								priority
							/>
						</Link>
					</div>

					{/* Desktop navigation */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map(item => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-base font-medium transition-colors duration-300 ${
									isActive(item.href) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					<div className="hidden md:flex">
						<CustomButton
							asChild
							variant="blue"
							href="/contact"
						>
							Free Consultation
						</CustomButton>
					</div>

					{/* Mobile menu button */}
					<button
						ref={menuButtonRef}
						type="button"
						onClick={openMenu}
						className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden z-50"
						aria-expanded={menuVisible}
						aria-label="Open main menu"
					>
						<Menu
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>
				</div>
			</div>

			{/* Full-screen mobile menu with circular animation */}
			{menuVisible && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${
						animationState === 'opening'
							? 'menu-opening'
							: animationState === 'closing'
								? 'menu-closing'
								: animationState === 'open'
									? 'menu-open'
									: ''
					}`}
					style={
						{
							'--origin': getAnimationOrigin(),
						} as React.CSSProperties
					}
				>
					{/* Close button */}
					<button
						type="button"
						className="absolute top-6 right-6 rounded-full p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						onClick={closeMenu}
						aria-label="Close menu"
					>
						<X
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>

					{/* Logo at top */}
					<div className="absolute top-6 left-6 flex items-center">
						<Mountain className="h-6 w-6 mr-2 text-blue-600" />
						<Image
							src="/vg-horizontal-blue.png"
							alt="Very Good Marketing"
							width={120}
							height={24}
							className="h-6 w-auto"
						/>
					</div>

					{/* Centered navigation */}
					<nav className="flex flex-col items-center justify-center space-y-6 px-4 text-center">
						{navigation.map(item => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-2xl font-medium transition-colors duration-300 ${
									isActive(item.href) ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
								}`}
								onClick={closeMenu}
							>
								{item.name}
							</Link>
						))}
						<div className="pt-8 mt-4">
							<CustomButton
								asChild
								variant="blue"
								size="lg"
								onClick={closeMenu}
							>
								<Link href="/contact">Free Consultation</Link>
							</CustomButton>
						</div>
					</nav>
				</div>
			)}
		</header>
	)
}
