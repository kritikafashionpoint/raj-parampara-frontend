"use client";

import {
    IndianRupee,
    Wallet,
    Coins,
    ArrowUpRight,
    CalendarDays,
    Clock3,
    LifeBuoy,
} from "lucide-react";

const stats = [
    {
        title: "कुल कमाई",
        value: "₹24,560",
        icon: IndianRupee,
        color: "from-amber-500 to-yellow-400",
    },
    {
        title: "बकाया राशि",
        value: "₹2,480",
        icon: Clock3,
        color: "from-orange-500 to-amber-500",
    },
    {
        title: "राज टोकन",
        value: "5,860",
        icon: Coins,
        color: "from-yellow-500 to-amber-300",
    },
];

const earnings = [
    {
        date: "18 जुलाई 2026",
        order: "#RP2087",
        product: "कुंदन हार",
        tokens: 80,
        amount: "₹160",
        status: "Released",
    },
    {
        date: "17 जुलाई 2026",
        order: "#RP2084",
        product: "राजस्थानी मोजड़ी",
        tokens: 120,
        amount: "₹240",
        status: "Pending",
    },
    {
        date: "15 जुलाई 2026",
        order: "#RP2079",
        product: "हस्तनिर्मित बैग",
        tokens: 65,
        amount: "₹130",
        status: "Released",
    },
];

const withdrawals = [
    {
        date: "10 जुलाई 2026",
        amount: "₹2,000",
        method: "UPI",
        status: "Paid",
    },
    {
        date: "21 जून 2026",
        amount: "₹1,500",
        method: "Bank",
        status: "Paid",
    },
    {
        date: "08 जून 2026",
        amount: "₹850",
        method: "UPI",
        status: "Rejected",
    },
];

export default function PaymentSheet() {

    const withdrawAmount = 420;
    const minimumWithdraw = 500;

    return (
        <div className="space-y-8">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                    <h1 className="text-4xl font-bold text-amber-950">
                        भुगतान एवं निकासी
                    </h1>

                    <p className="text-amber-700 mt-2">
                        अपनी कमाई, टोकन और निकासी अनुरोधों की जानकारी देखें।
                    </p>

                </div>

            </div>

            {/* Stats */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                {stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={item.title}
                            className="rounded-3xl bg-white border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-gray-500">
                                        {item.title}
                                    </p>

                                    <h2 className="text-4xl font-bold text-amber-950 mt-3">
                                        {item.value}
                                    </h2>

                                </div>

                                <div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                                >

                                    <Icon
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

            {/* Withdraw Card */}

            <div className="rounded-3xl bg-white border border-amber-100 shadow-sm overflow-hidden">

                <div className="bg-gradient-to-r from-amber-500 to-yellow-400 p-6">

                    <div className="flex items-center gap-3">

                        <Wallet className="text-white" />

                        <h2 className="text-2xl font-bold text-white">
                            निकासी
                        </h2>

                    </div>

                </div>

                <div className="p-8">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        <div>

                            <p className="text-gray-500">
                                निकासी योग्य राशि
                            </p>

                            <h2 className="text-5xl font-bold text-amber-900 mt-2">
                                ₹{withdrawAmount}
                            </h2>

                        </div>

                        <div className="flex-1">

                            <div className="flex justify-between text-sm text-gray-600 mb-2">

                                <span>₹0</span>

                                <span>₹500</span>

                            </div>

                            <div className="h-4 rounded-full bg-amber-100 overflow-hidden">

                                <div
                                    style={{
                                        width: `${Math.min(
                                            (withdrawAmount /
                                                minimumWithdraw) *
                                            100,
                                            100
                                        )}%`,
                                    }}
                                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                                />

                            </div>

                            <p className="mt-3 text-sm text-amber-700">

                                {withdrawAmount >= minimumWithdraw
                                    ? "आप निकासी के लिए पात्र हैं।"
                                    : `निकासी के लिए ₹${minimumWithdraw - withdrawAmount
                                    } और चाहिए।`}

                            </p>

                        </div>

                        <button
                            disabled={
                                withdrawAmount < minimumWithdraw
                            }
                            className={`px-8 py-4 rounded-2xl font-semibold transition

${withdrawAmount >= minimumWithdraw
                                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                }`}
                        >

                            निकासी अनुरोध

                        </button>

                    </div>

                </div>

            </div>
            {/* Recent Earnings */}

            <div className="rounded-3xl bg-white border border-amber-100 shadow-sm overflow-hidden">

                <div className="flex items-center justify-between p-6 border-b border-amber-100">

                    <div>

                        <h2 className="text-2xl font-bold text-amber-950">
                            हाल की कमाई
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            प्रत्येक बिक्री पर प्राप्त टोकन और राशि
                        </p>

                    </div>

                    <button className="flex items-center gap-2 text-amber-800 font-semibold hover:text-amber-600 transition">
                        सभी देखें
                        <ArrowUpRight size={18} />
                    </button>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[760px]">

                        <thead className="bg-amber-50">

                            <tr>

                                <th className="text-left px-6 py-4 font-semibold text-amber-900">
                                    दिनांक
                                </th>

                                <th className="text-left px-6 py-4 font-semibold text-amber-900">
                                    ऑर्डर
                                </th>

                                <th className="text-left px-6 py-4 font-semibold text-amber-900">
                                    उत्पाद
                                </th>

                                <th className="text-center px-6 py-4 font-semibold text-amber-900">
                                    टोकन
                                </th>

                                <th className="text-center px-6 py-4 font-semibold text-amber-900">
                                    राशि
                                </th>

                                <th className="text-center px-6 py-4 font-semibold text-amber-900">
                                    स्थिति
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {earnings.map((item, index) => (

                                <tr
                                    key={index}
                                    className="border-b border-amber-100 hover:bg-amber-50/40 transition"
                                >

                                    <td className="px-6 py-5 whitespace-nowrap">

                                        <div className="flex items-center gap-2">

                                            <CalendarDays
                                                size={16}
                                                className="text-amber-700"
                                            />

                                            {item.date}

                                        </div>

                                    </td>

                                    <td className="px-6 py-5 font-semibold text-amber-900">
                                        {item.order}
                                    </td>

                                    <td className="px-6 py-5">
                                        {item.product}
                                    </td>

                                    <td className="px-6 py-5 text-center font-semibold text-amber-800">
                                        {item.tokens}
                                    </td>

                                    <td className="px-6 py-5 text-center font-bold text-emerald-600">
                                        {item.amount}
                                    </td>

                                    <td className="px-6 py-5 text-center">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium
                                                ${item.status === "Released"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Withdrawal History */}

            <div className="rounded-3xl bg-white border border-amber-100 shadow-sm overflow-hidden">

                <div className="p-6 border-b border-amber-100">

                    <h2 className="text-2xl font-bold text-amber-950">
                        निकासी इतिहास
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        आपके सभी निकासी अनुरोध
                    </p>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[700px]">

                        <thead className="bg-amber-50">

                            <tr>

                                <th className="text-left px-6 py-4 font-semibold text-amber-900">
                                    दिनांक
                                </th>

                                <th className="text-center px-6 py-4 font-semibold text-amber-900">
                                    राशि
                                </th>

                                <th className="text-center px-6 py-4 font-semibold text-amber-900">
                                    माध्यम
                                </th>

                                <th className="text-center px-6 py-4 font-semibold text-amber-900">
                                    स्थिति
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {withdrawals.map((item, index) => (

                                <tr
                                    key={index}
                                    className="border-b border-amber-100 hover:bg-amber-50/40 transition"
                                >

                                    <td className="px-6 py-5">
                                        {item.date}
                                    </td>

                                    <td className="px-6 py-5 text-center font-bold text-amber-900">
                                        {item.amount}
                                    </td>

                                    <td className="px-6 py-5 text-center">
                                        {item.method}
                                    </td>

                                    <td className="px-6 py-5 text-center">

                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium
                                                ${item.status === "Paid"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
            {/* Withdrawal Policy */}

            <div className="mt-8 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-7">

                <h2 className="text-2xl font-bold text-amber-950">
                    निकासी (Withdrawal) नियम
                </h2>

                <div className="mt-6 grid lg:grid-cols-3 gap-5">

                    <div className="rounded-2xl bg-white border border-amber-200 p-5">
                        <p className="text-amber-700 text-sm">
                            न्यूनतम निकासी
                        </p>

                        <h3 className="text-3xl font-bold text-amber-950 mt-2">
                            ₹500
                        </h3>
                    </div>

                    <div className="rounded-2xl bg-white border border-amber-200 p-5">
                        <p className="text-amber-700 text-sm">
                            1 राज टोकन
                        </p>

                        <h3 className="text-3xl font-bold text-amber-950 mt-2">
                            ₹0.20 - ₹2.00
                        </h3>
                    </div>

                    <div className="rounded-2xl bg-white border border-amber-200 p-5">
                        <p className="text-amber-700 text-sm">
                            भुगतान समय
                        </p>

                        <h3 className="text-3xl font-bold text-amber-950 mt-2">
                            3-7 दिन
                        </h3>
                    </div>

                </div>

                <ul className="mt-6 space-y-3 text-amber-900">

                    <li>
                        • ऑर्डर डिलीवर होने के बाद तथा रिटर्न अवधि समाप्त होने पर ही टोकन जोड़े जाते हैं।
                    </li>

                    <li>
                        • न्यूनतम ₹500 होने पर ही निकासी का अनुरोध किया जा सकता है।
                    </li>

                    <li>
                        • भुगतान सीधे आपके बैंक खाते में भेजा जाएगा।
                    </li>

                    <li>
                        • निकासी अनुरोध स्वीकृत होने के बाद 3-7 कार्य दिवसों में भुगतान किया जाएगा।
                    </li>

                </ul>

            </div>

            {/* Payment History */}

            <div className="mt-8 rounded-3xl border border-amber-200 bg-white shadow-sm overflow-hidden">

                <div className="flex items-center justify-between p-6 border-b border-amber-100">

                    <div>

                        <h2 className="text-2xl font-bold text-amber-950">
                            भुगतान इतिहास
                        </h2>

                        <p className="text-amber-700 mt-1">
                            आपके सभी भुगतान अनुरोध
                        </p>

                    </div>

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-amber-50">

                            <tr>

                                <th className="text-left px-6 py-4">
                                    दिनांक
                                </th>

                                <th className="text-left px-6 py-4">
                                    टोकन
                                </th>

                                <th className="text-left px-6 py-4">
                                    राशि
                                </th>

                                <th className="text-left px-6 py-4">
                                    स्थिति
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="border-t border-amber-100">

                                <td className="px-6 py-5">
                                    18 जुलाई 2026
                                </td>

                                <td className="px-6 py-5">
                                    640
                                </td>

                                <td className="px-6 py-5 font-semibold">
                                    ₹960
                                </td>

                                <td className="px-6 py-5">

                                    <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm">
                                        भुगतान हो गया
                                    </span>

                                </td>

                            </tr>

                            <tr className="border-t border-amber-100">

                                <td className="px-6 py-5">
                                    05 जुलाई 2026
                                </td>

                                <td className="px-6 py-5">
                                    520
                                </td>

                                <td className="px-6 py-5 font-semibold">
                                    ₹780
                                </td>

                                <td className="px-6 py-5">

                                    <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-sm">
                                        प्रक्रिया में
                                    </span>

                                </td>

                            </tr>

                            <tr className="border-t border-amber-100">

                                <td className="px-6 py-5">
                                    20 जून 2026
                                </td>

                                <td className="px-6 py-5">
                                    400
                                </td>

                                <td className="px-6 py-5 font-semibold">
                                    ₹600
                                </td>

                                <td className="px-6 py-5">

                                    <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 text-sm">
                                        अस्वीकृत
                                    </span>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Withdraw */}

            <div className="mt-8 flex justify-end">

                <button
                    className="
                        rounded-2xl
                        bg-gradient-to-r
                        from-amber-500
                        to-amber-400
                        px-8
                        py-4
                        font-semibold
                        text-black
                        shadow-lg
                        hover:shadow-xl
                        hover:scale-[1.02]
                        transition-all
                    "
                >
                    निकासी अनुरोध करें
                </button>

            </div>
            {/* सहायता एवं जानकारी */}

            <div className="mt-8 grid lg:grid-cols-2 gap-8">

                {/* FAQ */}

                <div className="rounded-3xl border border-amber-200 bg-white p-7 shadow-sm">

                    <h2 className="text-2xl font-bold text-amber-950">
                        अक्सर पूछे जाने वाले प्रश्न
                    </h2>

                    <div className="mt-6 space-y-6">

                        <div>

                            <h3 className="font-semibold text-amber-900">
                                भुगतान कब मिलता है?
                            </h3>

                            <p className="mt-2 text-amber-700 leading-7">
                                ऑर्डर सफलतापूर्वक डिलीवर होने तथा रिटर्न अवधि
                                समाप्त होने के बाद भुगतान योग्य राशि तैयार होती है।
                            </p>

                        </div>

                        <div>

                            <h3 className="font-semibold text-amber-900">
                                न्यूनतम निकासी कितनी है?
                            </h3>

                            <p className="mt-2 text-amber-700 leading-7">
                                निकासी अनुरोध भेजने के लिए कम से कम
                                ₹500 की राशि होना आवश्यक है।
                            </p>

                        </div>

                        <div>

                            <h3 className="font-semibold text-amber-900">
                                टोकन की कीमत कैसे तय होती है?
                            </h3>

                            <p className="mt-2 text-amber-700 leading-7">
                                प्रत्येक बिक्री पर मिलने वाले राज टोकन का
                                मूल्य ₹0.20 से ₹2.00 तक हो सकता है।
                            </p>

                        </div>

                        <div>

                            <h3 className="font-semibold text-amber-900">
                                भुगतान कहाँ भेजा जाएगा?
                            </h3>

                            <p className="mt-2 text-amber-700 leading-7">
                                भुगतान आपके सत्यापित बैंक खाते में सीधे भेजा जाएगा।
                            </p>

                        </div>

                    </div>

                </div>

                {/* Support */}

                <div className="rounded-3xl bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-200 p-8 shadow-lg">

                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">

                        <LifeBuoy
                            size={32}
                            className="text-amber-700"
                        />

                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-amber-950">
                        सहायता चाहिए?
                    </h2>

                    <p className="mt-4 leading-8 text-amber-900">

                        यदि भुगतान, टोकन, ऑर्डर या निकासी से संबंधित
                        कोई भी समस्या हो, तो हमारी सहायता टीम आपकी मदद
                        के लिए उपलब्ध है।

                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <button
                            className="
                                rounded-2xl
                                bg-white
                                px-6
                                py-4
                                font-semibold
                                text-amber-900
                                shadow
                                hover:shadow-lg
                                transition
                            "
                        >
                            सहायता केंद्र
                        </button>

                        <button
                            className="
                                rounded-2xl
                                border
                                border-amber-700
                                px-6
                                py-4
                                font-semibold
                                text-amber-950
                                hover:bg-white/40
                                transition
                            "
                        >
                            सहायता से संपर्क करें
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}
