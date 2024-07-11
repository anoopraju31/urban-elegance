import { type FC } from 'react'
import InputField from '@/components/inputField'
import { Button } from '@/components/ui/button'

const VoucherForm: FC = () => {
	return (
		<form className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
			<InputField
				label='Do you have a voucher or gift card?'
				id='voucher'
				type='text'
				required
			/>
			<Button
				type='submit'
				className='flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
				Apply Code
			</Button>
		</form>
	)
}

export default VoucherForm
