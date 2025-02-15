'use client'

import ICONS from '@/Helpers/icons'
import { useIsSmall } from '@/Utils/breakpoints'
import { Modal } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
	{
		title: 'Welcome',
		path: '/#',
	},
	{
		title: 'How it works',
		path: '/#how-it-works',
	},
	{
		title: 'Features',
		path: '/#features',
	},
	{
		title: 'FAQs',
		path: '/#faqs',
	},
	{
		title: 'Pricing',
		path: '/#pricing',
	},
]
export default function LandingPageNavBar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const isSmall = useIsSmall()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Modal
				open={open}
				title="WHY CHOOSE SAVVYBROKER"
				onCancel={() => {
					setOpen(false)
				}}
				footer={null}
				maskClosable
				width={isSmall ? '100%' : '800px'}
			>
				<iframe
					src="https://www.loom.com/embed/49e2bef743b74ef09042180f6962d3ba?sid=f4b1ca34-b302-428c-8133-01246c04c097"
					style={{
						marginTop: '30px',
						marginBottom: '30px',
						marginLeft: 'auto',
						marginRight: 'auto',
						width: isSmall ? '100%' : '700px',
						height: isSmall ? '100%' : '395px',
					}}
					allowFullScreen
					title="Embedded Video"
				></iframe>
			</Modal>
			<header
				className={`bg-[#0B86DF] fixed w-full z-10 top-0 ${
					isScrolled ? 'shadow-lg' : 'border-b border-white'
				}`}
			>
				<nav
					className="mx-auto flex max-w-8xl px-4 lg:px-8 items-center justify-between h-20"
					aria-label="Global"
				>
					<div className="flex lg:flex-1 h-full items-center gap-x-12">
						<Link href="/" className="mt-2">
							<img
								src={ICONS.mainLayoutLogo}
								alt="Logo"
								className="hidden lg:block"
							/>
							<img
								src={ICONS.mainLayoutResponsiveLogo}
								alt="Logo"
								className="min-w-9 w-9 block lg:hidden"
							/>
						</Link>
						<div className="hidden lg:flex lg:gap-x-8 items-center h-full">
							{links.map((link, index) => (
								<a
									key={index}
									href={link.path}
									className="relative link flex items-center justify-center w-auto h-full py-2 text-sm font-semibold text-white hover:text-white  "
								>
									{link.title}
								</a>
							))}
						</div>
					</div>

					<div className={`flex items-center gap-x-6`}>
						{/* <Link
							target="_blank"
							href={'https://app.savvy-broker.com/signup'}
							className="hidden lg:block w-[140px] h-10 text-center py-2 text-sm font-semibold text-[#FEC84B]  capitalize hover:text-[#FEC84B]"
						>
							TRY FOR FREE
						</Link> */}

						{!isSmall && (
							<>
								{/* <button
									onClick={() => {
										setOpen(true)
									}}
									className="border-0 w-auto h-10 text-right py-2 text-sm font-semibold text-[#FEC84B] bg-transparent  hover:text-[#FEC84B]"
								>
									Why Choose Savvybroker
								</button> */}
								{/* <div className="fixed bottom-10 right-4 z-50">
									<Link
										href={'/RequestADemo'}
										className="w-auto h-10 text-right py-2 px-4 text-sm font-semibold text-white bg-[#FEC84B] rounded-full shadow-lg hover:bg-[#e5b73e] transition-colors"
									>
										Request a Demo
									</Link>
								</div> */}
							</>
						)}
						{/* <button
							onClick={() => {
								setOpenDemo(true)
							}}
							className="rounded-full w-[145px] h-10 text-center py-2 text-sm font-semibold text-white border-2 border-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white"
						>
							Request a Demo
						</button> */}

						<Link
							target="_blank"
							href={'https://app.savvy-broker.com/login'}
							className="rounded-full w-[140px] h-10 text-center py-2 text-sm font-semibold text-white border-2 border-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white"
						>
							Sign In
						</Link>
					</div>
				</nav>
			</header>

			<div className={`${isSmall ? 'h-20' : 'h-20'}`}></div>
		</>
	)
}
