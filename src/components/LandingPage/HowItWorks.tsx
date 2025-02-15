import ICONS from '@/Helpers/icons'
import IMAGES from '@/Helpers/images'
const HowItWorks = () => {
	return (
		<div className="pl-6 pr-6 pb-4 text-gray-700 bg-white">
			<div className="pb-24 border-b-2 border-[rgba(44, 62, 80, 0.4)] mt-[-180px] sm:mt-[-345px]">
				<h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-16 text-center text-[#2C3E50] sm:mt-12">
					Here's everything you need to know in 60 seconds
				</h2>

				<iframe
					src="https://www.loom.com/embed/adff4c21c6214934b4640b63baec057a?sid=67f83083-563f-4b74-9ffe-ba5f9686f830"
					className="w-full h-full sm:w-[700px] sm:h-[395px] mx-auto"
					allowFullScreen
					title="Embedded Video"
				></iframe>
			</div>
			<h2
				id="how-it-works"
				className="text-2xl sm:text-4xl lg:text-7xl font-bold text-center text-[#2C3E50] pt-24 sm:mt-8"
			>
				How SavvyBroker works
			</h2>
			<p className="text-sm sm:text-lg sm:leading-8 mt-6 text-center text-[#667085] font-medium max-w-screen-md mx-auto">
				SavvyBroker automates everyday tasks, compiles up-to-date market
				information and utilizes AI to continuously assess value for your
				clients
			</p>
			<div className="flex flex-wrap md:flex-nowrap items-center mt-12 justify-center lg:justify-between gap-7 2xl:justify-center">
				<img
					className="md:max-w-sm lg:max-w-xl"
					src={IMAGES.landingPageComputer}
					alt="laptop-image"
				/>

				<ul className="flex flex-col md:gap-16 gap-8">
					<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
						<img className="w-48" src={ICONS.firstGroupedIcons} alt="" />
						<p className="max-w-md ml-6 lg:text-start font-semibold text-center">
							API's pull data from market-leading sources, providing real-time
							data on property values, interest rates and mortgage products
						</p>
					</li>
					<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
						<img className="w-48" src={ICONS.secondGroupedIcons} alt="" />
						<p className="max-w-md ml-6 lg:text-start font-semibold text-center">
							A proprietary intelligence engine compares existing loan
							arrangements to current market pricing to determine if your Client
							can achieve a saving
						</p>
					</li>
					<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
						<img className="w-48" src={ICONS.thirdGroupedIcons} alt="" />
						<p className="max-w-md ml-6 lg:text-start font-semibold text-center">
							Real-time lead alerts are triggered automatically to notify you of
							opportunities to save money for your clients
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default HowItWorks
