import { FC } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import ProductImageCarousel from '@/components/ProductImageCarousel'
import ProductSizeDropdown from '@/components/ProductSizeDropdown'

type Props = {}

const page: FC<Props> = (props) => {
	return (
		<main className='text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 body-font overflow-hidden'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-4/5 mx-auto flex flex-wrap relative'>
					{/* Image Carousel */}
					<ProductImageCarousel />

					<section className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
						<h2 className='text-sm title-font text-gray-500 tracking-widest'>
							AIRism
						</h2>

						{/* Title */}
						<h1 className='text-gray-900 dark:text-white text-3xl title-font font-medium mb-1'>
							AIRism Cotton Oversized Crew Neck T-Shirt (Half Sleeve)
						</h1>

						{/* Rating */}
						<div className='flex mb-4'>
							<span className='flex items-center'>
								<FaStar fill='rgb(234 179 8)' />
								<FaStar fill='rgb(234 179 8)' />
								<FaStar fill='rgb(234 179 8)' />
								<FaStar fill='rgb(234 179 8)' />
								<span className='text-gray-600 ml-3'>4 Reviews</span>
							</span>
						</div>

						{/* Description */}
						<p className='leading-relaxed'>
							The Uniqlo U collection is the realization of a dedicated and
							skilled team of international designers based at our Paris
							Research and Development Center led by Artistic Director
							Christophe Lemaire.
						</p>

						<div className='flex mt-6 items-center flex-wrap gap-6 pb-5 border-b-2 border-gray-100 dark:border-gray-800 mb-5'>
							{/* Colors */}
							<div className='flex'>
								<span className='mr-3'>Color</span>
								<div className='flex flex-wrap gap-1'>
									<button className='border-2 border-gray-300 dark:border-gray-800 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-gray-700 rounded-full w-6 h-6 focus:outline-none'></button>
									<button className='border-2 border-gray-300 dark:border-gray-800 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none'></button>
								</div>
							</div>

							{/* Size Dropdown */}
							<ProductSizeDropdown />
						</div>

						<div className='flex items-center mt-5'>
							{/* old Price */}
							<span className='title-font font-medium text-xl leading-4 line-through text-red-600'>
								$58.00
							</span>

							{/* new price */}
							<span className='ml-3 title-font font-medium text-2xl text-gray-900 dark:text-white'>
								$58.00
							</span>

							{/* Add to Cart */}
							<button className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'>
								Add to cart
							</button>

							{/* Add to wishlist */}
							<button className='rounded-full w-10 h-10 bg-gray-200 dark:bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
								<FaHeart />
							</button>
						</div>
					</section>
				</div>
			</div>
		</main>
	)
}

export default page
