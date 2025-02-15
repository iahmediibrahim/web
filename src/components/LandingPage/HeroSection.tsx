'use client'
import IMAGES from '@/Helpers/images'
import { useIsSmall } from '@/Utils/breakpoints'

import Link from 'next/link'
const HeroSection = () => {
	const isSmall = useIsSmall()

	return (
		<>
			<div
				className="bg-[#0B86DF] md:p-14 p-6 text-white flex flex-col items-center justify-center "
				style={{
					backgroundImage: `url(${IMAGES.landingBack})`,
					paddingBottom: isSmall ? '125px' : '180px',
				}}
			>
				<div
					className={`flex  ${
						isSmall ? 'w-full flex-wrap' : 'justify-around '
					} gap-4 items-center mb-12`}
				>
					<p className="hilight relative px-8">INCREASE REVENUE</p>
					<p className="hilight relative px-8">INCREASE CLIENT RETENTION</p>
					<p className="hilight relative px-8">INCREASE PRODUCTIVITY</p>
				</div>
				<div className="max-w-7xl">
					<h1
						className={`font-bold lg:text-[60px] text-2xl text-center ${
							isSmall ? 'mt-10' : ''
						}`}
						style={{
							lineHeight: '1.3',
						}}
					>
						Join thousands of Mortgage Brokers <br />
						working smarter with SavvyBroker
					</h1>
					<p
						className={`mt-6 text-white font-medium text-center ${
							isSmall ? 'text-sm' : 'text-xl'
						} `}
					>
						Designed by Mortgage Brokers, for Mortgage Brokers,
						<br /> SavvyBroker analyzes opportunities to save your clients
						money, <br />
						all day, every day. It's that simple.
					</p>
				</div>

				<div className="mt-16 grid justify-center">
					<img
						className="w-auto"
						src={IMAGES.landingPageHeroImage}
						alt="hero-image"
					/>
					<div className={`w-full flex justify-center mt-16`}>
						<Link
							target="_blank"
							href={'https://app.savvy-broker.com/signup'}
							className={`flex items-center justify-center h-[60px] w-[224px] bg-white text-center py-2 text-sm font-semibold text-[#0B86DF] rounded-full border-2 border-[#0B86DF] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B86DF] hover:text-[#0B86DF]`}
						>
							SUBSCRIBE NOW
						</Link>
					</div>
				</div>
			</div>
			<div
				className={`bg-transparent pb-10`}
				style={{
					backgroundImage: `url(${IMAGES.landingCurve})`,
					backgroundSize: isSmall ? 'contain' : 'cover',
					backgroundRepeat: 'no-repeat',
					marginTop: isSmall ? '-180px' : '-345px',
					height: isSmall ? '350px' : '600px',
				}}
			>
				{/* <div
					className={`${
						isSmall ? 'pt-16 mx-6' : 'pt-[225px] mx-16'
					} border-b-2 border-[rgba(44, 62, 80, 0.4)]`}
				>
					<p
						className={`${
							isSmall ? 'text-base' : 'text-3xl'
						} text-center font-semibold text-[#2C3E50] my-10`}
					>
						Trusted by leading companies all over the USA
					</p>
					{!isLarge ? (
						<Carousel
							className="w-full my-10"
							dots={false}
							arrows={false}
							infinite
							slidesPerRow={2}
						>
							<img src={ICONS.homeSmartIcon} alt="home-smart" />
							<img src={ICONS.glassHourIcon} alt="glass-hour" />
							<img src={ICONS.cashFlowIcon} alt="cash-flow" />
							<img src={ICONS.financeIcon} alt="finance-cue" />
							<img src={ICONS.cyclonesIcon} alt="cyclones" />
							<img src={ICONS.mortgageIcon} alt="common-mortgage" />
						</Carousel>
					) : (
						<div className="flex items-center justify-center flex-wrap md:gap-6 gap-9 my-16">
							<img src={ICONS.homeSmartIcon} alt="home-smart" />
							<img src={ICONS.glassHourIcon} alt="glass-hour" />
							<img src={ICONS.cashFlowIcon} alt="cash-flow" />
							<img src={ICONS.financeIcon} alt="finance-cue" />
							<img src={ICONS.cyclonesIcon} alt="cyclones" />
							<img src={ICONS.mortgageIcon} alt="common-mortgage" />
						</div>
					)}
				</div> */}
			</div>
		</>
	)
}

export default HeroSection
