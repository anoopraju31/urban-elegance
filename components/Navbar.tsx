'use client'

import { FC, useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiCloseLargeFill, RiMenu3Fill } from 'react-icons/ri'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ToggleTheme from './ToggleTheme'
import { signOut, useSession } from 'next-auth/react'

const Navbar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
	const { data: session } = useSession()
	const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

	return (
		<header className='text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 relative'>
			<div className='container mx-auto flex p-5 flex-row justify-between items-center'>
				<Link
					href='/'
					className='flex font-medium font-serif items-center mb-4 md:mb-0 text-gray-900 dark:text-white'>
					<Image
						src='/logo.webp'
						width={30}
						height={30}
						className='w-10 h-10 text-white rounded-full'
						alt='logo'
					/>
					<span className='ml-3 text-xl'> UrbanElegance </span>
				</Link>

				<nav className='md:ml-auto md:mr-auto hidden md:flex flex-wrap items-center text-base justify-center'>
					<Link
						href='/'
						className='mr-5 hover:text-gray-900 dark:hover:text-gray-100'>
						Collections
					</Link>
					<Link
						href='/'
						className='mr-5 hover:text-gray-900 dark:hover:text-gray-100'>
						New Lunch
					</Link>
					<Link
						href='/'
						className='mr-5 hover:text-gray-900 dark:hover:text-gray-100'>
						About Us
					</Link>
					<Link
						href='/'
						className='mr-5 hover:text-gray-900 dark:hover:text-gray-100'>
						Contact
					</Link>
				</nav>

				<div className='mr-5 hidden md:block'>
					<ToggleTheme />
				</div>

				{session && session.user ? (
					<button
						onClick={() => signOut()}
						className='hidden md:inline-flex items-center text-center text-white bg-red-600 border-0 py-2 px-3 focus:outline-none hover:bg-red-700 rounded text-base'>
						Logout
					</button>
				) : (
					<Link
						href='/login'
						className='hidden md:inline-flex items-center text-center text-white bg-red-600 border-0 py-2 px-3 focus:outline-none hover:bg-red-700 rounded text-base'>
						Sign In
					</Link>
				)}

				<button
					onClick={toggleMenu}
					className='md:hidden text-2xl p-2 rounded-full inline-flex items-center w-10 h-10 justify-center text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700/50 dark:focus:ring-gray-600'>
					<span className='sr-only'>Open main menu</span>
					{isMenuOpen ? <RiCloseLargeFill /> : <RiMenu3Fill />}
				</button>
			</div>

			{isMenuOpen ? (
				<div className='absolute top-20 right-0 md:hidden w-full z-50 transition-all duration-200 ease-in'>
					<div className='container mx-auto px-5 flex  justify-end'>
						<nav className='w-full sm:w-52 rounded-md bg-white dark:bg-gray-900 shadow-2xl p-5 flex flex-col items-center text-base gap-1'>
							<Link
								href='/'
								className='w-full py-1 px-3 text-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'>
								Collections
							</Link>
							<Link
								href='/'
								className='w-full py-1 px-3 text-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'>
								New Lunch
							</Link>
							<Link
								href='/'
								className='w-full py-1 px-3 text-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'>
								About Us
							</Link>
							<Link
								href='/'
								className='w-full py-1 px-3 text-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'>
								Contact
							</Link>

							<ToggleTheme />

							<button className='w-full my-2 flex items-center justify-center text-white bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base'>
								Sign In
							</button>

							<div className='flex mx-auto mt-2 justify-center'>
								<a
									href='www.facebook.com'
									className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
									<FaFacebookF />
								</a>
								<a
									href='www.twitter.com'
									className='ml-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
									<FaTwitter />
								</a>
								<a
									href='www.instagram.com'
									className='ml-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
									<FaInstagram />
								</a>
								<a
									href='www.linkedin.com'
									className='ml-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'>
									<FaLinkedin />
								</a>
							</div>
						</nav>
					</div>
				</div>
			) : null}
		</header>
	)
}

export default Navbar
