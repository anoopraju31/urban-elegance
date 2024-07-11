import Image from 'next/image'
import { FC } from 'react'
import { FaHeart } from 'react-icons/fa6'

type Props = {}

const ProductCard5: FC<Props> = (props) => {
	return (
		<div className='w-[320px] mx-10 font-mono rounded-lg overflow-hidden'>
			<div className='relative '>
				<Image
					width={300}
					height={300}
					src='/wood_brown_chinos_pants.jpg'
					alt=''
					className='w-full h-full rounded-lg'
				/>
				<div className='absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white text-red-500 flex justify-center items-center'>
					<FaHeart />
				</div>
			</div>

			<div className='py-3 px-2'>
				<h4 className='font-bold text-gray-950'> Harpa </h4>
				<p className='text-sm font-light'> Womans prints clothing </p>

				<div className='flex items-center gap-2 mt-2 text-sm'>
					<div className='font-bold'> $839 </div>
					<div className='line-through '> $2099 </div>
					<div className='text-fuchsia-300'> (60% OFF) </div>
				</div>

				<div className='mt-3 flex gap-5 justify-between'>
					<button className='w-full rounded-md p-3 bg-fuchsia-300 text-white hover:bg-white border border-fuchsia-300  hover:text-fuchsia-300 transition-colors duration-300 text-xs uppercase'>
						add to bag
					</button>

					<button className='w-full rounded-md p-3 text-fuchsia-300 border-fuchsia-300 hover:text-white hover:bg-fuchsia-300 transition-colors duration-300 border uppercase bg-white text-xs'>
						wishlist
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard5
