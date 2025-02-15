import ICONS from '@/Helpers/icons'
import IMAGES from '@/Helpers/images'
import { useIsSmall } from '@/Utils/breakpoints'
import { Carousel } from 'antd'

const Testimonials = () => {
	const isSmall = useIsSmall()
	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
		<button
			{...props}
			className={
				'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
			}
			aria-hidden="true"
			aria-disabled={currentSlide === 0 ? true : false}
			type="button"
		>
			<img src={ICONS.leftArrow} alt="left-arrow" />
		</button>
	)
	const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
		<button
			{...props}
			className={
				'slick-next slick-arrow' +
				(currentSlide === slideCount - 1 ? ' slick-disabled' : '')
			}
			aria-hidden="true"
			aria-disabled={currentSlide === slideCount - 1 ? true : false}
			type="button"
		>
			<img src={ICONS.rightArrow} alt="right-arrow" />
		</button>
	)
	return (
		<div className="md:pt-14 pl-6 pr-6   h-[800px] bg-[#F9FAFB]">
			<Carousel
				className="pt-24 w-4/5 m-auto"
				dots
				arrows
				infinite
				prevArrow={<SlickArrowLeft />}
				nextArrow={<SlickArrowRight />}
				dotPosition="bottom"
			>
				<div className="w-full text-xl text-white text-center">
					<div className="w-full flex flex-col justify-center items-center">
						<h3 className="mb-6">
							<img src={ICONS.cashFlowIcon} alt="cash" />
						</h3>
						<q
							className="lg:text-4xl text-lg lg:max-w-6xl max-w-md font-normal mt-4 mb-4"
							style={{
								color: '#2C3E50',
								lineHeight: isSmall ? '32px' : '60px',
							}}
						>
							SavvyBroker is a game changer. It’s helped us convert lots of
							business and it saves our team so much time on admin. I can’t
							imagine going back to life before this now
						</q>
						<div className="mt-5 text-gray-800 flex flex-col justify-center items-center">
							<div
								className="rounded"
								style={{ width: '100px', height: '100px' }}
							>
								<img
									className="w-full h-full rounded"
									src={IMAGES.testimonialPersonOne}
									alt="example profile pic"
								/>
							</div>
							<h4 className="font-semibold mb-1 mt-2">candence wu</h4>
							<p>brokerage owener at cash flow</p>
						</div>
					</div>
				</div>
				<div className="w-full text-xl text-white text-center">
					<div className="w-full flex flex-col justify-center items-center">
						<h3 className="mb-6">
							<img src={ICONS.cyclonesIcon} alt="cash" />
						</h3>
						<q
							className="lg:text-4xl text-lg lg:max-w-6xl max-w-md font-normal mt-4 mb-4"
							style={{
								color: '#2C3E50',
								lineHeight: isSmall ? '32px' : '60px',
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							error sit minima explicabo, aspernatur totam voluptatem corporis
							ad aliquam pariatur eum. Minima dolores cupiditate quia, veritatis
							doloremque eaque quos consequatur!
						</q>
						<div className="mt-5 text-gray-800 flex flex-col justify-center items-center">
							<div
								className="rounded"
								style={{ width: '100px', height: '100px' }}
							>
								<img
									className="w-full h-full rounded"
									src={IMAGES.testimonialPersonTwo}
									alt="example profile pic"
								/>
							</div>
							<h4 className="font-semibold mb-1 mt-2">candence wu</h4>
							<p>brokerage owener at cash flow</p>
						</div>
					</div>
				</div>

				<div className="w-full text-xl text-white text-center">
					<div className="w-full flex flex-col justify-center items-center">
						<h3 className="mb-6">
							<img src={ICONS.financeIcon} alt="cash" />
						</h3>
						<q
							className="lg:text-4xl text-lg lg:max-w-6xl max-w-md font-normal mt-4 mb-4"
							style={{
								color: '#2C3E50',
								lineHeight: isSmall ? '32px' : '60px',
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							error sit minima explicabo, aspernatur totam voluptatem corporis
							ad aliquam pariatur eum. Minima dolores cupiditate quia, veritatis
							doloremque eaque quos consequatur!
						</q>
						<div className="mt-5 text-gray-800 flex flex-col justify-center items-center">
							<div
								className="rounded"
								style={{ width: '100px', height: '100px' }}
							>
								<img
									className="w-full h-full rounded"
									src={IMAGES.testimonialPersonOne}
									alt="example profile pic"
								/>
							</div>
							<h4 className="font-semibold mb-1 mt-2">candence wu</h4>
							<p>brokerage owener at cash flow</p>
						</div>
					</div>
				</div>
				<div className="w-full text-xl text-white text-center">
					<div className="w-full flex flex-col justify-center items-center">
						<h3 className="mb-6">
							<img src={ICONS.glassHourIcon} alt="cash" />
						</h3>
						<q
							className="lg:text-4xl text-lg lg:max-w-6xl max-w-md font-normal mt-4 mb-4"
							style={{
								color: '#2C3E50',
								lineHeight: isSmall ? '32px' : '60px',
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							error sit minima explicabo, aspernatur totam voluptatem corporis
							ad aliquam pariatur eum. Minima dolores cupiditate quia, veritatis
							doloremque eaque quos consequatur!
						</q>
						<div className="mt-5 text-gray-800 flex flex-col justify-center items-center">
							<div
								className="rounded"
								style={{ width: '100px', height: '100px' }}
							>
								<img
									className="w-full h-full rounded"
									src={IMAGES.testimonialPersonThree}
									alt="example profile pic"
								/>
							</div>
							<h4 className="font-semibold mb-1 mt-2">candence wu</h4>
							<p>brokerage owener at cash flow</p>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	)
}

export default Testimonials
