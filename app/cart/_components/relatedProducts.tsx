import { type FC } from 'react'
import { relatedProducts } from '../data'
import ProductCard from '@/components/ProductCard'

const RelatedProducts: FC = () => {
	return (
		<section className='hidden xl:mt-8 xl:block'>
			<h2 className='mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
				People also bought
			</h2>
			<div className='grid grid-cols-3 gap-4 sm:mt-8'>
				{relatedProducts.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</section>
	)
}

export default RelatedProducts
