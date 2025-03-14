import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
	title: 'Marketing Guides - Resources',
	description: 'Step-by-step guides to help you implement effective marketing strategies for your business.',
}

export default function GuidesPage() {
	return (
		<div>
			<PageHeader
				title="Marketing Guides"
				description="Step-by-step guides to help you implement effective marketing strategies for your business."
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
							We're currently developing our collection of marketing guides. Check back soon or subscribe to our
							newsletter to be notified when they're available.
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
