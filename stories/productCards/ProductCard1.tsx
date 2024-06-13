import Image from 'next/image'
import { FC } from 'react'
import { FaHeart } from 'react-icons/fa6'

type Props = {
	img: string[]
	title: string
	category: string
	price: number
	discountedPrice?: number
	discountPercent?: number
	titleColor?: string
	categoryColor?: string
	priceColor?: string
	discountedPriceColor?: string
	discountedPercentColor?: string
}

const ProductCard1: FC<Props> = ({
	img,
	title,
	category,
	price,
	discountPercent,
	discountedPrice,
	titleColor = 'text-gray-700',
	categoryColor = 'text-gray-400',
	discountedPriceColor = 'text-gray-900',
	priceColor = 'text-gray-300',
	discountedPercentColor = 'text-green-500',
}) => {
	return (
		<div className='max-w-56 group'>
			<div className='relative'>
				<Image
					src={img[0]}
					alt={title}
					width={300}
					height={400}
					className='w-full object-cover rounded-md group-hover:hidden transition-all duration-500 ease-in-out'
				/>

				<Image
					src={img[1]}
					alt={title}
					width={300}
					height={400}
					className='hidden w-full object-cover rounded-md group-hover:inline-block transition-all duration-500 ease-in-out'
				/>

				<div className='absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-red-500 flex justify-center items-center'>
					<FaHeart />
				</div>
			</div>

			<div className='px-1 py-2'>
				<h4 className={`${titleColor} truncate font-medium text-base`}>
					{title}
				</h4>
				<p className={`text-sm font-light ${categoryColor} truncate`}>
					{category}
				</p>

				<div className='mt-1 flex items-center gap-1 text-base'>
					<div className={`${discountedPriceColor} font-medium`}>
						${discountedPrice}
					</div>
					<div className={`${priceColor} line-through`}> ${price} </div>
					<div className={discountedPercentColor}>({discountPercent}% off)</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard1
