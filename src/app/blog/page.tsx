import PostCard from '@/components/posts/PostCard'
import BlogWrapper from '@/components/ui/BlogWrapper'
import { PostProps } from '@/Utils'
import { getPosts } from '../api/api'
export const revalidate = 3600 // Revalidate every hour
export const dynamic = 'force-static'

export default async function Posts() {
	const props = await getPosts()

	const {
		posts,
	}: {
		posts: PostProps[]
	} = Array.isArray(props) ? { posts: [] } : props.props
	return (
		<BlogWrapper>
			<div className="max-w-5xl mb-16">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
					Insights & Updates from Savvy Broker
				</h1>
				<p className="text-lg md:text-xl text-gray-600 mb-8">
					Stay informed about the latest trends in loan management, property
					refinancing, and how Savvy Broker helps companies streamline their
					lending operations.
				</p>
				<div className="h-1 w-32 bg-[#096ab2] rounded"></div>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
				{posts.map((post) => (
					<PostCard key={post.fields.slug} post={post} />
				))}
			</ul>
		</BlogWrapper>
	)
}
