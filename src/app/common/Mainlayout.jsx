"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function Mainlayout({ children }) {
    const pathname = usePathname();

    const hideLayoutRoutes = [
        "/seller-dashboard",
    ];

    const hideLayout = hideLayoutRoutes.some((route) =>
        pathname.startsWith(route)
    );

    return (
        <>
            {!hideLayout && <Header />}

            <main>{children}</main>

            {!hideLayout && <Footer />}
        </>
    );
}