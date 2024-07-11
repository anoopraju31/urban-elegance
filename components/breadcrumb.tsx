import Link from 'next/link'
import { type FC } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Breadcrumb: FC = () => {
	return (
		<nav
			className='flex text-gray-500 dark:text-gray-400'
			aria-label='Breadcrumb'>
			<ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
				<li className='inline-flex items-center'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white'>
						<FaHome />
						<span>Home</span>
					</Link>
				</li>
				<li>
					<div className='flex items-center'>
						<MdKeyboardArrowRight />
						<Link
							href='#'
							className='ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2'>
							Products
						</Link>
					</div>
				</li>
				<li aria-current='page'>
					<div className='flex items-center'>
						<MdKeyboardArrowRight />
						<span className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2'>
							Electronics
						</span>
					</div>
				</li>
			</ol>
		</nav>
	)
}

export default Breadcrumb
