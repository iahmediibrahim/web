export default function BlogWrapper({
	height = 'min-h-screen',
	children,
}: {
	height?: string
	children: React.ReactNode
}) {
	return (
		<section className={height}>
			<div className="max-w-screen-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto xl:mx-auto 2xl:mx-auto  md:px-8 xl:px-12 2xl:px-16 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
				{children}
			</div>
		</section>
	)
}
