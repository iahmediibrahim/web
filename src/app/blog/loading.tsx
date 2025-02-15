import Skeleton from '@/components/ui/Skeleton'

export default function Loading() {
	return (
		<section className="min-h-screen">
			<div className="max-w-screen-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto xl:mx-auto 2xl:mx-auto  md:px-8 xl:px-12 2xl:px-16 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</ul>
			</div>
		</section>
	)
}
