import { formatDate } from '@/Utils/formatDate'

interface DateComponentProps extends React.TimeHTMLAttributes<HTMLTimeElement> {
	dateString: string
	options?: Intl.DateTimeFormatOptions
}

const DateComponent = ({
	dateString,
	options,
	...rest
}: DateComponentProps) => {
	return (
		<time dateTime={dateString} {...rest}>
			{formatDate(dateString, options)}
		</time>
	)
}

export default DateComponent
