'use Client'

import type { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
}

const InputField: FC<Props> = ({ label, id, ...rest }) => {
	return (
		<div>
			<label
				htmlFor={id}
				className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
				{label}
			</label>
			<input
				id={id}
				{...rest}
				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500'
			/>
		</div>
	)
}

export default InputField
