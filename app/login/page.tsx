'use client'

import { FC } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Page: FC = () => {
	const { data: session } = useSession()

	if (session && session.user) redirect('/')

	return (
		<div className='w-full bg-white dark:bg-gray-900 lg:grid min-h-[var(--hero-image-height-sm)] lg:grid-cols-2 md:min-h-[var(--hero-image-height-lg)]'>
			<div className='flex items-center justify-center py-12'>
				<div className='mx-auto grid w-[350px] gap-6'>
					<div className='grid gap-2 text-center'>
						<h1 className='text-3xl font-bold'>Login</h1>
						<p className='text-balance text-muted-foreground'>
							Enter your email below to login to your account
						</p>
					</div>
					<div className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email' className='sr-only'>
								Email
							</Label>
							<Input
								id='email'
								type='email'
								placeholder='m@example.com'
								required
								className='bg-white dark:bg-gray-900'
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password' className='sr-only'>
									Password
								</Label>
							</div>
							<Input
								id='password'
								type='password'
								placeholder='password'
								required
								className='bg-white dark:bg-gray-900'
							/>
						</div>
						<Button type='submit' className='w-full'>
							Login
						</Button>

						<Link
							href='/forgot-password'
							className='inline-block text-center text-sm underline'>
							Forgot your password?
						</Link>
						<Button
							onClick={() => signIn('google')}
							variant='outline'
							className='w-full text-white bg-red-500'>
							Login with Google
						</Button>
					</div>
					<div className='mt-4 text-center text-sm'>
						Don&apos;t have an account?{' '}
						<Link href='#' className='underline'>
							Sign up
						</Link>
					</div>
				</div>
			</div>
			<div className='hidden bg-muted lg:block'>
				<Image
					src='/login.jpg'
					alt='Image'
					width='1920'
					height='1080'
					className='h-full w-full object-cover'
				/>
			</div>
		</div>
	)
}

export default Page
