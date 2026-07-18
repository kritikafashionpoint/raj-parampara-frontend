'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BuyNowButton from './BuyNowButton'
import AddtoCartButton from './AddtoCartButton'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { isInCart } from '../utils/cart'
import Swal from 'sweetalert2'

export default function ProductCard({ item, index }) {

    const { addItem } = useContext(CartContext);

    const [loading, setLoading] = useState(false)
    const [alreadyAdded, setAlreadyAdded] = useState(false);

    useEffect(() => {
        setAlreadyAdded(isInCart(item.id));
    }, [item.id]);

    const handleAddToCart = async () => {

        try {
            setLoading(true);

            addItem({
                id: item.id,
                title: item.title,
                price: item.price,
                oldPrice: item.oldPrice,
            });

            setAlreadyAdded(true);

            await Swal.fire({
                icon: "success",
                title: "Added to Cart",
                timer: 1200,
                showConfirmButton: false,
            });
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
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

                        <span className="absolute rounded-b top-0 right-0 bg-linear-to-t from-red-900 to-red-500 text-white text-xs px-4 py-1.5 ">
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
                        <span className="sm:text-2xl text-xl font-bold text-green-600">
                            ₹{item.price}
                        </span>

                        <span className="text-gray-400 line-through sm:text-md text-sm">
                            ₹{item.oldPrice}
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
                        <AddtoCartButton alreadyAdded={alreadyAdded} loading={loading} onClick={() => handleAddToCart(item)} />
                        <BuyNowButton />
                    </div>

                </div>

            </div>
        </>


    )
}
