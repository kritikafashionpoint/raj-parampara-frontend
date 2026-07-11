import Image from "next/image";
import React from "react";

export default function Shopbycategory() {
    return (
        <section className="w-full lg:py-10 py-2">
            <div className="max-w-[1420] mx-auto lg:px-6 px-4">

                <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-amber-900 mt-4 text-center lg:mb-10 mb-8">
                    राजस्थानी संग्रह
                </h2>

                <div className="w-full flex lg:gap-8 gap-5 pb-8 overflow-x-auto custom-scrollbar">

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
                        <div
                            key={index}
                            className="lg:w-28 lg:h-28 w-20 h-20 border border-gray-300 relative rounded-full shrink-0 group overflow-hidden"
                        >
                            <Image
                                src="/token/token.png"
                                alt="Category"
                                fill
                                className="w-full h-full  group-hover:scale-105 duration-300 cursor-pointer object-cover rounded-full"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}