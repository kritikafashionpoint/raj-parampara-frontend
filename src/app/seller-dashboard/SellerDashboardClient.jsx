import React from 'react'
import S_Dash_Sidebar from './comps/S_Dash_Sidebar'
import { seller_dashboard_meta } from '../seo/meta_content'
import S_Dash_Inner from './comps/S_Dash_Inner'

export const metadata = {
    title: seller_dashboard_meta.title,
    description: seller_dashboard_meta.description
}

export default function SellerDashboardClient() {
    return (
        <div className='grid grid-cols-[30%_auto]'>
            <S_Dash_Sidebar />
            <S_Dash_Inner />
        </div>
    )
}
