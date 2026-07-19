'use client'
import React, { useState } from 'react'
import S_Dash_Sidebar, { menuItems } from './comps/S_Dash_Sidebar'
import S_Dash_Inner from './comps/S_Dash_Inner'
import { FaBars } from 'react-icons/fa'
import { MobileSideBar } from './comps/S_Dash_Mobile_Sidebar'



export default function SellerDashboardClient() {
    const [activeTab, setActiveTab] = useState('dashboard')
    const [mobileSidebarOpen, setMobileSideBarOpen] = useState(false)

    return (
        <div className=''>

            <div className='lg:grid grid-cols-[18%_auto]'>
                <div className='lg:block hidden'>
                    <S_Dash_Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
                </div>
                <S_Dash_Inner setActiveTab={setActiveTab} activeTab={activeTab} />
            </div>


            <div className='lg:hidden block'>
                <span onClick={() => setMobileSideBarOpen(true)} className="bg-amber-800 text-white px-3 py-3 rounded-xl fixed top-20 right-3 z-50"><FaBars size={20} /></span>

                <MobileSideBar
                    mobileSidebarOpen={mobileSidebarOpen}
                    setMobileSideBarOpen={setMobileSideBarOpen}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        </div>
    )
}



