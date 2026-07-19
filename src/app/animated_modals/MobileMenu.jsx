import {
    HiOutlineHome,
    HiOutlineShoppingBag,
    HiOutlineCollection,
    HiOutlineInformationCircle,
} from "react-icons/hi";
import { FaPhone, FaStore } from "react-icons/fa";
import Link from "next/link";
import { LayoutDashboard, Phone } from "lucide-react";


export function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
    const menu_data = [
        {
            id: 1,
            title: "होम",
            href: "/",
            icon: <HiOutlineHome />,
        },
        {
            id: 2,
            title: "हमारे बारे में",
            href: "/about-us",
            icon: <HiOutlineInformationCircle />,
        },
        {
            id: 3,
            title: "खरीदारी करें",
            href: "/shop-now",
            icon: <HiOutlineShoppingBag />,
        },
        {
            id: 4,
            title: "कैटेगरी",
            href: "/category",
            icon: <HiOutlineCollection />,
        },
        {
            id: 5,
            title: "संपर्क करें",
            href: "/contact-us",
            icon: <Phone />,
        },
        {
            id: 6,
            title: 'विक्रेता डैशबोर्ड',
            href: '/seller-dashboard',
            icon: <LayoutDashboard />
        }
    ];


    return (
        <div
            className={`absolute top-full left-0 w-full overflow-y-auto custom-scrollbar h-[calc(100vh-70px)] bg-[#FFFBF5] border-t border-amber-100 z-50 transition-all duration-300 ${mobileMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
                }`}
        >
            <div className="flex flex-col h-full">

                {/* Header */}
                <div className="px-6 py-6 border-b border-amber-100 bg-linear-to-r from-amber-50 to-white">

                    <span className="inline-flex rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold">
                        राजस्थान की शान
                    </span>

                    <h2 className="text-2xl font-bold text-[#2D1B12] mt-4">
                        आपका स्वागत है
                    </h2>

                    <p className="text-[15px] leading-7 text-gray-600 mt-2">
                        हस्तनिर्मित राजस्थानी कला, परंपरागत वस्त्र, आभूषण और
                        हस्तशिल्प का प्रामाणिक संग्रह।
                    </p>

                </div>

                {/* Navigation */}
                <nav className=" px-4 py-5">

                    {menu_data.map((item, index) => {
                        return (
                            <Link
                                onClick={() => setMobileMenuOpen(false)}
                                key={index}
                                href={item.href}
                                className="flex items-center gap-4 rounded-2xl px-4 py-4 text-[#2D1B12] hover:bg-white transition"
                            >
                                <span className="text-2xl text-amber-800"> {item.icon}</span>
                                <span className="text-lg font-medium">
                                    {item.title}
                                </span>
                            </Link>
                        )
                    })}

                </nav>

                {/* Seller CTA */}
                <div className="p-5 border-t border-amber-100">

                    <Link
                        onClick={() => setMobileMenuOpen(false)}
                        href="/seller-onboarding"
                        className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-linear-to-t from-amber-900  to-amber-400 shadow-lg text-white font-bold transition"
                    >
                        <FaStore />
                        विक्रेता बनें
                    </Link>

                    <p className="sm:inline hidden text-center text-xs text-gray-500 mt-4">
                        स्थानीय कारीगरों और व्यवसायों को डिजिटल मंच से जोड़ने का प्रयास।
                    </p>

                </div>

            </div>
        </div>
    );
}