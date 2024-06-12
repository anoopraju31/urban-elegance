import { FC } from 'react'
import ProductCard from './ProductCard'

const ProductsSection: FC = () => {
	return (
		<section className='container px-5 py-24 mx-auto'>
			<h2 className='text-gray-600 dark:text-white text-4xl font-medium text-center'>
				{' '}
				OFFICIAL MERCHANDISE{' '}
			</h2>

			<section className='text-gray-400 bg-gray-900 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</section>
		</section>
	)
}

export default ProductsSection
