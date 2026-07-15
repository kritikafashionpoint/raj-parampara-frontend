"use client";

import { ChevronRight, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CheckoutHeader({ progress }) {
    return (
        <div className="mb-10">

            {/* Breadcrumb */}

            <div className="flex items-center gap-2 text-sm text-gray-800">

                <Link
                    href="/"
                    className="hover:text-gray-800 transition"
                >
                    होम
                </Link>

                <ChevronRight size={16} />

                <Link
                    href="/cart"
                    className="hover:text-gray-800 transition"
                >
                    कार्ट
                </Link>

                <ChevronRight size={16} />

                <span className="font-semibold text-amber-950">
                    चेकआउट
                </span>

            </div>

            {/* Heading */}

            <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-gray-800">

                        <ShieldCheck size={16} />

                        सुरक्षित खरीदारी • Secure Checkout

                    </span>

                    <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-amber-950">

                        ऑर्डर पूरा करें

                    </h1>

                    <p className="mt-3 text-gray-800 text-lg">

                        अपनी जानकारी भरें और अपना ऑर्डर सुरक्षित रूप से पूरा करें।

                    </p>

                </div>

                {/* Trust Card */}

                <div className="rounded-3xl border border-amber-200 bg-white shadow-xl p-6 w-full lg:w-[380]">

                    <div className="flex items-start gap-4">

                        <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">

                            <MapPin
                                size={26}
                                className="text-gray-00"
                            />

                        </div>

                        <div>

                            <h3 className="font-bold text-xl text-amber-950">

                                राजस्थान से विश्व तक

                            </h3>

                            <p className="mt-2 text-sm leading-7 text-gray-800">

                                आपकी हर खरीदारी राजस्थान के स्थानीय कारीगरों
                                और पारंपरिक व्यवसायों को आगे बढ़ाने में
                                महत्वपूर्ण योगदान देती है।

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Progress */}

            <div className="mt-10 rounded-full bg-amber-100 h-3 overflow-hidden">

                <div
                    className="h-full bg-amber-900 transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>

            <div className="mt-3 flex justify-between text-sm font-medium text-gray-800">

                <span>संपर्क जानकारी</span>

                <span>{progress}%</span>

            </div>

        </div>
    );
}