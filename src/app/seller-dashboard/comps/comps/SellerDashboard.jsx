"use client";

import {
    IndianRupee,
    Package,
    Wallet,
    ArrowUpRight,
    PlusCircle,
    ShoppingBag,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";


const stats = [
    {
        title: "Total Sales",
        value: "₹24,560",
        icon: IndianRupee,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Orders",
        value: "128",
        icon: ShoppingBag,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Products",
        value: "54",
        icon: Package,
        color: "bg-orange-100 text-orange-600",
    },
];

const recentOrders = [
    {
        id: "#RP1025",
        customer: "Rahul Sharma",
        amount: "₹1,299",
        status: "Delivered",
    },
    {
        id: "#RP1024",
        customer: "Priya Singh",
        amount: "₹899",
        status: "Processing",
    },
    {
        id: "#RP1023",
        customer: "Amit Verma",
        amount: "₹2,450",
        status: "Pending",
    },
];

export default function SellerDashboard({ setActiveTab }) {
    return (
        <div className="flex-1 ">

            {/* Navbar */}

            <div className="bg-white py-5 flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold text-[#2D1B12]">
                        Dashboard
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Welcome back 👋
                    </p>
                </div>


                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-[#2D1B12] transition-all duration-300 hover:bg-amber-100 hover:border-amber-400 hover:-translate-x-1"
                >
                    <ArrowLeft size={18} />
                    वापस जाएँ
                </Link>

            </div>

            <div>

                {/* Stats */}

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    bg-white/80
                    backdrop-blur-xl
                    border border-gray-300
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    p-6
                "
                            >
                                {/* Background Glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 duration-500" />

                                <div className="relative flex items-start justify-between">

                                    <div>

                                        <p className="text-xl font-semibold text-slate-600">
                                            {item.title}
                                        </p>

                                        <h2 className="text-3xl font-bold mt-3 text-slate-900">
                                            {item.value}
                                        </h2>

                                    </div>

                                    <div
                                        className={`
                            w-16
                            h-16
                            rounded-2xl
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            ${item.color}
                        `}
                                    >
                                        <Icon size={28} />
                                    </div>

                                </div>

                                <div className="relative mt-8 flex items-center justify-between">

                                    <span className="text-sm text-emerald-600 font-semibold">
                                        +12.5%
                                    </span>

                                    <span className="text-sm text-slate-400">
                                        vs last month
                                    </span>

                                </div>

                            </div>
                        );
                    })}

                    <div
                        className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    bg-white/80
                    backdrop-blur-xl
                    border border-gray-300
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    p-6
                "
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 duration-500" />

                        <div className="relative flex items-start justify-between">

                            <div>

                                <p className="text-xl font-semibold text-slate-600 ">
                                    Raj Tokens
                                </p>

                                <h2 className="text-3xl font-bold mt-3 text-slate-900">
                                    420
                                </h2>
                            </div>

                            <img src="/token/token.png" className="w-20 h-20 rounded-full" />
                        </div>

                        <div className="relative mt-8 flex items-center justify-between">

                            <span className="text-sm text-emerald-600 font-semibold">
                                +12.5%
                            </span>

                            <span className="text-sm text-slate-400">
                                vs last month
                            </span>

                        </div>

                    </div>
                </div>

                {/* Quick Actions */}

                <div className="mt-8 rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-7">

                    <div className="flex items-center justify-between mb-6">

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Quick Actions
                            </h2>

                            <p className="text-slate-500 mt-1">
                                Frequently used seller actions
                            </p>
                        </div>

                    </div>

                    <div className="grid lg:grid-cols-5 gap-5">

                        {/* Add Product */}

                        <button
                            onClick={() => setActiveTab('products')}
                            className="
            group
            rounded-3xl
            p-6
            bg-linear-to-br
            from-violet-500
            to-indigo-600
            text-white
            text-left
            shadow-lg
            hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
        "
                        >

                            <div className="flex items-center justify-between">

                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <PlusCircle size={28} />
                                </div>

                                <ArrowRight className="group-hover:translate-x-1 duration-300" />

                            </div>

                            <h3 className="text-xl font-semibold mt-8">
                                Add Product
                            </h3>

                            <p className="text-white/80 mt-2 text-sm">
                                List a new product for customers.
                            </p>

                        </button>

                        {/* Orders */}

                        <button
                            className="
            group
            rounded-3xl
            p-6
            bg-linear-to-br
            from-emerald-500
            to-green-600
            text-white
            text-left
            shadow-lg
            hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
        "
                        >

                            <div className="flex items-center justify-between">

                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <ShoppingBag size={28} />
                                </div>

                                <ArrowRight className="group-hover:translate-x-1 duration-300" />

                            </div>

                            <h3 className="text-xl font-semibold mt-8">
                                Orders
                            </h3>

                            <p className="text-white/80 mt-2 text-sm">
                                View and manage recent orders.
                            </p>

                        </button>

                        {/* Payments */}

                        <button
                            className="
            group
            rounded-3xl
            p-6
            bg-linear-to-br
            from-amber-400
            to-orange-500
            text-white
            text-left
            shadow-lg
            hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
        "
                        >

                            <div className="flex items-center justify-between">

                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <IndianRupee size={28} />
                                </div>

                                <ArrowRight className="group-hover:translate-x-1 duration-300" />

                            </div>

                            <h3 className="text-xl font-semibold mt-8">
                                Payments
                            </h3>

                            <p className="text-white/80 mt-2 text-sm">
                                Check earnings and payment history.
                            </p>

                        </button>

                        <button
                            className="
            group
            rounded-3xl
            p-6
            bg-linear-to-br
            from-amber-400
            to-orange-500
            text-white
            text-left
            shadow-lg
            hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
        "
                        >

                            <div className="flex items-center justify-between">

                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <IndianRupee size={28} />
                                </div>

                                <ArrowRight className="group-hover:translate-x-1 duration-300" />

                            </div>

                            <h3 className="text-xl font-semibold mt-8">
                                Payments
                            </h3>

                            <p className="text-white/80 mt-2 text-sm">
                                Check earnings and payment history.
                            </p>

                        </button>
                        <button
                            className="
            group
            rounded-3xl
            p-6
            bg-linear-to-br
            from-amber-400
            to-orange-500
            text-white
            text-left
            shadow-lg
            hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
        "
                        >

                            <div className="flex items-center justify-between">

                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                                    <IndianRupee size={28} />
                                </div>

                                <ArrowRight className="group-hover:translate-x-1 duration-300" />

                            </div>

                            <h3 className="text-xl font-semibold mt-8">
                                Payments
                            </h3>

                            <p className="text-white/80 mt-2 text-sm">
                                Check earnings and payment history.
                            </p>

                        </button>

                    </div>

                </div>

                {/* Recent Orders */}

                <div className="mt-8 rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">

                    {/* Header */}

                    <div className="flex items-center justify-between px-7 py-6 border-b border-slate-100">

                        <div>

                            <h2 className="text-2xl font-bold text-slate-900">
                                Recent Orders
                            </h2>

                            <p className="text-slate-500 mt-1 text-sm">
                                Latest customer orders
                            </p>

                        </div>

                        <button className="group flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 duration-300">

                            View All

                            <ArrowUpRight
                                size={18}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                            />

                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="bg-slate-50">

                                    <th className="text-left text-sm font-semibold text-slate-500 px-7 py-4">
                                        Order ID
                                    </th>

                                    <th className="text-left text-sm font-semibold text-slate-500  px-7">
                                        Customer
                                    </th>

                                    <th className="text-left text-sm font-semibold text-slate-500  px-7">
                                        Amount
                                    </th>

                                    <th className="text-left text-sm font-semibold text-slate-500  px-7">
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {recentOrders.map((item) => (

                                    <tr
                                        key={item.id}
                                        className="
                        group
                        border-b
                        border-slate-100
                        hover:bg-violet-50/50
                        transition-all
                        duration-300
                    "
                                    >

                                        <td className="px-7 py-5">

                                            <span className="font-semibold text-slate-900">
                                                {item.id}
                                            </span>

                                        </td>

                                        <td className="px-7">

                                            <div className="flex items-center gap-5">

                                                <div className=" w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-white hidden md:flex items-center justify-center font-semibold">

                                                    {item.customer.charAt(0)}

                                                </div>

                                                <div className="">

                                                    <h4 className="font-semibold text-slate-800">
                                                        {item.customer}
                                                    </h4>

                                                    <p className="hidden md:inline text-xs text-slate-400">
                                                        Premium Customer
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        <td className="px-7">

                                            <span className="font-bold text-emerald-600">
                                                {item.amount}
                                            </span>

                                        </td>

                                        <td className="px-7">

                                            <span
                                                className={`
                                inline-flex
                                items-center
                                rounded-full
                                px-4
                                py-1.5
                                text-xs
                                font-semibold
                                ${item.status === "Delivered"
                                                        ? "bg-emerald-100 text-emerald-700"
                                                        : item.status === "Processing"
                                                            ? "bg-sky-100 text-sky-700"
                                                            : "bg-orange-100 text-orange-700"
                                                    }
                            `}
                                            >

                                                <span
                                                    className={`
                                    mr-2
                                    h-2
                                    w-2
                                    rounded-full
                                    ${item.status === "Delivered"
                                                            ? "bg-emerald-500"
                                                            : item.status === "Processing"
                                                                ? "bg-sky-500"
                                                                : "bg-orange-500"
                                                        }
                                `}
                                                />

                                                {item.status}

                                            </span>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}