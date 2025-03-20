'use client'

import { type ReactNode, createContext, useContext, useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'

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

	// Memoize scroll restoration function to prevent unnecessary recreations
	const scrollToTop = useCallback(() => {
		if (typeof window !== 'undefined') {
			// Use requestAnimationFrame to ensure the scroll happens in the next paint
			window.requestAnimationFrame(() => {
				window.scrollTo({
					top: 0,
					behavior: 'instant', // Use instant instead of smooth to prevent animation jank
				})
			})
		}
	}, [])

	useEffect(() => {
		// Only trigger transition when pathname actually changes
		if (pathname !== prevPathname) {
			// Start transition
			setIsTransitioning(true)

			// Scroll to top using the optimized function
			scrollToTop()

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
	}, [pathname, prevPathname, scrollToTop])

	return (
		<TransitionContext.Provider value={{ isTransitioning }}>
			{children}
			<div
				className="fixed inset-x-0 bottom-0 top-20 bg-white pointer-events-none z-50 transition-opacity duration-300"
				style={{
					opacity: isTransitioning ? 1 : 0,
				}}
				aria-hidden="true"
			/>
		</TransitionContext.Provider>
	)
}
