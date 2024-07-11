'use client'

import { type FC } from 'react'
import PaymentCard from './paymentCard'

const PaymentSelectForm: FC = () => {
	return (
		<div className='space-y-4'>
			<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
				Payment
			</h3>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
				<PaymentCard title='Credit Card' description='Pay with your card' />
				<PaymentCard
					title='Payment on delivery'
					description='+$15 payment processing fee'
				/>
				<PaymentCard
					title='Paypal account'
					description='connect to your account'
				/>
			</div>
		</div>
	)
}

export default PaymentSelectForm
