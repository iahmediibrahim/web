'use client'

import ICONS from '@/Helpers/icons'
import { Button, Collapse, CollapseProps } from 'antd'

const FAQs = () => {
	const className = '!border-b !border-dashed !border-[#C1C9D4]'

	const items: CollapseProps['items'] = [
		{
			key: '1',
			label: 'What is SavvyBroker?',
			children: (
				<p className="mb-6 font-semibold">
					Designed by Mortgage Brokers, for Mortgage Brokers, SavvyBroker
					analyzes opportunities to save your clients money, all day, every day.
					At the heart of SavvyBroker is a fully automated intelligence engine
					which is continuously monitoring your clients' existing loan
					arrangements with real-time market data on loans and property pricing
					to determine if savings can be made, triggering lead alerts to notify
					you of opportunities and a wide range of other features to help your
					business achieve increased revenue, higher retention rates and
					long-lasting client relationships
				</p>
			),
			className,
		},
		{
			key: '2',
			label: 'How does SavvyBroker work?',
			children: (
				<p className="mb-6 font-semibold">
					Our platform does a lot of things but the beating heart is data. We
					use API's to pull data from market-leading sources, this provides
					real-time data on property values, interest rates and mortgage
					products. A proprietary intelligence engine compares existing loan
					arrangements to current market pricing to determine if your Client can
					achieve a saving, triggering lead alerts to notify you of
					opportunities and a wide range of other features to help your business
					achieve increased revenue, higher retention rates and long-lasting
					client relationships
				</p>
			),
			className,
		},
		{
			key: '3',
			label: 'What are the benefits of subscribing to SavvyBroker?',
			children: (
				<p className="mb-6 font-semibold">
					SavvyBroker has many benefits but our Mortgage Brokers consistently
					tell us 3 things: they love the ability to achieve more commission,
					they love that SavvyBroker automates a lot of the manual admin tasks
					that were wasting their time, and they love how simple it is to use
				</p>
			),
			className,
		},
		{
			key: '4',
			label: 'What devices can I use SavvyBroker on?',
			children: (
				<p className="mb-6 font-semibold">
					SavvyBroker is built in a fully responsive design, which means it will
					work perfectly across desktop, tablet and mobile devices
				</p>
			),
			className,
		},
		{
			key: '5',
			label: 'How much does SavvyBroker cost?',
			children: (
				<p className="mb-6 font-semibold">
					SavvyBroker costs $249 per month. Discounts are available for multiple
					licenses
				</p>
			),
			className,
		},
		{
			key: '6',
			label: 'How can I contact customer support?',
			children: (
				<p className="mb-6 font-semibold">
					Support can be accessed 24/7 by clicking the support icon on the
					website. Alternatively, email "support@savvy-broker.com" and one of
					our customer support team will contact you directly
				</p>
			),
			className,
		},
	]

	return (
		<div id="faqs" className="md:p-14 p-6 bg-white">
			<h2 className="text-2xl md:text-4xl lg:text-7xl pt-8 font-bold text-center text-[#2C3E50] mb-16">
				<span className="md:hidden">FAQs</span>
				<span className="hidden md:inline">Frequently asked questions</span>
			</h2>

			<div className="mt-10 flex flex-col items-center">
				<Collapse
					accordion
					items={items}
					bordered={false}
					expandIconPosition="end"
					expandIcon={({ isActive }) => {
						return (
							<div className="bg-[#F0F9FF] rounded-full p-1">
								{isActive ? (
									<img src={ICONS.blueMinusIcon} />
								) : (
									<img src={ICONS.bluePlusIcon} />
								)}
							</div>
						)
					}}
					className="faqs-collapse border-[#C1C9D4] border-t border-dashed rounded-none"
				/>
			</div>

			<h3 className="text-xl md:text-3xl text-center mt-24 font-semibold">
				Still have questions ?
			</h3>
			<p className="text-sm md:text-xl text-[#2C3E50] text-center mt-8 max-w-screen-md text-center mx-auto">
				Whether you need some further information about our product or you'd
				like a quote for your unique business needs, we're here to help you to
				get your questions answered. Please email us at sales@savvy-broker.com
				or click the button below
			</p>
			<div className="w-full flex justify-center mt-8">
				<Button
					onClick={() => window.open('mailto:sales@savvy-broker.com', '_blank')}
					className="flex items-center justify-center h-[60px] w-[224px] bg-white text-center py-2 text-sm font-semibold text-[#0B86DF] rounded-full border-2 border-[#0B86DF] shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B86DF] hover:text-white"
				>
					GET IN TOUCH
				</Button>
			</div>
			<div className="h-1 border-b-2 w-full mt-28"></div>
		</div>
	)
}

export default FAQs
