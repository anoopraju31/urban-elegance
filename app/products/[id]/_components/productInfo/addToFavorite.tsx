'use client'

import { Button } from '@/components/ui/button'
import { type FC } from 'react'
import { FaRegHeart } from 'react-icons/fa'

const AddToFavorite: FC = () => {
	return (
		<div>
			<Button
				className='w-full sm:w-fit flex items-center justify-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
				type='button'>
				<FaRegHeart />
				Add to favorites
			</Button>
		</div>
	)
}

export default AddToFavorite