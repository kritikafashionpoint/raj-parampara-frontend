import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function AddtoCartButton() {
    return (
        <button className="sm:text-md text-sm w-full bg-linear-to-t from-black to-black/80 shadow-lg cursor-pointer hover:scale-105 flex items-center gap-1 justify-center text-white sm:py-3 py-2.5 rounded-full font-semibold duration-300">
            <ShoppingCart size={18} /> कार्ट
        </button>
    )
}
