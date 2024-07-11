import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer: FC = () => {
	return (
		<footer className='text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900  body-font'>
			<div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
				<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
					<Link
						href='/'
						className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white'>
						<Image
							src='/logo.webp'
							width={30}
							height={30}
							className='w-10 h-10 text-white rounded-full'
							alt='logo'
						/>
						<span className='ml-3 text-xl'> UrbanElegance </span>
					</Link>
					<p className='mt-3 text-sm text-gray-500'>
						Where City Chic Meets Elegance
					</p>
				</div>
				<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
					<div className='lg:w-1/5 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									First Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Second Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Third Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Fourth Link
								</a>
							</li>
						</nav>
					</div>

					<div className='lg:w-1/5 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									First Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Second Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Third Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Fourth Link
								</a>
							</li>
						</nav>
					</div>

					<div className='lg:w-1/5 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3'>
							CATEGORIES
						</h2>
						<nav className='list-none mb-10'>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									First Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Second Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Third Link
								</a>
							</li>
							<li>
								<a className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'>
									Fourth Link
								</a>
							</li>
						</nav>
					</div>

					{/* News letter subscription */}
					<div className='flex-1 lg:min-w-80 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3'>
							SUBSCRIBE
						</h2>
						<div className='w-full flex gap-2 justify-center items-end md:justify-start'>
							<div className='relative w-full min-w-40 sm:max-w-80'>
								<label
									htmlFor='footer-field'
									className='leading-7 text-sm text-gray-600 dark:text-gray-400'></label>
								<input
									type='text'
									id='footer-field'
									name='footer-field'
									className='w-full min-w-32 bg-gray-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-orange-200 dark:ocus:ring-orange-900 focus:border-orange-500 dark:focus:border-orange-500 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
							<button className='lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded'>
								Button
							</button>
						</div>
						<p className='text-gray-500 text-sm mt-2 md:text-left text-center'>
							Enter your email below to be the first to know about new
							collections and product launches.
						</p>
					</div>
				</div>
			</div>

			{/* Copyright & Socials */}
			<div className='bg-gray-100 dark:bg-gray-800 dark:bg-opacity-75'>
				<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
					<p className='text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left'>
						© 2024 UrbanElegance
					</p>

					<div className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<a
							href='www.facebook.com'
							className='text-gray-500 dark:text-gray-400'>
							<FaFacebookF />
						</a>
						<a
							href='www.twitter.com'
							className='ml-3 text-gray-500 dark:text-gray-400'>
							<FaTwitter />
						</a>
						<a
							href='www.instagram.com'
							className='ml-3 text-gray-500 dark:text-gray-400'>
							<FaInstagram />
						</a>
						<a
							href='www.linkedin.com'
							className='ml-3 text-gray-500 dark:text-gray-400'>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
