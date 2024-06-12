'use client'

import { useTheme } from 'next-themes'
import { FC } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ToggleTheme: FC = () => {
	const { setTheme, theme } = useTheme()
	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	return (
		<Button onClick={toggleTheme} variant='ghost' size='icon'>
			{theme == 'light' ? <Sun /> : <Moon />}
			<span className='sr-only'>Toggle theme</span>
		</Button>
	)
}

export default ToggleTheme
