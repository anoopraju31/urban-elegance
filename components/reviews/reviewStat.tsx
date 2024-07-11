import { FC } from 'react'
import { FaStar } from 'react-icons/fa'

export type ReviewStatProps = {
	numberOfStars: number
	totalReviews: number
	percent: number
}

const ReviewStat: FC<ReviewStatProps> = ({
	numberOfStars,
	totalReviews,
	percent,
}) => {
	return (
		<div className='flex items-center gap-2'>
			<p className='w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 dark:text-white'>
				{numberOfStars}
			</p>

			<FaStar className='text-yellow-300' />

			<div className='h-1.5 w-80 rounded-full bg-gray-200 dark:bg-gray-700'>
				<div
					className='h-1.5 rounded-full bg-yellow-300'
					style={{ width: percent + '%' }}></div>
			</div>
			<a
				href='#'
				className='w-8 shrink-0 text-right text-sm font-medium leading-none text-primary-700 hover:underline dark:text-primary-500 sm:w-auto sm:text-left'>
				{totalReviews} <span className='hidden sm:inline'>reviews</span>
			</a>
		</div>
	)
}

export default ReviewStat
