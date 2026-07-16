"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "क्या राज परंपरा पर उपलब्ध सभी उत्पाद हस्तनिर्मित हैं?",
        answer:
            "राज परंपरा पर अधिकांश उत्पाद राजस्थान के स्थानीय कारीगरों द्वारा हस्तनिर्मित या पारंपरिक तकनीकों से तैयार किए जाते हैं। प्रत्येक उत्पाद के विवरण में उसकी निर्माण प्रक्रिया और विशेष जानकारी दी जाती है।",
    },
    {
        question: "क्या पूरे भारत में डिलीवरी उपलब्ध है?",
        answer:
            "हाँ, राज परंपरा भारत के अधिकांश पिन कोड पर डिलीवरी उपलब्ध कराता है। डिलीवरी का समय आपके स्थान और विक्रेता के अनुसार अलग-अलग हो सकता है।",
    },
    {
        question: "क्या उत्पादों की गुणवत्ता की जाँच की जाती है?",
        answer:
            "हाँ, हम केवल विश्वसनीय विक्रेताओं और स्थानीय कारीगरों के साथ कार्य करते हैं ताकि ग्राहकों तक उच्च गुणवत्ता वाले और प्रामाणिक उत्पाद पहुँच सकें।",
    },
    {
        question: "भुगतान के कौन-कौन से विकल्प उपलब्ध हैं?",
        answer:
            "आप UPI, डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग और अन्य सुरक्षित ऑनलाइन भुगतान माध्यमों से भुगतान कर सकते हैं।",
    },
    {
        question: "यदि उत्पाद पसंद न आए तो क्या मैं उसे वापस कर सकता हूँ?",
        answer:
            "रिटर्न और रिफंड की सुविधा संबंधित विक्रेता की नीति के अनुसार उपलब्ध होती है। कृपया खरीदारी से पहले उत्पाद की रिटर्न नीति अवश्य पढ़ें।",
    },
    {
        question: "क्या मैं राज परंपरा पर अपने उत्पाद बेच सकता हूँ?",
        answer:
            "हाँ। यदि आप राजस्थान के कारीगर, निर्माता या विक्रेता हैं, तो 'विक्रेता बनें' विकल्प के माध्यम से पंजीकरण करके अपने उत्पाद पूरे भारत के ग्राहकों तक पहुँचा सकते हैं।",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState(0);

    return (
        <section className="w-full bg-[#FFFBF5] py-20">
            <div className="max-w-[900] mx-auto px-4">

                <div className="text-center mb-12">

                    <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                        अक्सर पूछे जाने वाले प्रश्न
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-[#2D1B12]">
                        आपके सभी सवालों के जवाब
                    </h2>

                    <p className="mt-4 text-[#6B5B4D] leading-8">
                        खरीदारी, डिलीवरी, भुगतान, रिटर्न और विक्रेता पंजीकरण
                        से जुड़े सामान्य प्रश्न यहाँ देखें।
                    </p>

                </div>

                <div className="space-y-4">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-[#E8DCC7] bg-white overflow-hidden"
                        >

                            <button
                                onClick={() =>
                                    setOpen(open === index ? -1 : index)
                                }
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <h3 className="text-lg font-semibold text-[#2D1B12] pr-6">
                                    {faq.question}
                                </h3>

                                <ChevronDown
                                    className={`transition-transform duration-300 ${open === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${open === index
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 text-[#6B5B4D] leading-8">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}