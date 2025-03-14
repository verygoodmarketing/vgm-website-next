'use client'

import { useEffect } from 'react'

export default function SectionScrollHandler() {
	useEffect(() => {
		// Check if there's a scrollToId in sessionStorage
		const scrollToId = sessionStorage.getItem('scrollToId')

		if (scrollToId) {
			// Clear it immediately to prevent future unwanted scrolls
			sessionStorage.removeItem('scrollToId')

			// Give the page a moment to fully render before scrolling
			setTimeout(() => {
				const element = document.getElementById(scrollToId)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}, 300)
		} else {
			// Check if there's a hash in the URL directly
			const hash = window.location.hash
			if (hash) {
				const id = hash.replace('#', '')
				setTimeout(() => {
					const element = document.getElementById(id)
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' })
					}
				}, 300)
			}
		}
	}, [])

	// This component doesn't render anything
	return null
}
