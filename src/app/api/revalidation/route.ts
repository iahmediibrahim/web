import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest): Promise<NextResponse> {
	const requestHeaders = new Headers(request.headers)
	const secret: string | null = requestHeaders.get('x-vercel-reval-key')

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
	}
	try {
		revalidatePath('/')
		return NextResponse.json({ revalidated: true, now: Date.now() })
	} catch (error) {
		return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
	}
}
