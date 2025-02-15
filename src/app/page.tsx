import FAQs from '@/components/LandingPage/FAQs'
import HeroSection from '@/components/LandingPage/HeroSection'
import HowItWorks from '@/components/LandingPage/HowItWorks'
import KeyFeatures from '@/components/LandingPage/KeyFeatures'
import PaymentPlans from '@/components/LandingPage/PaymentPlans'

import FeaturedPosts from '@/components/LandingPage/FeaturedPosts'
import './index.css'

export default async function Home() {
	return (
		<>
			<HeroSection />
			<HowItWorks />
			<FeaturedPosts />
			<KeyFeatures />
			<FAQs />
			<PaymentPlans />
		</>
	)
}
