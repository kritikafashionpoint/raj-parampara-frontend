import React from 'react'
import SellerDashboardClient from './SellerDashboardClient'
import { seller_dashboard, seller_dashboard_meta } from '../seo/meta_content'

export const metadata = {
    title: seller_dashboard_meta.title,
    description: seller_dashboard_meta.description
}

export default function Page() {
    return (
        <>
            <SellerDashboardClient />
        </>
    )
}
