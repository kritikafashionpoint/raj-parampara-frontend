"use client";

"use client";

import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";


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

    const router = useRouter()


    const [step, setStep] = useState(() => {
        if (typeof window !== "undefined") {
            return Number(localStorage.getItem("seller_step")) || 0;
        }
        return 0;
    });

    useEffect(() => {
        localStorage.setItem("seller_step", step);
    }, [step]);


    const [formData, setFormData] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("seller_onboarding");
            if (saved) return JSON.parse(saved);
        }

        return {
            fullName: "",
            mobile: "",
            email: "",
            password: "",

            shopName: "",
            city: "",
            state: "राजस्थान | Rajasthan",
            address: "",

            businessType: "",
            gstRegistered: "no",
            gstNumber: "",

            accountHolder: "",
            bankName: "",
            accountNumber: "",
            confirmAccountNumber: "",
            ifsc: "",

            aadhaar: "",
            pan: "",

            categories: [],
        };
    });


    const progress = Math.round(((step + 1) / steps.length) * 100);

    const handleSubmit = (event) => {
        try {
            event.preventDefault()
            alert('form submitted')
            router.push('/thank-you')

            // localstorage remove task
            localStorage.removeItem("seller_onboarding");
            localStorage.removeItem("seller_onboarding");
            localStorage.removeItem("seller_step");

        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        localStorage.setItem(
            "seller_onboarding",
            JSON.stringify(formData)
        );
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div className="min-h-screen bg-amber-50 py-12">
            <div className="max-w-[1020] mx-auto lg:px-6 px-4">

                {/* Heading */}

                <div className="text-center mb-10">

                    <span className="px-5 py-2 rounded-full bg-amber-100 text-[#8A5A13] font-semibold">

                        🏪 Seller Onboarding

                    </span>

                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold mt-5 text-[#2D1B12]">

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



                    <div className="w-full overflow-x-scroll custom-scrollbar gap-10 flex justify-between items-center mb-8">

                        {steps.map((item, index) => {

                            const Icon = item.icon;

                            const active = index <= step;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col pb-6 items-center flex-1 relative"
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
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="पूरा नाम | Full Name"
                                        className="h-14 rounded-xl min-w-[200] border px-5 outline-none focus:border-amber-500"
                                    />


                                    <input
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="मोबाइल नंबर | Mobile Number"
                                        className="h-14 rounded-xl min-w-[200] border px-5 outline-none focus:border-amber-500"
                                    />


                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="ईमेल (वैकल्पिक) | Email (Optional)"
                                        className="h-14 rounded-xl min-w-[200] border px-5 outline-none focus:border-amber-500"
                                    />


                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type="password"
                                        placeholder="पासवर्ड | Password"
                                        className="h-14 rounded-xl min-w-[200] border px-5 outline-none focus:border-amber-500"
                                    />

                                </div>

                            )}

                            {step === 1 && (

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        name="shopName"
                                        value={formData.shopName}
                                        onChange={handleChange}
                                        placeholder="दुकान का नाम | Shop Name"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="शहर | City"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder="राज्य | State"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="दुकान का पता | Shop Address"
                                        className="rounded-xl border p-5 md:col-span-2 h-32"
                                    />

                                </div>

                            )}

                            {step === 2 && (
                                <div className="grid md:grid-cols-2 gap-6">

                                    <select
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        required
                                        className="h-14 min-w-[200] rounded-xl border px-5 outline-none focus:border-amber-500"
                                    >
                                        <option value="" disabled>
                                            Select Business Type
                                        </option>
                                        <option value="Individual">Individual</option>
                                        <option value="Proprietorship">Proprietorship</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Private Limited">Private Limited</option>
                                        <option value="LLP">LLP</option>
                                    </select>

                                    <div>
                                        <label className="font-semibold text-[#2D1B12]">
                                            GST Registered?
                                        </label>

                                        <div className="flex gap-8 mt-4">

                                            <label className="flex items-center gap-2 cursor-pointer">

                                                <input
                                                    type="radio"
                                                    name="gstRegistered"
                                                    checked={formData.gstRegistered === "yes"}
                                                    onChange={() =>
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            gstRegistered: "yes"
                                                        }))
                                                    }
                                                />


                                                Yes

                                            </label>

                                            <label className="flex items-center gap-2 cursor-pointer">

                                                <input
                                                    type="radio"
                                                    name="gstRegistered"
                                                    checked={formData.gstRegistered === "no"}
                                                    onChange={() =>
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            gstRegistered: "no"
                                                        }))
                                                    }
                                                />
                                                No
                                            </label>

                                        </div>
                                    </div>

                                    {formData.gstRegistered === "yes" && (
                                        <>
                                            <input
                                                name="gstNumber"
                                                value={formData.gstNumber}
                                                onChange={handleChange}
                                                placeholder="GST Number"
                                                className="h-14 rounded-xl min-w-[200] border px-5"
                                            />

                                            <input
                                                type="file"
                                                className="h-14 rounded-xl min-w-[200] border px-5 py-3"
                                            />
                                        </>
                                    )}

                                </div>
                            )}

                            {step === 3 && (
                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        name="accountHolder"
                                        value={formData.accountHolder}
                                        onChange={handleChange}
                                        placeholder="Account Holder Name"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="bankName"
                                        value={formData.bankName}
                                        onChange={handleChange}
                                        placeholder="Bank Name"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="accountNumber"
                                        value={formData.accountNumber}
                                        onChange={handleChange}
                                        placeholder="Account Number"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="confirmAccountNumber"
                                        value={formData.confirmAccountNumber}
                                        onChange={handleChange}
                                        placeholder="Confirm Account Number"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="ifsc"
                                        value={formData.ifsc}
                                        onChange={handleChange}
                                        placeholder="IFSC Code"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        type="file"
                                        className="h-14 rounded-xl min-w-[200] border px-5 py-3"
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
                                            onClick={() =>
                                                setFormData(prev => ({
                                                    ...prev,
                                                    categories: [item]
                                                }))
                                            }
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
                                        name="aadhaar"
                                        value={formData.aadhaar}
                                        onChange={handleChange}
                                        placeholder="Aadhaar Number"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        name="pan"
                                        value={formData.pan}
                                        onChange={handleChange}
                                        placeholder="PAN Number"
                                        className="h-14 rounded-xl min-w-[200] border px-5"
                                    />

                                    <input
                                        type="file"
                                        className="h-14 rounded-xl min-w-[200] border px-5 py-3"
                                    />

                                    <input
                                        type="file"
                                        className="h-14 rounded-xl min-w-[200] border px-5 py-3"
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

                        <div className="flex justify-between gap-3 mt-12">

                            <button
                                type="button"
                                disabled={step === 0}
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 lg:px-5 cursor-pointer hover:scale-110 duration-300 px-3 h-14 rounded-xl border"
                            >
                                <ArrowLeft />
                                पिछला | Previous
                            </button>

                            {step !== 6 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="flex items-center gap-2 lg:px-5 cursor-pointer hover:scale-110 duration-300 px-3 h-14 rounded-xl bg-[#2D1B12] text-white hover:bg-black"
                                >
                                    अगला | Next
                                    <ArrowRight />
                                </button>
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