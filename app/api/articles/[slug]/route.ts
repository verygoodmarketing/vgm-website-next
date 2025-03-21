import { NextResponse } from 'next/server'
import { getArticleBySlug } from '@/lib/article-service'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request, context: any) {
	try {
		const params = await context.params
		const { slug } = params
		const timestamp = new Date().toISOString()

		if (!slug) {
			return NextResponse.json({ error: 'Article slug is required' }, { status: 400 })
		}

		const article = await getArticleBySlug(slug)

		if (!article) {
			return NextResponse.json({ error: 'Article not found' }, { status: 404 })
		}

		return NextResponse.json(
			{
				article,
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
		console.error('Error fetching article:', error)
		return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 })
	}
}
