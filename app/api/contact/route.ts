import { NextResponse } from 'next/server'

// Simple in-memory storage for form submissions
// In a production app, you would use a database instead
const formSubmissions: any[] = []

export async function POST(request: Request) {
	try {
		const data = await request.json()
		const { firstName, lastName, email, phone, company, message } = data

		// Validate required fields
		if (!firstName || !lastName || !email || !message) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
		}

		// Store the submission
		const submission = {
			id: Date.now().toString(),
			firstName,
			lastName,
			email,
			phone,
			company,
			message,
			timestamp: new Date().toISOString(),
			source: request.headers.get('referer') || 'Unknown',
		}

		formSubmissions.push(submission)
		console.log('Form submission stored:', submission)

		// In a real implementation, you would also:
		// 1. Send the data to HubSpot via their API
		// 2. Send a notification email to your team
		// 3. Store the submission in a database

		return NextResponse.json({
			success: true,
			message: 'Form submitted successfully',
			id: submission.id,
		})
	} catch (error) {
		console.error('Error in form submission:', error)
		return NextResponse.json(
			{
				error: 'Internal server error',
				details: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		)
	}
}
