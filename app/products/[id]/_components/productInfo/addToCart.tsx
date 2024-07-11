'use client'

import { Button } from '@/components/ui/button'
import { type FC } from 'react'
import { FaCartPlus } from 'react-icons/fa'

const AddToCart: FC = () => {
	return (
		<div>
			<Button
				variant='default'
				className='w-full sm:w-fit px-5 py-2.5 flex items-center justify-center gap-2 rounded-lg text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
				type='button'>
				<FaCartPlus />
				Add to cart
			</Button>
		</div>
	)
}

export default AddToCart
