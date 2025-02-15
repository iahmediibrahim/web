import ContentfulImage from './ContentfulImage'
import DateComponent from './DateComponent'

interface AvatarProps {
	name: string
	picture: {
		fields: {
			file: {
				url: string
			}
		}
	}
	date: string
}

const Avatar = ({ name, picture, date }: AvatarProps) => {
	return (
		<div className="flex items-center">
			<div className="relative w-10 h-10 mr-4">
				<ContentfulImage
					src={picture.fields.file.url}
					layout="fill"
					className="rounded-full m-0"
					alt={name}
				/>
			</div>
			<div>
				<p className="font-medium text-gray-900">{name}</p>
				<DateComponent dateString={date} className="text-sm text-gray-500" />
			</div>
		</div>
	)
}

export default Avatar
