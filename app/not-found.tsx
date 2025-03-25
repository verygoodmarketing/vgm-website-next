'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { CustomButton } from '@/components/custom-button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Function to create a smooth scroll link that works with Next.js
const SmoothScrollLink = ({
	href,
	children,
	className,
}: {
	href: string
	children: React.ReactNode
	className?: string
}) => {
	const router = useRouter()
	const [path, hash] = href.split('#')

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		router.push(path)

		// Store the hash in sessionStorage to handle scrolling after navigation
		if (hash) {
			sessionStorage.setItem('scrollToId', hash)
		}
	}

	return (
		<Link
			href={href}
			onClick={handleClick}
			className={className}
		>
			{children}
		</Link>
	)
}

export default function NotFound() {
	const router = useRouter()

	// Function to handle section navigation
	const navigateToSection = (url: string, sectionId: string) => {
		router.push(url)
		// Add a small delay to ensure the page has loaded before scrolling
		setTimeout(() => {
			const section = document.getElementById(sectionId)
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' })
			}
		}, 100)
	}

	return (
		<div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-[80vh]">
			<div className="max-w-3xl w-full text-center">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-8"
				>
					<div className="relative h-64 w-full mb-6">
						<Image
							src="/images/404-illustration.svg"
							alt="404 Illustration"
							fill
							sizes="100vw"
							priority
							className="object-contain"
							onError={e => {
								// Fallback if the image doesn't exist
								const target = e.target as HTMLImageElement
								target.style.display = 'none'
							}}
						/>
					</div>
					<h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-2">
						404
					</h1>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Card className="mb-10 shadow-lg border-0 overflow-hidden">
						<CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
							<p className="text-lg text-gray-700 mb-8">
								We couldn't find the page you were looking for. It might have been moved, deleted, or perhaps the URL
								was mistyped.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<CustomButton
										asChild
										variant="blue"
										className="flex items-center justify-center shadow-md w-full sm:w-auto px-6 py-2"
									>
										<Link
											href="/"
											className="flex items-center"
										>
											<Home className="mr-2 h-4 w-4" />
											<span>Return Home</span>
										</Link>
									</CustomButton>
								</motion.div>

								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<CustomButton
										asChild
										variant="outline"
										className="flex items-center justify-center border-blue-200 hover:bg-blue-50 transition-colors w-full sm:w-auto px-6 py-2"
									>
										<Link
											href="/contact"
											className="flex items-center text-blue-600"
										>
											<Search className="mr-2 h-4 w-4" />
											<span>Contact Support</span>
										</Link>
									</CustomButton>
								</motion.div>
							</div>

							<motion.div
								className="flex items-center justify-center"
								whileHover={{ x: -5 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<ArrowLeft className="h-4 w-4 mr-2 text-blue-600" />
								<button
									onClick={() => window.history.back()}
									className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
								>
									Go back to previous page
								</button>
							</motion.div>
						</CardContent>
					</Card>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="bg-gray-50 rounded-2xl p-6 shadow-md"
				>
					<h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<h3 className="font-semibold text-gray-900 mb-3 border-b pb-2 border-gray-100">Pricing</h3>
							<ul className="space-y-2">
								<li>
									<SmoothScrollLink
										href="/pricing#website-creation"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline text-left"
									>
										Website Creation
									</SmoothScrollLink>
								</li>
								<li>
									<SmoothScrollLink
										href="/pricing#google-ads"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline text-left"
									>
										Google Ads
									</SmoothScrollLink>
								</li>
								<li>
									<SmoothScrollLink
										href="/pricing#social-media"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline text-left"
									>
										Social Media
									</SmoothScrollLink>
								</li>
							</ul>
						</div>

						<div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<h3 className="font-semibold text-gray-900 mb-3 border-b pb-2 border-gray-100">About</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/about"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Our Company
									</Link>
								</li>
								<li>
									<Link
										href="/resources"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Resources
									</Link>
								</li>
								<li>
									<Link
										href="/resources/articles"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Articles
									</Link>
								</li>
							</ul>
						</div>

						<div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<h3 className="font-semibold text-gray-900 mb-3 border-b pb-2 border-gray-100">Legal</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/privacy"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</div>

						<div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<h3 className="font-semibold text-gray-900 mb-3 border-b pb-2 border-gray-100">Contact</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/contact"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Get in Touch
									</Link>
								</li>
								<li>
									<Link
										href="/contact?tab=schedule"
										className="text-blue-600 hover:text-blue-800 transition-colors block hover:underline"
									>
										Schedule a Call
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
