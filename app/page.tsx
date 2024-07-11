import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import { FC } from 'react'
import CategoryItem from './products/category/_components/categoryItem'

type Props = {}

const page: FC<Props> = (props) => {
	return (
		<main className='min-h-screen text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font overflow-hidden'>
			<HeroSection />
			<div className='max-w-screen-xl w-full mx-auto my-16 p-10 rounded-lg bg-gray-800'>
				<h2 className='text-2xl text-center mb-5'> Shop by Category </h2>
				<div className='flex items-center gap-6 overflow-auto no-scrollbar'>
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
				</div>
			</div>
			{/* <ProductsSection /> */}
		</main>
	)
}

export default page
