import { Product } from '@/components/ProductCard'
import { CartProduct } from './_components/cart/cartItem'

export const items: CartProduct[] = [
	{
		id: '1',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
		title:
			'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
		link: '/',
		price: 1499,
		quantity: 2,
	},
	{
		id: '2',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
		title:
			'Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band',
		link: '/',
		price: 589,
		quantity: 1,
	},
	{
		id: '3',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg',
		title:
			'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
		link: '/',
		price: 1799,
		quantity: 2,
	},
	{
		id: '4',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg',
		title: 'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold',
		link: '/',
		price: 699,
		quantity: 1,
	},
	{
		id: '5',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg',
		title: 'APPLE iPhone 15 5G phone, 256GB, Gold',
		link: '/',
		price: 1199,
		quantity: 2,
	},
]

export const relatedProducts: Product[] = [
	{
		id: 'product-1',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
		title: 'iMac 27”',
		link: '/',
		description:
			'This generation has some improvements, including a longer continuous battery life.',
		discountedPrice: 399,
		price: 299,
	},
	{
		id: 'product-2',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg',
		title: 'Playstation 5',
		link: '/',
		description:
			'This generation has some improvements, including a longer continuous battery life.',
		discountedPrice: 799,
		price: 499,
	},
	{
		id: 'product-3',
		img: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg',
		title: 'Apple Watch Series 8',
		link: '/',
		description:
			'This generation has some improvements, including a longer continuous battery life.',
		discountedPrice: 1799,
		price: 1199,
	},
]
