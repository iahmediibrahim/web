'use client'
import ICONS from '@/Helpers/icons'
import IMAGES from '@/Helpers/images'
import { Button } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiChat } from 'react-icons/bi'
import { FaChevronDown } from 'react-icons/fa6'
import Chatbot from './ChatBot'

export const Footer = () => {
	const [showChatbot, setShowChatbot] = useState(false)
	const currentYear = new Date().getFullYear()
	const [showPopup, setShowPopup] = useState(false)
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPopup(true)

			return () => {
				clearTimeout(timer)
			}
		}, 500)
	}, [])
	return (
		<div className="bg-[#f4f5f6]">
			<div>
				<Chatbot isVisible={showChatbot} />
				<div
					style={{
						display: 'block',
						position: 'fixed',
						bottom: '80px',
						right: '20px',
						width: '50px',
						height: '50px',
						overflow: 'hidden',
						zIndex: '999',
						borderRadius: '50%',
					}}
					className="shadow-lg"
				>
					<Button
						onClick={() => {
							setShowChatbot(!showChatbot)
						}}
						className="w-full h-full  flex items-center justify-center rounded-full text-white bg-[#0B86DF] p-2 focus:outline-none focus:ring-2 focus:ring-[#0B86DF]"
					>
						{showChatbot ? (
							<FaChevronDown className="w-7 h-7 text-inherit   " />
						) : (
							<BiChat className="w-7 h-7 text-inherit  " />
						)}
					</Button>
				</div>
			</div>
			<div className="fixed bottom-10 right-4 z-50">
				<Link
					href={'/RequestADemo'}
					className="w-auto h-10 text-right py-2 px-4 text-sm font-semibold text-white bg-[#FEC84B] rounded-full shadow-lg hover:bg-[#e5b73e] transition-colors"
				>
					Request a Demo
				</Link>
			</div>
			<div
				style={{
					display: showPopup ? 'flex' : 'none',
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 145, 255, 0.329)',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 1000,
				}}
			>
				<div style={{ position: 'relative' }}>
					<div
						style={{
							maxWidth: '90%',
							maxHeight: '90%',
							margin: 'auto',
							border: '1px solid black',
							borderRadius: '10px',
							position: 'relative',
						}}
					>
						<img
							src={IMAGES.SB_Flyer_2025}
							alt="Popup Banner"
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
								borderRadius: '10px',
								boxShadow: '0 0 20px 5px rgba(0, 0, 0, 0.5)',
							}}
						/>
						<button
							onClick={() => setShowPopup(false)}
							style={{
								position: 'absolute',
								top: '-5px',
								right: '15px',
								background: 'transparent',
								border: 'none',
								color: 'white',
								fontSize: '54px',
								cursor: 'pointer',
							}}
						>
							&times;
						</button>
					</div>
				</div>
			</div>
			<footer className="mx-auto flex flex-col gap-8 items-center justify-center py-20 px-0 ">
				<div className="mt-2 w-8 h-10">
					<img src={ICONS.mainLayoutFaceLogo} alt="Logo" className="" />
				</div>
				<div className="flex gap-8 md:flex-row flex-col items-center">
					<p className="text-[#4B5474] text-sm font-normal">
						© {currentYear} SavvyBroker - All rights reserved.
					</p>
					<div className={`flex gap-5 flex-row`}>
						<a
							className="text-[#4B5474] text-sm font-normal underline hover:text-[#4B5474]"
							href="https://app.savvy-broker.com/terms-and-conditions"
						>
							Terms & conditions.
						</a>
						<a
							className="text-[#4B5474] text-sm font-normal underline hover:text-[#4B5474]"
							href="https://app.savvy-broker.com/privacy-policy"
						>
							Privacy.
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}
