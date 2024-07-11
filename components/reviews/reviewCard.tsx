import { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa6'
import Image from 'next/image'
import Stars from '../stars'

type ImageData = {
	id: string
	src: string
	alt: string
}

export type Review = {
	id: string
	stars: number
	reviewer: string
	reviewDate: string
	isVerified: boolean
	description: string[]
	images?: ImageData[]
}

const ReviewCard: FC<Review> = ({
	id,
	stars,
	reviewer,
	reviewDate,
	isVerified,
	description,
	images,
}) => {
	return (
		<div id={id} className='gap-3 py-6 sm:flex sm:items-start'>
			<div className='shrink-0 space-y-2 sm:w-48 md:w-72'>
				<Stars count={stars} />

				<div className='space-y-0.5'>
					<p className='text-base font-semibold text-gray-900 dark:text-white'>
						{reviewer}
					</p>
					<p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
						{reviewDate}
					</p>
				</div>

				{isVerified && (
					<div className='inline-flex items-center gap-1'>
						<MdVerified className='text-primary-700 dark:text-primary-500' />

						<p className='text-sm font-medium text-gray-900 dark:text-white'>
							Verified purchase
						</p>
					</div>
				)}
			</div>

			<div className='mt-4 min-w-0 flex-1 space-y-4 sm:mt-0'>
				{description.map((review, idx) => (
					<p
						key={idx}
						className='text-base font-normal text-gray-500 dark:text-gray-400'>
						{review}
					</p>
				))}

				{images && (
					<div className='flex gap-2'>
						{images.map(({ id, alt, src }) => (
							<Image
								key={id}
								className='h-32 w-20 rounded-lg object-cover'
								src={src}
								alt={alt}
								width={150}
								height={150}
							/>
						))}
					</div>
				)}

				<div className='flex items-center gap-4'>
					<p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
						Was it helpful to you?
					</p>
					<div className='flex items-center'>
						<input
							id='reviews-radio-1'
							type='radio'
							value=''
							name='reviews-radio'
							className='h-4 w-4 border-gray-300 sr-only bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600'
						/>
						<label
							htmlFor='reviews-radio-1'
							className='text-sm font-medium text-gray-900 dark:text-gray-300'>
							<FaThumbsUp />
						</label>
					</div>
					<div className='flex items-center'>
						<input
							id='reviews-radio-2'
							type='radio'
							value=''
							name='reviews-radio'
							className='h-4 w-4 border-gray-300 sr-only bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600'
						/>
						<label
							htmlFor='reviews-radio-2'
							className='text-sm font-medium text-gray-900 dark:text-gray-300'>
							<FaThumbsDown />
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewCard
