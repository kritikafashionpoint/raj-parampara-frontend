'use client'
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaStore } from 'react-icons/fa';
import { HiOutlineCollection, HiOutlineHome, HiOutlineInformationCircle, HiOutlineShoppingBag } from 'react-icons/hi';
import { IoSearchOutline } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';

export default function PcHeader() {

    const { cart } = useContext(CartContext);
    console.log(cart)

    const header_data = [
        {
            title: 'होम',
            link: '/',
            icon: <HiOutlineHome />,
        },
        {
            title: 'हमारे बारे में',
            link: '/about-us',
            icon: <HiOutlineInformationCircle />,

        },
        {
            title: 'शॉप',
            link: '/shop-now',
            icon: <HiOutlineShoppingBag />,

        },
        {
            title: 'कैटेगरी',
            link: '/category',
            icon: <HiOutlineCollection />,

        },
        {
            title: 'विक्रेता बनें',
            link: '/seller-onboarding',
            icon: <FaStore />
        }
    ];
    return (
        <section className='lg:block hidden w-full pb-1.5 bg-white overflow-hidden'>
            <div className='max-w-[1420] mx-auto h-[70] lg:pr-4 pr-4  flex item-start justify-between'>
                <Link href={'/'}>
                    <div className='flex items-center'>
                        <img src='/logo.png' className='w-[150] h-[100] object-contain object-center' />
                        <div className='-mt-4 -ml-5'>
                            <div className='font-extrabold tracking-wider text-amber-700 text-[25px]'>
                                राज परंपरा
                            </div>
                            <p className='text-sm -mt-1 text-black'>
                                राजस्थान से विश्व तक
                            </p>
                        </div>
                    </div>
                </Link>
                <ul className='flex items-center gap-3'>
                    {header_data.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                className="flex items-center gap-2 rounded-2xl px-4 py-4 text-[#2D1B12] hover:bg-white transition group"
                            >
                                <span className="text-2xl group-hover:text-amber-800 duration-100 text-gray-500"> {item.icon}</span>
                                <span className="text-lg text-gray-500 mt-1 font-medium group-hover:text-amber-800 duration-100">
                                    {item.title}
                                </span>
                            </Link>
                        )
                    })}

                    {/* <Link href={'/login'}>
                        <li className='px-5 py-1.5 hover:scale-105 duration-300 bg-amber-300 border rounded-full text-md cursor-pointer border-gray-700'>
                            यूज़र लॉगिन
                        </li>
                    </Link> */}

                    <li className='flex items-center gap-5'>
                        <span className='cursor-pointer'><IoSearchOutline size={20} /></span>
                        <Link href={'/cart'}>
                            <span className='relative cursor-pointer bg-amber-800 text-white w-10 h-10 flex items-center justify-center rounded-full'><ShoppingCartIcon size={18} />
                                {cart.length >= 1 &&
                                    <span className='w-6 h-6 flex items-center justify-center rounded-full bg-amber-300 text-black absolute -right-2 -top-2 text-[13px]'>{cart.length}</span>
                                }
                            </span></Link>
                    </li>

                </ul>
            </div>
        </section>
    )
}
