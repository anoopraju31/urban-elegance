import { FC } from 'react'
import NavItemDropdown, { DropdownItemGroups } from './navItemDropdown'
import { DropdownItemGroupItem } from './dropdownItem'

export type NavItemProps = {
	id: string
	title: string
	link: string
	isDropdown: boolean
	groups: DropdownItemGroups[]
	brands?: DropdownItemGroupItem[]
}

const NavItem: FC<NavItemProps> = ({
	title,
	id,
	isDropdown,
	groups,
	brands,
}) => {
	return (
		<div id={id} className='group'>
			<div className='px-2 lg:px-3 xl:px-4 py-2 text-sm 2xl:text-base whitespace-nowrap font-bold group-hover:bg-green-500 rounded-sm group-hover:text-white'>
				{title}
			</div>

			{isDropdown && (
				<NavItemDropdown groups={groups} id={id} brands={brands} />
			)}
		</div>
	)
}

export default NavItem
