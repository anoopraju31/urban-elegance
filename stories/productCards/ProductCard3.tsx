import Image from 'next/image'
import { FaInfoCircle } from 'react-icons/fa'
import { FC } from 'react'

type Props = {}

const ProductCard3: FC<Props> = (props) => {
	return (
		<div className='max-w-80 mx-20'>
			<div className='overflow-hidden rounded-xl group'>
				<div className='relative'>
					<Image
						src='/wood_brown_chinos_pants.jpg'
						alt=''
						width={300}
						height={400}
						className='w-full object-cover transition-all duration-500 ease-in-out'
					/>

					<div className='absolute -top-12 -right-12 rounded-full w-24 h-24 group-hover:w-[1500px] group-hover:h-[1500px] group-hover:-top-[500px] group-hover:-right-[500px] transition-all duration-1000 group-hover:duration-2000 in-expo bg-red-500 group-hover:bg-white/10 group-hover:backdrop-blur-xl'></div>
					<div className='absolute top-2 right-2 z-20 group-hover:hidden transition-all duration-1000 ease-in-expo text-lg text-white'>
						<FaInfoCircle />
					</div>

					<div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 group-hover:duration-3000 flex flex-col justify-end gap-5 p-5 text-gray-700'>
						<div className='flex flex-col gap-1'>
							<p className='font-bold'> Size </p>
							<div className='flex items-center gap-2'>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-red-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-orange-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-green-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-blue-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-purple-500'></div>
							</div>
						</div>

						<div className='flex flex-col gap-1'>
							<p className='font-bold'> Colors </p>
							<div className='flex items-center gap-2'>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-red-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-orange-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-green-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-blue-500'></div>
								<div className='w-8 h-8 rounded-full active:scale-95 hover:scale-75 transition-transform bg-purple-500'></div>
							</div>
						</div>

						<button className='py-2 px-3 rounded-md bg-red-600 text-white w-full text-center active:scale-95 hover:scale-95 transition-transform'>
							Add to cart
						</button>
					</div>
				</div>
			</div>

			<div className='py-3 px-1 flex flex-col'>
				<h4 className={`truncate font-medium text-base`}>
					Pale Grey Dual Pocket Cargo Joggers
				</h4>
				<p className='text-xs font-light truncate mb-1'>Cargo Joggers</p>

				<div className='mt-1 flex items-center gap-2 text-sm'>
					<div className={`text-grey-900 font-medium`}>$149</div>

					<div className={`text-gray-400 font-light line-through`}>$299</div>

					<div className='text-green-500'>(53% off)</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard3
