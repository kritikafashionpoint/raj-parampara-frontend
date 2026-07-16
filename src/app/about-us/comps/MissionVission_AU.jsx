"use client";

import { Target, Eye, HeartHandshake, Landmark } from "lucide-react";

export default function MissionVision_AU() {
    const cards = [
        {
            icon: Target,
            title: "हमारा मिशन",
            description:
                "राजस्थान के स्थानीय कारीगरों, शिल्पकारों और छोटे व्यापारियों को एक भरोसेमंद डिजिटल मंच प्रदान करना, जहाँ वे अपने उत्पाद पूरे भारत और दुनिया तक पहुँचा सकें।",
        },
        {
            icon: Eye,
            title: "हमारी सोच",
            description:
                "हर ग्राहक तक प्रामाणिक राजस्थानी उत्पाद पहुँचाना और हर खरीदारी के माध्यम से राजस्थान की कला, संस्कृति और परंपराओं को नई पहचान देना।",
        },
        {
            icon: HeartHandshake,
            title: "हमारी प्रतिबद्धता",
            description:
                "गुणवत्ता, पारदर्शिता और विश्वास के साथ ऐसा अनुभव देना जहाँ ग्राहक निश्चिंत होकर खरीदारी करें और विक्रेता गर्व के साथ अपने उत्पाद बेच सकें।",
        },
        {
            icon: Landmark,
            title: "हमारा भविष्य",
            description:
                "राज परंपरा को राजस्थान के पारंपरिक उत्पादों के लिए सबसे विश्वसनीय ऑनलाइन मार्केटप्लेस बनाना, जिससे स्थानीय कला आने वाली पीढ़ियों तक सुरक्षित रह सके।",
        },
    ];

    return (
        <section className="bg-linear-to-b from-amber-50 to-white py-10">
            <div className="mx-auto max-w-[1420] lg:px-6 px-4">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                        हमारा उद्देश्य
                    </span>

                    <h2 className="mt-6 text-4xl leading-normal font-bold text-[#2D1B12] md:text-5xl">
                        विरासत को संजोना,
                        <span className="block text-amber-700">
                            भविष्य से जोड़ना
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-gray-600">
                        राज परंपरा का हर कदम राजस्थान की संस्कृति,
                        हस्तशिल्प और स्थानीय व्यापार को नई पहचान देने
                        की दिशा में बढ़ाया गया है। हमारा उद्देश्य केवल
                        उत्पाद बेचना नहीं, बल्कि उन कहानियों को दुनिया
                        तक पहुँचाना है जो हर कारीगर की मेहनत और
                        परंपरा में बसती हैं।
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-16 grid gap-8 md:grid-cols-4">

                    {cards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-600 text-white">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-[#2D1B12]">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-8 text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}