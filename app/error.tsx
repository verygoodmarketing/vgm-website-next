'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCcw } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[70vh]">
			<div className="max-w-2xl w-full text-center">
				<h1 className="text-5xl font-bold text-red-600 mb-4">Something went wrong!</h1>

				<Card className="mb-8">
					<CardContent className="p-8">
						<p className="text-lg text-gray-700 mb-6">
							We're sorry, but there was an error processing your request. Our team has been notified.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								onClick={reset}
								variant="blue"
								className="flex items-center justify-center"
							>
								<RefreshCcw className="mr-2 h-4 w-4" />
								Try Again
							</Button>

							<Button
								asChild
								variant="outline"
								className="flex items-center justify-center"
							>
								<Link href="/">
									<Home className="mr-2 h-4 w-4" />
									Back to Home
								</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
