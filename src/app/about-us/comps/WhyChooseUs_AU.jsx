import Image from 'next/image'
import React from 'react'

export default function WhyChooseUs_AU() {
    const data = [
        {
            src: "/about/a1.png",
            heading: "राजस्थान की विरासत, अब हर घर तक",
            description:
                "राज परंपरा राजस्थान की समृद्ध संस्कृति, हस्तशिल्प, आभूषण, वस्त्र और पारंपरिक कला को एक विश्वसनीय डिजिटल मंच के माध्यम से देश और दुनिया तक पहुँचाने का प्रयास है।",
        },
        {
            src: "/about/a2.png",
            heading: "स्थानीय कारीगरों को पहचान",
            description:
                "हमारा उद्देश्य राजस्थान के कारीगरों, छोटे व्यवसायों और पारंपरिक विक्रेताओं को ऑनलाइन बाज़ार से जोड़कर उनके उत्पादों को अधिक ग्राहकों तक पहुँचाना है।",
        },
        {
            src: "/about/a3.png",
            heading: "प्रामाणिक उत्पाद, भरोसेमंद खरीदारी",
            description:
                "राज परंपरा पर उपलब्ध प्रत्येक उत्पाद गुणवत्ता, प्रामाणिकता और पारंपरिक शिल्पकला को ध्यान में रखते हुए चुना जाता है, ताकि ग्राहकों को एक उत्कृष्ट खरीदारी अनुभव मिल सके।",
        },
        {
            src: "/about/a4.png",
            heading: "राजस्थान से विश्व तक",
            description:
                "हम केवल उत्पाद नहीं बेचते, बल्कि राजस्थान की कला, संस्कृति और परंपराओं को दुनिया के हर कोने तक पहुँचाने का संकल्प लेकर आगे बढ़ रहे हैं।",
        },
    ]
    return (
        <div className='py-10'>
            <div className="text-center max-w-3xl mx-auto mb-5">

                <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-800">
                    हमारी पहचान
                </span>

                <h1 className="mt-5 text-4xl md:text-5xl font-bold text-[#2D1B12]">
                    राज परंपरा की कहानी
                </h1>

                <p className="mt-5 text-lg leading-8 text-[#6B5B4D]">
                    राजस्थान की संस्कृति, कला और हस्तशिल्प को
                    डिजिटल माध्यम से देश और दुनिया तक पहुँचाने का
                    हमारा एक छोटा सा प्रयास।
                </p>

            </div>
            <div className="max-w-[1420] mx-auto lg:px-6 px-4 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                {data.map((item, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-[30px] bg-white border border-[#E8DCC7] hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-500"
                    >

                        {/* Image */}
                        <div className="relative h-[300] overflow-hidden">

                            <Image
                                src={item.src}
                                alt={item.heading}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                        </div>

                        {/* Content */}
                        <div className="p-7">

                            <h2 className="text-2xl font-bold text-[#2D1B12] leading-snug">
                                {item.heading}
                            </h2>

                            <p className="mt-4 text-[#6B5B4D] leading-8">
                                {item.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}
