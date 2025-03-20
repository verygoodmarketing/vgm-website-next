'use client'

import { type ReactNode, useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface AnimatedContentProps {
	children: ReactNode
}

// Create the animation variants outside the component to avoid recreating them on each render
const contentVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

// Use memo to prevent unnecessary re-renders
const AnimatedContent = memo(function AnimatedContent({ children }: AnimatedContentProps) {
	const pathname = usePathname()
	const [key, setKey] = useState(pathname)

	useEffect(() => {
		// Only update when pathname changes
		if (pathname !== key) {
			setKey(pathname)
		}
	}, [pathname, key])

	return (
		<motion.div
			key={key}
			initial="hidden"
			animate="visible"
			variants={contentVariants}
			transition={{ duration: 0.3, delay: 0.2 }}
		>
			{children}
		</motion.div>
	)
})

export default AnimatedContent
