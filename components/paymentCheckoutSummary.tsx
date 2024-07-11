import Link from 'next/link'
import { FC } from 'react'
import { IoArrowForward } from 'react-icons/io5'

type Props = {
	next: 'Payment' | 'Checkout'
}

const PaymentCheckoutSummary: FC<Props> = ({ next }) => {
	return (
		<div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
			<p className='text-xl font-semibold text-gray-900 dark:text-white'>
				Order summary
			</p>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
							Original price
						</dt>
						<dd className='text-base font-medium text-gray-900 dark:text-white'>
							$7,592.00
						</dd>
					</dl>

					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
							Savings
						</dt>
						<dd className='text-base font-medium text-green-600'>-$299.00</dd>
					</dl>

					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
							Store Pickup
						</dt>
						<dd className='text-base font-medium text-gray-900 dark:text-white'>
							$99
						</dd>
					</dl>

					<dl className='flex items-center justify-between gap-4'>
						<dt className='text-base font-normal text-gray-500 dark:text-gray-400'>
							Tax
						</dt>
						<dd className='text-base font-medium text-gray-900 dark:text-white'>
							$799
						</dd>
					</dl>
				</div>

				<dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700'>
					<dt className='text-base font-bold text-gray-900 dark:text-white'>
						Total
					</dt>
					<dd className='text-base font-bold text-gray-900 dark:text-white'>
						$8,191.00
					</dd>
				</dl>
			</div>

			<Link
				href='#'
				className='flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
				Proceed to {next}
			</Link>

			{next === 'Checkout' && (
				<div className='flex items-center justify-center gap-2'>
					<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
						or
					</span>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-green-700 underline hover:no-underline dark:text-green-500'>
						Continue Shopping
						<IoArrowForward />
					</Link>
				</div>
			)}
		</div>
	)
}

export default PaymentCheckoutSummary
