import { getFeaaturedPosts } from '@/app/api/api'
import { PostProps } from '@/Utils'
import Link from 'next/link'
import PostCard from '../posts/PostCard'
import BlogWrapper from '../ui/BlogWrapper'
export const revalidate = 3600 // Revalidate every hour
export const dynamic = 'force-static'
export default async function FeaturedPosts() {
	const props = await getFeaaturedPosts()

	const {
		posts,
	}: {
		posts: PostProps[]
	} = Array.isArray(props) ? { posts: [] } : props.props

	return (
		<BlogWrapper height="600px">
			<h2
				id="how-it-works"
				className={`mt-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center text-[#2C3E50] pt-24`}
			>
				SavvyBroker Blog posts
			</h2>
			<p
				className={`text-lg leading-8 sm:text-sm
				 my-6 text-center  text-[#667085] font-medium max-w-screen-md mx-auto`}
			>
				SavvyBroker automates everyday tasks, compiles up-to-date market
				information and utilizes AI
			</p>
			<ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
				{posts.map((post) => (
					<PostCard key={post.fields.slug} post={post} />
				))}
			</ul>

			<div className="flex justify-center w-full">
				<Link
					href="/blog"
					className="inline-flex items-center rounded-full px-6 py-3 mt-8 border border-transparent text-base text-white bg-[#0B86DF] hover:bg-[#096ab2] font-medium transition-colors duration-200 shadow-lg"
				>
					View All Posts →
				</Link>
			</div>
		</BlogWrapper>
	)
}
