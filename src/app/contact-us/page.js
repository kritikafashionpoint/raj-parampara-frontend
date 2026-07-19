import React from 'react'
import { contact_us_meta } from '../seo/meta_content'
import ContactUsClient from './ContactUsClient'

export const metadata = {
    title: contact_us_meta.title,
    description: contact_us_meta.description
}

export default function Page() {
    return (
        <div>
            <ContactUsClient/>
        </div>
    )
}
