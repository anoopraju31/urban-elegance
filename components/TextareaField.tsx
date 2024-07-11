import type { FC, TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
	id: string
}

const TextareaField: FC<Props> = ({ id, label, ...rest }) => {
	return (
		<div>
			<label
				htmlFor={id}
				className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
				{label}
			</label>
			<textarea
				id={id}
				{...rest}
				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500'
			/>
		</div>
	)
}

export default TextareaField
