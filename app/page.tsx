import Link from 'next/link'
import { FC } from 'react'

type Props = {}

const page: FC<Props> = (props) => {
	return (
		<div>
			{' '}
			Home page
			<Link href='/login'> Login </Link>
		</div>
	)
}

export default page
