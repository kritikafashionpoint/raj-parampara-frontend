'use client'
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { MobileMenu } from "../animated_modals/MobileMenu";
import { ShoppingCartIcon } from "lucide-react";

export default function MobileHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="lg:hidden block bg-white relative">

            <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            <div className="max-w-[1420] mx-auto h-[70] px-3 flex items-center justify-between">

                {/* Left */}
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-3xl text-gray-800">
                    {mobileMenuOpen ? <CgClose /> : <HiOutlineMenuAlt3 />}
                </button>

                {/* Logo */}
                <Link href="/">
                    <div onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                        <img
                            src="/logo.png"
                            className="sm:w-[140] sm:h-[140] w-[110] h-[110] mt-4 object-contain"
                            alt="Raj Parampara"
                        />

                        <div className="sm:-ml-5 -ml-4">
                            <h2 className="font-extrabold tracking-wider text-amber-700 sm:text-[20px] text-[18px] leading-none">
                                राज. परंपरा
                            </h2>

                            <p className="text-[10.5px] text-gray-700 mt-1">
                                राजस्थान से विश्व तक
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Right */}
                <div className="flex items-center gap-3 ml-4">
                    <span className='cursor-pointer'><IoSearchOutline size={20} /></span>
                    <Link href={'/cart'}><span className='cursor-pointer bg-amber-800 text-white w-10 h-10 flex items-center justify-center rounded-full'><ShoppingCartIcon size={18} /></span></Link>
                </div>

            </div>
        </div>
    );
}



