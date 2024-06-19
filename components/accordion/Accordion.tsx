'use client'

import { FC, useCallback, useState } from 'react'
import AccordionItem, { AccordionItemType } from './AccordionItem'

type Props = {
	type?: 'single' | 'multiple'
	items: AccordionItemType[]
}

type AccordionState = Record<string, boolean>

const getInitialState = (items: AccordionItemType[]): AccordionState => {
	const initialState: AccordionState = {}

	for (let i = 0; i < items.length; i++)
		initialState[items[i].id] = i === 0 ? true : false

	return initialState
}

const Accordion: FC<Props> = ({ items, type }) => {
	const [currentOpenAccordion, setCurrentOpenAccordion] = useState<string>(
		items[0].id,
	)
	const [accordions, setAccordions] = useState<AccordionState>(
		getInitialState(items),
	)

	const toggle = useCallback(
		(id: string) => {
			if (type === 'multiple')
				setAccordions((prev) => ({
					...prev,
					[id]: !prev[id],
				}))
			else setCurrentOpenAccordion(id)
		},
		[type],
	)

	return (
		<section className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
			{items.map((item) => (
				<AccordionItem
					key={item.id}
					{...item}
					isOpen={
						type === 'multiple'
							? accordions[item.id]
							: currentOpenAccordion === item.id
					}
					toggle={() => toggle(item.id)}
				/>
			))}
		</section>
	)
}

export default Accordion
