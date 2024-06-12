import HeroSection from '@/components/HeroSection'
import { FC } from 'react'

type Props = {}

const page: FC<Props> = (props) => {
	return (
		<main className='min-h-screen text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font overflow-hidden'>
			<HeroSection />
		</main>
	)
}

export default page
