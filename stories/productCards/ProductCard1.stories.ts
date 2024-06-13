import type { Meta, StoryObj } from '@storybook/react'
import ProductCard from './ProductCard1'

const meta: Meta<typeof ProductCard> = {
	component: ProductCard,
	title: 'ProductCard1',
}

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
	args: {
		img: [
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/wood_brown_chinos_for_men_base_05_06_2023_400x533.jpg',
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/camel_beige_chinos_for_men_full_view_25_1_2023_400x533.jpg',
		],
		isHoverableImg: true,
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

export const HoverableCard: Story = {
	args: {
		img: [
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/wood_brown_chinos_for_men_base_05_06_2023_400x533.jpg',
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/camel_beige_chinos_for_men_full_view_25_1_2023_400x533.jpg',
		],
		isHoverableImg: true,
		badge: 'Top Rated',
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

export const NonHoverableCard: Story = {
	args: {
		img: [
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/wood_brown_chinos_for_men_base_05_06_2023_400x533.jpg',
		],
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

export const CardWithBadge: Story = {
	args: {
		img: [
			'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/wood_brown_chinos_for_men_base_05_06_2023_400x533.jpg',
		],
		badge: 'Top Rated',
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
