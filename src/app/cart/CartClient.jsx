"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartClient() {
    const cartItems = [
        {
            id: 1,
            name: "राजस्थानी मोजड़ी | Rajasthani Mojari",
            seller: "राज परंपरा स्टोर",
            price: 1499,
            qty: 1,
            image: "/banners/banner.png",
        },
        {
            id: 2,
            name: "ब्लू पॉटरी फूलदान | Blue Pottery Vase",
            seller: "जयपुर हस्तशिल्प",
            price: 999,
            qty: 2,
            image: "/banners/banner.png",
        },
    ];

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <section className="bg-[#FAF8F5] min-h-screen py-14">
            <div className="max-w-[1420] mx-auto px-5">

                {/* Heading */}

                <div className="mb-10">
                    <p className="text-[#B88A28] font-semibold">
                        Shopping Cart
                    </p>

                    <h1 className="text-4xl font-bold text-amber-900 mt-2">
                        आपका शॉपिंग कार्ट
                    </h1>

                    <p className="text-gray-500 mt-2">
                        अपने पसंदीदा राजस्थानी उत्पादों की समीक्षा करें।
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.7fr_.7fr] gap-8">

                    {/* Cart */}

                    <div className="bg-white rounded-3xl shadow-sm border border-amber-100 overflow-hidden">

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead className="bg-amber-900 text-white">

                                    <tr>

                                        <th className="text-left px-6 py-5 font-medium">
                                            उत्पाद
                                        </th>

                                        <th className="text-center px-4">
                                            मूल्य
                                        </th>

                                        <th className="text-center px-4">
                                            मात्रा
                                        </th>

                                        <th className="text-center px-4">
                                            कुल
                                        </th>

                                        <th></th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {cartItems.map((item) => (

                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-300 last:border-0"
                                        >
                                            <td className="px-6 py-6">

                                                <div className="flex gap-5 items-center">

                                                    <div className="w-24 h-24 rounded-2xl overflow-hidden border">

                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={100}
                                                            height={100}
                                                            className="w-full h-full object-cover"
                                                        />

                                                    </div>

                                                    <div>

                                                        <h3 className="font-semibold text-amber-900 text-lg">
                                                            {item.name}
                                                        </h3>

                                                        <p className="text-sm text-gray-500 mt-1">
                                                            Seller :
                                                            {" "}
                                                            {item.seller}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="text-center font-semibold text-amber-900">
                                                ₹{item.price}
                                            </td>

                                            <td>

                                                <div className="flex justify-center">

                                                    <div className="flex items-center border rounded-xl overflow-hidden">

                                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                                                            <Minus size={16} />
                                                        </button>

                                                        <span className="w-12 text-center">
                                                            {item.qty}
                                                        </span>

                                                        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                                                            <Plus size={16} />
                                                        </button>

                                                    </div>

                                                </div>

                                            </td>

                                            <td className="text-center font-bold text-[#B88A28]">
                                                ₹{item.qty * item.price}
                                            </td>

                                            <td className="text-center">

                                                <button className="group text-red-500 cursor-pointer  hover:bg-red-50 rounded-xl p-3 transition">

                                                    <Trash2 className="group-hover:scale-125 duration-200" size={20} />

                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Summary */}

                    <div className="h-fit sticky top-6">

                        <div className="bg-white rounded-3xl shadow-sm border border-amber-100 p-8">

                            <h2 className="text-2xl font-bold text-amber-900">
                                ऑर्डर सारांश
                            </h2>

                            <div className="space-y-5 mt-8">

                                <div className="flex justify-between text-gray-600">
                                    <span>उप-योग</span>
                                    <span>₹{subtotal}</span>
                                </div>

                                <div className="flex justify-between text-gray-600">
                                    <span>डिलीवरी</span>
                                    <span className="text-green-600">
                                        निःशुल्क
                                    </span>
                                </div>

                                <hr />

                                <div className="flex justify-between text-xl font-bold text-amber-900">

                                    <span>कुल राशि</span>

                                    <span>₹{total}</span>

                                </div>

                            </div>
                            <Link href="/checkout">
                                <button className="w-full mt-8 h-14 rounded-xl bg-amber-900 hover:scale-105 duration-300 cursor-pointer text-white flex items-center justify-center gap-3 font-medium transition">

                                    खरीदारी पूरी करें

                                    <ArrowRight size={20} />

                                </button>
                            </Link>

                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 mt-5 text-[#B88A28] font-medium"
                            >
                                <ShoppingBag size={18} />

                                खरीदारी जारी रखें

                            </Link>

                        </div>

                        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-3xl p-6">

                            <h3 className="font-bold text-amber-900">
                                🎁 राज परंपरा विशेष
                            </h3>

                            <p className="text-gray-600 mt-3 leading-7">
                                राजस्थान के स्थानीय कारीगरों से सीधे खरीदारी
                                करके आप उनकी कला और संस्कृति को आगे बढ़ाने में
                                अपना योगदान देते हैं।
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}