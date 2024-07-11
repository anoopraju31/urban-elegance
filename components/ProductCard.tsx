import { type FC } from 'react'
import Image from 'next/image'
import { FaCartPlus, FaRegHeart } from 'react-icons/fa'

export type Product = {
	id: string
	img: string
	title: string
	link: string
	description: string
	price: number
	discountedPrice: number
}

const ProductCard: FC<Product> = ({
	id,
	img,
	title,
	link,
	description,
	price,
	discountedPrice,
}) => {
	return (
		<div
			id={id}
			className='space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
			<a href={link} className='overflow-hidden rounded'>
				<Image
					className='mx-auto h-44 w-44'
					width={200}
					height={200}
					src={img}
					alt={title}
				/>
			</a>
			<div>
				<a
					href={link}
					className='block text-lg font-semibold text-center leading-tight text-gray-900 hover:underline dark:text-white'>
					{title}
				</a>
				<p className='mt-2 text-base font-normal text-gray-500 dark:text-gray-400'>
					{description}
				</p>
			</div>
			<div className='flex items-center gap-2'>
				{discountedPrice && (
					<p className='text-base font-bold text-gray-900 dark:text-white'>
						<span className='line-through'> {price} </span>
					</p>
				)}
				<p className='text-lg font-bold leading-tight text-red-600 dark:text-red-500'>
					{discountedPrice || price}
				</p>
			</div>
			<div className='mt-6 flex items-center gap-2.5'>
				<button
					data-tooltip-target='favourites-tooltip-1'
					type='button'
					className='inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>
					<FaRegHeart />
				</button>
				<button
					type='button'
					className='inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
					<FaCartPlus />
					Add to cart
				</button>
			</div>
		</div>
	)
}

export default ProductCard
