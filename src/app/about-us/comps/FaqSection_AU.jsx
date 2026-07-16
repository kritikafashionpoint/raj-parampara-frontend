"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "राज परंपरा क्या है?",
        answer:
            "राज परंपरा एक ऑनलाइन मार्केटप्लेस है, जिसका उद्देश्य राजस्थान की समृद्ध कला, संस्कृति, हस्तशिल्प, पारंपरिक आभूषण, वस्त्र और अन्य स्थानीय उत्पादों को देश और दुनिया तक पहुँचाना है।",
    },
    {
        question: "राज परंपरा की शुरुआत क्यों की गई?",
        answer:
            "राजस्थान के स्थानीय कारीगरों, छोटे व्यवसायों और पारंपरिक विक्रेताओं को डिजिटल पहचान देने तथा उनकी कला को अधिक ग्राहकों तक पहुँचाने के उद्देश्य से राज परंपरा की शुरुआत की गई।",
    },
    {
        question: "क्या राज परंपरा स्वयं उत्पाद बनाती है?",
        answer:
            "नहीं। राज परंपरा एक डिजिटल मंच है, जहाँ राजस्थान के कारीगर, निर्माता और विक्रेता अपने प्रामाणिक उत्पाद ग्राहकों तक पहुँचा सकते हैं।",
    },
    {
        question: "राज परंपरा की सबसे बड़ी विशेषता क्या है?",
        answer:
            "हम केवल उत्पाद नहीं बेचते, बल्कि राजस्थान की सांस्कृतिक विरासत, पारंपरिक शिल्पकला और स्थानीय कारीगरों की मेहनत को सम्मान देते हुए उन्हें एक विश्वसनीय डिजिटल मंच प्रदान करते हैं।",
    },
    {
        question: "क्या कोई भी विक्रेता राज परंपरा से जुड़ सकता है?",
        answer:
            "हाँ। यदि आप राजस्थान के कारीगर, निर्माता या पारंपरिक उत्पादों के विक्रेता हैं, तो पंजीकरण करके अपने उत्पाद पूरे भारत के ग्राहकों तक पहुँचा सकते हैं।",
    },
    {
        question: "राज परंपरा का उद्देश्य क्या है?",
        answer:
            "हमारा उद्देश्य राजस्थान की परंपरा, कला और हस्तनिर्मित उत्पादों को आधुनिक तकनीक के माध्यम से नई पहचान देना तथा स्थानीय व्यवसायों को डिजिटल रूप से सशक्त बनाना है।",
    },
];

export default function FaqSection_AU() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-[#FFFBF5] py-20">
            <div className="max-w-[1000] mx-auto px-4 lg:px-6">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-14">

                    <span className="inline-flex items-center rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-800">
                        अक्सर पूछे जाने वाले प्रश्न
                    </span>

                    <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#2D1B12]">
                        आपके प्रश्नों के उत्तर
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-[#6B5B4D]">
                        राज परंपरा के उद्देश्य, कार्यप्रणाली और हमारे साथ जुड़ने
                        से संबंधित सामान्य प्रश्नों के उत्तर यहाँ दिए गए हैं।
                    </p>

                </div>

                {/* FAQ */}
                <div className="space-y-5">

                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-[28px] border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "border-amber-300 bg-white shadow-xl"
                                        : "border-[#E8DCC7] bg-white"
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? -1 : index)
                                    }
                                    className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left"
                                >
                                    <h3 className="text-lg lg:text-xl font-semibold text-[#2D1B12]">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown
                                        size={24}
                                        className={`text-amber-700 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-7 pb-7 border-t border-[#F3E8D5]">
                                            <p className="pt-5 text-[#6B5B4D] leading-8">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* Bottom Note */}
                <div className="mt-14 rounded-[30px] bg-linear-to-r from-amber-50 to-white border border-[#E8DCC7] p-8 text-center">

                    <h3 className="text-2xl font-bold text-[#2D1B12]">
                        आपका प्रश्न यहाँ नहीं मिला?
                    </h3>

                    <p className="mt-4 text-[#6B5B4D] leading-8">
                        हमारी टीम आपकी सहायता के लिए हमेशा तैयार है। यदि आपके
                        मन में कोई अन्य प्रश्न है, तो बेझिझक हमसे संपर्क करें।
                    </p>

                    <button className="mt-8 rounded-full bg-linear-to-r from-amber-800 to-amber-500 px-8 py-3 font-semibold text-white hover:opacity-90 transition">
                        हमसे संपर्क करें
                    </button>

                </div>

            </div>
        </section>
    );
}