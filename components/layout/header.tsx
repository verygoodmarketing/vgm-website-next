'use client'

import type React from 'react'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
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
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'About', href: '/about' },
		{ name: 'Resources', href: '/resources' },
		{ name: 'Contact', href: '/contact' },
	]

	const isActive = (path: string) => {
		if (path === '/') {
			return pathname === '/'
		}
		return pathname === path || pathname.startsWith(`${path}/`)
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
		}, 500) // Match this with the CSS animation duration
	}, [clearAnimationTimeout])

	// Handle body scroll lock
	useEffect(() => {
		if (menuVisible) {
			// Save the current scroll position
			const scrollY = window.scrollY
			
			// Add styles to prevent scrolling while maintaining position
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.width = '100%'
			document.body.style.overflow = 'hidden'
		} else {
			// Restore scrolling and position
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.width = ''
			document.body.style.overflow = ''
			
			// Restore scroll position
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
			}
		}
		
		// Cleanup function
		return () => {
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.width = ''
			document.body.style.overflow = ''
		}
	}, [menuVisible])

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
		}
	}, [menuVisible, closeMenu, clearAnimationTimeout])

	// Calculate animation origin position
	const getAnimationOrigin = () => {
		if (!menuButtonRef.current) return 'top right'

		const rect = menuButtonRef.current.getBoundingClientRect()
		const x = rect.left + rect.width / 2
		const y = rect.top + rect.height / 2

		return `${x}px ${y}px`
	}

	return (
		<header className="sticky top-0 z-50 w-full bg-white shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex h-20 items-center justify-between relative">
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
								priority={true}
								style={{
									width: '200px', // If you change width with CSS
									height: 'auto', // Set height to auto to maintain aspect ratio
								}}
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
						className="absolute top-6 right-2 rounded-full p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden z-50"
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
						className="absolute top-6 right-6 rounded-full p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 z-[60]"
						onClick={closeMenu}
						aria-label="Close menu"
					>
						<X
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>

					{/* Logo at top - centered, larger, without icon */}
					<div className="absolute top-[74px] left-0 right-0 flex justify-center">
						<Image
							src="/vg-horizontal-blue.png"
							alt="Very Good Marketing"
							width={280}
							height={56}
							style={{
								width: '280px', // Increased size from 180px to 280px
								height: 'auto', // Set height to auto to maintain aspect ratio
							}}
						/>
					</div>

					{/* Centered navigation */}
					<nav className="flex flex-col items-center justify-center space-y-6 px-4 text-center mt-32">
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
