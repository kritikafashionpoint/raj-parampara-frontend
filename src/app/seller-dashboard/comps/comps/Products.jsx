import React, { useState } from 'react'
import RequestProduct from './products_tab/RequestProduct'
import ViewProductRequests from './products_tab/ViewProductRequests'

export default function Products() {
    const [activeProductTab, setActiveProductTab] = useState('request')
    return (
        <div className="flex-1 bg-white">

            <div>
                <h1 className="text-3xl font-bold text-[#2D1B12]">
                    Request & View Products
                </h1>

                <p className="text-gray-500 mt-1">
                    View All Products
                </p>
            </div>

            <div className='flex items-center gap-5 my-5'>
                <button onClick={() => setActiveProductTab('request')} className={`${activeProductTab === 'request' ? 'bg-amber-300' : 'bg-white'} border py-3 cursor-pointer px-7 hover:bg-amber-300 duration-300  rounded-xl`}>Request Product</button>
                <button onClick={() => setActiveProductTab('view')} className={`${activeProductTab === 'view' ? 'bg-amber-300' : 'bg-white'} border py-3 cursor-pointer px-7 hover:bg-amber-300 duration-300  rounded-xl`}>View Product</button>
            </div>

            <div className='my-5'>
                {activeProductTab === 'request' ? <RequestProduct /> : <ViewProductRequests />}
            </div>


        </div>
    )
}


