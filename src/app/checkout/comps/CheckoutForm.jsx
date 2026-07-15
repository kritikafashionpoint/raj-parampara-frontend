"use client";

import { User, Phone, Mail, MapPin, Home, Landmark } from "lucide-react";

export default function CheckoutForm({
    formData,
    setFormData
}) {
    return (
        <div className="rounded-3xl bg-white border border-amber-200 shadow-xl overflow-hidden">

            {/* Header */}

            <div className="px-8 py-6 border-b border-amber-100 bg-amber-50">

                <h2 className="text-2xl font-bold text-amber-950">
                    संपर्क एवं डिलीवरी जानकारी
                </h2>

                <p className="text-gray-800 mt-2">
                    Contact & Shipping Information
                </p>

            </div>

            <div className="p-8 space-y-10">

                {/* Contact */}

                <div>

                    <div className="flex items-center gap-3 mb-6">

                        <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">

                            <User
                                size={22}
                                className="text-amber-900"
                            />

                        </div>

                        <div>

                            <h3 className="font-bold text-xl text-amber-950">
                                संपर्क जानकारी
                            </h3>

                            <p className="text-sm text-gray-800">
                                Contact Information
                            </p>

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* Name */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                पूरा नाम | Full Name *
                            </label>

                            <div className="relative">

                                <User
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800"
                                />

                                <input
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        })
                                    }

                                    type="text"
                                    placeholder="अपना पूरा नाम दर्ज करें"
                                    className="w-full h-14 rounded-2xl border border-amber-200 pl-12 pr-4 outline-none focus:border-amber-900 transition"
                                />

                            </div>

                        </div>

                        {/* Mobile */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                मोबाइल नंबर | Mobile Number *
                            </label>

                            <div className="relative">

                                <Phone
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800"
                                />

                                <input
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            mobile: e.target.value
                                        })
                                    }
                                    type="tel"
                                    placeholder="मोबाइल नंबर दर्ज करें"
                                    className="w-full h-14 rounded-2xl border border-amber-200 pl-12 pr-4 outline-none focus:border-amber-900 transition"
                                />

                            </div>

                        </div>

                        {/* Email */}

                        <div className="md:col-span-2">

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                ईमेल (वैकल्पिक) | Email (Optional)
                            </label>

                            <div className="relative">

                                <Mail
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800"
                                />

                                <input
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })
                                    }
                                    type="email"
                                    placeholder="example@email.com"
                                    className="w-full h-14 rounded-2xl border border-amber-200 pl-12 pr-4 outline-none focus:border-amber-900 transition"
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* Divider */}

                <div className="border-t border-amber-100"></div>

                {/* Shipping */}

                <div>

                    <div className="flex items-center gap-3 mb-6">

                        <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">

                            <MapPin
                                size={22}
                                className="text-amber-900"
                            />

                        </div>

                        <div>

                            <h3 className="font-bold text-xl text-amber-950">
                                डिलीवरी पता
                            </h3>

                            <p className="text-sm text-gray-800">
                                Shipping Address
                            </p>

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {/* House */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                घर / फ्लैट नंबर | House / Flat No. *
                            </label>

                            <div className="relative">

                                <Home
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800"
                                />

                                <input
                                    value={formData.house}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            house: e.target.value
                                        })
                                    }
                                    type="text"
                                    placeholder="House No."
                                    className="w-full h-14 rounded-2xl border border-amber-200 pl-12 pr-4 outline-none focus:border-amber-900 transition"
                                />

                            </div>

                        </div>

                        {/* Street */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                गली / क्षेत्र | Street / Area *
                            </label>

                            <input
                                value={formData.street}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        street: e.target.value
                                    })
                                }
                                type="text"
                                placeholder="Street / Area"
                                className="w-full h-14 rounded-2xl border border-amber-200 px-5 outline-none focus:border-amber-900 transition"
                            />

                        </div>

                        {/* Landmark */}

                        <div className="md:col-span-2">

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                लैंडमार्क (वैकल्पिक) | Landmark
                            </label>

                            <div className="relative">

                                <Landmark
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800"
                                />

                                <input
                                    value={formData.landmark}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            landmark: e.target.value
                                        })
                                    }
                                    type="text"
                                    placeholder="Nearby Landmark"
                                    className="w-full h-14 rounded-2xl border border-amber-200 pl-12 pr-4 outline-none focus:border-amber-900 transition"
                                />

                            </div>

                        </div>

                        {/* City */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                शहर | City *
                            </label>

                            <input
                                value={formData.city}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        city: e.target.value,
                                    })
                                }
                                type="text"
                                placeholder="City"
                                className="w-full h-14 rounded-2xl border border-amber-200 px-5 outline-none focus:border-amber-900 transition"
                            />

                        </div>

                        {/* State */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                राज्य | State *
                            </label>

                            <select
                                value={formData.state}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        state: e.target.value
                                    })
                                }
                                className="w-full h-14 rounded-2xl border border-amber-200 px-5 outline-none focus:border-amber-900 transition bg-white">

                                <option value={'Rajasthan'}>राजस्थान | Rajasthan</option>

                                <option value={'Gujarat'}>गुजरात | Gujarat</option>

                                <option value={'Delhi'}>दिल्ली | Delhi</option>

                                <option value={'Maharashtra'}>महाराष्ट्र | Maharashtra</option>

                                <option value={'Uttar Pradesh'}>उत्तर प्रदेश | Uttar Pradesh</option>

                                <option value={'Madhya Pradesh'}>मध्य प्रदेश | Madhya Pradesh</option>

                            </select>

                        </div>

                        {/* Pincode */}

                        <div>

                            <label className="block text-sm font-semibold text-amber-900 mb-2">
                                पिनकोड | Pincode *
                            </label>

                            <input
                                value={formData.pincode}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        pincode: e.target.value
                                    })
                                }
                                type="text"
                                placeholder="Pincode"
                                className="w-full h-14 rounded-2xl border border-amber-200 px-5 outline-none focus:border-amber-900 transition"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}