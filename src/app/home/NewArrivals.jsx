import React from "react";
import ProductCard from "../common/ProductCard";

export const products = [
    {
        id: 1,
        title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
        price: 799,
        oldPrice: 999,
    },
    {
        id: 2,
        title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
        price: 1299,
        oldPrice: 1699,
    },
    {
        id: 3,
        title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
        price: 1999,
        oldPrice: 2499,
    },
    {
        id: 4,
        title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
        price: 899,
        oldPrice: 1199,
    },
    {
        id: 5,
        title: "पारंपरिक राजस्थानी आर्टिफिशियल ज्वेलरी संग्रह",
        price: 599,
        oldPrice: 799,
    },
    {
        id: 6,
        title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
        price: 799,
        oldPrice: 999,
    },
    {
        id: 7,
        title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
        price: 1299,
        oldPrice: 1699,
    },
    {
        id: 8,
        title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
        price: 1999,
        oldPrice: 2499,
    },
    {
        id: 9,
        title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
        price: 899,
        oldPrice: 1199,
    },
    {
        id: 10,
        title: "पारंपरिक राजस्थानी आर्टिफिशियल ज्वेलरी संग्रह",
        price: 599,
        oldPrice: 799,
    },
    {
        id: 11,
        title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
        price: 799,
        oldPrice: 999,
    },
    {
        id: 12,
        title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
        price: 1299,
        oldPrice: 1699,
    },
    {
        id: 13,
        title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
        price: 1999,
        oldPrice: 2499,
    },
    {
        id: 14,
        title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
        price: 899,
        oldPrice: 1199,
    },
    {
        id: 15,
        title: "पारंपरिक राजस्थानी आर्टिफिशियल ज्वेलरी संग्रह",
        price: 599,
        oldPrice: 799,
    },
    {
        id: 16,
        title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
        price: 799,
        oldPrice: 999,
    },
    {
        id: 17,
        title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
        price: 1299,
        oldPrice: 1699,
    },
    {
        id: 18,
        title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
        price: 1999,
        oldPrice: 2499,
    },
    {
        id: 19,
        title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
        price: 899,
        oldPrice: 1199,
    },
    {
        id: 20,
        title: "पारंपरिक राजस्थानी आर्टिफिशियल ज्वेलरी संग्रह",
        price: 599,
        oldPrice: 799,
    },
];

export default function NewArrivals() {

    return (
        <section className="w-full pt-10 bg-[#fffaf5]">
            <div className="max-w-[1420] mx-auto ">

                { /* Heading */}
                <div className="text-center mb-10 lg:px-6 px-4">
                    <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium">
                        नया राजस्थानी संग्रह
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-amber-900 mt-4">
                        नवीनतम राज परंपरा संग्रह
                    </h2>

                    <p className="text-gray-600 mt-3 lg:text-lg">
                        राजस्थान की संस्कृति से प्रेरित नए और खास उत्पादों की खोज करें
                    </p>
                </div>

                {/* Products */}
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-5">

                    {products.map((item, index) => (
                        <ProductCard key={index} item={item} index={index} />
                    ))}

                </div>

                {/* View All */}
                <div className="text-end mt-12 pb-5 xl:mr-0 mr-4">
                    <button className="bg-linear-to-t from-green-900 to-green-500 hover:scale-105 cursor-pointer text-white px-8 sm:py-3 py-2 rounded-full font-semibold duration-300 shadow-lg">
                        और देखें →
                    </button>
                </div>

            </div>
        </section>
    );
}