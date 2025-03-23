import type { Metadata } from 'next'
import Container from '@/components/shared/container'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Thank You For Your Submission',
	description: 'Thank you for contacting Very Good Marketing Co. LLC. We have received your message.',
	robots: {
		index: false,
		follow: false,
	},
}

export default function ThankYouPage() {
	return (
		<div className="bg-white min-h-screen">
			<Container className="flex flex-col items-center justify-center py-16 px-4">
				<div className="max-w-2xl text-center">
					<div className="flex justify-center mb-6">
						<CheckCircle className="w-16 h-16 text-blue-600" />
					</div>
					<h1 className="text-4xl font-bold tracking-tight mb-6 text-blue-600">Thank You!</h1>
					<h2 className="text-2xl font-semibold mb-4 text-gray-800">We've Got It</h2>

					<div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
						<h3 className="text-xl font-medium mb-4 text-gray-900">What Happens Next</h3>
						<p className="text-lg mb-4 text-gray-800">
							Our team will contact you within 24 business hours by phone or email with an invitation to schedule a
							meeting.
						</p>
						<p className="text-gray-600">We appreciate your interest and look forward to speaking with you soon.</p>
					</div>

					<div className="mt-8">
						<h3 className="text-lg font-medium mb-4 text-gray-800">Explore More</h3>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/services"
								className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
								target="_top"
							>
								Our Services
							</Link>
							<Link
								href="/about"
								className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
								target="_top"
							>
								About Us
							</Link>
							<Link
								href="/resources"
								className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
								target="_top"
							>
								Resources
							</Link>
							<Link
								href="/success-stories"
								className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors"
								target="_top"
							>
								Success Stories
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
