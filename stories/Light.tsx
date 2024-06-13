import { FC } from 'react'

type Props = {
	title: string
	background?: string
	styles?: string
}

const Light: FC<Props> = ({ title, background, styles }) => {
	return (
		<div
			className={`${background || 'bg-slate-200'} ${styles} p-5 text-gray-900`}>
			{title}
		</div>
	)
}

export default Light
