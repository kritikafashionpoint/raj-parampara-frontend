"use client";

import {
    ImagePlus,
    Package,
    Tag,
    FileText,
    Sparkles,
    Send,
} from "lucide-react";

export default function RequestProduct() {
    return (
        <div>

            {/* Header */}

            <div className="my-10 bg-white sm:border border-gray-300 sm:shadow-lg sm:rounded-[40] sm:p-7">

                <h1 className="text-4xl font-bold text-amber-950">
                    नया उत्पाद अनुरोध
                </h1>

                <p className="text-amber-800 mt-3 max-w-3xl leading-8">
                    अपने हस्तनिर्मित, पारंपरिक या राजस्थानी उत्पाद की जानकारी
                    यहाँ साझा करें। हमारी टीम आपके उत्पाद की समीक्षा करेगी,
                    तस्वीरों को बेहतर बनाएगी, SEO सामग्री तैयार करेगी और
                    स्वीकृति मिलने के बाद उत्पाद को राज परंपरा पर प्रकाशित करेगी।
                </p>

            </div>

            {/* Card */}

            <div className="overflow-hidden rounded-[32] sm:border border-amber-200 bg-white sm:shadow-xl">

                {/* Top Banner */}

                <div className="sm:bg-amber-300 sm:px-8 py-8">

                    <h2 className="text-3xl font-bold text-amber-950">
                        उत्पाद की जानकारी
                    </h2>

                    <p className="mt-2 text-amber-950/80">
                        केवल आवश्यक जानकारी भरें। बाकी कार्य हमारी टीम करेगी।
                    </p>

                </div>

                {/* Form */}

                <div className="space-y-8 sm:p-8 py-4">

                    {/* Product Name */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <Package size={18} />

                            उत्पाद का नाम

                        </label>

                        <input
                            type="text"
                            placeholder="जैसे - राजस्थानी कुंदन हार"
                            className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                    </div>

                    {/* Product Hint */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <Sparkles size={18} />

                            उत्पाद के बारे में संकेत

                        </label>

                        <input
                            type="text"
                            placeholder="जैसे - जयपुर का हस्तनिर्मित दुल्हन कुंदन हार"
                            className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                        <p className="mt-2 text-sm text-amber-700">
                            इस जानकारी की सहायता से हम शीर्षक, विवरण और SEO
                            सामग्री तैयार करेंगे।
                        </p>

                    </div>

                    {/* Category + Price */}

                    <div className="grid gap-6 lg:grid-cols-2">

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                                <Tag size={18} />

                                श्रेणी

                            </label>

                            <select className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500">

                                <option>श्रेणी चुनें</option>

                                <option>आभूषण</option>

                                <option>मोजड़ी</option>

                                <option>हस्तशिल्प</option>

                                <option>कपड़े</option>

                                <option>बैग</option>

                                <option>सजावटी वस्तुएँ</option>

                            </select>

                        </div>

                        <div>

                            <label className="mb-3 block font-semibold text-amber-900">
                                बिक्री मूल्य
                            </label>

                            <input
                                type="number"
                                placeholder="₹ 999"
                                className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                            />

                        </div>

                    </div>
                    {/* Product Description */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <FileText size={18} />

                            उत्पाद का विवरण

                        </label>

                        <textarea
                            rows={7}
                            placeholder="अपने उत्पाद के बारे में विस्तार से लिखें..."
                            className="w-full resize-none rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                        <p className="mt-2 text-sm text-amber-700">
                            जितनी अधिक जानकारी देंगे, उत्पाद उतना बेहतर दिखाई देगा।
                        </p>

                    </div>

                    {/* Upload Images */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <ImagePlus size={18} />

                            उत्पाद की तस्वीरें

                        </label>

                        <div
                            className="
                            group
                            rounded-3xl
                            border-2
                            border-dashed
                            border-amber-300
                            bg-gradient-to-br
                            from-amber-50
                            to-yellow-50
                            p-12
                            text-center
                            transition-all
                            duration-300
                            hover:border-amber-500
                            hover:bg-amber-100/60
                            cursor-pointer
                        "
                        >

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition">

                                <ImagePlus size={34} />

                            </div>

                            <h3 className="mt-6 text-xl font-bold text-amber-900">
                                तस्वीरें अपलोड करें
                            </h3>

                            <p className="mt-2 text-amber-700">
                                JPG, PNG या WEBP फ़ाइलें
                            </p>

                            <p className="mt-4 text-sm leading-7 text-amber-600 max-w-2xl mx-auto">
                                आपकी तस्वीरों का बैकग्राउंड सफेद किया जाएगा,
                                गुणवत्ता बेहतर बनाई जाएगी, आकार अनुकूलित किया जाएगा
                                तथा वेबसाइट के लिए तैयार किया जाएगा।
                            </p>

                        </div>

                    </div>

                    {/* Notice */}

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

                        <h3 className="font-semibold text-amber-900">
                            महत्वपूर्ण सूचना
                        </h3>

                        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-800 list-disc pl-5">

                            <li>
                                केवल अपने स्वयं के उत्पादों की जानकारी भेजें।
                            </li>

                            <li>
                                सभी अनुरोध हमारी टीम द्वारा समीक्षा के बाद ही प्रकाशित किए जाएंगे।
                            </li>

                            <li>
                                SEO, शीर्षक, विवरण और तस्वीरों का अनुकूलन हमारी टीम करेगी।
                            </li>

                        </ul>

                    </div>

                    {/* Submit */}

                    <div className="flex justify-end">

                        <button
                            className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-gradient-to-r
                            from-amber-700
                            to-amber-500
                            px-8
                            py-4
                            text-white
                            font-semibold
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-2xl
                        "
                        >

                            <Send size={20} />

                            अनुरोध भेजें

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}