// @ts-nocheck
// eslint-disable-next-line react/display-name
'use client'
import dynamic from 'next/dynamic'
import React, { createContext, useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
interface WebChat {
	createDirectLine: Function
	default: React.ComponentType<any>
}

const WebChatContext = createContext<WebChat>({
	createDirectLine: () => {},
	default: () => null,
})

const WebChatProvider = dynamic(
	async () => {
		// WebChat gets access to the exact React and ReactDOM through window if provided
		// otherwise it uses the bundled-in React version
		;(window as any).React = React
		;(window as any).ReactDOM = ReactDOM
		const WebChat = (await import('botframework-webchat')) as WebChat

		return function WebChatProvider(props) {
			return <WebChatContext.Provider value={WebChat} {...props} />
		}
	},
	{ ssr: false, suspense: true },
)

const DigitalAssistantPageInner = () => {
	const { createDirectLine, default: ReactWebChat } = useContext(WebChatContext)
	const [directLineToken, setDirectLineToken] = useState('')
	useEffect(() => {
		if (createDirectLine && directLineToken === '') {
			const fetchDirectLineToken = async () => {
				try {
					const response = await fetch(
						'https://webchat.botframework.com/api/tokens',
						{
							headers: {
								Authorization: `BotConnector ${process.env.NEXT_PUBLIC_DIRECT_LINE_SECRET}`,
							},
						},
					)
					if (response.ok) {
						const data = await response.json()
						Promise.resolve().then(() => {
							setDirectLineToken(
								createDirectLine({
									token: data,
								}),
							)
						})
					} else {
						console.error('Failed to fetch Direct Line token')
					}
				} catch (error) {
					console.error('Error fetching Direct Line token:', error)
				}
			}

			fetchDirectLineToken()
		}
	}, [directLineToken, createDirectLine])

	if (directLineToken === '') {
		return (
			<div className="bg-white w-full h-full flex justify-center items-center">
				<div className="w-5 h-5 animate-spin rounded-full border-t-2 border-blue-500"></div>
			</div>
		)
	}
	return (
		<ReactWebChat
			directLine={directLineToken}
			userID="SavvyBroker"
			className="w-full h-full"
			sendTypingIndicator={true}
			styleOptions={{
				bubbleBorderColor: '#E6E6E6',
				bubbleBorderRadius: 2,
				bubbleBorderStyle: 'solid',
				bubbleBorderWidth: 1,
			}}
		/>
	)
}
interface ChatbotProps {
	isVisible: boolean
}
const Chatbot: React.FC<ChatbotProps> = ({ isVisible }) => {
	return (
		<div
			style={{
				display: isVisible ? 'block' : 'none',
				position: 'fixed',
				bottom: '140px',
				right: '10px',
				width: '300px',
				height: '400px',
				border: '1px solid #ccc',
				borderRadius: '5px',
				overflow: 'hidden',
				zIndex: '999',
			}}
		>
			<WebChatProvider>
				<DigitalAssistantPageInner />
			</WebChatProvider>
		</div>
	)
}
export default Chatbot
