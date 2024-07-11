import { type FC } from 'react'
import DropdownItem, { DropdownItemGroupItem } from './dropdownItem'

export type DropdownItemGroups = {
	groupTitle: string
	isImages: boolean
	items: DropdownItemGroupItem[]
}

type Props = {
	id: string
	groups: DropdownItemGroups[]
	brands?: DropdownItemGroupItem[]
}

const NavItemDropdown: FC<Props> = ({ id, groups, brands }) => {
	return (
		<div className='hidden absolute top-12 left-0 right-0 min-h-64 w-full group-hover:block z-50'>
			<div className='max-w-7xl w-full mx-auto p-6 flex gap-2 justify-between bg-white dark:bg-slate-900 rounded-lg shadow-2xl'>
				{groups.map((group) => (
					<div key={id} className=''>
						<h3 className='font-bold mb-2 text-sm 2xl:text-base '>
							{' '}
							{group?.groupTitle}{' '}
						</h3>
						{group.isImages ? (
							<ul className='grid grid-cols-2 gap-2'>
								{group?.items.map((item) => (
									<DropdownItem key={item.id} {...item} />
								))}
							</ul>
						) : (
							<ul className='flex flex-col gap-2'>
								{group?.items.map((item) => (
									<DropdownItem key={item.id} {...item} />
								))}
							</ul>
						)}
					</div>
				))}

				{brands && (
					<div className='grid grid-cols-1 gap-3'>
						{brands.map(({ id, link, img, title }) => (
							<a key={id} href={link}>
								<img
									src={img}
									alt={title}
									className='max-w-xs w-full max-h-32 h-full object-cover rounded-md'
								/>
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default NavItemDropdown
