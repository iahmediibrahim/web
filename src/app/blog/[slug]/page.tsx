import PostBody from '@/components/posts/PostBody'
import PostFooter from '@/components/posts/PostFooter'
import PostHeader from '@/components/posts/PostHeader'
import { client } from '@/lib/contentful/client'
import { PostProps } from '@/Utils'
import Link from 'next/link'

async function getPost({ slug }: { slug: string }) {
	const response = await client.getEntries({
		content_type: 'post',
		'fields.slug': slug,
	})

	if (!response?.items?.length) {
		return null
	}

	return response.items[0]
}

export default async function Post({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const post: PostProps = await getPost({ slug })
	if (!post) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold text-gray-800 pb-4">
						Post not found
					</h1>
					<p className="text-gray-600 pb-8">
						The post you're looking for doesn't exist.
					</p>

					<Link
						href="/blog"
						className="inline-flex items-center px-6 py-3 border border-transparent text-base text-white bg-[#0B86DF] hover:bg-[#096ab2] font-medium rounded-md transition-colors duration-200"
					>
						← Back to Blog
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				<article className="max-w-4xl mx-auto">
					<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6 sm:p-8 md:p-12">
							<PostHeader post={post} />
							<div className="mt-8 sm:mt-12">
								<PostBody post={post} />
							</div>
							<PostFooter post={post} />
						</div>
					</div>

					<div className="mt-8 text-center">
						<Link
							href="/blog"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base text-white bg-[#0B86DF] hover:bg-[#096ab2] font-medium rounded-md transition-colors duration-200"
						>
							← Back to Blog
						</Link>
					</div>
				</article>
			</div>
		</div>
	)
}
