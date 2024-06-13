import type { Meta, StoryObj } from '@storybook/react'
import Light from './Light'

const meta: Meta<typeof Light> = {
	component: Light,
	title: 'Light',
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {
		title: 'Anoop Raju',
	},
}

export const Background: Story = {
	args: {
		title: 'Anoop Raju',
		background: 'bg-[#fc3]',
	},
}

export const Styled: Story = {
	args: {
		title: 'Anoop Raju',
		background: 'bg-[#fc3]',
		styles: 'text-center',
	},
}
