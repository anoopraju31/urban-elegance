'use client'

import { type FC } from 'react'
import InputField from '@/components/inputField'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { FiPlus } from 'react-icons/fi'
import TextareaField from '@/components/TextareaField'

const DeliveryDetailsForm: FC = () => {
	return (
		<div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
			<h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
				Delivery Details
			</h2>

			<div>
				<div className='mb-2 flex items-center gap-2'>
					<label
						htmlFor='select-city-input-3'
						className='block text-sm font-medium text-gray-900 dark:text-white'>
						Saved address
					</label>
				</div>

				<Select>
					<SelectTrigger className='w-full flex justify-between items-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500'>
						<SelectValue
							className='outline-none border-none'
							placeholder='New York'
							defaultValue='NY'
						/>
					</SelectTrigger>
					<SelectContent
						id='select-city-input-3'
						className='bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white'>
						<SelectItem value='NY'> New York </SelectItem>
						<SelectItem value='LA'> Los Angeles </SelectItem>
						<SelectItem value='CH'> Chicago </SelectItem>
						<SelectItem value='HU'> Houston </SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className='flex items-center justify-center gap-2'>
				<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
					or add new address
				</span>
			</div>

			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				<InputField
					id='your_name'
					label='Your name'
					type='text'
					placeholder='Bonnie Green'
					required
				/>

				<InputField
					id='your_email'
					label='Your email*'
					type='email'
					placeholder='name@gmail.com'
					required
				/>

				<div className='row-span-2 leading-7'>
					<TextareaField
						id='address'
						label='Your address*'
						rows={5}
						placeholder='Address(Room/Flat/Building)'
						required
					/>
				</div>

				<InputField
					id='phone-number'
					label='Phone number*'
					type='tel'
					placeholder='123-456-7890'
					required
				/>

				<InputField
					id='street'
					label='street name*'
					type='text'
					placeholder='second street'
					required
				/>

				<div>
					<div className='mb-2 flex items-center gap-2'>
						<label
							htmlFor='select-city-input-3'
							className='block text-sm font-medium text-gray-900 dark:text-white'>
							City*
						</label>
					</div>

					<Select>
						<SelectTrigger className='w-full flex justify-between items-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500'>
							<SelectValue
								className='outline-none border-none'
								placeholder='New York'
								defaultValue='NY'
							/>
						</SelectTrigger>
						<SelectContent
							id='select-city-input-3'
							className='bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white'>
							<SelectItem value='NY'> New York </SelectItem>
							<SelectItem value='LA'> Los Angeles </SelectItem>
							<SelectItem value='CH'> Chicago </SelectItem>
							<SelectItem value='HU'> Houston </SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div>
					<div className='mb-2 flex items-center gap-2'>
						<label
							htmlFor='select-region-input-3'
							className='block text-sm font-medium text-gray-900 dark:text-white'>
							Region*
						</label>
					</div>

					<Select>
						<SelectTrigger className='w-full flex justify-between items-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500'>
							<SelectValue
								className='outline-none border-none'
								placeholder='Dubai'
								defaultValue='DU'
							/>
						</SelectTrigger>
						<SelectContent
							id='select-country-input-3'
							className='bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white'>
							<SelectItem value='DU'> Dubai </SelectItem>
							<SelectItem value='AD'> Abu Dhabi </SelectItem>
							<SelectItem value='SH'> Sharjah </SelectItem>
							<SelectItem value='AJ'> Ajman </SelectItem>
							<SelectItem value='UK'> Umm All Quwai </SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className='sm:col-span-2'>
					<Button
						type='submit'
						className='flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm outline-none text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500 dark:hover:bg-gray-700 dark:hover:text-white'>
						<FiPlus />
						<span>Add new address</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DeliveryDetailsForm
