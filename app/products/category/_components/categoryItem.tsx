import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CategoryItem: FC = () => {
	return (
		<Link href='/' className='flex flex-col items-center gap-4 group'>
			<div className='p-3 bg-white group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700 rounded-full flex justify-center items-center relative transition-colors'>
				<Image
					src='https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg'
					alt=''
					width={100}
					height={100}
					className='w-full h-full aspect-square'
				/>
			</div>

			<h4> Electronics </h4>
		</Link>
	)
}

export default CategoryItem
