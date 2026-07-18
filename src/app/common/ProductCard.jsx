'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BuyNowButton from './BuyNowButton'
import AddtoCartButton from './AddtoCartButton'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function ProductCard({ item, index }) {

    const { addItem } = useContext(CartContext);

    const handleAddToCart = () => {
        addItem({
            id: item.id,
            title: item.title,
            price: item.price,
            oldPrice: item.oldPrice,
        });
    };


    return (
        <div
            key={index}
            className="bg-white border-[0.5px] border-gray-100 sm:rounded-2xl overflow-hidden sm:shadow-sm hover:shadow-xl duration-300 group cursor-pointer"
        >

            {/* Image */}
            <Link href={`/product/${item.title}`}>
                <div className="overflow-hidden relative">

                    <img
                        src="/token/token.png"
                        alt={item.title}
                        className="w-full lg:h-66 md:h-60 sm:h-60 h-44 object-cover group-hover:scale-105 duration-500"
                    />

                    <span className="absolute top-0 right-0 bg-linear-to-t from-red-900 to-red-500 text-white text-xs px-3 py-1 ">
                        Save 20%
                    </span>

                </div>
            </Link>

            {/* Content */}
            <div className="p-4">

                <h3 className="font-semibold lg:text-xl text-base text-amber-900 lg:line-clamp-2 line-clamp-2">
                    {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-green-600">
                        {item.price}
                    </span>

                    <span className="text-gray-400 line-through text-sm">
                        {item.oldPrice}
                    </span>
                </div>

                {/* Rating */}
                {/* <div className="flex items-center mt-3 text-yellow-500 text-sm">
                                    ★★★★★
                                    <span className="text-gray-500 ml-2">
                                        (245)
                                    </span>
                                </div> */}

                {/* Button */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
                    <AddtoCartButton onClick={() => handleAddToCart(item)} />
                    <BuyNowButton />
                </div>

            </div>

        </div>

    )
}
