import React from "react";
import {
    FiShield,
    FiTruck,
    FiAward,
    FiRefreshCcw,
    FiUsers,
    FiPackage,
} from "react-icons/fi";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <FiAward />,
            title: "100% हस्तनिर्मित प्रोडक्ट",
            desc: "राजस्थान के कुशल कारीगरों द्वारा प्रेम और परंपरा के साथ तैयार किए गए असली हस्तनिर्मित प्रोडक्ट।",
        },
        {
            icon: <FiUsers />,
            title: "विश्वसनीय विक्रेता",
            desc: "केवल सत्यापित एवं भरोसेमंद राजस्थानी विक्रेताओं से सीधे खरीदारी करें।",
        },
        {
            icon: <FiShield />,
            title: "सुरक्षित भुगतान",
            desc: "आपके प्रत्येक लेन-देन के लिए आधुनिक एवं सुरक्षित भुगतान प्रणाली।",
        },
        {
            icon: <FiTruck />,
            title: "पूरे भारत में डिलीवरी",
            desc: "राजस्थान की संस्कृति अब देश के हर कोने तक तेज़ और सुरक्षित डिलीवरी के साथ।",
        },
        {
            icon: <FiRefreshCcw />,
            title: "आसान वापसी",
            desc: "निर्धारित नियमों के अनुसार सरल एवं परेशानी मुक्त वापसी की सुविधा।",
        },
        {
            icon: <FiPackage />,
            title: "गुणवत्ता की गारंटी",
            desc: "हर प्रोडक्ट्सगुणवत्ता जांच के बाद ही आपके घर तक पहुँचाया जाता है।",
        },
    ];

    return (
        <section className="w-full lg:py-16 py-10 bg-amber-50">
            <div className="max-w-[1420px] mx-auto lg:px-6 px-4">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">

                    <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                        हमारी विशेषताएँ
                    </span>

                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-amber-900 mt-5">
                        क्यों चुनें राज परंपरा?
                    </h2>

                    <p className="text-gray-600 mt-5 leading-8">
                        हम केवल प्रोडक्ट्सनहीं बेचते, बल्कि राजस्थान की समृद्ध
                        संस्कृति, कला और परंपरा को प्रत्येक ग्राहक तक
                        विश्वसनीयता एवं गुणवत्ता के साथ पहुँचाने का प्रयास करते हैं।
                    </p>

                </div>

                {/* Cards */}

                <div className="flex w-full overflow-x-scroll custom-scrollbar gap-6 mt-12">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[270] lg:mb-10 mb-5 group bg-white rounded-2xl p-8 border border-amber-100 hover:border-amber-300 hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl"
                        >

                            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 text-3xl flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-amber-900 mt-6">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-4 leading-7">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}