import Image from 'next/image'
import { type FC } from 'react'

export type DropdownItemGroupItem = {
	id: string
	title?: string
	img?: string
	link: string
}

const DropdownItem: FC<DropdownItemGroupItem> = ({ link, img, title }) => {
	return (
		<li className='text-sm 2xl:text-base cursor-pointer'>
			<a href={link} className={`flex flex-col ${img && 'items-center'} gap-1`}>
				{img && (
					<Image
						src={img}
						alt={title || ''}
						width={150}
						height={150}
						className='w-32 h-32 rounded-full object-cover'
					/>
				)}
				{title && <p className='w-fit'>{title}</p>}
			</a>
		</li>
	)
}

export default DropdownItem
