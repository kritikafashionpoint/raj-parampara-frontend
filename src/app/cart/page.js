import React from 'react'
import CartClient from './CartClient'
import { cart_meta } from '../seo/meta_content'

export const metadata = {
    title: cart_meta.title,
    description: cart_meta.description
}

export default function Page() {
    return (
        <div>
            <CartClient/>
        </div>
    )
}
