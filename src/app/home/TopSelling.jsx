import React from "react";

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
                        <div
                            key={index}
                            className="bg-white sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl duration-300 group cursor-pointer"
                        >

                            {/* Image */}
                            <div className="overflow-hidden relative pt-6">

                                <img
                                    src="/token/token.png"
                                    alt={item.title}
                                    className="w-full lg:h-66 md:h-60 h-44 object-cover group-hover:scale-105 duration-500"
                                />

                                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                                    20% छूट
                                </span>

                            </div>

                            {/* Content */}
                            <div className="p-4">

                                <h3 className="font-semibold lg:text-xl text-base text-amber-900 lg:line-clamp-2 line-clamp-3">
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
                                    <button className="sm:text-md text-sm w-full bg-white text-black border border-gray-300 sm:py-3 py-2 rounded-full font-semibold duration-300">
                                        विवरण
                                    </button>
                                    <button className="sm:text-md text-sm w-full bg-amber-700 hover:bg-amber-800 text-white sm:py-3 py-2 rounded-full font-semibold duration-300">
                                        अभी खरीदें
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* View All */}
                <div className="text-end mt-12 lg:px-6 px-4">
                    <button className="bg-amber-700 hover:bg-amber-900 text-white px-8 sm:py-3 py-2 rounded-full font-semibold duration-300">
                        और देखें →
                    </button>
                </div>

            </div>
        </section>
    );
}