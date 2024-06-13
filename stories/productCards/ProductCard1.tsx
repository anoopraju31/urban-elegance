import Image from 'next/image'
import { FC } from 'react'
import { FaHeart } from 'react-icons/fa6'

interface ProductCardBaseProps {
	img: string[]
	isHoverableImg?: boolean
	badge?: 'New' | 'Sale' | 'Top Rated' | 'Best Seller'
	title: string
	titleColor?: string
	category: string
	categoryColor?: string
	price: number
	priceColor?: string
}

interface DiscountedProductCardProps extends ProductCardBaseProps {
	discountedPrice: number
	discountPercent: number
	discountedPriceColor?: string
	discountedPercentColor?: string
}

type ProductCardProps = ProductCardBaseProps | DiscountedProductCardProps

const ProductCard1: FC<ProductCardProps> = (props) => {
	const {
		img,
		isHoverableImg = false,
		badge,
		title,
		category,
		price,
		titleColor = 'text-gray-700',
		categoryColor = 'text-gray-400',
		priceColor = 'text-gray-300',
	} = props
	const {
		discountPercent,
		discountedPercentColor = 'text-green-500',
		discountedPrice,
		discountedPriceColor = 'text-gray-900',
	} = props as DiscountedProductCardProps

	return (
		<div className='max-w-56 group'>
			<div className='relative rounded-md overflow-hidden'>
				<Image
					src={img[0]}
					alt={title}
					width={300}
					height={400}
					className={`w-full object-cover ${isHoverableImg && 'group-hover:hidden'} transition-all duration-500 ease-in-out`}
				/>

				{isHoverableImg && (
					<Image
						src={img[1]}
						alt={title}
						width={300}
						height={400}
						className='hidden w-full object-cover group-hover:inline-block transition-all duration-500 ease-in-out'
					/>
				)}

				<div className='absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-red-500 flex justify-center items-center'>
					<FaHeart />
				</div>

				{badge && (
					<div className='absolute top-0 left-0 px-2 py-1 text-xs text-white bg-red-500 rounded-br-md'>
						{badge}
					</div>
				)}
			</div>

			<div className='px-1 py-2'>
				<h4 className={`${titleColor} truncate font-medium text-base`}>
					{title}
				</h4>
				<p className={`text-sm font-light ${categoryColor} truncate`}>
					{category}
				</p>

				<div className='mt-1 flex items-center gap-1 text-base'>
					<div className={`${priceColor} font-medium`}>
						${discountedPrice || price}
					</div>

					{discountedPrice && (
						<div className={`${discountedPriceColor} line-through`}>
							${price}
						</div>
					)}

					{discountPercent && (
						<div className={discountedPercentColor}>
							({discountPercent}% off)
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductCard1
