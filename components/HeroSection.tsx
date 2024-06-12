'use client'

import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const HeroSection: FC = () => {
	return (
		<div className='w-full bg-red-500'>
			<Carousel
				plugins={[
					Autoplay({
						delay: 2000,
						active: true,
						playOnInit: true,
					}),
				]}
				opts={{
					align: 'start',
					loop: true,
				}}>
				<CarouselContent className='gap-0 bg-green-400'>
					<CarouselItem className='mx-0 px-0'>
						<Image
							src='/hero-1.jpg'
							alt=''
							className='w-full h-[var(--hero-image-height-sm)] md:h-[var(--hero-image-height-lg)] object-cover'
							width={1000}
							height={800}
						/>
					</CarouselItem>
					<CarouselItem className='mx-0 px-0'>
						<Image
							src='/hero-2.jpg'
							className='w-full h-[var(--hero-image-height-sm)] md:h-[var(--hero-image-height-lg)] object-cover'
							alt=''
							width={1000}
							height={800}
						/>
					</CarouselItem>
					<CarouselItem className='mx-0 px-0'>
						<Image
							src='/hero-3.jpg'
							className='w-full h-[var(--hero-image-height-sm)] md:h-[var(--hero-image-height-lg)] object-cover'
							alt=''
							width={1000}
							height={800}
						/>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default HeroSection
