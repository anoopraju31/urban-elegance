import { type FC } from 'react'
import ProductGallary, { type ImageData } from './productGallary'
import ProductHeader from './productHeader'
import AddToFavorite from './addToFavorite'
import AddToCart from './addToCart'
import ProductSelectionForm from './productSelectionForm'

type Props = {
	images: ImageData[]
}

const ProductInfo: FC<Props> = ({ images }) => {
	return (
		<section className='max-w-screen-xl mx-auto py-8 md:py-16 px-4 sm:px-8'>
			<div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
				<ProductGallary images={images} />

				<div className='mt-6 sm:mt-8 lg:mt-0'>
					<ProductHeader
						title='Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink'
						price='$1,249.99'
						discountedPrice='$1,449.99'
						rating={5}
						numberOfReviews={345}
					/>

					<div className='mt-6 gap-4 items-center flex flex-wrap sm:mt-8'>
						<AddToFavorite />
						<AddToCart />
					</div>

					<hr className='my-6 md:my-8 w-full border-gray-200 dark:border-gray-800' />

					<ProductSelectionForm />
				</div>
			</div>
		</section>
	)
}

export default ProductInfo
