"use client";

import { useState } from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    ShoppingBag,
    Package,
    PlusCircle,
    FolderTree,
    Users,
    MessageSquare,
    Star,
    Wallet,
    IndianRupee,
    Truck,
    BadgePercent,
    BarChart3,
    Settings,
    User,
    Bell,
    LogOut,
    Menu,
    X,
    ChevronRight,
} from "lucide-react";



export default function SellerSidebar({
    setActiveTab,
    activeTab
}) {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            title: "डैशबोर्ड",
            icon: LayoutDashboard,
            slug: "dashboard",
        },
        {
            title: "उत्पाद",
            icon: Package,
            slug: "products",
        },
        {
            title: "ऑर्डर",
            icon: ShoppingBag,
            slug: "orders",
        },
        {
            title: "उत्पाद जोड़ें",
            icon: PlusCircle,
            slug: "add-product",
        },
        {
            title: "श्रेणियाँ",
            icon: FolderTree,
            slug: "categories",
        },
        {
            title: "ग्राहक",
            icon: Users,
            slug: "customers",
        },
        {
            title: "संदेश",
            icon: MessageSquare,
            slug: "messages",
        },
        {
            title: "समीक्षाएँ",
            icon: Star,
            slug: "reviews",
        },
        {
            title: "टोकन वॉलेट",
            icon: Wallet,
            slug: "token-wallet",
        },
        {
            title: "भुगतान",
            icon: IndianRupee,
            slug: "payments",
        },
        {
            title: "शिपिंग",
            icon: Truck,
            slug: "shipping",
        },
        {
            title: "कूपन",
            icon: BadgePercent,
            slug: "coupons",
        },
        {
            title: "बिक्री रिपोर्ट",
            icon: BarChart3,
            slug: "sales-report",
        },
        {
            title: "सूचनाएँ",
            icon: Bell,
            slug: "notifications",
        },
        {
            title: "प्रोफ़ाइल",
            icon: User,
            slug: "profile",
        },
        {
            title: "सेटिंग्स",
            icon: Settings,
            slug: "settings",
        },
    ];


    return (
        <>

            {/* Overlay */}
            {
                open && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setOpen(false)}
                    />
                )
            }

            {/* Sidebar */}
            <aside
                className={`
                 
                w-full
                pb-5
                h-screen
                overflow-y-auto
                bg-white
                text-black
                flex flex-col
                shadow-2xl
                z-50
                transition-all duration-300
                ${open
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
            `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-5 border-b border-white/10">
                    <div>
                        <h1 className="text-2xl font-bold text-amber-800">
                            राज परंपरा
                        </h1>

                        <p className="text-xs text-gray-800 mt-1">
                            Seller Dashboard
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="lg:hidden"
                    >
                        <X />
                    </button>
                </div>

                {/* Seller Card */}

                <div className="mx-4 mt-0 rounded-2xl bg-white p-4 border border-white">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-amber-300 flex items-center justify-center text-[#2D1B12] font-bold text-xl">
                            T
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                Tarun Mehra
                            </h2>

                            <p className="text-xs text-gray-800">
                                Verified Seller
                            </p>
                        </div>
                    </div>
                </div>

                {/* Menu */}

                <div className="flex-1 overflow-y-auto custom-scrollbar mt-6 px-4 pb-5">
                    <p className="text-xs uppercase tracking-widest text-gray-800 mb-4 px-3">
                        Main Menu
                    </p>

                    <nav className="space-y-2">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    onClick={() => setActiveTab(item.slug)}
                                    key={index}
                                    className={`group
                                        ${item.slug === activeTab ? 'bg-amber-300' : 'bg-white'}
                                    flex
                                    items-center
                                    justify-between
                                    cursor-pointer
                                    rounded-xl
                                    px-4
                                    py-3
                                    hover:bg-amber-300
                                    hover:text-[#2D1B12]
                                    transition-all
                                    duration-300`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={20} />

                                        <span className="font-medium">
                                            {item.title}
                                        </span>
                                    </div>

                                    <ChevronRight
                                        size={17}
                                        className="opacity-0 group-hover:opacity-100 transition"
                                    />
                                </div>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom */}

                <div className="border-t border-white/10 p-5">
                    <button
                        className="
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-red-600
                        hover:bg-red-700
                        cursor-pointer
                        py-3
                        text-white
                        font-semibold
                        transition
                    "
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}