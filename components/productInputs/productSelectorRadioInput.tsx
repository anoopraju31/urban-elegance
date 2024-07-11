'use client'

import type { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
}

const ProductSelectorRadioInput: FC<Props> = ({ label, id, ...inputProps }) => {
	return (
		<label htmlFor={id} className='relative'>
			<input type='radio' id={id} {...inputProps} className='sr-only' />
			<span
				className={`p-1.5 pb-2 flex items-center justify-center rounded-md border text-sm leading-3 font-medium ${
					inputProps
						? 'border-blue-500 bg-blue-500/60 hover:bg-blue-400/60 text-white/60'
						: 'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-gray-200 dark:border-gray-600'
				}`}>
				{label}
			</span>
		</label>
	)
}

export default ProductSelectorRadioInput
