"use client";

"use client";

import React, { useState } from "react";
import {
    User,
    Store,
    Briefcase,
    Landmark,
    Package,
    FileText,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";


const steps = [
    {
        title: "व्यक्तिगत जानकारी",
        en: "Personal Details",
        icon: User,
    },
    {
        title: "दुकान की जानकारी",
        en: "Shop Details",
        icon: Store,
    },
    {
        title: "व्यवसाय जानकारी",
        en: "Business Details",
        icon: Briefcase,
    },
    {
        title: "बैंक विवरण",
        en: "Bank Details",
        icon: Landmark,
    },
    {
        title: "उत्पाद श्रेणी",
        en: "Product Category",
        icon: Package,
    },
    {
        title: "दस्तावेज़",
        en: "Documents",
        icon: FileText,
    },
    {
        title: "समीक्षा",
        en: "Review & Submit",
        icon: CheckCircle2,
    },
];

export default function Page() {

    const [step, setStep] = useState(0);

    const [gstRegistered, setGstRegistered] = useState("no");

    const progress = Math.round(((step + 1) / steps.length) * 100);

    const handleSubmit = (event) => {
        try {
            event.preventDefault()
            console.log('form submitted')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="min-h-screen bg-amber-50 py-12">
            <div className="max-w-[1020] mx-auto lg:px-6 px-4">

                {/* Heading */}

                <div className="text-center mb-10">

                    <span className="px-5 py-2 rounded-full bg-amber-100 text-[#8A5A13] font-semibold">

                        🏪 Seller Onboarding

                    </span>

                    <h1 className="text-5xl font-bold mt-5 text-[#2D1B12]">

                        विक्रेता पंजीकरण

                    </h1>

                    <p className="text-gray-600 mt-3 text-lg">

                        अपना स्टोर बनाइए और राजस्थान की संस्कृति को
                        <span className="font-semibold text-[#8A5A13]">
                            {" "}
                            विश्व तक पहुँचाइए।
                        </span>

                    </p>

                </div>

                {/* Progress */}

                <div className="bg-white rounded-[30px] shadow-lg p-8">



                    <div className="flex justify-between items-center mb-8">

                        {steps.map((item, index) => {

                            const Icon = item.icon;

                            const active = index <= step;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center flex-1 relative"
                                >
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all
                    ${active
                                                ? "bg-[#2D1B12] border-[#2D1B12] text-white"
                                                : "bg-white border-gray-300 text-gray-400"
                                            }`}
                                    >
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="font-semibold mt-3 text-center text-sm">
                                        {item.title}
                                    </h3>

                                    <span className="text-xs text-gray-500 text-center">
                                        {item.en}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">

                        <div
                            style={{ width: `${progress}%` }}
                            className="h-full bg-linear-to-r from-amber-500 to-amber-700 transition-all duration-500"
                        />

                    </div>

                    <div className="text-right mt-2 font-bold text-[#8A5A13]">

                        {progress}%

                    </div>

                    {/* Form */}

                    <form onSubmit={handleSubmit}>

                        <div className="mt-12">

                            {step === 0 && (

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        placeholder="पूरा नाम | Full Name"
                                        className="h-14 rounded-xl border px-5 outline-none focus:border-amber-500"
                                    />


                                    <input
                                        placeholder="मोबाइल नंबर | Mobile Number"
                                        className="h-14 rounded-xl border px-5 outline-none focus:border-amber-500"
                                    />


                                    <input
                                        placeholder="ईमेल (वैकल्पिक) | Email (Optional)"
                                        className="h-14 rounded-xl border px-5 outline-none focus:border-amber-500"
                                    />


                                    <input
                                        type="password"
                                        placeholder="पासवर्ड | Password"
                                        className="h-14 rounded-xl border px-5 outline-none focus:border-amber-500"
                                    />

                                </div>

                            )}

                            {step === 1 && (

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        placeholder="दुकान का नाम | Shop Name"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="शहर | City"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="राज्य | State"
                                        defaultValue="राजस्थान | Rajasthan"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <textarea
                                        placeholder="दुकान का पता | Shop Address"
                                        className="rounded-xl border p-5 md:col-span-2 h-32"
                                    />

                                </div>

                            )}

                            {step === 2 && (
                                <div className="grid md:grid-cols-2 gap-6">

                                    <select className="h-14 rounded-xl border px-5 outline-none focus:border-amber-500">
                                        <option>Business Type</option>
                                        <option>Individual</option>
                                        <option>Proprietorship</option>
                                        <option>Partnership</option>
                                        <option>Private Limited</option>
                                        <option>LLP</option>
                                    </select>

                                    <div>
                                        <label className="font-semibold text-[#2D1B12]">
                                            GST Registered?
                                        </label>

                                        <div className="flex gap-8 mt-4">

                                            <label className="flex items-center gap-2 cursor-pointer">

                                                <input
                                                    type="radio"
                                                    checked={gstRegistered === "yes"}
                                                    onChange={() => setGstRegistered("yes")}
                                                />

                                                Yes

                                            </label>

                                            <label className="flex items-center gap-2 cursor-pointer">

                                                <input
                                                    type="radio"
                                                    checked={gstRegistered === "no"}
                                                    onChange={() => setGstRegistered("no")}
                                                />

                                                No

                                            </label>

                                        </div>
                                    </div>

                                    {gstRegistered === "yes" && (
                                        <>
                                            <input
                                                placeholder="GST Number"
                                                className="h-14 rounded-xl border px-5"
                                            />

                                            <input
                                                type="file"
                                                className="h-14 rounded-xl border px-5 py-3"
                                            />
                                        </>
                                    )}

                                </div>
                            )}

                            {step === 3 && (
                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        placeholder="Account Holder Name"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="Bank Name"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="Account Number"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="Confirm Account Number"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="IFSC Code"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        type="file"
                                        className="h-14 rounded-xl border px-5 py-3"
                                    />

                                </div>
                            )}

                            {step === 4 && (

                                <div className="grid md:grid-cols-3 gap-5">

                                    {[
                                        "हस्तशिल्प | Handicrafts",
                                        "मोजड़ी | Mojari",
                                        "आभूषण | Jewellery",
                                        "वस्त्र | Clothing",
                                        "ब्लू पॉटरी | Blue Pottery",
                                        "होम डेकोर | Home Decor",
                                        "राजस्थानी पगड़ी",
                                        "राजपूती पोशाक",
                                        "अन्य | Others",
                                    ].map((item) => (

                                        <p
                                            key={item}
                                            className="h-24 text-center flex items-center justify-center rounded-2xl border hover:bg-[#2D1B12] hover:text-white transition"
                                        >
                                            {item}
                                        </p>

                                    ))}

                                </div>

                            )}

                            {step === 5 && (

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        placeholder="Aadhaar Number"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        placeholder="PAN Number"
                                        className="h-14 rounded-xl border px-5"
                                    />

                                    <input
                                        type="file"
                                        className="h-14 rounded-xl border px-5 py-3"
                                    />

                                    <input
                                        type="file"
                                        className="h-14 rounded-xl border px-5 py-3"
                                    />

                                </div>

                            )}

                            {step === 6 && (

                                <div className="text-center py-12">

                                    <CheckCircle2
                                        size={80}
                                        className="mx-auto text-green-600"
                                    />

                                    <h2 className="text-3xl font-bold mt-6">
                                        सब तैयार है!
                                    </h2>

                                    <p className="text-gray-600 mt-4">
                                        आपका आवेदन सफलतापूर्वक समीक्षा के लिए भेज दिया जाएगा।
                                    </p>

                                </div>

                            )}



                        </div>

                        {/* Buttons */}

                        <div className="flex justify-between mt-12">

                            <p
                                disabled={step === 0}
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 px-8 h-14 rounded-xl border"
                            >
                                <ArrowLeft />
                                पिछला | Previous
                            </p>

                            {step !== 6 ? (
                                <p
                                    onClick={() => setStep(step + 1)}
                                    className="flex items-center gap-2 px-8 h-14 rounded-xl bg-[#2D1B12] text-white hover:bg-black"
                                >
                                    अगला | Next
                                    <ArrowRight />
                                </p>
                            ) : (
                                <button className="px-10 h-14 rounded-xl bg-[#2D1B12] text-white">
                                    आवेदन भेजें | Submit Application
                                </button>
                            )}
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}