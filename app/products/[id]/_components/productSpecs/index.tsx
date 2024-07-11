import { type FC } from 'react'
import TechnicalDetailsTable, {
	type TechnicalDetails,
} from './technicalDetailsTable'

type Props = {
	details: TechnicalDetails[]
}

const ProductSpecs: FC<Props> = ({ details }) => {
	return (
		<section className='max-w-screen-xl mx-auto py-8 md:py-16 px-4 sm:px-8'>
			<h2 className='mb-6 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>
				Technical Details
			</h2>

			<TechnicalDetailsTable details={details} />
		</section>
	)
}

export default ProductSpecs
