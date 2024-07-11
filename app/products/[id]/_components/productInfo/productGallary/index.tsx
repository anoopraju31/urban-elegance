'use client'

import { type FC, useState } from 'react'
import Image from 'next/image'
import ImageSelector from './imageSelector'

export type ImageData = {
	id: string
	src: string
	alt: string
}

type ProductGallaryProps = {
	images: ImageData[]
}

const ProductGallary: FC<ProductGallaryProps> = ({ images }) => {
	const [currentImage, setCurrentImage] = useState<ImageData>(images[0])
	return (
		<div className='shrink-0 max-w-md lg:max-w-lg mx-auto flex flex-col gap-6'>
			<div className='flex'>
				<Image
					className='w-full'
					src={currentImage.src}
					alt={currentImage.alt}
					width={600}
					height={600}
				/>
			</div>

			<div className='flex gap-4 items-center'>
				{images.map((image) => (
					<ImageSelector
						key={image.id}
						data={image}
						handleClick={() => setCurrentImage(image)}
					/>
				))}
			</div>
		</div>
	)
}

export default ProductGallary
