"use client";

import {
    ShieldCheck,
    BadgeCheck,
    Truck,
    Store,
    HandHeart,
    CreditCard,
} from "lucide-react";

export default function WhyChooseUs_AU() {
    const features = [
        {
            icon: BadgeCheck,
            title: "प्रामाणिक राजस्थानी उत्पाद",
            description:
                "हर उत्पाद राजस्थान की समृद्ध संस्कृति, कला और परंपरा को दर्शाता है। हम ऐसे उत्पादों को प्राथमिकता देते हैं जो स्थानीय पहचान और शिल्पकला को जीवित रखते हैं।",
        },
        {
            icon: ShieldCheck,
            title: "सत्यापित विक्रेता",
            description:
                "प्रत्येक विक्रेता की जानकारी का सत्यापन किया जाता है ताकि ग्राहकों को विश्वसनीय और सुरक्षित खरीदारी का अनुभव मिल सके।",
        },
        {
            icon: HandHeart,
            title: "स्थानीय कारीगरों का समर्थन",
            description:
                "आपकी हर खरीदारी सीधे राजस्थान के कारीगरों और छोटे व्यापारियों को आगे बढ़ाने में योगदान देती है।",
        },
        {
            icon: CreditCard,
            title: "सुरक्षित भुगतान",
            description:
                "सभी ऑनलाइन भुगतान सुरक्षित पेमेंट गेटवे के माध्यम से किए जाते हैं, जिससे आपकी लेन-देन पूरी तरह सुरक्षित रहती है।",
        },
        {
            icon: Truck,
            title: "पूरे भारत में डिलीवरी",
            description:
                "राजस्थान की पारंपरिक वस्तुएँ अब देश के विभिन्न हिस्सों तक आसानी से पहुँचाई जाती हैं।",
        },
        {
            icon: Store,
            title: "एक ही स्थान पर सब कुछ",
            description:
                "आभूषण, मोजड़ी, वस्त्र, हस्तशिल्प, सजावटी सामान और राजस्थान की अनेक पारंपरिक श्रेणियाँ एक ही मंच पर उपलब्ध हैं।",
        },
    ];

    return (
        <section className="bg-white py-10">
            <div className="mx-auto max-w-[1420] px-4 lg:px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                        क्यों चुनें राज परंपरा
                    </span>

                    <h2 className="mt-6 text-4xl leading-normal font-bold text-[#2D1B12] md:text-5xl">
                        भरोसे, गुणवत्ता और
                        <span className="block text-amber-700">
                            राजस्थान की असली पहचान के साथ
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-gray-600">
                        राज परंपरा केवल उत्पादों का संग्रह नहीं है,
                        बल्कि राजस्थान की संस्कृति और स्थानीय कारीगरों
                        से जुड़ने का एक भरोसेमंद माध्यम है।
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-3xl border border-amber-100 bg-amber-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:bg-white hover:shadow-xl"
                            >
                                <div className="flex animate-pulse group-hover:animate-none h-16 w-16 items-center justify-center rounded-2xl bg-amber-600 text-white transition group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-[#2D1B12]">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-8 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}