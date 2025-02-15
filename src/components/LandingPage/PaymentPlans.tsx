'use client'

import ICONS from '@/Helpers/icons'
import { Button, Slider } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
export default function PaymentPlans() {
	const [sliderValue, setSliderValue] = useState(1)

	const handleSliderChange = (value: number) => {
		setSliderValue(value)
	}

	const handleIncrease = () => {
		if (sliderValue === 25) return
		if (sliderValue === 1) return setSliderValue(5)
		setSliderValue(sliderValue + 5)
	}

	const handleDecrease = () => {
		if (sliderValue === 1) return
		if (sliderValue === 5) return setSliderValue(1)
		setSliderValue(sliderValue - 5)
	}

	const marks = {
		1: '1',
		5: '5',
		10: '10',
		15: '15',
		20: '20',
		25: '25',
	}
	const pricing: { [key: number]: string } = {
		1: '$249',
		5: '$999',
		10: '$1,999',
		15: 'mailto:sales@savvy-broker.com',
		20: 'mailto:sales@savvy-broker.com',
		25: 'mailto:sales@savvy-broker.com',
	}

	const formatTooltip = (value?: number) => {
		return (
			<div className="p-3">
				<p className="text-xl text-center font-semibold">x{value}</p>
				<p className="text-sm text-center">
					{value === 1 ? 'LICENSE' : 'LICENSES'}
				</p>
			</div>
		)
	}
	return (
		<div id="pricing" className="md:p-14 p-6 bg-white flex justify-center">
			<div className="w-full md:w-[65%] flex flex-col justify-center items-center">
				<h2 className="text-2xl md:mt-8 lg:text-7xl md:text-4xl font-bold text-center text-[#2C3E50]">
					Pricing
				</h2>
				<p className="text-sm md:text-lg md:leading-8 mt-6 text-center text-[#667085] font-medium">
					Our pricing is always all-inclusive with no hidden fees or extra
					charges.
				</p>
				<p className="text-sm md:text-lg md:leading-8 mt-6 text-center text-[#667085] font-medium">
					New customers can enjoy all the features of SavvyBroker on a risk-free
					trial for 30-days, thereafter, SavvyBroker costs $249 per month.
					Discounts are available for Brokers purchasing multiple licenses, sold
					in allocations of x5.
				</p>
				<div className="flex justify-between items-center w-full mt-32">
					<Button
						className="p-0 border-0 mb-4 mr-8 shadow-0 text-[#0b86df]"
						onClick={handleDecrease}
						disabled={sliderValue === 1}
					>
						<FaChevronLeft className="text-2xl" />
					</Button>
					<Slider
						rootClassName="payment-slider flex-1"
						value={sliderValue}
						onChange={handleSliderChange}
						min={1}
						max={25}
						marks={marks}
						step={null}
						tooltip={{
							formatter: formatTooltip,
							autoAdjustOverflow: true,
						}}
					/>
					<Button
						className="p-0 border-0 mb-4 ml-8 shadow-0 text-[#0b86df]"
						onClick={handleIncrease}
						disabled={sliderValue === 25}
					>
						<FaChevronRight className="text-2xl" />
					</Button>
				</div>
				<div className="text-center">
					{!pricing[sliderValue].includes('mailto') && (
						<p className="text-sm md:text-base text-[#667085]">
							Cost per month
						</p>
					)}
					<h3 className="text-2xl md:text-4xl text-[#4C5673] mt-6 font-bold">
						{pricing[sliderValue].includes('mailto') ? (
							<p className="font-normal text-sm md:text-xl text-[#667085]">
								Need more than x10 licenses? No problem. Please contact us at
								sales@savvy-broker.com and our sales team will be in touch
								shortly to provide a personalized quotation
							</p>
						) : (
							pricing[sliderValue]
						)}
					</h3>
				</div>
				<div className="w-full text-center flex flex-col items-center gap-2 mt-20">
					<img
						className="w-10 h-10 md:w-auto md:h-auto"
						src={ICONS.pricingIcon}
						alt="wave"
					/>
					<h4 className="text-base md:text-3xl font-semibold text-[#2C3E50] mt-4 mb-8">
						All licenses include
					</h4>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 mt-6">
						<div className="py-2 md:py-5 border-t border-[#ABB2B9] border-dashed">
							<div className="flex items-center">
								<div className="mr-2 md:mr-6 md:bg-[#F0F9FF] rounded-full p-4">
									<img src={ICONS.checkIcon} alt="check" />
								</div>
								<p className="text-sm md:text-lg font-semibold text-[#2C3E50]">
									Lead alerts
								</p>
							</div>
						</div>

						<div className="py-2 md:py-5 border-t border-[#ABB2B9] border-dashed">
							<div className="flex items-center">
								<div className="mr-2 md:mr-6 md:bg-[#F0F9FF] rounded-full p-4">
									<img src={ICONS.checkIcon} alt="check" />
								</div>
								<p className="text-sm md:text-lg font-semibold text-[#2C3E50]">
									Scenario modeling
								</p>
							</div>
						</div>
						<div className="py-2 md:py-5 border-t border-[#ABB2B9] border-dashed">
							<div className="flex items-center">
								<div className="mr-2 md:mr-6 md:bg-[#F0F9FF] rounded-full p-4">
									<img src={ICONS.checkIcon} alt="check" />
								</div>
								<p className="text-sm md:text-lg font-semibold text-[#2C3E50]">
									Unlimited clients
								</p>
							</div>
						</div>
						<div className="py-2 md:py-5 border-t border-[#ABB2B9] border-dashed">
							<div className="flex items-center">
								<div className="mr-2 md:mr-6 md:bg-[#F0F9FF] rounded-full p-4">
									<img src={ICONS.checkIcon} alt="check" />
								</div>
								<p className="text-sm md:text-lg font-semibold text-[#2C3E50]">
									Unlimited storage
								</p>
							</div>
						</div>
						<div className="py-2 md:py-5 border-t border-b border-[#ABB2B9] border-dashed">
							<div className="flex items-center">
								<div className="mr-2 md:mr-6 md:bg-[#F0F9FF] rounded-full p-4">
									<img src={ICONS.checkIcon} alt="check" />
								</div>
								<p className="text-sm md:text-lg font-semibold text-[#2C3E50]">
									Real-time data feeds
								</p>
							</div>
						</div>
						<div className="py-2 md:py-5 border-t border-b border-[#ABB2B9] border-dashed">
							<div className="flex items-center">
								<div className="mr-2 md:mr-6 md:bg-[#F0F9FF] rounded-full p-4">
									<img src={ICONS.checkIcon} alt="check" />
								</div>
								<p className="text-sm md:text-lg font-semibold text-[#2C3E50]">
									24/7 chat support
								</p>
							</div>
						</div>
					</div>
				</div>

				<h3 className="text-xl md:text-3xl text-center mt-32 font-bold md:font-semibold">
					Start your journey with us now
				</h3>
				{/* <p
					className="text-sm md:text-xl text-[#2C3E50] text-center mt-8 font-semibold md:font-normal px-14 md:px-0"
				>
					Sign up now and start using SavvyBroker
				</p> */}
				<div className="w-full flex justify-center mt-8">
					<Link
						target="_blank"
						href={'https://app.savvy-broker.com/signup'}
						className="flex items-center justify-center h-[60px] w-[224px] bg-[#0B86DF] text-center py-2 text-sm font-semibold text-white rounded-full border-2 border-[#0B86DF] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B86DF] hover:text-white"
					>
						SIGN UP
					</Link>
				</div>
				<div className="h-1 w-full mt-36"></div>
			</div>
		</div>
	)
}
