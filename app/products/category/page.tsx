import React, { FC } from 'react'
import CategoryItem from './_components/categoryItem'

const CategoryPage: FC = () => {
	return (
		<main className='bg-white py-8 antialiased dark:bg-gray-900 md:py-16'>
			<section className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<div className='mb-4 flex items-center justify-between gap-4 md:mb-8'>
					<h1 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
						Shop by category
					</h1>
				</div>
				<hr className='my-6 md:my-8 w-full border-gray-200 dark:border-gray-800' />

				<div className='p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  gap-10'>
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
					<CategoryItem />
				</div>
			</section>
		</main>
	)
}

export default CategoryPage
