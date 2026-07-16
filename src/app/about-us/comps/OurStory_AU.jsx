"use client";

import { Lightbulb, Handshake, Globe2 } from "lucide-react";

export default function OurStory_AU() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
                        हमारी यात्रा
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-[#2D1B12] md:text-5xl">
                        एक विचार से
                        <span className="block text-amber-700">
                            एक विश्वास तक
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-gray-600">
                        राज परंपरा की शुरुआत केवल एक व्यवसाय बनाने के उद्देश्य
                        से नहीं हुई, बल्कि राजस्थान की समृद्ध संस्कृति,
                        हस्तशिल्प और स्थानीय कारीगरों को एक ऐसा मंच देने के
                        विचार से हुई जहाँ उनकी कला को सही पहचान और सम्मान
                        मिल सके।
                    </p>

                </div>

                {/* Story */}
                <div className="mt-20 grid gap-10 lg:grid-cols-3">

                    <div className="rounded-3xl border border-amber-100 bg-amber-50 p-8">

                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600 text-white">
                            <Lightbulb size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-[#2D1B12]">
                            एक विचार
                        </h3>

                        <p className="mt-4 leading-8 text-gray-600">
                            हमने देखा कि राजस्थान के अनेक प्रतिभाशाली
                            कारीगर और छोटे व्यापारी उत्कृष्ट उत्पाद बनाते
                            हैं, लेकिन डिजिटल दुनिया तक उनकी पहुँच सीमित
                            होने के कारण उन्हें उचित पहचान और ग्राहक नहीं
                            मिल पाते।
                        </p>

                    </div>

                    <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-lg">

                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600 text-white">
                            <Handshake size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-[#2D1B12]">
                            एक संकल्प
                        </h3>

                        <p className="mt-4 leading-8 text-gray-600">
                            राज परंपरा का उद्देश्य एक ऐसा भरोसेमंद मंच बनाना
                            है जहाँ कारीगर, व्यापारी और ग्राहक सीधे जुड़
                            सकें। बिना किसी बिचौलिये के, हर कलाकार अपनी
                            मेहनत का उचित मूल्य प्राप्त कर सके।
                        </p>

                    </div>

                    <div className="rounded-3xl border border-amber-100 bg-amber-50 p-8">

                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-600 text-white">
                            <Globe2 size={28} />
                        </div>

                        <h3 className="text-2xl font-bold text-[#2D1B12]">
                            हमारा लक्ष्य
                        </h3>

                        <p className="mt-4 leading-8 text-gray-600">
                            हमारा सपना है कि राजस्थान की पारंपरिक कला,
                            हस्तशिल्प, वस्त्र, आभूषण और संस्कृति भारत ही
                            नहीं बल्कि पूरी दुनिया तक पहुँचे, ताकि हर
                            खरीदारी हमारी विरासत को आगे बढ़ाने का माध्यम
                            बने।
                        </p>

                    </div>

                </div>

                {/* Bottom Quote */}

                <div className="mt-20 rounded-[32] bg-[#2D1B12] px-10 py-14 text-center">

                    <h3 className="text-3xl font-bold text-white">
                        "हर उत्पाद के पीछे एक कारीगर की मेहनत,
                        एक परिवार का सपना और राजस्थान की समृद्ध
                        विरासत छिपी होती है।"
                    </h3>

                </div>

            </div>
        </section>
    );
}