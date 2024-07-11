import { type FC } from 'react'
import Description, { ProductDescription } from './Description'

type Props = {
	descriptions: ProductDescription[]
}

const ProductDescriptions: FC<Props> = ({ descriptions }) => {
	return (
		<section className='max-w-screen-xl mx-auto py-8 md:py-16 px-4 sm:px-8'>
			<h2 className='mb-6 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
				Product description
			</h2>

			{descriptions.map((description) => (
				<Description key={description.id} {...description} />
			))}
		</section>
	)
}

export default ProductDescriptions
