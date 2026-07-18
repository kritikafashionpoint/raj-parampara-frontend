"use client";

import { useState } from "react";
import { Banknote, CreditCard, CheckCircle2 } from "lucide-react";

export default function PaymentMethod({
    formData, setFormData
}) {
    const payment = formData.payment;
    const methods = [
        {
            id: "cod",
            title: "कैश ऑन डिलीवरी",
            subtitle: "Cash on Delivery",
            description: "ऑर्डर प्राप्त होने पर भुगतान करें।",
            icon: Banknote,
        },
        {
            id: "online",
            title: "ऑनलाइन भुगतान",
            subtitle: "UPI • Card • Net Banking",
            description:
                "UPI, Debit Card, Credit Card एवं Net Banking द्वारा सुरक्षित भुगतान करें।",
            icon: CreditCard,
        },
    ];

    return (
        <div className="sm:rounded-3xl border border-amber-200 bg-white shadow-xl overflow-hidden">

            {/* Header */}

            <div className="bg-amber-50 border-b border-amber-200 px-8 py-6">

                <h2 className="text-2xl font-bold text-amber-950">
                    भुगतान का तरीका
                </h2>

                <p className="mt-1 text-amber-700">
                    Payment Method
                </p>

            </div>

            <div className="p-8 space-y-6">

                {methods.map((method) => {

                    const Icon = method.icon;

                    const active = payment === method.id;

                    return (

                        <button
                            key={method.id}
                            type="button"
                            onClick={() =>
                                setFormData({
                                    ...formData,
                                    payment: method.id,
                                })
                            }
                            className={`w-full rounded-3xl border-2 p-6 transition-all duration-300 text-left ${active
                                ? "border-amber-900 bg-amber-50"
                                : "border-amber-200 hover:border-amber-400"
                                }`}
                        >

                            <div className="flex justify-between items-start">

                                <div className="flex flex-wrap gap-5">

                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center ${active
                                            ? "bg-amber-900 text-white"
                                            : "bg-amber-100 text-amber-900"
                                            }`}
                                    >

                                        <Icon size={30} />

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold text-amber-950">

                                            {method.title}

                                        </h3>

                                        <p className="text-sm text-amber-700 mt-1">

                                            {method.subtitle}

                                        </p>

                                        <p className="mt-4 leading-7 text-amber-800">

                                            {method.description}

                                        </p>

                                    </div>

                                </div>

                                {active && (

                                    <CheckCircle2
                                        size={30}
                                        className="text-amber-900"
                                    />

                                )}

                            </div>

                        </button>

                    );

                })}

                {/* Security */}

                <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">

                    <h4 className="font-semibold text-amber-950">

                        🔒 सुरक्षित भुगतान

                    </h4>

                    <p className="mt-2 text-sm leading-7 text-amber-700">

                        आपकी सभी भुगतान जानकारी सुरक्षित एवं एन्क्रिप्टेड रहती है।
                        राज परंपरा आपके भुगतान विवरण को सुरक्षित रखने के लिए
                        विश्वसनीय पेमेंट गेटवे का उपयोग करता है।

                    </p>

                </div>

            </div>

        </div>
    );
}