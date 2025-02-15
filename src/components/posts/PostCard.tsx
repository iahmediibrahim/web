import { PostProps } from '@/Utils'
import Link from 'next/link'
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'

export default function PostCard({ post }: { post: PostProps }) {
	const { title, slug, excerpt, coverImage, author, date } = post.fields

	return (
		<li className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
			<Link href={`/blog/${slug}`} aria-label={title}>
				<div className="relative aspect-[16/9] overflow-hidden">
					<ContentfulImage
						alt={`Cover Image for ${title}`}
						src={coverImage.fields.file.url}
						width={coverImage.fields.file.details.image.width}
						height={coverImage.fields.file.details.image.height}
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
						<div className="text-sm font-medium text-white/80">
							<h3 className="mb-3 text-2xl font-bold tracking-tight   line-clamp-2  transition-colors">
								{title}
							</h3>
							<p className="mb-4 line-clamp-2">{excerpt}</p>
						</div>
					</div>
				</div>
				<div className="p-6">
					<div className="flex items-center justify-between">
						<Avatar
							name={author.fields.name}
							picture={author.fields.picture}
							date={date}
						/>
						<span className="inline-flex items-center text-sm font-medium text-[#096ab2] group-hover:translate-x-1 transition-transform">
							Read more →
						</span>
					</div>
				</div>
			</Link>
		</li>
	)
}
