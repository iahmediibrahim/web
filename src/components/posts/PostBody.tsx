import { PostProps } from '@/Utils'
import RichText from '../reusable/RichText'

const PostBody = ({ post }: { post: PostProps }) => {
	console.log(post)
	const { content } = post.fields

	return (
		<div className="mx-auto prose">
			<RichText content={content} />
		</div>
	)
}

export default PostBody
