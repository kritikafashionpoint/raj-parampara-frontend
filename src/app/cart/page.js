import React from 'react'
import CartClient from './CartClient'

export const metadata = {
    title: 'Shopping Cart | Raj Parampara - Secure Checkout',
    description: 'Review your selected Rajasthan handicrafts, Mojari, jewellery, ethnic wear, and traditional products before secure checkout with Raj Parampara.'
}

export default function Page() {
    return (
        <div>
            <CartClient/>
        </div>
    )
}
