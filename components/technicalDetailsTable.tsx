import { type FC } from 'react'

export type TechnicalDetails = {
	id: string
	title: string
	description: string
}

type Props = {
	details: TechnicalDetails[]
}

const TechnicalDetailsTable: FC<Props> = ({ details }) => {
	return (
		<div className='relative overflow-x-auto'>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className=''>
					<tr>
						<th scope='col' className=''></th>
						<th scope='col' className=''></th>
					</tr>
				</thead>
				<tbody>
					{details.map(({ id, description, title }) => (
						<tr
							key={id}
							className='odd:bg-gray-50 odd:dark:bg-gray-800 even:bg-white even:dark:bg-gray-900 border-b dark:border-gray-700'>
							<th
								scope='row'
								className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
								{title}
							</th>
							<td className='px-6 py-4'>{description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TechnicalDetailsTable
