import { SearchAlertIcon, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

export default function PcHeader() {
    const header_data = [
        {
            title: 'होम',
            link: '/',
        },
        {
            title: 'हमारे बारे में',
            link: '/about-us',
        },
        {
            title: 'दुकान',
            link: '/shop',
        },
        {
            title: 'श्रेणियाँ',
            link: '/categories',
        },
        {
            title: 'विक्रेता बनें',
            link: '/seller-onboarding',
        }
    ];
    return (
        <section className='lg:block hidden w-full py-0 bg-white overflow-hidden'>
            <div className='max-w-[1420] mx-auto h-[70]  flex item-start justify-between'>
                <Link href={'/'}>
                    <div className='flex items-center'>
                        <img src='/logo.png' className='w-[150] h-[100] object-contain object-center' />
                        <div className='-mt-5 -ml-5'>
                            <div className='font-extrabold tracking-wider text-amber-700 text-[25px]'>
                                राज परंपरा
                            </div>
                            <p className='text-sm -mt-1 text-black'>
                                राजस्थान से विश्व तक
                            </p>
                        </div>
                    </div>
                </Link>
                <ul className='flex items-center gap-10'>
                    {header_data.map((item, index) => {
                        return (
                            <Link key={index} href={item.link}>
                                <li className='font-semibold text-black text-md cursor-pointer'>
                                    {item.title}
                                </li>
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
                        <Link href={'/cart'}><span className='cursor-pointer bg-amber-800 text-white w-9 h-9 flex items-center justify-center rounded-full'><ShoppingCartIcon size={18} /></span></Link>
                    </li>

                </ul>
            </div>
        </section>
    )
}
