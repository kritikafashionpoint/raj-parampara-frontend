"use client";

import Image from "next/image";
import { ShieldCheck, TicketPercent, Truck, ArrowRight } from "lucide-react";
import { products } from "@/app/home/NewArrivals";
import { getCart } from "@/app/utils/cart";

export default function OrderSummary({ onPlaceOrder }) {

    const cartItems = getCart()

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.qty * item.price,
        0
    );

    const shipping = 0;
    const discount = 0;

    const total = subtotal + shipping - discount;

    return (
        <div className="sticky top-6 space-y-6">

            {/* Order Summary */}

            <div className="rounded-3xl bg-white border border-amber-200 shadow-xl overflow-hidden">

                <div className="bg-amber-50 border-b border-amber-200 px-6 py-5">

                    <h2 className="text-2xl font-bold text-amber-950">
                        ऑर्डर सारांश
                    </h2>

                    <p className="text-amber-900 mt-1">
                        Order Summary
                    </p>

                </div>

                {/* Products */}

                <div className="p-6 space-y-5">

                    {cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="flex gap-4"
                        >

                            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-amber-200">

                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="flex-1">

                                <h3 className="font-semibold text-amber-950">

                                    {item.title}

                                </h3>

                                <div className="mt-3 flex justify-between">

                                    <span className="text-sm text-amber-700 font-semibold">

                                        मात्रा : {item.quantity}

                                    </span>

                                    <span className="font-bold text-amber-950">

                                        ₹{item.quantity * item.price}

                                    </span>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Coupon */}

                {/* <div className="border-t border-amber-200 p-6">

                    <label className="text-sm font-semibold text-amber-900">

                        कूपन कोड

                    </label>

                    <div className="mt-3 flex gap-3">

                        <div className="relative flex-1">

                            <TicketPercent
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-900"
                            />

                            <input
                                placeholder="Coupon Code"
                                className="w-full h-12 rounded-xl border border-amber-200 pl-11 pr-4 outline-none focus:border-amber-900"
                            />

                        </div>

                        <button className="px-5 rounded-xl bg-amber-900 text-white hover:bg-amber-950 transition">

                            लागू करें

                        </button>

                    </div>

                </div> */}

                {/* Price */}

                <div className="border-t border-amber-200 p-6 space-y-5">

                    <div className="flex justify-between">

                        <span className="text-amber-900">

                            उप-योग

                        </span>

                        <span className="font-semibold text-amber-950">

                            ₹{subtotal}

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-amber-900">

                            डिलीवरी शुल्क

                        </span>

                        <span className="font-semibold text-green-600">

                            निःशुल्क

                        </span>

                    </div>

                    <div className="flex justify-between">

                        <span className="text-amber-900">

                            छूट

                        </span>

                        <span className="font-semibold text-amber-950">

                            ₹{discount}

                        </span>

                    </div>

                    <div className="border-t border-amber-200 pt-5 flex justify-between">

                        <span className="text-xl font-bold text-amber-950">

                            कुल राशि

                        </span>

                        <span className="text-2xl font-bold text-amber-950">

                            ₹{total}

                        </span>

                    </div>

                </div>

                {/* Button */}

                <div className="p-6 pt-0">

                    <button
                        onClick={onPlaceOrder}
                        className="w-full h-14 rounded-2xl bg-amber-900 hover:bg-amber-950 text-white font-semibold flex items-center justify-center gap-3 transition">

                        भुगतान की ओर बढ़ें

                        <ArrowRight size={20} />

                    </button>

                </div>

            </div>

            {/* Trust Box */}

            <div className="rounded-3xl bg-white border border-amber-200 shadow-xl p-6">

                <div className="flex items-center gap-3">

                    <ShieldCheck
                        className="text-amber-900"
                        size={24}
                    />

                    <h3 className="font-bold text-lg text-amber-950">

                        सुरक्षित खरीदारी

                    </h3>

                </div>

                <div className="mt-5 space-y-4">

                    <div className="flex items-center gap-3">

                        <Truck
                            size={18}
                            className="text-amber-900"
                        />

                        <span className="text-amber-900">

                            पूरे भारत में सुरक्षित डिलीवरी

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <ShieldCheck
                            size={18}
                            className="text-amber-900"
                        />

                        <span className="text-amber-900">

                            100% सुरक्षित भुगतान

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <TicketPercent
                            size={18}
                            className="text-amber-900"
                        />

                        <span className="text-amber-900">

                            स्थानीय कारीगरों का समर्थन

                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}