"use client";

import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";

export default function HeroSection_AU() {
    return (
        <section className="relative overflow-hidden bg-[#FFFDF8]">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-100/40 blur-3xl" />
                <div className="absolute -bottom-40 right-0 h-[350px] w-[350px] rounded-full bg-orange-100/40 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-[1450px] px-4 py-20 lg:px-8">

                {/* Top */}

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-5 py-2 text-sm font-medium tracking-wide text-amber-800">
                        ✦ राजस्थान की विरासत • डिजिटल भारत ✦
                    </span>

                    <h1 className="mt-8 text-5xl font-bold leading-tight text-[#2D1B12] md:text-6xl lg:text-7xl">

                        राजस्थान की
                        <span className="block text-amber-700">
                            संस्कृति, कला और
                        </span>

                        परंपरा को
                        <span className="block">
                            दुनिया तक पहुँचाने का
                        </span>

                        हमारा संकल्प

                    </h1>

                    {/* Divider */}

                    <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-amber-500" />

                    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-700">

                        <strong className="text-[#2D1B12]">
                            राज परंपरा
                        </strong>{" "}
                        राजस्थान की समृद्ध विरासत, स्थानीय कारीगरों,
                        पारंपरिक हस्तशिल्प और सांस्कृतिक उत्पादों को
                        एक डिजिटल पहचान देने का प्रयास है। हमारा उद्देश्य
                        राजस्थान की अनमोल कला को देश और दुनिया के हर
                        घर तक पहुँचाना है।

                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-5">

                        <Link
                            href="/categories"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-amber-700"
                        >
                            खरीदारी शुरू करें
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            href="/seller"
                            className="inline-flex items-center gap-2 rounded-xl border border-[#2D1B12] bg-white px-8 py-4 font-semibold text-[#2D1B12] transition hover:bg-[#2D1B12] hover:text-white"
                        >
                            <Store size={20} />
                            विक्रेता बनें
                        </Link>

                    </div>

                </div>

                {/* Hero Image */}

                <div className="relative mt-20">

                    <div className="overflow-hidden rounded-[42px] border border-amber-200 bg-white p-4 shadow-2xl">

                        <img
                            src="/banners/b3.png"
                            alt="Raj Parampara"
                            className="h-[650px] w-full rounded-[30px] object-cover"
                        />

                    </div>

                    {/* Floating Badge */}

                    <div className="absolute left-10 top-10 rounded-2xl border border-amber-200 bg-white/90 px-6 py-4 shadow-xl backdrop-blur">

                        <p className="text-xs uppercase tracking-[4px] text-gray-500">
                            Heritage
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-[#2D1B12]">
                            राजस्थान की
                        </h3>

                        <p className="text-amber-700">
                            असली पहचान
                        </p>

                    </div>

                    {/* Floating Quote */}

                    <div className="absolute bottom-10 right-10 max-w-xs rounded-3xl bg-[#2D1B12] p-7 shadow-2xl">

                        <p className="text-lg leading-8 text-white">

                            "हर उत्पाद केवल
                            एक वस्तु नहीं,
                            बल्कि राजस्थान की
                            सदियों पुरानी
                            विरासत की कहानी है।"

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}