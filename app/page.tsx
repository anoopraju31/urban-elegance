import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import { FC } from 'react'

type Props = {}

const page: FC<Props> = (props) => {
	return (
		<main className='min-h-screen text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font overflow-hidden'>
			<HeroSection />
			<ProductsSection />
		</main>
	)
}

export default page
