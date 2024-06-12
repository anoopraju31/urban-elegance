import { FC } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import ProductImageCarousel from '@/components/ProductImageCarousel'

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
							BRAND NAME
						</h2>

						{/* Title */}
						<h1 className='text-gray-900 dark:text-white text-3xl title-font font-medium mb-1'>
							The Catcher in the Rye
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
							Fam locavore kickstarter distillery. Mixtape chillwave tumeric
							sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
							juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
							seitan poutine tumeric. Gastropub blue bottle austin listicle
							pour-over, neutra jean shorts keytar banjo tattooed umami
							cardigan.
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
							<div className='flex items-center'>
								<span className='mr-3'>Size</span>
								<div className='relative'>
									<select className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10'>
										<option>SM</option>
										<option>M</option>
										<option>L</option>
										<option>XL</option>
									</select>
									<span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-4 h-4'
											viewBox='0 0 24 24'>
											<path d='M6 9l6 6 6-6'></path>
										</svg>
									</span>
								</div>
							</div>
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
