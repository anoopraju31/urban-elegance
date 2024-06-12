'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FC } from 'react'

type Props = {}

const SignInWithGoogle: FC<Props> = (props) => {
	const { data: session } = useSession()

	if (session && session.user) {
		return (
			<div>
				<button onClick={() => signOut()}> Sign Out </button>
			</div>
		)
	}

	return (
		<div>
			<button onClick={() => signIn('google')}> Sign With Google </button>
		</div>
	)
}

export default SignInWithGoogle
