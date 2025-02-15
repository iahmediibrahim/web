import ICONS from '@/Helpers/icons'
import { FaRegCirclePlay } from 'react-icons/fa6'

const KeyFeatures = () => {
	return (
		<div
			id="features"
			className="md:p-14 pl-6 pr-6 pt-12 pb-4 text-gray-700 bg-white flex flex-col items-center justify-center"
		>
			<h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center md:mt-20">
				Key Features
			</h2>

			<ul className="grid lg:grid-cols-2 grid-cols-1 justify-center md:gap-16 gap-8 mt-20">
				<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
					<img className="w-48" src={ICONS.thirdGroupedIcons} alt="" />
					<div>
						<h3 className="w-full flex items-center justify-center lg:justify-start text-xl md:text-3xl font-semibold text-center lg:text-start mb-2">
							Lead Alerts
							<a
								className="pl-4"
								href="https://www.loom.com/share/61fcf2785bca4e048cba0dff1dbd5529?sid=4b19b7e9-54ee-4932-8e4e-422995b13b5d"
								target="_blank"
							>
								<FaRegCirclePlay className="text-[#0b86df]" />
							</a>
						</h3>
						<p className="max-w-md lg:text-start text-center font-semibold">
							Automatic, 'always-on' alerts to notify you of opportunities to
							save money for your clients
						</p>
					</div>
				</li>

				<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
					<img className="w-48" src={ICONS.forthGroupedIcons} alt="" />
					<div>
						<h3 className="w-full flex items-center justify-center lg:justify-start text-xl md:text-3xl font-semibold text-center lg:text-start mb-2">
							Scenario Modeling
							<a
								className="pl-4"
								href="https://www.loom.com/share/d42c36a8add043628d6275f063e4150c?sid=dd9b5d70-7b48-474e-b3fb-57e5d807977f"
								target="_blank"
							>
								<FaRegCirclePlay className="text-[#0b86df]" />
							</a>
						</h3>
						<p className="max-w-md lg:text-start text-center font-semibold">
							Customizable scenario planning allowing you to compare and
							contrast refinancing options for your clients using upto date
							market data
						</p>
					</div>
				</li>
				<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
					<img className="w-48" src={ICONS.firstGroupedIcons} alt="" />
					<div>
						<h3 className="text-xl md:text-3xl font-semibold text-center lg:text-start mb-2">
							Connected
						</h3>
						<p className="max-w-md lg:text-start text-center font-semibold">
							With seamless integration to your email, you can share the
							information that matters to your clients at a click of a button
						</p>
					</div>
				</li>
				<li className="text-gray-900 md:text-lg text-md font-normal flex lg:flex-row flex-col items-center gap-4">
					<img className="w-48" src={ICONS.secondGroupedIcons} alt="" />
					<div>
						<h3 className="text-xl md:text-3xl font-semibold text-center lg:text-start mb-2">
							Intelligent
						</h3>
						<p className="max-w-md lg:text-start text-center font-semibold">
							Let us do the hard work. Our fully automated intelligence engine
							continuously assesses your clients' existing loan arrangements
							with real-time market data on loans, property pricing and mortgage
							products
						</p>
					</div>
				</li>
			</ul>
			<div className="h-1 border-b-2 w-full mt-28"></div>
		</div>
	)
}

export default KeyFeatures
