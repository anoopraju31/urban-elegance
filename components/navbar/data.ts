import { NavItemProps } from './navItem'

export const navItems: NavItemProps[] = [
	{
		id: 'item-1',
		title: 'Special Deals',
		isDropdown: true,
		link: '/mens',
		groups: [
			{
				groupTitle: 'SPECIAL DEALS',
				isImages: false,
				items: [
					{
						id: 'women-category-1',
						title: 'Summer Collection For Men',
						link: '/',
					},
					{
						id: 'women-category-2',
						title: 'Summer Collection For Women',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'special-offers-brand-1',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'special-offers-brand-2',
						title: 'Best Seller For Mens',
						link: '/',
					},
				],
			},
			{
				groupTitle: '',
				isImages: true,
				items: [
					{
						id: 'special-offers-notes-1',
						title: 'Mens Perfurme',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/wild-dessert-w-box.jpg',
						link: '/',
					},
					{
						id: 'special-offers-notes-2',
						title: 'Women Perfume',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/menu_image_1.webp',
						link: '/',
					},
					{
						id: 'special-offers-notes-3',
						title: 'Unisex Perfumes',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
					{
						id: 'special-offers-notes-4',
						title: 'Gift Set',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'special-offers-brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/Ck.jpg',
				link: '/',
			},
			{
				id: 'special-offers-brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/Dior.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-2',
		title: 'Mens',
		isDropdown: true,
		link: '/',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'mens-category-1',
						title: 'mens Perfumes',
						link: '/',
					},
					{
						id: 'mens-category-2',
						title: 'Gift Sets For Men',
						link: '/',
					},
					{
						id: 'mens-category-3',
						title: 'Perfumes For Men - Exclusive',
						link: '/',
					},
					{
						id: 'mens-category-4',
						title: 'Best Seller For Men',
						link: '/',
					},
					{
						id: 'mens-category-5',
						title: 'Niche Perfumes',
						link: '/',
					},
					{
						id: 'mens-category-6',
						title: 'Arabic Perfume',
						link: '/',
					},
					{
						id: 'mens-category-7',
						title: 'Inspired Oils',
						link: '/',
					},
					{
						id: 'mens-category-8',
						title: 'Inspired Perfumes',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'women-brand-1',
						title: 'Coral Perfumes',
						link: '/',
					},
					{
						id: 'women-brand-2',
						title: 'Versace',
						link: '/',
					},
					{
						id: 'women-brand-3',
						title: 'Paco Rabanne',
						link: '/',
					},
					{
						id: 'women-brand-4',
						title: 'Dior',
						link: '/',
					},
					{
						id: 'women-brand-5',
						title: 'Mont Blanc',
						link: '/',
					},
					{
						id: 'women-brand-6',
						title: 'Dolce And Gabbana',
						link: '/',
					},
					{
						id: 'women-brand-7',
						title: 'Calvin Klein',
						link: '/',
					},
					{
						id: 'women-brand-8',
						title: 'Hugo Boss',
						link: '/',
					},
					{
						id: 'women-brand-9',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'women-brand-10',
						title: 'Davidoff',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP by notes',
				isImages: true,
				items: [
					{
						id: 'mens-notes-1',
						title: 'Citrus',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/citrus.jpg',
						link: '/',
					},
					{
						id: 'mens-notes-2',
						title: 'Fruity',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruity.jpg',
						link: '/',
					},
					{
						id: 'mens-notes-3',
						title: 'Floral',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/floral.jpg',
						link: '/',
					},
					{
						id: 'mens-notes-4',
						title: 'Woody',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/woody.jpg',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'mens-brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/guess.png',
				link: '/',
			},
			{
				id: 'mens-brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/versace.png',
				link: '/',
			},
			{
				id: 'mens-brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/mont-black.png',
				link: '/',
			},
		],
	},
	{
		id: 'item-3',
		title: 'Women',
		isDropdown: true,
		link: '/women',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'women-category-1',
						title: 'Women Perfumes',
						link: '/',
					},
					{
						id: 'women-category-2',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'women-category-3',
						title: 'Gift Sets For Women',
						link: '/',
					},
					{
						id: 'women-category-4',
						title: 'Cosmetics',
						link: '/',
					},
					{
						id: 'women-category-5',
						title: 'Body Mist',
						link: '/',
					},
					{
						id: 'women-category-6',
						title: 'Arabic Perfume',
						link: '/',
					},
					{
						id: 'women-category-7',
						title: 'Niche Perfumes',
						link: '/',
					},
					{
						id: 'women-category-8',
						title: 'Inspired Perfumes',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'women-brand-1',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'women-brand-2',
						title: 'Clinique',
						link: '/',
					},
					{
						id: 'women-brand-3',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'women-brand-4',
						title: 'Dior',
						link: '/',
					},
					{
						id: 'women-brand-5',
						title: 'Chanel',
						link: '/',
					},
					{
						id: 'women-brand-6',
						title: 'Guess',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP by notes',
				isImages: true,
				items: [
					{
						id: 'notes-1',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruit.png',
						link: '/',
					},
					{
						id: 'notes-2',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-dior.jpg',
				link: '/',
			},
			{
				id: 'brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-roberto.jpg',
				link: '/',
			},
			{
				id: 'brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-amouge.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-4',
		title: 'Shop by Brands',
		isDropdown: true,
		link: '/',
		groups: [
			{
				groupTitle: 'TOP SELLING BRANDS',
				isImages: false,
				items: [
					{
						id: 'best-selling-category-1',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'best-selling-category-2',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'best-selling-category-3',
						title: 'Calvin Klein',
						link: '/',
					},
					{
						id: 'best-selling-category-4',
						title: 'Coral Perfumes',
						link: '/',
					},
					{
						id: 'best-selling-category-5',
						title: 'Davidoff',
						link: '/',
					},
					{
						id: 'best-selling-category-6',
						title: 'Carolina Herrera',
						link: '/',
					},
					{
						id: 'best-selling-category-7',
						title: 'Hugo Boss',
						link: '/',
					},
					{
						id: 'best-selling-category-8',
						title: 'Chanel',
						link: '/',
					},
					{
						id: 'best-selling-category-9',
						title: 'Ysl',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'EXCLUSIVE BRANDS',
				isImages: false,
				items: [
					{
						id: 'exclusive-brand-1',
						title: 'Coral Perfumes',
						link: '/',
					},
					{
						id: 'exclusive-brand-2',
						title: 'Onyx',
						link: '/',
					},
					{
						id: 'exclusive-brand-3',
						title: 'Middle East Perfumes',
						link: '/',
					},
					{
						id: 'exclusive-brand-4',
						title: 'Jacquelyn London',
						link: '/',
					},
					{
						id: 'exclusive-brand-5',
						title: 'Mc John',
						link: '/',
					},
					{
						id: 'exclusive-brand-6',
						title: 'Botanicae Creations',
						link: '/',
					},
					{
						id: 'exclusive-brand-7',
						title: 'The Good Oud',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'TOP BRANDS',
				isImages: true,
				items: [
					{
						id: 'top-brand-1',
						title: 'Dior',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruit.png',
						link: '/',
					},
					{
						id: 'top-brand-2',
						title: 'Mc John',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
					{
						id: 'top-brand-3',
						title: 'Coral Perfumes',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
					{
						id: 'top-brand-4',
						title: 'Chanel',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'shop-brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/406x109Product_Highlights_room_spray.jpg',
				link: '/',
			},
			{
				id: 'shop-brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/406x109Product_Highlights_reed_diffuser.jpg',
				link: '/',
			},
			{
				id: 'shop-brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/406x109Product_Highlights_bakhoor.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-5',
		title: 'Best Sellers',
		isDropdown: true,
		link: '/',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'best-sellers-category-1',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'best-sellers-category-2',
						title: 'Best Seller For Men',
						link: '/',
					},
					{
						id: 'best-sellers-category-3',
						title: 'Best Sellers Under 99',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'best-seller-brand-1',
						title: 'Davidoff',
						link: '/',
					},
					{
						id: 'best-seller-brand-2',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'best-seller-brand-3',
						title: 'Mc John',
						link: '/',
					},
					{
						id: 'best-seller-brand-4',
						title: 'Jaguar',
						link: '/',
					},
					{
						id: 'best-seller-brand-5',
						title: 'Gucci',
						link: '/',
					},
					{
						id: 'best-seller-brand-6',
						title: 'Versace',
						link: '/',
					},
					{
						id: 'best-seller-brand-7',
						title: 'Dior',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'TOP PRODUCTS',
				isImages: true,
				items: [
					{
						id: 'top-product-1',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/121x121Products_1_million.jpg',
						link: '/',
					},
					{
						id: 'top-product-2',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/121x121Products_Armani_Stronger.jpg',
						link: '/',
					},
					{
						id: 'top-product-3',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/121x121Products_coral_gravity.jpg',
						link: '/',
					},
					{
						id: 'top-product-4',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/121x121Products_DG_Light_Blue.jpg',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'top-brand-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/406x109Product_Highlights_bakhoor.jpg',
				link: '/',
			},
			{
				id: 'top-brand-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/406x109Product_Highlights_bakhoor.jpg',
				link: '/',
			},
			{
				id: 'top-brand-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/406x109Product_Highlights_bakhoor.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-6',
		title: 'Accessories',
		isDropdown: false,
		link: '/women',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'women-category-1',
						title: 'Women Perfumes',
						link: '/',
					},
					{
						id: 'women-category-2',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'women-category-3',
						title: 'Gift Sets For Women',
						link: '/',
					},
					{
						id: 'women-category-4',
						title: 'Cosmetics',
						link: '/',
					},
					{
						id: 'women-category-5',
						title: 'Body Mist',
						link: '/',
					},
					{
						id: 'women-category-6',
						title: 'Arabic Perfume',
						link: '/',
					},
					{
						id: 'women-category-7',
						title: 'Niche Perfumes',
						link: '/',
					},
					{
						id: 'women-category-8',
						title: 'Inspired Perfumes',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'women-brand-1',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'women-brand-2',
						title: 'Clinique',
						link: '/',
					},
					{
						id: 'women-brand-3',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'women-brand-4',
						title: 'Dior',
						link: '/',
					},
					{
						id: 'women-brand-5',
						title: 'Chanel',
						link: '/',
					},
					{
						id: 'women-brand-6',
						title: 'Guess',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP by notes',
				isImages: true,
				items: [
					{
						id: 'notes-1',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruit.png',
						link: '/',
					},
					{
						id: 'notes-2',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-dior.jpg',
				link: '/',
			},
			{
				id: 'brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-roberto.jpg',
				link: '/',
			},
			{
				id: 'brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-amouge.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-7',
		title: 'Home & Body care',
		isDropdown: false,
		link: '/women',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'women-category-1',
						title: 'Women Perfumes',
						link: '/',
					},
					{
						id: 'women-category-2',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'women-category-3',
						title: 'Gift Sets For Women',
						link: '/',
					},
					{
						id: 'women-category-4',
						title: 'Cosmetics',
						link: '/',
					},
					{
						id: 'women-category-5',
						title: 'Body Mist',
						link: '/',
					},
					{
						id: 'women-category-6',
						title: 'Arabic Perfume',
						link: '/',
					},
					{
						id: 'women-category-7',
						title: 'Niche Perfumes',
						link: '/',
					},
					{
						id: 'women-category-8',
						title: 'Inspired Perfumes',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'women-brand-1',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'women-brand-2',
						title: 'Clinique',
						link: '/',
					},
					{
						id: 'women-brand-3',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'women-brand-4',
						title: 'Dior',
						link: '/',
					},
					{
						id: 'women-brand-5',
						title: 'Chanel',
						link: '/',
					},
					{
						id: 'women-brand-6',
						title: 'Guess',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP by notes',
				isImages: true,
				items: [
					{
						id: 'notes-1',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruit.png',
						link: '/',
					},
					{
						id: 'notes-2',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-dior.jpg',
				link: '/',
			},
			{
				id: 'brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-roberto.jpg',
				link: '/',
			},
			{
				id: 'brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-amouge.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-8',
		title: 'Inspired Creations',
		isDropdown: false,
		link: '/women',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'women-category-1',
						title: 'Women Perfumes',
						link: '/',
					},
					{
						id: 'women-category-2',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'women-category-3',
						title: 'Gift Sets For Women',
						link: '/',
					},
					{
						id: 'women-category-4',
						title: 'Cosmetics',
						link: '/',
					},
					{
						id: 'women-category-5',
						title: 'Body Mist',
						link: '/',
					},
					{
						id: 'women-category-6',
						title: 'Arabic Perfume',
						link: '/',
					},
					{
						id: 'women-category-7',
						title: 'Niche Perfumes',
						link: '/',
					},
					{
						id: 'women-category-8',
						title: 'Inspired Perfumes',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'women-brand-1',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'women-brand-2',
						title: 'Clinique',
						link: '/',
					},
					{
						id: 'women-brand-3',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'women-brand-4',
						title: 'Dior',
						link: '/',
					},
					{
						id: 'women-brand-5',
						title: 'Chanel',
						link: '/',
					},
					{
						id: 'women-brand-6',
						title: 'Guess',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP by notes',
				isImages: true,
				items: [
					{
						id: 'notes-1',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruit.png',
						link: '/',
					},
					{
						id: 'notes-2',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-dior.jpg',
				link: '/',
			},
			{
				id: 'brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-roberto.jpg',
				link: '/',
			},
			{
				id: 'brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-amouge.jpg',
				link: '/',
			},
		],
	},
	{
		id: 'item-9',
		title: 'Fragrance Oils',
		isDropdown: false,
		link: '/women',
		groups: [
			{
				groupTitle: 'SHOP BY CATEGORY',
				isImages: false,
				items: [
					{
						id: 'women-category-1',
						title: 'Women Perfumes',
						link: '/',
					},
					{
						id: 'women-category-2',
						title: 'Best Seller For Women',
						link: '/',
					},
					{
						id: 'women-category-3',
						title: 'Gift Sets For Women',
						link: '/',
					},
					{
						id: 'women-category-4',
						title: 'Cosmetics',
						link: '/',
					},
					{
						id: 'women-category-5',
						title: 'Body Mist',
						link: '/',
					},
					{
						id: 'women-category-6',
						title: 'Arabic Perfume',
						link: '/',
					},
					{
						id: 'women-category-7',
						title: 'Niche Perfumes',
						link: '/',
					},
					{
						id: 'women-category-8',
						title: 'Inspired Perfumes',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP BY Brand',
				isImages: false,
				items: [
					{
						id: 'women-brand-1',
						title: 'Armani',
						link: '/',
					},
					{
						id: 'women-brand-2',
						title: 'Clinique',
						link: '/',
					},
					{
						id: 'women-brand-3',
						title: 'Burberry',
						link: '/',
					},
					{
						id: 'women-brand-4',
						title: 'Dior',
						link: '/',
					},
					{
						id: 'women-brand-5',
						title: 'Chanel',
						link: '/',
					},
					{
						id: 'women-brand-6',
						title: 'Guess',
						link: '/',
					},
				],
			},
			{
				groupTitle: 'SHOP by notes',
				isImages: true,
				items: [
					{
						id: 'notes-1',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/fruit.png',
						link: '/',
					},
					{
						id: 'notes-2',
						img: 'https://coralperfumes.cloud6.ae//media/menu_trending/Floral_pSPiwuV.png',
						link: '/',
					},
				],
			},
		],
		brands: [
			{
				id: 'brands-img-1',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-dior.jpg',
				link: '/',
			},
			{
				id: 'brands-img-2',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-roberto.jpg',
				link: '/',
			},
			{
				id: 'brands-img-3',
				img: 'https://coralperfumes.cloud6.ae//media/menu_image/womens-amouge.jpg',
				link: '/',
			},
		],
	},
]
