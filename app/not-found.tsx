'use client'

import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'
import { CustomButton } from '@/components/custom-button'
import { Card, CardContent } from '@/components/ui/card'

export default function NotFound() {
	return (
		<div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
			<div className="max-w-2xl w-full text-center">
				<h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
				<h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>

				<Card className="mb-8">
					<CardContent className="p-8">
						<p className="text-lg text-gray-700 mb-6">
							We couldn't find the page you were looking for. It might have been moved, deleted, or perhaps the URL was
							mistyped.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
							<CustomButton
								asChild
								variant="blue"
								className="flex items-center justify-center"
							>
								<Link href="/">
									<Home className="mr-2 h-4 w-4" />
									Back to Home
								</Link>
							</CustomButton>

							<CustomButton
								asChild
								variant="outline"
								className="flex items-center justify-center"
							>
								<Link href="/contact">
									<Search className="mr-2 h-4 w-4" />
									Contact Support
								</Link>
							</CustomButton>
						</div>

						<div className="flex items-center justify-center">
							<ArrowLeft className="h-4 w-4 mr-2 text-blue-600" />
							<button
								onClick={() => window.history.back()}
								className="text-blue-600 hover:text-blue-800 transition-colors"
							>
								Go back to previous page
							</button>
						</div>
					</CardContent>
				</Card>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">Services</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="/services#website-creation"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Website Creation
								</Link>
							</li>
							<li>
								<Link
									href="/services#google-ads"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Google Ads
								</Link>
							</li>
							<li>
								<Link
									href="/services#social-media"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Social Media
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-2">About</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="/about"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Our Company
								</Link>
							</li>
							<li>
								<Link
									href="/resources"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Resources
								</Link>
							</li>
							<li>
								<Link
									href="/resources/articles"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Articles
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-2">Legal</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="/privacy"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
						<ul className="space-y-1">
							<li>
								<Link
									href="/contact"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Get in Touch
								</Link>
							</li>
							<li>
								<Link
									href="/contact?tab=schedule"
									className="text-blue-600 hover:text-blue-800 transition-colors"
								>
									Schedule a Call
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
