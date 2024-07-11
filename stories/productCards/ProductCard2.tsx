import Image from 'next/image'
import { FC } from 'react'

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

const ProductCard2: FC = () => {
	return (
		<div>
			<div className='w-[290px] md:w-[345px] lg:w-[360px] p-[15px] mx-auto my-[30px] md:my-[15px] group'>
				<div className='w-full h-[300px] relative overflow-hidden text-center'>
					<Image
						className='py-5 transition-all duration-[800] group-hover:blur-[7px] group-hover:opacity-5'
						src='/placeholder.png'
						alt=''
						width={360}
						height={360}
					/>

					<div className='img-info'>
						<div className='transition-all duration-[400] absolute w-full bottom-[25px] group-hover:bottom-[155px]'>
							<span className='p-name block text-lg text-[#252525]'>
								I feel like Pablo
							</span>
							<span className='p-company block text-xs uppercase text-[#8c8c8c]'>
								Yeezy
							</span>
						</div>
						<div className='a-size transition-all delay-300 absolute w-full -bottom-5 text-[#828282] opacity-0 group-hover:duration-300 group-hover:bottom-[50px] group-hover:opacity-100'>
							Available sizes :{' '}
							<span className='size text-[#252525]'>S , M , L , XL</span>
						</div>
					</div>
				</div>

				<div className='box-down w-full h-[60px] relative overflow-hidden'>
					<div className='h-bg transition-all duration-700 w-[660px] h-full bg-[#3f96cd] absolute -left-[659px] group-hover:left-0'>
						<div className='h-bg-inner w-1/2 h-full bg-[#464646]'></div>
					</div>

					<a
						className='cart block absolute w-full h-full top-0 left-0 font-bold'
						href='#'>
						<span className='price transition-all delay-100 block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#252525] group-hover:left-8 group-hover:-translate-y-1/2 group-hover:text-color-[#818181]'>
							$120
						</span>
						<span className='add-to-cart transition-all duration-[600] block absolute top-1/2 left-[110%] -translate-x-1/2 -translate-y-1/2 group-hover:left-1/2'>
							<span className='txt text-xs text-white uppercase'>
								Add in cart
							</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProductCard2
