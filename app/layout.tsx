import { FC } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import AuthProvider from '@/components/AuthProvider'

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
				<AuthProvider> {children} </AuthProvider>
			</body>
		</html>
	)
}

export default RootLayout
