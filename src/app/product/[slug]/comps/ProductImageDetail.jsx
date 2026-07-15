import React from 'react'
import Image from 'next/image'



export function ProductImageDetail({ product }) {
    return (
        <div className="max-w-[1420] mx-auto px-4 lg:px-6">

            <div className="grid lg:grid-cols-2 gap-8">

                {/* Left Images */}
                <div className="md:flex-row flex-col flex gap-5">



                    {/* Main Image */}
                    <div className='w-full'>

                        <div className="relative w-full aspect-19/15 rounded-3xl overflow-hidden border border-[#E7DCC8] bg-white">

                            <Image
                                src="/token/token.png"
                                alt={product.title}
                                fill
                                priority
                                sizes="full"
                                className="object-center object-cover"
                            />

                        </div>
                        {/* Thumbnails */}
                        <div className="flex flex-wrap my-5 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <button
                                    key={item}
                                    className="relative w-24 h-24 rounded-2xl border-2 border-[#E7DCC8] hover:border-[#D4AF37] transition overflow-hidden bg-white"
                                >
                                    <Image
                                        src="/banners/b3.png"
                                        alt={`Product Thumbnail ${item}`}
                                        fill
                                        className="object-cover"
                                        sizes="full"
                                        priority={item === 1}
                                    />
                                </button>
                            ))}
                        </div>
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <div className="rounded-2xl border border-[#E7DCC8] bg-white p-4">
                                <p className="text-sm text-gray-500">
                                    Material
                                </p>
                                <h4 className="font-semibold mt-1">
                                    Brass & Kundan
                                </h4>
                            </div>

                            <div className="rounded-2xl border border-[#E7DCC8] bg-white p-4">
                                <p className="text-sm text-gray-500">
                                    Occasion
                                </p>
                                <h4 className="font-semibold mt-1">
                                    Wedding
                                </h4>
                            </div>

                            <div className="rounded-2xl border border-[#E7DCC8] bg-white p-4">
                                <p className="text-sm text-gray-500">
                                    Origin
                                </p>
                                <h4 className="font-semibold mt-1">
                                    Rajasthan
                                </h4>
                            </div>

                            <div className="rounded-2xl border border-[#E7DCC8] bg-white p-4">
                                <p className="text-sm text-gray-500">
                                    Delivery
                                </p>
                                <h4 className="font-semibold mt-1">
                                    4-6 Days
                                </h4>
                            </div>

                        </div>
                    </div>



                </div>

                {/* Right Content */}
                <div className="lg:sticky lg:top-28 h-fit">

                    <h1 className="text-4xl font-bold text-[#2D1B12] mt-5 leading-snug">
                        Handmade Royal Kundan Bridal Necklace Set
                    </h1>

                    <p className="text-[#7B6857] mt-5 leading-8">
                        राजस्थान के कुशल कारीगरों द्वारा हस्तनिर्मित यह
                        खूबसूरत कुंदन नेकलेस सेट आपकी पारंपरिक
                        और शाही पहचान को और भी आकर्षक बनाता है।
                    </p>

                    {/* Price */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">

                        <h2 className="text-4xl font-bold text-[#2D1B12]">
                            ₹2,499
                        </h2>

                        <span className="text-xl text-gray-400 line-through">
                            ₹3,499
                        </span>

                        <span className="rounded-full bg-red-100 text-red-600 px-3 py-1 text-sm font-semibold">
                            30% OFF
                        </span>

                        <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-2 text-sm font-medium">
                            ✓ स्टॉक में उपलब्ध
                        </span>

                    </div>



                    {/* Quantity */}
                    <div className="flex items-center gap-5 mt-10">

                        <span className="font-semibold text-[#2D1B12]">
                            Quantity
                        </span>

                        <div className="flex items-center border border-[#E7DCC8] rounded-xl overflow-hidden">

                            <button className="w-12 h-12 text-xl hover:bg-gray-100">
                                −
                            </button>

                            <span className="w-14 text-center font-semibold">
                                1
                            </span>

                            <button className="w-12 h-12 text-xl hover:bg-gray-100">
                                +
                            </button>

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-10">

                        <button className="flex-1 h-14 rounded-2xl bg-[#2D1B12] text-white font-semibold hover:bg-[#4A2F22] transition-all duration-300">
                            🛒 कार्ट में जोड़ें
                        </button>

                        <button className="flex-1 h-14 rounded-2xl bg-[#D4AF37] text-[#2D1B12] font-semibold hover:bg-[#c79d22] transition-all duration-300">
                            ⚡ अभी खरीदें
                        </button>

                    </div>

                    {/* Trust */}
                    <div className="grid grid-cols-3 gap-4 mt-10 text-center">

                        <div className="rounded-2xl border border-[#E7DCC8] bg-white p-5">
                            <p className="text-2xl">🚚</p>
                            <p className="text-sm mt-2 font-medium">
                                Free Shipping
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#E7DCC8] bg-white p-5">
                            <p className="text-2xl">🔄</p>
                            <p className="text-sm mt-2 font-medium">
                                Easy Returns
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[#E7DCC8] bg-white p-5">
                            <p className="text-2xl">🛡️</p>
                            <p className="text-sm mt-2 font-medium">
                                Secure Payment
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}