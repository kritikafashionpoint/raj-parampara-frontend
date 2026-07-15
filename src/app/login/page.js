import React from 'react'
import LoginClient from './LoginClient'

export const metadata = {
    title: 'Log in to your Raj Parampara account | Raj Parampara',
    description: 'Log in to your Raj Parampara account to manage orders, wishlist, addresses, and enjoy a seamless shopping experience for authentic Rajasthani handicrafts, jewellery, mojari, ethnic wear, home décor, and traditional products.'
}

export default function Page() {
    return (
        <div>
            <LoginClient />
        </div>
    )
}
