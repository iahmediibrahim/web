import { PostProps } from '@/Utils'
import Avatar from '../ui/Avatar'

const PostFooter = ({ post }: { post: PostProps }) => {
	const { author, date } = post.fields
	return (
		<div className="max-w-4xl mx-auto">
			<div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-6"></div>
			<div className="flex items-center space-x-4">
				<Avatar
					name={author.fields.name}
					picture={author.fields.picture}
					date={date}
				/>
			</div>
		</div>
	)
}

export default PostFooter
