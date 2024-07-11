'use client'

import { type FC, useCallback, useState } from 'react'
import CartItem, { type CartProduct } from './cartItem'
import { items } from '../../data'

const Cart: FC = () => {
	const [cartItems, setCartItems] = useState<CartProduct[]>(items)

	const incrementQuantity = useCallback((id: string) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
			),
		)
	}, [])
	const decrementQuantity = useCallback((id: string) => {
		setCartItems((prev) =>
			prev
				.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
				)
				.filter((item) => item.quantity > 0),
		)
	}, [])
	const deleteItem = useCallback((id: string) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id))
	}, [])

	return (
		<div className='space-y-6'>
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					{...item}
					decrementQuantity={() => decrementQuantity(item.id)}
					incrementQuantity={() => incrementQuantity(item.id)}
					deleteItem={() => deleteItem(item.id)}
				/>
			))}
		</div>
	)
}

export default Cart
