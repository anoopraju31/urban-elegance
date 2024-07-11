import ProductRadioInput from '@/components/productInputs/productRadioInput'
import { FC } from 'react'

type Props = {
	title: string
	description: string
}

const PaymentCard: FC<Props> = ({ title, description }) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800'>
			<ProductRadioInput
				id='payment-method'
				label={title}
				description={description}
			/>

			<div className='mt-4 flex items-center gap-2'>
				<button
					type='button'
					className='text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
					Delete
				</button>

				<div className='h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700'></div>

				<button
					type='button'
					className='text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>
					Edit
				</button>
			</div>
		</div>
	)
}

export default PaymentCard
