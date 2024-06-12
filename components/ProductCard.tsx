import { FC } from 'react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const ProductCard: FC = () => {
	return (
		<Card className='min-w-48 w-full overflow-hidden bg-gray-900'>
			<Image
				src='/product1.avif'
				width={300}
				height={300}
				className='w-full '
				alt=''
			/>
			<CardHeader>
				<CardTitle className='text-xl'>
					{' '}
					AIRism Cotton Oversized Crew Neck T-Shirt{' '}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<span className='flex items-center'>
					<FaStar fill='rgb(234 179 8)' />
					<FaStar fill='rgb(234 179 8)' />
					<FaStar fill='rgb(234 179 8)' />
					<FaStar fill='rgb(234 179 8)' />
					<span className='text-gray-600 ml-3'>4 Reviews</span>
				</span>
			</CardContent>
			<CardFooter>
				<p>$499</p>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
