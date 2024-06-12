import { FC } from 'react'
import SignInWithGoogle from '@/components/SignInWithGoogle'

type Props = {}

const page: FC<Props> = (props) => {
	return (
		<div>
			<h1> login page </h1>
			<SignInWithGoogle />
		</div>
	)
}

export default page
