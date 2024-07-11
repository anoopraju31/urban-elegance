'use client'

import { type FC } from 'react'
import ProductRadioInput from '@/components/productInputs/productRadioInput'

const DeliveryMethodsForm: FC = () => {
	return (
		<div className='space-y-4'>
			<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
				Delivery Methods
			</h3>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
				<div className='rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800'>
					<ProductRadioInput
						id='delivery-dhl'
						checked={true}
						onChange={() => {}}
						label='$15 - DHL Fast Delivery'
						name='delivery'
						value='dhl'
						description='Get it by Tommorow'
						descriptionStyles='text-gray-500 dark:text-gray-400'
					/>
				</div>

				<div className='rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800'>
					<ProductRadioInput
						id='delivery-fedex'
						checked={false}
						onChange={() => {}}
						label='Free Delivery - FedEx'
						name='delivery'
						value='fedex'
						description='Get it by Friday, 13 Jul 2024'
						descriptionStyles='text-gray-500 dark:text-gray-400'
					/>
				</div>

				<div className='rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800'>
					<ProductRadioInput
						id='delivery-express'
						checked={false}
						onChange={() => {}}
						label='$49 Express Delivery'
						name='delivery'
						value='express'
						description='Get it today'
						descriptionStyles='text-gray-500 dark:text-gray-400'
					/>
				</div>
			</div>
		</div>
	)
}

export default DeliveryMethodsForm
