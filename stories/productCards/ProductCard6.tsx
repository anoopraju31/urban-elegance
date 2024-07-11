import Image from 'next/image'
import { FC } from 'react'

type Props = {}

const ProductCard6: FC<Props> = (props) => {
	return (
		<div className='w-[320px] mx-10 rounded-lg overflow-hidden group'>
			<div className='relative overflow-hidden'>
				<Image
					width={300}
					height={300}
					src='/wood_brown_chinos_pants.jpg'
					alt=''
					className='w-full h-full rounded-lg'
				/>

				<div className='w-full px-5 absolute -bottom-48 group-hover:bottom-5 left-0 right-0 transition-all duration-500'>
					<button className='w-full p-3 bg-red-600 text-white rounded-md'>
						{' '}
						Add to cart{' '}
					</button>
				</div>
			</div>
			<div className='p-3 text-center'>
				<h4 className='font-bold text-gray-950'> Harpa </h4>
				<p className='text-sm font-light'> Womans prints clothing </p>

				<div className='flex items-center justify-center gap-2 mt-2 text-sm'>
					<div className='font-bold'> $839 </div>
					<div className='line-through '> $2099 </div>
					<div className='text-green-500'> (60% OFF) </div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard6
