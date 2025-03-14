import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/shared/container'
import PageHeader from '@/components/shared/page-header'
import { ArrowLeft, ArrowRight, Video, Mail, CheckCircle } from 'lucide-react'

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

					<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
						<div className="text-center max-w-2xl mx-auto">
							<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
								<Video className="h-8 w-8 text-blue-600" />
							</div>
							<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Webinars Are Coming Soon</h2>
							<p className="text-gray-600 text-lg mb-8">
								We're planning an exciting schedule of live webinars and events to help you master marketing strategies.
								Join us for expert discussions, Q&A sessions, and interactive workshops.
							</p>

							<div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 mb-8">
								<h3 className="text-lg font-semibold mb-3">Get Notified About Upcoming Webinars</h3>
								<form
									method="post"
									action="#webinar-success"
									id="webinar-subscribe-form"
									className="flex flex-col sm:flex-row gap-3"
								>
									<input
										type="email"
										name="email"
										placeholder="Your email address"
										required
										className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
									<input
										type="submit"
										value="Subscribe"
										className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer"
									/>
								</form>

								{/* Success notification - hidden by default, shown when targeted */}
								<div
									id="webinar-success"
									className="hidden mt-4 p-3 bg-green-100 text-green-800 rounded-lg border border-green-200 items-center justify-center target:flex"
								>
									<CheckCircle className="h-5 w-5 mr-2" />
									<span>Thank you! You've been successfully subscribed.</span>
								</div>
							</div>

							<div className="mt-8">
								<h3 className="text-lg font-semibold mb-4">In the meantime, explore our articles:</h3>
								<Link
									href="/resources/articles"
									className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
								>
									Browse Articles <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	)
}
