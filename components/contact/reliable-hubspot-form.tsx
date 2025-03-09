'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReliableHubspotForm() {
	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle className="text-2xl">Get in Touch</CardTitle>
			</CardHeader>
			<CardContent>
				{/* Direct HubSpot iframe embed - the most reliable method */}
				<iframe
					src="https://share.hsforms.com/2blA4znbYSz-h7I42najEjgqzxjh"
					width="100%"
					height="650"
					style={{ border: 'none' }}
					title="Contact Form"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				></iframe>
			</CardContent>
		</Card>
	)
}
