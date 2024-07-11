import { type FC } from 'react'

const VoucherForm: FC = () => {
	return (
		<form className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
			<div>
				<label
					htmlFor='voucher'
					className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
					{' '}
					Do you have a voucher or gift card?{' '}
				</label>
				<input
					type='text'
					id='voucher'
					className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500'
					placeholder=''
					required
				/>
			</div>
			<button
				type='submit'
				className='flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
				Apply Code
			</button>
		</form>
	)
}

export default VoucherForm
