import { type FC } from 'react'
import ProductInfo from './_components/productInfo'
import ProductDescriptions from './_components/productDescriptions'
import ProductSpecs from './_components/productSpecs'
import Reviews from '@/components/reviews'
import { details, images, productDescriptions } from './data'

const ProductDetailPage: FC = () => {
	return (
		<main className='bg-white dark:bg-gray-900 antialiased'>
			<ProductInfo images={images} />
			<ProductDescriptions descriptions={productDescriptions} />
			<ProductSpecs details={details} />
			<Reviews />
		</main>
	)
}

export default ProductDetailPage
