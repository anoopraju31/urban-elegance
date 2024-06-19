import { FC } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export type AccordionContent = {
	id: string
	content: string
}

export interface AccordionItemType {
	id: string
	title: string
	contents: AccordionContent[]
}

interface AccordionItemProps extends AccordionItemType {
	isOpen: boolean
	toggle: () => void
}

const AccordionItem: FC<AccordionItemProps> = ({
	id,
	title,
	contents,
	isOpen,
	toggle,
}) => {
	return (
		<>
			<h2 className='cursor-pointer' id={`${id}-heading`}>
				<button
					type='button'
					onClick={toggle}
					className='flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3'>
					<span> {title} </span>
					{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</button>
			</h2>

			<div style={{ display: isOpen ? 'block' : 'none' }} id={`${id}-body`}>
				<div className='py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-2 transition-all duration-300'>
					{contents.map(({ id, content }) => (
						<p key={id} className='text-gray-500 dark:text-gray-400'>
							{content}
						</p>
					))}
				</div>
			</div>
		</>
	)
}

export default AccordionItem
