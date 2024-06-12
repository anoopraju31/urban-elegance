import { useState } from 'react'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const ProductSizeDropdown = () => {
	return (
		<Select>
			<SelectTrigger className='w-[100px] bg-white dark:bg-gray-900'>
				<SelectValue placeholder='size' />
			</SelectTrigger>
			<SelectContent className='bg-white dark:bg-gray-900'>
				<SelectGroup>
					<SelectLabel> Size </SelectLabel>
					<SelectItem value='s'> S </SelectItem>
					<SelectItem value='m'> M </SelectItem>
					<SelectItem value='l'> L </SelectItem>
					<SelectItem value='xl'> XL </SelectItem>
					<SelectItem value='xxl'> XXL </SelectItem>
					<SelectItem value='3xl'> 3XL </SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default ProductSizeDropdown
