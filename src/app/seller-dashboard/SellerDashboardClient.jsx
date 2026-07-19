'use client'
import React, { useState } from 'react'
import S_Dash_Sidebar from './comps/S_Dash_Sidebar'
import S_Dash_Inner from './comps/S_Dash_Inner'



export default function SellerDashboardClient() {
    const [activeTab, setActiveTab] = useState('dashboard')
    return (
        <div className=''>
            <div className='lg:grid grid-cols-[18%_auto]'>
                <div className='lg:block hidden'>
                    <S_Dash_Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
                </div>
                <S_Dash_Inner activeTab={activeTab} />
            </div>
        </div>
    )
}
