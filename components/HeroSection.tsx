'use client'

import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const HeroSection: FC = () => {
	return (
		<div className='w-full bg-red-500'>
			<Carousel
				className='relative'
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
				<CarouselPrevious className='absolute left-28 -translate-y-1/2 z-50 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 w-16 h-16 text-3xl'>
					<MdKeyboardArrowLeft size={32} />
				</CarouselPrevious>
				<CarouselNext className='absolute right-28 -translate-y-1/2 z-50 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 w-16 h-16 text-3xl'>
					<MdKeyboardArrowRight size={32} />
				</CarouselNext>
			</Carousel>
		</div>
	)
}

export default HeroSection
