import React from 'react'
import CategoryLandingClient from './CategoryLandingClient'
import { category_meta } from '../seo/meta_content'

export const metadata = {
    title: category_meta.title,
    description: category_meta.description
}

export default function page() {
    return (
        <div>
            <CategoryLandingClient />
        </div>
    )
}
