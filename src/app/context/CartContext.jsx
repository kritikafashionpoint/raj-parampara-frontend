"use client";

import { createContext, useEffect, useState } from "react";
import { addToCart, clearCart, getCart, removeFromCart, updateQuantity } from "../utils/cart";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);


    const addItem = (product) => {
        const updatedCart = addToCart(product);
        setCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = removeFromCart(id);
        setCart(updatedCart);
    };

    const changeQuantity = (id, quantity) => {
        const updatedCart = updateQuantity(id, quantity);
        setCart(updatedCart);
    };

    const clear_cart = () => {
        clearCart();
        setCart([]);
    };

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                changeQuantity,
                clear_cart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}