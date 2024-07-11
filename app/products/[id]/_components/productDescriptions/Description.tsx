import Image from 'next/image'
import React, { FC } from 'react'

export type Description = {
	id: string
	boldStart?: string
	description: string
}
export type ProductDescription = {
	id: string
	image: {
		src: string
		alt: string
		position: 'left' | 'right'
	}
	descriptions: Description[]
}

const Description: FC<ProductDescription> = ({ image, descriptions, id }) => {
	return (
		<div className='my-6 lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:gap-8 xl:gap-16'>
			{image.position === 'left' && (
				<div className='w-full max-w-[32rem] flex relative'>
					<Image className='w-full' src={image.src} alt={image.alt} fill />
				</div>
			)}
			<div className=''>
				<article className='text-base font-normal text-gray-500 dark:text-gray-400'>
					{descriptions.map(({ id, description, boldStart }) => (
						<p key={id} className='mb-4'>
							{boldStart && (
								<span className='font-semibold text-gray-900 dark:text-white mr-2'>
									{boldStart}{' '}
								</span>
							)}
							{description}
						</p>
					))}
				</article>
			</div>

			{image.position === 'right' && (
				<div className='w-full max-w-[32rem] flex relative'>
					<Image className='w-full' src={image.src} alt={image.alt} fill />
				</div>
			)}
		</div>
	)
}

export default Description
