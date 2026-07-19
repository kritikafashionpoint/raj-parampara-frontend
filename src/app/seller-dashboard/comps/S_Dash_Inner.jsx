import React from 'react'
import SellerDashboard from './comps/SellerDashboard'
import Products from './comps/Products'
import PaymentSheet from './comps/PaymentSheet'

export default function S_Dash_Inner({
    activeTab,
    setActiveTab
}) {
    return (
        <div className='w-full lg:p-12 p-5 h-screen overflow-y-auto bg-white'>
            {activeTab === 'dashboard' && <SellerDashboard setActiveTab={setActiveTab} />}
            {activeTab === 'products' && <Products />}
            {activeTab === 'payment' && <PaymentSheet />}

        </div>
    )
}
