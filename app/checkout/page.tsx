import { type FC } from 'react'
import DeliveryDetailsForm from './_components/deliveryDetailsForm'
import PaymentSelectForm from './_components/paymentSelectForm'
import DeliveryMethodsForm from './_components/deliveryMethodsForm'
import PaymentCheckoutSummary from '@/components/paymentCheckoutSummary'
import VoucherForm from '../../components/voucherForm'

const CheckoutPage: FC = () => {
	return (
		<main className='bg-white py-8 antialiased dark:bg-gray-900 md:py-16'>
			<form action='#' className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<h1 className='mb-6 text-2xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
					Checkout
				</h1>

				<div className='mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-8'>
					<div className='min-w-0 flex-1 space-y-8'>
						<DeliveryDetailsForm />
						<PaymentSelectForm />
						<DeliveryMethodsForm />
					</div>

					<div className='lg:sticky top-8 mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md'>
						<PaymentCheckoutSummary next='Payment' />
						<VoucherForm />
					</div>
				</div>
			</form>
		</main>
	)
}

export default CheckoutPage
