import { type FC } from 'react'
import Image from 'next/image'
import { ImageData } from '.'

type ImageSelectorProps = {
	data: ImageData
	handleClick: () => void
}

const ImageSelector: FC<ImageSelectorProps> = ({ data, handleClick }) => {
	return (
		<button
			onClick={handleClick}
			className='max-w-20 rounded-lg border p-2 border-gray-800'>
			<Image
				className='aspect-square'
				src={data.src}
				alt={data.alt}
				width={200}
				height={200}
			/>
		</button>
	)
}

export default ImageSelector
