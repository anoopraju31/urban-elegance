import { type FC } from 'react'
import Cart from './_components/cart'
import RelatedProducts from './_components/relatedProducts'
import PaymentCheckoutSummary from '@/components/paymentCheckoutSummary'
import VoucherForm from './_components/voucherForm'

const CartPage: FC = () => {
	return (
		<main className='bg-white py-8 antialiased dark:bg-gray-900 md:py-16 relative'>
			<div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
				<h1 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
					Shopping Cart
				</h1>

				<div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
					<div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
						<Cart />
						<RelatedProducts />
					</div>

					<div className='lg:sticky top-8 right-0 mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
						<PaymentCheckoutSummary next='Checkout' />
						<VoucherForm />
					</div>
				</div>
			</div>
		</main>
	)
}

export default CartPage
