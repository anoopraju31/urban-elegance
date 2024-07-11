import type { FC, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
	description?: string
	descriptionStyles?: string
}

const ProductRadioInput: FC<Props> = ({
	id,
	label,
	description,
	descriptionStyles,
	...rest
}) => {
	return (
		<div className='flex'>
			<div className='flex items-center h-5'>
				<input
					id={id}
					type='radio'
					{...rest}
					className='w-4 h-4 text-blue-600 outline-none bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
				/>
			</div>
			<div className='ms-2 text-sm'>
				<label
					htmlFor={id}
					className={`font-medium ${
						rest.disabled
							? 'text-gray-400 dark:text-gray-500'
							: 'text-gray-900 dark:text-white'
					}`}>
					{label}
				</label>
				{description && (
					<p
						className={`text-xs mt-0.5 font-normal ${
							rest.disabled
								? 'text-gray-400 dark:text-gray-500'
								: 'text-gray-500 dark:text-gray-300'
						} ${descriptionStyles}`}>
						{description}
					</p>
				)}
			</div>
		</div>
	)
}

export default ProductRadioInput
