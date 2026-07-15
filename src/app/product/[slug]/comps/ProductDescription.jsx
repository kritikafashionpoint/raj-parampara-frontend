import React from 'react'

export function ProductDescription({ product }) {
    return (
        <section className="w-full bg-[#FFFBF5] py-12">
            <div className="max-w-[1420] mx-auto px-4 lg:px-6">

                <div className="rounded-3xl border border-[#E7DCC8] bg-white shadow-sm overflow-hidden">

                    {/* Header */}
                    <div className="border-b border-[#E7DCC8] px-8 py-6 bg-linear-to-r from-[#FFF9EF] to-white">
                        <div className="flex items-center gap-4">

                            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-2xl">
                                📜
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-[#2D1B12]">
                                    उत्पाद विवरण
                                </h2>

                                <p className="text-[#7B6857] mt-1">
                                    इस उत्पाद के बारे में विस्तृत जानकारी
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Description */}
                    <div className="px-8 py-8">

                        <div
                            className="
                                text-[17px]
                                leading-9
                                text-[#5B4A3B]
                                whitespace-pre-line
                                selection:bg-amber-300
                                selection:text-[#2D1B12]
                            "
                        >
                            {product.description}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}