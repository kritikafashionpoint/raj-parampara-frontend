import React from 'react'
import CheckOutClient from './CheckOutClient'
import { checkout_meta } from '../seo/meta_content';

export const metadata = {
    title: checkout_meta.title,
    description: checkout_meta.description
};

export default function Page() {
    return (
        <div>
            <CheckOutClient />
        </div>
    )
}
