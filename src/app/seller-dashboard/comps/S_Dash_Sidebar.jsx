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

const menuItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/seller/dashboard",
    },
    {
        title: "Orders",
        icon: ShoppingBag,
        href: "/seller/orders",
    },
    {
        title: "Products",
        icon: Package,
        href: "/seller/products",
    },
    {
        title: "Add Product",
        icon: PlusCircle,
        href: "/seller/products/new",
    },
    {
        title: "Categories",
        icon: FolderTree,
        href: "/seller/categories",
    },
    {
        title: "Customers",
        icon: Users,
        href: "/seller/customers",
    },
    {
        title: "Messages",
        icon: MessageSquare,
        href: "/seller/messages",
    },
    {
        title: "Reviews",
        icon: Star,
        href: "/seller/reviews",
    },
    {
        title: "Token Wallet",
        icon: Wallet,
        href: "/seller/token-wallet",
    },
    {
        title: "Payments",
        icon: IndianRupee,
        href: "/seller/payments",
    },
    {
        title: "Shipping",
        icon: Truck,
        href: "/seller/shipping",
    },
    {
        title: "Coupons",
        icon: BadgePercent,
        href: "/seller/coupons",
    },
    {
        title: "Sales Report",
        icon: BarChart3,
        href: "/seller/reports",
    },
    {
        title: "Notifications",
        icon: Bell,
        href: "/seller/notifications",
    },
    {
        title: "Profile",
        icon: User,
        href: "/seller/profile",
    },
    {
        title: "Settings",
        icon: Settings,
        href: "/seller/settings",
    },
];

export default function SellerSidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle */}
            {
                open === false
                &&
                < button
                    onClick={() => setOpen(true)}
                    className="fixed top-21 left-3 z-999 lg:hidden bg-[#2D1B12] text-white p-2 rounded-xl shadow-lg"
                >
                    <Menu size={22} />
                </button >
            }

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
                 h-screen
                w-72
                bg-[#2D1B12]
                text-white
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
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                    <div>
                        <h1 className="text-2xl font-bold text-[#D4AF37]">
                            राज परंपरा
                        </h1>

                        <p className="text-xs text-gray-300 mt-1">
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

                <div className="mx-5 mt-6 rounded-2xl bg-white/10 p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#2D1B12] font-bold text-xl">
                            T
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                Tarun Mehra
                            </h2>

                            <p className="text-xs text-gray-300">
                                Verified Seller
                            </p>
                        </div>
                    </div>
                </div>

                {/* Menu */}

                <div className="flex-1 overflow-y-auto custom-scrollbar mt-6 px-4 pb-5">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 px-3">
                        Main Menu
                    </p>

                    <nav className="space-y-2">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    px-4
                                    py-3
                                    hover:bg-[#D4AF37]
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
                                </Link>
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
                        py-3
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