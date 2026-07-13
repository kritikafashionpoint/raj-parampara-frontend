import React from 'react'
import CartClient from './CartClient'

export const metadata = {
    title: 'Cart | Raj Parampara',
    description: 'cart'
}

export default function page() {
    return (
        <div>
            <CartClient/>
        </div>
    )
}
