import { X } from "lucide-react";
import { menuItems } from "./S_Dash_Sidebar";


export function MobileSideBar({
    mobileSidebarOpen,
    setMobileSideBarOpen,
    activeTab,
    setActiveTab,
}) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setMobileSideBarOpen(false)}
                className={`fixed inset-0 z-50 bg-black/80 transition duration-300 ${mobileSidebarOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-100 h-screen w-[290] bg-white shadow-2xl transition-transform duration-300 ${mobileSidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex pt-20 items-center justify-between border-b border-gray-300 p-5">
                    <div>
                        <h2 className="text-xl font-bold text-amber-900">
                            राज परंपरा
                        </h2>
                        <p className="text-xs text-gray-500">
                            Seller Dashboard
                        </p>
                    </div>

                    <button
                        onClick={() => setMobileSideBarOpen(false)}
                        className="rounded-xl p-2 hover:bg-gray-100"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Seller */}
                <div className="border-b border-gray-300 p-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-bold">
                            T
                        </div>

                        <div>
                            <h3 className="font-semibold">Tarun Mehra</h3>
                            <p className="text-xs text-gray-500">
                                Verified Seller
                            </p>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className="h-[calc(100vh-170px)] overflow-y-auto px-3 py-4">
                    <div className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.slug}
                                    onClick={() => {
                                        setActiveTab(item.slug);
                                        setMobileSideBarOpen(false);
                                    }}
                                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${activeTab === item.slug
                                        ? "bg-amber-400 text-black shadow-md"
                                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-900"
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">
                                        {item.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </aside>
        </>
    );
}