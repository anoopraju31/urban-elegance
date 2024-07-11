import Image from 'next/image'
import { FaCartShopping } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'
import { FC } from 'react'

type Props = {}

const ProductCard4: FC<Props> = (props) => {
	return (
		<div className='w-[380px] relative shadow-[0 2px 7px #dfdfdf] mx-auto my-[50px] bg-[#fafafa]'>
			<div className='absolute left-0 top-5 uppercase text-xs font-bold bg-red-500 text-white py-[3px] px-[10px]'>
				Hot
			</div>
			<div className='flex items-center justify-center h-[300px] p-[50px] bg-[#f0f0f0]'>
				<Image
					width={300}
					height={300}
					src='/wood_brown_chinos_pants.jpg'
					alt=''
					className='w-full h-full'
				/>
			</div>
			<div className='p-[30px]'>
				<span className='block text-xs font-bold uppercase text-[#ccc] mb-[18px]'>
					Women,bag
				</span>
				<h4>
					<a
						className='font-medium block mb-[18px] uppercase text-[#363636] decoration-0 transition-all duration-300 hover:text-[#fbb72c]  '
						href=''>
						Women leather bag
					</a>
				</h4>
				<p className='text-[15px] leading-6 mb-[18px] text-[#999]'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
					possimus nostrum!
				</p>
				<div className='overflow-hidden border-t border-t-[#eee] pt-5'>
					<div className='product-price text-lg text-[#fbb72c] font-semibold'>
						<small className='text-[80%] line-through inline-block mr-[5px]'>
							$96.00
						</small>
						$230.99
					</div>
					<div className='product-links text-right'>
						<a
							className='inline-block ml-[5px] text-[#e1e1e1] transition-all text-lg hover:text-[#fbb72c]'
							href=''>
							<FaHeart />
						</a>
						<a
							className='inline-block ml-[5px] text-[#e1e1e1] transition-all text-lg hover:text-[#fbb72c]'
							href=''>
							<FaCartShopping />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard4
