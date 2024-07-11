'use client'

import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

export type CartProduct = {
	id: string
	img: string
	title: string
	link: string
	price: number
	quantity: number
}

type CartItemProps = CartProduct & {
	incrementQuantity: () => void
	decrementQuantity: () => void
	deleteItem: () => void
}

const CartItem: FC<CartItemProps> = ({
	id,
	img,
	title,
	link,
	price,
	quantity,
	incrementQuantity,
	decrementQuantity,
	deleteItem,
}) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6'>
			<div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
				<Link
					href={link}
					className='shrink-0 md:order-1 flex justify-center items-center'>
					<Image
						className='sm:h-20 sm:w-20'
						width={100}
						height={100}
						src={img}
						alt={title}
					/>
				</Link>

				<label htmlFor='counter-input' className='sr-only'>
					Choose quantity:
				</label>
				<div className='flex items-center justify-between md:order-3 md:justify-end'>
					<div className='flex items-center'>
						<button
							type='button'
							onClick={decrementQuantity}
							className='p-2 inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-gray-900 dark:text-white text-sm'>
							<FaMinus />
						</button>
						<input
							type='text'
							id={'quantity' + id}
							className='w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white'
							placeholder=''
							value={quantity}
							required
						/>
						<button
							type='button'
							onClick={incrementQuantity}
							className='p-2 inline-flex shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 text-gray-900 dark:text-white text-sm'>
							<FaPlus />
						</button>
					</div>
					<div className='text-end md:order-4 md:w-32'>
						<p className='text-base font-bold text-gray-900 dark:text-white'>
							${price}
						</p>
					</div>
				</div>

				<div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
					<Link
						href={link}
						className='text-base font-medium text-gray-900 hover:underline dark:text-white'>
						{title}
					</Link>

					<div className='flex items-center flex-col sm:flex-row gap-4'>
						<button
							className='w-full sm:w-fit flex items-center justify-center gap-2 py-2.5 px-5 text-sm whitespace-nowrap font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
							type='button'>
							<FaRegHeart />
							Add to favorites
						</button>

						<button
							onClick={deleteItem}
							className='w-full sm:w-fit px-5 py-2.5 flex items-center justify-center gap-2 rounded-lg text-sm whitespace-nowrap font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
							type='button'>
							<FaTrash />
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
