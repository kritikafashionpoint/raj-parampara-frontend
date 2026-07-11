import Link from 'next/link'
import React from 'react'

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
            link: '/be-a-seller',
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

                    <Link href={'/login'}>
                        <li className='px-3 py-1.5 hover:scale-105 duration-300 bg-amber-300 border rounded-full text-md cursor-pointer'>
                            यूज़र लॉगिन
                        </li>
                    </Link>

                </ul>
            </div>
        </section>
    )
}
