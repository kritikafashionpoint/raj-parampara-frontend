"use client";

import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import Image from "next/image";

export default function HeroSection_AU() {



    return (
        <section className="bg-[#02255A] w-full min-h-[90vh]">

            <div className="max-w-[1420] mx-auto py-20 lg:px-6 px-4 grid lg:grid-cols-2 gap-12 items-center">

                <div>

                    <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-800">
                        हमारी कहानी
                    </span>

                    <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
                        परंपरा को
                        <span className="text-amber-300">
                            {" "}नई पहचान{" "}
                        </span>
                        देने का प्रयास
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-gray-300">
                        राज परंपरा की शुरुआत एक सरल विचार से हुई—राजस्थान की समृद्ध
                        कला, संस्कृति और हस्तनिर्मित उत्पादों को एक ऐसे मंच पर लाना,
                        जहाँ स्थानीय कारीगरों की मेहनत और परंपरा को उचित पहचान मिल सके।
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5 mt-10">

                        <div className="rounded-3xl border border-[#E8DCC7] bg-[#FFFBF5] p-5">
                            <h3 className="text-3xl font-bold text-amber-700">
                                100%
                            </h3>

                            <p className="mt-2 text-[#2D1B12] font-medium">
                                प्रामाणिक राजस्थानी उत्पाद
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#E8DCC7] bg-[#FFFBF5] p-5">
                            <h3 className="text-3xl font-bold text-amber-700">
                                स्थानीय
                            </h3>

                            <p className="mt-2 text-[#2D1B12] font-medium">
                                कारीगरों का समर्थन
                            </p>
                        </div>

                    </div>

                </div>

                <div className="">
                    <img
                        src="/about/b4.png"
                        alt="राज परंपरा"
                        className="w-full h-[450] rounded-[20] object-cover object-center shadow-xl"
                    />
                </div>

            </div>



        </section>
    );
}