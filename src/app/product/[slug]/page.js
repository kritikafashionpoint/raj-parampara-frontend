import React from 'react'
import ProductDetailLanding from './ProductDetailLanding';
import { product_detail_meta } from '@/app/seo/meta_content';

export const metadata = {
    title: product_detail_meta.title,
    description: product_detail_meta.description
}

export default function Page() {
    return (
        <>
            <ProductDetailLanding />
        </>
    )
}




