import { FC } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'
import Footer from './footer'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'UrbanElegance',
	description:
		'UrbanElegance offers a curated collection of stylish and elegant clothing for the modern urbanite. Elevate your wardrobe with our exclusive designs.',
}

type Props = {
	children: React.ReactNode
}

const RootLayout: FC<Readonly<Props>> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system'>
					<AuthProvider>
						<Navbar />
						{children}
						<Footer />
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
