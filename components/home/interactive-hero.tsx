'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Container from '@/components/shared/container'
import CustomButton from '@/components/shared/custom-button'
import { useToast } from '@/hooks/use-toast'

interface InteractiveHeroProps {
	serviceIndustries: string[]
}

export default function InteractiveHero({ serviceIndustries }: InteractiveHeroProps) {
	// Get toast function
	const { toast } = useToast()
	// Get search params
	const searchParams = useSearchParams()

	// Initialize state with the first industry in the array as default
	const [activeIndustry, setActiveIndustry] = useState<string>(serviceIndustries[0] || 'Tree Service')
	const [isClient, setIsClient] = useState(false)

	// Set isClient to true once the component mounts
	useEffect(() => {
		setIsClient(true)
	}, [])

	// Map of industries to their background images - memoized to prevent recreation
	const industryBackgrounds = useMemo<Record<string, string>>(
		() => ({
			Cleaning: '/images/hero/hero-bg-cleaning.jpg',
			Janitorial: '/images/hero/hero-bg-janitorial.jpg',
			'Pressure Washing': '/images/hero/hero-bg-pressure-washing.jpg',
			'Window Cleaning': '/images/hero/hero-bg-window-cleaning.jpg',
			'Lawn Care': '/images/hero/hero-bg-lawn-care.jpg',
			'Tree Service': '/images/hero/hero-bg-tree-service.jpg',
			Landscaping: '/images/hero/hero-bg-landscaping.jpg',
			'Snow Removal': '/images/hero/hero-bg-snow-removal.jpg',
			'General Contracting': '/images/hero/hero-bg-general-contracting.jpg',
			Plumbing: '/images/hero/hero-bg-plumbing.jpg',
			Handyman: '/images/hero/hero-bg-handyman.jpg',
			HVAC: '/images/hero/hero-bg-hvac.jpg',
			Electrical: '/images/hero/hero-bg-electrical.jpg',
			Painting: '/images/hero/hero-bg-painting.jpg',
			Roofing: '/images/hero/hero-bg-roofing.jpg',
			Fencing: '/images/hero/hero-bg-fencing.jpg',
		}),
		[]
	)

	// Handle URL parameters and localStorage on mount
	useEffect(() => {
		if (!isClient) return

		// First check URL parameters (highest priority)
		const industryParam = searchParams.get('industry')

		if (industryParam) {
			// Convert param to proper case format (e.g., "tree-service" to "Tree Service")
			const formattedIndustry = industryParam
				.split('-')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ')

			// Check if formatted industry exists in our list
			if (serviceIndustries.includes(formattedIndustry)) {
				setActiveIndustry(formattedIndustry)
				try {
					localStorage.setItem('selectedIndustry', formattedIndustry)
				} catch (e) {
					console.error('localStorage is not available:', e)
				}
				return
			}
		}

		// If no URL parameter, try localStorage
		try {
			const savedIndustry = localStorage.getItem('selectedIndustry')
			if (savedIndustry && serviceIndustries.includes(savedIndustry)) {
				setActiveIndustry(savedIndustry)
			}
		} catch (e) {
			console.error('localStorage is not available:', e)
		}
	}, [searchParams, serviceIndustries, isClient])

	// Function to handle industry selection
	const handleIndustryClick = (industry: string) => {
		setActiveIndustry(industry)
		if (isClient) {
			try {
				localStorage.setItem('selectedIndustry', industry)
			} catch (e) {
				console.error('localStorage is not available:', e)
			}
		}
	}

	// Function to convert industry name to URL param format
	const getIndustryParam = (industry: string): string => {
		return industry.toLowerCase().replace(/\s+/g, '-')
	}

	// Function to generate shareable link for current industry
	const getShareableLink = (): string => {
		if (!isClient) return ''

		try {
			const baseUrl = window.location.origin + window.location.pathname
			return `${baseUrl}?industry=${getIndustryParam(activeIndustry)}`
		} catch (e) {
			return ''
		}
	}

	// Function to copy shareable link to clipboard
	const copyShareableLink = () => {
		if (!isClient) return

		try {
			if (navigator.clipboard) {
				navigator.clipboard.writeText(getShareableLink())
				toast({
					title: 'Link copied!',
					description: 'Shareable link copied to clipboard',
					variant: 'default',
				})
			}
		} catch (e) {
			console.error('Clipboard API not available:', e)
		}
	}

	// Default to a fallback image if the specific industry image doesn't exist
	const backgroundImage = industryBackgrounds[activeIndustry] || '/images/hero/hero-bg-janitorial.jpg'

	return (
		<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-0">
			<div className="absolute inset-0 z-0">
				<div className="relative w-full h-full">
					<Image
						src={backgroundImage}
						alt={`${activeIndustry} service business website`}
						fill
						priority
						sizes="100vw"
						quality={90}
						className="object-cover transition-all duration-700 ease-in-out"
						onError={() => {
							// No need to handle errors directly in the onError prop
							// Let the fallback logic handle it
						}}
					/>
					<div className="absolute inset-0 bg-black/60" />
				</div>
			</div>

			<Container className="relative z-10">
				<div className="max-w-3xl mx-auto text-center text-white">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
						Your Website Is Your <span className="text-amber-400">Most Powerful</span> Marketing Asset
					</h1>
					<p className="text-xl md:text-2xl mb-8 leading-relaxed">
						For service businesses like yours, a professional website isn't just nice to have—it's essential. 97% of
						consumers search online for local services before making a call.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<CustomButton
							variant="blue"
							href="/contact"
						>
							Get Your Professional Website
						</CustomButton>
						<CustomButton
							variant="outline"
							href="/pricing"
						>
							See How It Works
						</CustomButton>
					</div>

					{/* Service Industries */}
					<div className="mt-12 pt-6 border-t border-white/20">
						<p className="text-sm uppercase tracking-wider mb-4">Industries We Serve:</p>
						<div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
							{serviceIndustries.map((industry, index) => (
								<button
									key={index}
									className={`text-sm px-4 py-2 rounded-full transition-all duration-300 cursor-pointer shadow-lg ${
										activeIndustry === industry
											? 'bg-amber-400 text-black font-medium transform scale-110'
											: 'bg-white/10 hover:bg-white/20 text-white hover:transform hover:scale-105'
									}`}
									onClick={() => handleIndustryClick(industry)}
									aria-label={`Show ${industry} website example`}
								>
									{industry}
								</button>
							))}
						</div>

						{/* Current selection */}
						{isClient && (
							<div className="flex flex-col items-center mt-4">
								<p className="text-xs text-white/80">
									Currently showing: <span className="font-medium text-amber-400">{activeIndustry}</span>
								</p>
								<button
									className="text-xs mt-2 text-white/70 hover:text-white underline flex items-center"
									onClick={copyShareableLink}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-3 w-3 mr-1"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
										/>
									</svg>
									Copy Shareable Link
								</button>
							</div>
						)}
					</div>
				</div>
			</Container>
		</section>
	)
}
