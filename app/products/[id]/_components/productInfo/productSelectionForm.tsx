'use client'

import ProductRadioInput from '@/components/productInputs/productRadioInput'
import ProductSelectorRadioInput from '@/components/productInputs/productSelectorRadioInput'
import { type ChangeEvent, type FC, useCallback, useState } from 'react'

const ProductSelectionForm: FC = () => {
	const [pickup, setPickup] = useState('')
	const [warranty, setWarranty] = useState('')
	const [color, setColor] = useState('')
	const [capcity, setCapacity] = useState('')

	const handlePickupChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setPickup(e.target.value),
		[],
	)
	const handleWarrantyChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setWarranty(e.target.value),
		[],
	)
	const handleCapacityChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setCapacity(e.target.value),
		[],
	)
	const handleColorChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value),
		[],
	)

	return (
		<form>
			{/* Products variants */}
			<div className='my-6 md:my-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div>
					<h4 className='mb-2 text-base text-gray-900 dark:text-white font-medium'>
						Colour
					</h4>

					<div className='flex gap-2 flex-wrap'>
						<ProductSelectorRadioInput
							id='color-green'
							name='color'
							value='green'
							checked={color === 'green'}
							onChange={(e) => {
								handleColorChange
							}}
							label='Green'
						/>

						<ProductSelectorRadioInput
							id='color-red'
							name='color'
							value='red'
							checked={color === 'red'}
							onChange={handleColorChange}
							label='Red'
						/>

						<ProductSelectorRadioInput
							id='color-blue'
							name='color'
							value='blue'
							checked={color === 'blue'}
							onChange={handleColorChange}
							label='Blue'
						/>

						<ProductSelectorRadioInput
							id='color-silver'
							name='color'
							value='silver'
							checked={color === 'silver'}
							onChange={handleColorChange}
							label='silver'
						/>
					</div>
				</div>

				<div>
					<h4 className='mb-2 text-base text-gray-900 dark:text-white font-medium'>
						SSD Capacity
					</h4>

					<div className='flex gap-2 flex-wrap'>
						<ProductSelectorRadioInput
							id='capcity-256gb'
							name='capcity'
							value='256gb'
							checked={capcity === '256gb'}
							onChange={handleCapacityChange}
							label='256GB'
						/>

						<ProductSelectorRadioInput
							id='capcity-512gb'
							name='capcity'
							value='512gb'
							checked={capcity === '512gb'}
							onChange={handleCapacityChange}
							label='512GB'
						/>

						<ProductSelectorRadioInput
							id='capcity-1tb'
							name='capcity'
							value='1tb'
							checked={capcity === '1tb'}
							onChange={handleCapacityChange}
							label='1TB'
						/>
					</div>
				</div>
			</div>

			{/* Shipping */}
			<div className='my-6 md:my-8 '>
				<h4 className='mb-2 text-base text-gray-900 dark:text-white font-medium'>
					Pickup
				</h4>

				<div className='flex gap-4 md:items-center flex-col md:flex-row'>
					<ProductRadioInput
						id='pickup-shipping'
						name='pickup'
						value='shipping'
						checked={pickup === 'shipping'}
						onChange={handlePickupChange}
						label='Shipping - $19'
						description='Arrives Nov 17'
					/>

					<ProductRadioInput
						id='pickup-postal'
						name='pickup'
						value='postal'
						checked={pickup === 'postal'}
						onChange={handlePickupChange}
						label='Pickup from Postal Office - $9'
						description='Pick a postal Office near you'
						descriptionStyles='underline hover:no-underline'
					/>

					<ProductRadioInput
						id='pickup-shipping-2'
						name='pickup'
						value='shipping-2'
						disabled={true}
						checked={pickup === 'shipping-2'}
						onChange={handlePickupChange}
						label='Shipping - $19'
						description='Arrives Nov 17'
					/>
				</div>
			</div>

			{/* Warranty */}
			<div className='my-6 md:my-8 '>
				<h4 className='mb-2 text-base text-gray-900 dark:text-white font-medium'>
					Add extra warranty
				</h4>

				<div className='flex gap-4 items-center flex-wrap'>
					<ProductRadioInput
						id='warranty-1-year'
						name='warranty'
						value='1-year'
						checked={warranty === '1-year'}
						onChange={handleWarrantyChange}
						label='1 year - $39'
					/>

					<ProductRadioInput
						id='warranty-2-year'
						name='warranty'
						value='2-year'
						checked={warranty === '2-year'}
						onChange={handleWarrantyChange}
						label='2 year - $69'
					/>

					<ProductRadioInput
						id='warranty-3-year'
						name='warranty'
						value='3-year'
						checked={warranty === '3-year'}
						onChange={handleWarrantyChange}
						label='3 year - $91'
					/>
				</div>
			</div>
		</form>
	)
}

export default ProductSelectionForm
