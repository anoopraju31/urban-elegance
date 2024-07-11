import Stars from '@/components/stars'
import { type FC } from 'react'

type Props = {
	title: string
	price: string
	discountedPrice: string
	rating: number
	numberOfReviews: number
}

const ProductHeader: FC<Props> = ({
	title,
	price,
	discountedPrice,
	rating,
	numberOfReviews,
}) => {
	return (
		<>
			{/* title */}
			<h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
				{title}
			</h1>

			<div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
				{/* prices */}
				<div className='flex items-center gap-4'>
					<p className='text-lg font-bold line-through text-red-500'>
						{discountedPrice}
					</p>

					<p className='text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white'>
						{price}
					</p>
				</div>

				{/* stars & reviews */}
				<div className='flex items-center gap-2 mt-2 sm:mt-0'>
					<Stars count={rating} />
					<p className='text-sm font-medium leading-none text-gray-500 dark:text-gray-400'>
						(rating)
					</p>
					<a
						href='/'
						className='text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white'>
						{numberOfReviews} {numberOfReviews > 1 ? 'Reviews' : 'Review'}
					</a>
				</div>
			</div>
		</>
	)
}

export default ProductHeader
