import { ImageData } from '@/app/products/[id]/_components/productInfo/productGallary'
import { TechnicalDetails } from '@/app/products/[id]/_components/productSpecs/technicalDetailsTable'
import { ProductDescription } from './_components/productDescriptions/Description'

export const images: ImageData[] = [
	{
		id: '1',
		src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
		alt: 'front view',
	},
	{
		id: '2',
		src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg',
		alt: 'back view',
	},
	{
		id: '3',
		src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg',
		alt: 'all included in box',
	},
	{
		id: '1',
		src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg',
		alt: 'side view',
	},
]

export const details: TechnicalDetails[] = [
	{
		id: '1',
		title: 'Display',
		description:
			'24-inch 4.5K Retina display, 4480x2520 resolution at 218 pixels per inch with support for 1 billion colours, 500 nits brightness, Wide colour (P3), True Tone technology',
	},
	{
		id: '2',
		title: 'Processor',
		description:
			'Apple M1 chip, 8-core CPU with 4 performance cores and 4 efficiency cores, 7-core GPU',
	},
	{
		id: '3',
		title: 'Video Support and Camera',
		description:
			'1080p FaceTime HD camera with M1 image signal processor, Thunderbolt 3 digital video output',
	},
	{
		id: '4',
		title: 'Connections and Expansion',
		description:
			'Two Thunderbolt / USB 4 ports with support for: DisplayPort, Thunderbolt 3 (up to 40Gb/s), USB 4 (up to 40Gb/s), USB 3.1 Gen 2 (up to 10Gb/s), Thunderbolt 2, HDMI, DVI and VGA supported using adapters (sold separately), 3.5mm headphone jack, Configurable with Gigabit Ethernet',
	},
	{
		id: '5',
		title: 'Wireless',
		description:
			'Wi‑Fi, 802.11ax Wi‑Fi 6 wireless networking, IEEE 802.11a/b/g/n/ac compatible, Bluetooth, Bluetooth 5.0 wireless technology',
	},
	{
		id: '6',
		title: 'In the Box',
		description:
			'iMac, Magic Keyboard, Magic Mouse, 143W power adapter, Power lead (2m), USB‑C to Lightning Cable',
	},
	{
		id: '7',
		title: 'Height',
		description: '46.1 cm (18.1 inches)',
	},
	{
		id: '8',
		title: 'Width',
		description: '54.7 cm (21.5 inches)',
	},
	{
		id: '9',
		title: 'Depth',
		description: '14.7 cm (5.8 inches)',
	},
	{
		id: '10',
		title: 'Weight',
		description: '4.46 kg (9.83 pounds)',
	},
]

export const productDescriptions: ProductDescription[] = [
	{
		id: 'desc-1',
		image: {
			src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
			alt: 'iMac Front view',
			position: 'left',
		},
		descriptions: [
			{
				id: 'des-11',
				boldStart: 'Studio-quality mics for high-quality conversations:',
				description:
					'see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display, the P3 wide color gamut brings what you&apos;re watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness.',
			},
			{
				id: 'des-12',
				description:
					"A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best.",
			},
			{
				id: 'des-13',
				description:
					'And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your environment, for a more natural viewing experience.',
			},
			{
				id: 'des-14',
				description:
					"So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.",
			},
		],
	},
	{
		id: 'desc-3',
		image: {
			src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
			alt: 'iMac Front view',
			position: 'right',
		},
		descriptions: [
			{
				id: 'des-21',
				boldStart: 'Studio-quality mics for high-quality conversations:',
				description:
					"see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display, the P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness.",
			},
			{
				id: 'des-22',
				description:
					"A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best.",
			},
			{
				id: 'des-23',
				description:
					'And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your environment, for a more natural viewing experience.',
			},
			{
				id: 'des-24',
				description:
					"So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.",
			},
		],
	},
	{
		id: 'desc-3',
		image: {
			src: 'https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg',
			alt: 'iMac Front view',
			position: 'left',
		},
		descriptions: [
			{
				id: 'des-31',
				boldStart: 'Studio-quality mics for high-quality conversations:',
				description:
					"see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display, the P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness.",
			},
			{
				id: 'des-32',
				description:
					"A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best.",
			},
			{
				id: 'des-33',
				description:
					'And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your environment, for a more natural viewing experience.',
			},
			{
				id: 'des-34',
				description:
					"So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.",
			},
		],
	},
]
