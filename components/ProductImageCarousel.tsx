import Image from 'next/image'
import { FC } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

type Props = {}

const ProductImageCarousel: FC<Props> = (props) => {
	return (
		<div className='lg:w-1/2 w-full lg:h-auto h-full relative'>
			<Carousel>
				<CarouselContent>
					<CarouselItem>
						<Image
							alt='ecommerce'
							width={500}
							height={500}
							className='w-full h-full aspect-square object-cover object-center rounded'
							src='/placeholder.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<Image
							alt='ecommerce'
							width={500}
							height={500}
							className='w-full h-full aspect-square object-cover object-center rounded'
							src='/placeholder.png'
						/>
					</CarouselItem>
					<CarouselItem>
						<Image
							alt='ecommerce'
							width={500}
							height={500}
							className='w-full h-full aspect-square object-cover object-center rounded'
							src='/placeholder.png'
						/>
					</CarouselItem>
				</CarouselContent>

				<CarouselPrevious className='-left-4' />
				<CarouselNext className='-right-4' />
			</Carousel>
		</div>
	)
}

export default ProductImageCarousel
