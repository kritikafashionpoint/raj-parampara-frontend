'use client'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    ArrowRight,
    Sparkles,
    Crown,
    Gift,
    Star,
} from "lucide-react";
import ProductCard from '@/app/common/ProductCard'


export default function page() {
    const subCategories = [
        {
            name: "Necklace",
            slug: "necklace",
            image: "/categories/necklace.png",
            products: "420+ Products",
        },
        {
            name: "Earrings",
            slug: "earrings",
            image: "/categories/earrings.png",
            products: "310+ Products",
        },
        {
            name: "Bangles",
            slug: "bangles",
            image: "/categories/bangles.png",
            products: "280+ Products",
        },
        {
            name: "Rings",
            slug: "rings",
            image: "/categories/rings.png",
            products: "190+ Products",
        },
        {
            name: "Maang Tikka",
            slug: "maang-tikka",
            image: "/categories/maang-tikka.png",
            products: "95+ Products",
        },
        {
            name: "Anklets",
            slug: "anklets",
            image: "/categories/anklets.png",
            products: "120+ Products",
        },
        {
            name: "Bracelets",
            slug: "bracelets",
            image: "/categories/bracelets.png",
            products: "210+ Products",
        },
        {
            name: "Bridal Sets",
            slug: "bridal-sets",
            image: "/categories/bridal.png",
            products: "180+ Products",
        },
    ];

    const products = [
        {
            title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
            price: "₹799",
            oldPrice: "₹999",
        },
        {
            title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
            price: "₹1,299",
            oldPrice: "₹1,699",
        },
        {
            title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
            price: "₹1,999",
            oldPrice: "₹2,499",
        },
        {
            title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
            price: "₹899",
            oldPrice: "₹1,199",
        },
        {
            title: "पारंपरिक राजस्थानी कृत्रिम आभूषण संग्रह",
            price: "₹599",
            oldPrice: "₹799",
        },
        {
            title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
            price: "₹799",
            oldPrice: "₹999",
        },
        {
            title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
            price: "₹1,299",
            oldPrice: "₹1,699",
        },
        {
            title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
            price: "₹1,999",
            oldPrice: "₹2,499",
        },
        {
            title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
            price: "₹899",
            oldPrice: "₹1,199",
        },
        {
            title: "पारंपरिक राजस्थानी कृत्रिम आभूषण संग्रह",
            price: "₹599",
            oldPrice: "₹799",
        },
        {
            title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
            price: "₹799",
            oldPrice: "₹999",
        },
        {
            title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
            price: "₹1,299",
            oldPrice: "₹1,699",
        },
        {
            title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
            price: "₹1,999",
            oldPrice: "₹2,499",
        },
        {
            title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
            price: "₹899",
            oldPrice: "₹1,199",
        },
        {
            title: "पारंपरिक राजस्थानी कृत्रिम आभूषण संग्रह",
            price: "₹599",
            oldPrice: "₹799",
        }
    ];

    const collections = [
        {
            title: "Bridal Collection",
            icon: Crown,
            color: "bg-[#7A2E1F]",
            desc: "Royal wedding jewellery",
        },
        {
            title: "Festival Collection",
            icon: Gift,
            color: "bg-[#D4AF37]",
            desc: "Celebrate every festival",
        },
        {
            title: "New Arrivals",
            icon: Sparkles,
            color: "bg-[#0F766E]",
            desc: "Latest handcrafted designs",
        },
        {
            title: "Best Sellers",
            icon: Star,
            color: "bg-[#8B5CF6]",
            desc: "Most loved by customers",
        },
    ];
    return (
        <section className='w-full h-full bg-white'>
            {/* <div className='bg-white py-2'>

                <div className='max-w-[1420] mx-auto lg:px-6 px-4'>
                    <div className="flex items-center gap-2 text-md text-gray-800">

                        <Link
                            href="/"
                            className="hover:text-[#7A2E1F] transition">
                            Home
                        </Link>

                        <ChevronRight size={15} />

                        <Link
                            href="/category"
                            className="hover:text-[#7A2E1F] transition">
                            Category
                        </Link>

                        <ChevronRight size={15} />

                        <span className="font-medium text-[#7A2E1F]">
                            Jewellery
                        </span>

                    </div>
                </div>
            </div> */}

            <div className="relative overflow-hidden">

                {/* Banner */}
                <div style={{ backgroundImage: 'url("/banners/b3.png")' }} className="relative bg-no-repeat bg-cover bg-center">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/20" />

                    {/* Content */}
                    <div className="relative py-20 z-49 lg:px-4 px-4 flex items-center">

                        <div className="max-w-2xl lg:px-14">

                            <span className="bg-black inline-flex items-center rounded-full px-4 py-2 text-sm text-white">

                                ✨ Authentic Rajasthan Collection

                            </span>

                            <h1 className="mt-6 text-4xl lg:text-4xl font-bold text-white leading-tight">

                                हस्तनिर्मित राजस्थानी ज्वेलरी

                            </h1>

                            <p className="mt-5 text-white/90 leading-8 text-lg">
                                राजस्थान के विश्वसनीय कारीगरों द्वारा बनाई गई प्रामाणिक हस्तनिर्मित ज्वेलरी का संग्रह।
                                पारंपरिक कुंदन सेट से लेकर आकर्षक सिल्वर आभूषणों तक, हर डिज़ाइन भारत की शाही विरासत की खूबसूरती को दर्शाता है।
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <button className="rounded-xl cursor-pointer bg-amber-300 transition px-7 py-3 text-[#2D1B12] font-semibold">

                                    Explore Collection

                                </button>

                                <button className="rounded-xl cursor-pointer border border-white text-white hover:bg-white hover:text-[#2D1B12] transition px-7 py-3 font-semibold">

                                    Shop By Sellers

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="max-w-[1420] mx-auto py-16 ">

                <div className="text-center mb-10 lg:px-6 px-4">
                    <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium">
                        प्रीमियम कलेक्शन
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-amber-900 mt-4">
                        आर्टिफिशियल ज्वेलरी उत्पाद
                    </h2>

                    <p className="text-gray-600 mt-3 lg:text-lg">
                        राजस्थान की संस्कृति से प्रेरित नए और खास उत्पादों की खोज करें
                    </p>
                </div>
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-5'>
                    {products.map((item, index) => (
                        <ProductCard key={index} item={item} index={index} />
                    ))}
                </div>

            </div>


            <section className="bg-[#FFFDF8]">

                {/* Shop by Sub Category */}

                <div className="max-w-[1420] mx-auto px-4 lg:px-8 py-16">

                    <div className="flex items-end justify-between">

                        <div>

                            <span className="text-[#D4AF37] font-semibold uppercase tracking-widest">

                                Explore

                            </span>

                            <h2 className="text-3xl lg:text-4xl font-bold mt-2">

                                Shop by Sub Category

                            </h2>

                            <p className="text-gray-600 mt-4 max-w-2xl">

                                Browse authentic Rajasthani jewellery by category
                                and discover handcrafted treasures made by skilled artisans.

                            </p>

                        </div>

                        <Link
                            href="/category/jewellery"
                            className="hidden lg:flex items-center gap-2 text-[#7A2E1F] font-semibold hover:gap-4 transition-all"
                        >
                            View All
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-12">

                        {subCategories.map((item) => (

                            <Link
                                key={item.slug}
                                href={`/category/jewellery/${item.slug}`}
                                className="group bg-white border-gray-300 rounded-3xl border overflow-hidden hover:shadow-xl transition duration-300"
                            >

                                <div className="relative h-44 bg-[#FFF8E8]">

                                    <Image
                                        src={'/banners/b3.png'}
                                        alt={item.name}
                                        fill
                                        className="object-cover object-center group-hover:scale-110 transition duration-500"
                                    />

                                </div>

                                <div className="py-4 px-4">

                                    <h3 className="font-bold text-xl">

                                        {item.name}

                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        {item.products}
                                    </p>

                                    <div className="mt-2 flex items-center gap-2 text-[#7A2E1F] font-semibold">

                                        Explore

                                        <ArrowRight
                                            size={17}
                                            className="group-hover:translate-x-1 transition"
                                        />

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

                {/* Featured Collections */}

                <div className="max-w-[1420] mx-auto lg:px-6 px-4 pb-16">

                    <div className="rounded-3xl border border-gray-300 bg-white p-8 lg:p-12">

                        <div className="flex justify-between items-end">

                            <div>

                                <span className="text-[#D4AF37] uppercase font-semibold tracking-widest">

                                    Featured

                                </span>

                                <h2 className="text-3xl lg:text-4xl font-bold mt-2">

                                    Special Collections

                                </h2>

                            </div>

                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

                            {collections.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <Link
                                        href="#"
                                        key={index}
                                        className="group rounded-3xl border border-gray-300 hover:shadow-xl  p-8 relative overflow-hidden"
                                    >

                                        <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white`}>

                                            <Icon size={30} />

                                        </div>

                                        <h3 className="text-2xl font-bold mt-6">

                                            {item.title}

                                        </h3>

                                        <p className="text-gray-600 mt-3 leading-7">

                                            {item.desc}

                                        </p>

                                        <div className="mt-8 flex items-center gap-2 font-semibold text-[#7A2E1F]">

                                            Shop Now

                                            <ArrowRight
                                                size={18}
                                                className="group-hover:translate-x-1 transition"
                                            />

                                        </div>

                                        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-amber-100 blur-2xl group-hover:scale-150 transition duration-500" />

                                    </Link>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </section>


        </section>
    )
}
