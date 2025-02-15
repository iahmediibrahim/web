import { Footer } from '@/components/reusable/Footer'
import LandingPageNavBar from '@/components/reusable/NavBar'
import '@ant-design/v5-patch-for-react-19'
import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title:
		'SavvyBroker - Join thousands Mortgage Brokers working smarter with SavvyBroker',
	description:
		'SavvyBroker automates everyday tasks, compiles up-to-date market information, and utilizes AI to continuously assess value for clients.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				{/* Google Analytics Script */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-MVLMMM0SMR"
					strategy="afterInteractive"
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-MVLMMM0SMR');
						`,
					}}
				/>
				<Suspense fallback={null}>
					<ConfigProvider
						theme={{
							token: {
								fontFamily: 'Montserrat',
								fontWeightStrong: 500,
							},
						}}
					>
						<div className="h-screen bg-white">
							<LandingPageNavBar />
							{children}
							<Footer />
						</div>
					</ConfigProvider>
				</Suspense>
			</body>
		</html>
	)
}
