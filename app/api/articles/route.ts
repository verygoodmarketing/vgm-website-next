import { NextResponse } from 'next/server'
import { getPublishedArticles, getAllTags } from '@/lib/article-service'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
	try {
		// Add a timestamp to the response to ensure fresh data
		const timestamp = new Date().toISOString()
		const articles = await getPublishedArticles()
		const tags = await getAllTags()

		return NextResponse.json(
			{
				articles,
				tags,
				timestamp,
				_cache: 'bypass',
			},
			{
				headers: {
					'Cache-Control': 'no-store, max-age=0',
				},
			}
		)
	} catch (error) {
		console.error('Error fetching articles:', error)
		return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
	}
}
