import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest): Promise<NextResponse> {
	const requestHeaders = new Headers(request.headers)
	const secret: string | null = requestHeaders.get('x-vercel-reval-key')

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}
	revalidateTag('posts')

	return NextResponse.json({ revalidated: true, now: Date.now() })
}
