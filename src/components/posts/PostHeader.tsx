import { PostProps } from '@/Utils'
import ContentfulImage from '../ui/ContentfulImage'

const PostHeader = ({ post }: { post: PostProps }) => {
	const { title, coverImage } = post.fields

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-xl md:text-4xl font-bold tracking-tight mb-6">
				{title}
			</h1>
			<div className="relative mb-8">
				<div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
					<ContentfulImage
						alt={`Cover Image for ${title}`}
						src={coverImage.fields.file.url}
						width={coverImage.fields.file.details.image.width}
						height={coverImage.fields.file.details.image.height}
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	)
}

export default PostHeader
