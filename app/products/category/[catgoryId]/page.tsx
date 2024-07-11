'use client'

import { type FC } from 'react'
import Breadcrumb from '@/components/breadcrumb'
import { FaFilter, FaSortAlphaDown } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProductCard from '@/components/ProductCard'
import { products } from './data'

const IndividualCategoryPage: FC = () => {
	return (
		<main className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12'>
			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<div className='mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8'>
					<div>
						<Breadcrumb />
						<h2 className='mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
							Electronics
						</h2>
					</div>

					<div className='flex items-center space-x-4'>
						<button
							type='button'
							className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'>
							<FaFilter className='mr-2' />
							<span>Filters</span>
							<MdKeyboardArrowDown className='text-xl ml-1 ' />
						</button>
						<button
							type='button'
							className='flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto'>
							<FaSortAlphaDown className='mr-2' />
							<span>Sort</span>
							<MdKeyboardArrowDown className='text-xl ml-1' />
						</button>
					</div>
				</div>

				<section className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</section>
			</div>
		</main>
	)
}

export default IndividualCategoryPage
