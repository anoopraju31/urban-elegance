import { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewStat, { ReviewStatProps } from './reviewStat'
import ReviewCard, { Review } from './reviewCard'

const reviews: Review[] = [
	{
		id: 'review-1',
		stars: 5,
		reviewer: 'Micheal Gough',
		reviewDate: 'November 18 2023 at 15:35',
		description: [
			'My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.',
		],
		isVerified: true,
	},
	{
		id: 'review-2',
		stars: 4,
		reviewer: 'Jese Leos',
		reviewDate: 'November 18 2023 at 15:35',
		description: [
			'It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!',
		],
		isVerified: true,
		images: [
			{
				id: 'review-2-img-1',
				src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg',
				alt: 'imac',
			},
			{
				id: 'review-2-img-2',
				src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg',
				alt: 'imac',
			},
		],
	},
	{
		id: 'review-3',
		stars: 5,
		reviewer: '',
		reviewDate: '',
		description: [
			'I have used earlier Mac computers in my university work for a number of years and found them easy to use.The iMac 2021 is no exception. It works straight out of the box giving superb definition from the HD screen.',
			'Basic tools such as a browser (Safari) and a mail client are included in the system. Microsoft Office apps can be downloaded from the App Store though they may only work in read-only mode unless you take out a subscription. The instruction manual that comes with it is the size of a piece of toilet paper but the proper user guide is on-line.',
		],
		isVerified: true,
	},
	{
		id: '',
		stars: 0,
		reviewer: 'Neil Sims',
		reviewDate: 'November 1 2022 at 15:35',
		description: [
			'I replaced my 11 year old iMac with the new M1 Apple. I wanted to remain with Apple as my old one is still working perfectly and all Apple products are so reliable. Setting up was simple and fast and transferring everything from my previous iMac worked perfectly.',
		],
		isVerified: true,
	},
]

const reviewStats: ReviewStatProps[] = [
	{
		numberOfStars: 1,
		percent: 2,
		totalReviews: 13,
	},
	{
		numberOfStars: 2,
		percent: 5,
		totalReviews: 32,
	},
	{
		numberOfStars: 3,
		percent: 15,
		totalReviews: 53,
	},
	{
		numberOfStars: 4,
		percent: 60,
		totalReviews: 432,
	},
	{
		numberOfStars: 5,
		percent: 20,
		totalReviews: 239,
	},
]
const Reviews: FC = () => {
	return (
		<section className='max-w-screen-xl mx-auto py-8 md:py-16 px-4 sm:px-8 antialiased'>
			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<div className='flex items-center gap-2'>
					<h2 className='text-2xl font-semibold text-gray-900 dark:text-white'>
						Reviews
					</h2>

					<div className='mt-2 flex items-center gap-2 sm:mt-0'>
						<div className='flex items-center gap-0.5 text-yellow-300'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
						</div>
						<p className='text-sm font-medium leading-none text-gray-500 dark:text-gray-400'>
							(4.6)
						</p>
						<a
							href='#'
							className='text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white'>
							{' '}
							645 Reviews{' '}
						</a>
					</div>
				</div>

				<div className='my-6 gap-8 sm:flex sm:items-start md:my-8 '>
					<div className='shrink-0 space-y-4'>
						<p className='text-2xl font-semibold leading-none text-gray-900 dark:text-white'>
							4.65 out of 5
						</p>
						<button
							type='button'
							data-modal-target='review-modal'
							data-modal-toggle='review-modal'
							className='mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
							Write a review
						</button>
					</div>

					{/* Review Stats */}
					<div className='mt-6 min-w-0 flex-1 space-y-3 sm:mt-0'>
						{reviewStats.map((stat) => (
							<ReviewStat key={stat.numberOfStars} {...stat} />
						))}
					</div>
				</div>

				{/* User Reviews */}
				<div className='mt-6 divide-y divide-gray-200 dark:divide-gray-700'>
					{reviews.map((review) => (
						<ReviewCard key={review.id} {...review} />
					))}
				</div>

				<div className='mt-6 text-center'>
					<button
						type='button'
						className='mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>
						View more reviews
					</button>
				</div>
			</div>
		</section>
	)
}

export default Reviews
