import React from "react";
import ProductCard from "../common/ProductCard";

export default function TopSelling() {
    const products = [
        {
            title: "हस्तनिर्मित राजस्थानी पारंपरिक लेदर मोजड़ी",
            price: "₹799",
            oldPrice: "₹999",
        },
        {
            title: "हाथ से बनी प्रीमियम राजस्थानी ब्लू पॉटरी सजावटी कला",
            price: "₹1,299",
            oldPrice: "₹1,699",
        },
        {
            title: "पारंपरिक राजपूती डिज़ाइनर साड़ी विशेष संग्रह",
            price: "₹1,999",
            oldPrice: "₹2,499",
        },
        {
            title: "राजस्थानी हस्तनिर्मित एथनिक महिलाओं का बैग",
            price: "₹899",
            oldPrice: "₹1,199",
        },
        {
            title: "पारंपरिक राजस्थानी कृत्रिम आभूषण संग्रह",
            price: "₹599",
            oldPrice: "₹799",
        }
    ];

    return (
        <section className="w-full pt-10 bg-[#fffaf5]">
            <div className="max-w-[1420] mx-auto ">

                {/* Heading */}
                <div className="text-center mb-10 lg:px-6 px-4">
                    <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium">
                        सबसे लोकप्रिय
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-amber-900 mt-4">
                        सर्वाधिक बिकने वाले उत्पाद
                    </h2>

                    <p className="text-gray-600 mt-3 lg:text-lg">
                        राजस्थान की सबसे पसंदीदा पारंपरिक वस्तुओं का विशेष संग्रह
                    </p>
                </div>

                {/* Products */}
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-5">

                    {products.map((item, index) => (
                        <ProductCard key={index} item={item} index={index} />
                    ))}

                </div>

                {/* View All */}
                <div className="text-end mt-12 pb-5">
                    <button className="bg-linear-to-t from-green-900 to-green-500 hover:scale-105 cursor-pointer text-white px-8 sm:py-3 py-2 rounded-full font-semibold duration-300 shadow-lg">
                        और देखें →
                    </button>
                </div>

            </div>
        </section>
    );
}