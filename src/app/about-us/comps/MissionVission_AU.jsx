"use client";

import {
    HandHelping,
    Globe2,
    BadgeCheck,
} from "lucide-react";

export default function MissionVission_AU() {
    const data = [
        {
            icon: <HandHelping size={34} />,
            title: "स्थानीय कारीगरों का समर्थन",
            description:
                "राज परंपरा राजस्थान के कारीगरों और छोटे व्यवसायों को डिजिटल पहचान देकर उनके उत्पादों को अधिक ग्राहकों तक पहुँचाने का प्रयास करता है।",
        },
        {
            icon: <BadgeCheck size={34} />,
            title: "प्रामाणिक उत्पाद",
            description:
                "हम ऐसे उत्पादों को प्राथमिकता देते हैं जो राजस्थान की पारंपरिक कला, संस्कृति और शिल्पकला की वास्तविक पहचान को दर्शाते हैं।",
        },
        {
            icon: <Globe2 size={34} />,
            title: "राजस्थान से विश्व तक",
            description:
                "हमारा उद्देश्य राजस्थान की सांस्कृतिक विरासत को केवल भारत ही नहीं बल्कि दुनिया के हर कोने तक पहुँचाना है।",
        },
    ];

    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-[1420] mx-auto px-4 lg:px-6">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="inline-flex rounded-full bg-amber-100 text-amber-800 px-5 py-2 text-sm font-semibold">
                        हमारा उद्देश्य
                    </span>

                    <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#2D1B12]">
                        परंपरा को भविष्य से जोड़ना
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-[#6B5B4D]">
                        राज परंपरा केवल एक ऑनलाइन मार्केटप्लेस नहीं,
                        बल्कि राजस्थान की कला, संस्कृति और स्थानीय
                        कारीगरों को नई पहचान देने का एक प्रयास है।
                    </p>

                </div>


                <div className="grid lg:grid-cols-3 gap-8 mt-16">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-[36px] border border-[#E8DCC7] bg-[#FFFBF5] p-10 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300"
                        >

                            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                                {item.icon}
                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-[#2D1B12]">
                                {item.title}
                            </h3>

                            <p className="mt-5 text-[#6B5B4D] leading-8">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}