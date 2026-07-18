import React from 'react'
import LoginClient from './LoginClient'
import { login_meta } from '../seo/meta_content'

export const metadata = {
    title: login_meta.title,
    description: login_meta.description
}

export default function Page() {
    return (
        <div>
            <LoginClient />
        </div>
    )
}
