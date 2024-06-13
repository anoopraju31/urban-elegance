import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from './ProductCard1'

const meta: Meta<typeof ProductCard> = {
	component: ProductCard,
	title: 'ProductCard',
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {
		img: [
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/wood_brown_chinos_for_men_base_05_06_2023_400x533.jpg',
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/camel_beige_chinos_for_men_full_view_25_1_2023_400x533.jpg',
		],
		isHoverableImg: false,
		title: 'Black Mens Chino Pants',
		category: 'Chino Pants',
		discountedPrice: 998,
		price: 2399,
		discountPercent: 58,
		titleColor: 'text-red-500',
		categoryColor: 'text-purple-300',
		priceColor: 'text-red-600',
		discountedPriceColor: 'text-slate-300',
		discountedPercentColor: 'text-blue-300',
	},
}
