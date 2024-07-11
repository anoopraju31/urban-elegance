import type { FC } from 'react'
import { FaStar } from 'react-icons/fa'

type Props = {
	count: number
}

const Stars: FC<Props> = ({ count }) => {
	return (
		<div className='flex items-center gap-1 text-yellow-300'>
			{Array.from({ length: count }, (_, index) => (
				<FaStar key={index} />
			))}
		</div>
	)
}

export default Stars
