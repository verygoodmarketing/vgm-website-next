import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
	title: 'Webinars & Events - Resources',
	description: 'Join our upcoming webinars or watch recordings of past events on marketing topics.',
}

export default function WebinarsPage() {
	return (
		<div>
			<PageHeader
				title="Webinars & Events"
				description="Join our upcoming webinars or watch recordings of past events on marketing topics."
			/>

			<section className="py-12 md:py-20">
				<Container>
					<div className="mb-8">
						<Link
							href="/resources"
							className="inline-flex items-center text-blue-600 hover:text-blue-800"
						>
							<ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
						</Link>
					</div>

					<div className="text-center py-16">
						<h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
						<p className="text-gray-600 max-w-lg mx-auto">
							We're currently planning our webinar schedule. Check back soon or subscribe to our newsletter to be
							notified about upcoming events.
						</p>
						<div className="mt-8">
							<p className="text-gray-600 mb-4">In the meantime, check out our articles:</p>
							<Link
								href="/resources/articles"
								className="inline-flex items-center text-blue-600 hover:text-blue-800"
							>
								Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</div>
	)
}
