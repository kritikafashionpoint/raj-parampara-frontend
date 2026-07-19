import React from 'react'
import SellerDashboard from './comps/SellerDashboard'
import Products from './comps/Products'

export default function S_Dash_Inner({
    activeTab
}) {
    return (
        <div className='w-full lg:p-10 p-5 h-screen overflow-y-auto'>
            {activeTab === 'dashboard' && <SellerDashboard />}
            {activeTab === 'products' && <Products />}
        </div>
    )
}
