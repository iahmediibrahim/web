'use client'
import LandingPageNavBar from '@/components/reusable/NavBar'
import { Button, DatePicker, Form, Input } from 'antd'
import { useState } from 'react'
import { PatternFormat } from 'react-number-format'
export default function RequestADemo() {
	const [isError, setIsError] = useState(undefined)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const DemoForm = () => {
		const onFinish = async (values: {
			name: string
			email: string
			contactNumber: string
			preferredDate: string
		}) => {
			setIsSubmitted(true)
			try {
				const response = await fetch(
					'https://api.savvy-broker.com/api/RequestDemo',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(values),
					},
				)

				console.log('Form submission successful:', response.json())
				setIsError(false as any)
			} catch (error) {
				console.error('Form submission failed:', error)
				setIsError(true as any)
			}
		}

		return (
			<Form
				name="demoForm"
				onFinish={onFinish}
				layout="vertical"
				className="grid justify-center mx-4"
				size="large"
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[
						{
							required: true,
							message: 'Please enter your name',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email Address"
					name="email"
					rules={[
						{
							required: true,
							message: 'Please enter your email address',
						},
						{
							type: 'email',
							message: 'Please enter a valid email address',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Contact Number"
					name="contactNumber"
					rules={[
						{
							required: true,
							message: 'Please enter your contact number',
							// pattern: /^[0-9]{10}$/,
						},
					]}
				>
					<PatternFormat
						customInput={Input}
						className="focus:outline-none w-full text-blue-500 placeholder:capitalize placeholder:text-blue-500 ps-0"
						format="(###) ###-####"
					/>
				</Form.Item>

				<Form.Item
					label="Preferred Date for Demo"
					name="preferredDate"
					rules={[
						{
							required: true,
							message: 'Please enter your preferred date for a demo',
						},
					]}
				>
					<DatePicker className="w-full" format={'MM/DD/YYYY'} />
				</Form.Item>

				<Form.Item className="text-center">
					<Button
						type="primary"
						htmlType="submit"
						className="bg-[#0B86DF] hover:bg-blue-700 border-none shadow-md mt-4 rounded-full w-full h-10 text-center py-2 text-sm font-semibold text-white border-2 border-white   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:text-white"
					>
						Submit
					</Button>
				</Form.Item>
				<Form.Item>
					<p className=" text-gray-500 text-xs">
						By clicking submit, you agree to receive emails from SavvyBroker.
						For more information, please see our{' '}
						<a
							href="https://app.savvy-broker.com/privacy-policy"
							target="_blank"
							className="text-[#0B86DF] hover:text-blue-700"
						>
							Privacy Policy
						</a>
					</p>
				</Form.Item>
			</Form>
		)
	}

	return (
		<div className="h-screen bg-white">
			<LandingPageNavBar />
			<h1 className="text-3xl text-center mt-16">Request a Demo</h1>
			<p className="text-center text-gray-500 mt-2">
				Fill out the form below to request a demo.
			</p>
			<div className="rounded-md  shadow-md mx-auto mt-12 max-w-xl">
				{isError && isSubmitted ? (
					<div className="text-red-500 text-center mt-4">
						An error occurred while submitting the form. Please try again.
					</div>
				) : isError === false && isSubmitted ? (
					<div className="text-green-500 text-center">
						Thank you for your interest in SavvyBroker. Our sales team will be
						in touch with you shortly
					</div>
				) : null}
				<DemoForm />
			</div>
		</div>
	)
}
