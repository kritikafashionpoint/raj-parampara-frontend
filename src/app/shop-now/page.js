import React from 'react'
import ShopNowClient from './ShopNowClient'
import { shop_now_meta } from '../seo/meta_content'


export const metadata = {
    title: shop_now_meta.title,
    description: shop_now_meta.description
}

export default function Page() {

    return (
        <div>
            <ShopNowClient />
        </div>
    )
}
