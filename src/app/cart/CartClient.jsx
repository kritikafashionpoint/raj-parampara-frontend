"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ShoppingCart } from "lucide-react";
import { getCart, getTotalPrice } from "../utils/cart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartClient() {
    const cartItems = getCart()
    const total_of_cart = getTotalPrice()
    console.log(total_of_cart)
    const { removeItem, changeQuantity } = useContext(CartContext);
    console.log(cartItems)

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );


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
                                    {
                                        cartItems.length >= 1
                                            ?
                                            (
                                                cartItems.map((item) => (

                                                    <tr
                                                        key={item.id}
                                                        className="border-b border-gray-300 last:border-0"
                                                    >
                                                        <td className="px-6 py-6">

                                                            <div className="flex gap-5 items-center">

                                                                <div className="lg:w-16 lg:h-16 w-full h-full rounded-full overflow-hidden border">

                                                                    <Image
                                                                        src={item.image}
                                                                        alt={item.title}
                                                                        width={100}
                                                                        height={100}
                                                                        className="w-full h-full object-center rounded-full object-cover"
                                                                    />

                                                                </div>

                                                                <div>

                                                                    <h3 className="font-semibold text-amber-900 text-lg">
                                                                        {item.title}
                                                                    </h3>

                                                                    {/* <p className="text-sm text-gray-500 mt-1">
                                                            Seller :
                                                            {" "}
                                                            {item.seller}
                                                        </p> */}

                                                                </div>

                                                            </div>

                                                        </td>

                                                        <td className="text-center font-semibold text-amber-900">
                                                            ₹{item.price}
                                                        </td>

                                                        <td>

                                                            <div className="flex justify-center">

                                                                <div className="flex items-center border rounded-xl overflow-hidden">

                                                                    <button onClick={() => item.quantity >= 1 && changeQuantity(item.id, item.quantity - 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                                                                        <Minus size={16} />
                                                                    </button>

                                                                    <span className="w-12 text-center">
                                                                        {item.quantity}
                                                                    </span>

                                                                    <button onClick={() => changeQuantity(item.id, item.quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                                                                        <Plus size={16} />
                                                                    </button>

                                                                </div>

                                                            </div>

                                                        </td>

                                                        <td className="text-center font-bold text-[#B88A28]">
                                                            ₹{item.quantity * item.price}
                                                        </td>

                                                        <td className="text-center">

                                                            <button onClick={() => removeItem(item.id)} className="group text-red-500 cursor-pointer  hover:bg-red-50 rounded-xl p-3 transition">

                                                                <Trash2 className="group-hover:scale-125 duration-200" size={20} />

                                                            </button>

                                                        </td>

                                                    </tr>

                                                ))
                                            )
                                            :
                                            <tr>
                                                <td colSpan={5} className="py-20">
                                                    <div className="flex flex-col items-center justify-center text-center px-6">

                                                        {/* Icon */}
                                                        <div className="w-28 h-28 rounded-full bg-amber-100 flex items-center justify-center shadow-md">
                                                            <ShoppingCart size={55} className="text-amber-800" />
                                                        </div>

                                                        {/* Heading */}
                                                        <h2 className="mt-8 text-3xl font-bold text-amber-900">
                                                            आपकी कार्ट खाली है
                                                        </h2>

                                                        {/* Description */}
                                                        <p className="mt-3 text-gray-500 max-w-md leading-7">
                                                            आपने अभी तक अपनी कार्ट में कोई उत्पाद नहीं जोड़ा है।
                                                            राजस्थान के हस्तनिर्मित और पारंपरिक उत्पादों की खरीदारी
                                                            शुरू करें।
                                                        </p>

                                                        {/* Button */}
                                                        <Link href="/shop-now">
                                                            <button className="mt-8 px-8 py-3 rounded-full bg-linear-to-r from-amber-900 to-amber-700 hover:scale-105 duration-300 text-white font-semibold shadow-lg">
                                                                खरीदारी शुरू करें
                                                            </button>
                                                        </Link>

                                                    </div>
                                                </td>
                                            </tr>

                                    }


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

                                    <span>₹{subtotal}</span>

                                </div>

                            </div>
                            <Link href="/checkout">
                                <button className="w-full mt-8 h-14 rounded-full bg-linear-to-r from-amber-900 to-amber-700 hover:scale-105 duration-300 cursor-pointer text-white flex items-center justify-center gap-3 font-medium transition">

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

                        <div className="mt-6 bg-white border border-gray-200 rounded-3xl p-6">

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