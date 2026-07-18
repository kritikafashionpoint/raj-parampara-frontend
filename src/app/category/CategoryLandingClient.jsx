import React from 'react'
import CategoryCard from '../common/CategoryCard';
import Link from 'next/link';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { FaPhone } from 'react-icons/fa';

export default function CategoryLandingClient() {

    const categories = [
        {
            id: 1,
            title: "राजस्थानी आभूषण",
            slug: "rajasthani-jewellery",
        },
        {
            id: 2,
            title: "मोजड़ी",
            slug: "mojari",
        },
        {
            id: 3,
            title: "हस्तशिल्प",
            slug: "handicrafts",
        },
        {
            id: 4,
            title: "ब्लू पॉटरी",
            slug: "blue-pottery",
        },
        {
            id: 5,
            title: "महिला परिधान",
            slug: "women-wear",
        },
        {
            id: 6,
            title: "पुरुष परिधान",
            slug: "men-wear",
        },
        {
            id: 7,
            title: "होम डेकोर",
            slug: "home-decor",
        },
        {
            id: 8,
            title: "लेदर उत्पाद",
            slug: "leather-products",
        },
        {
            id: 9,
            title: "उपहार संग्रह",
            slug: "gift-collection",
        },
        {
            id: 10,
            title: "पारंपरिक कला",
            slug: "traditional-art",
        },
    ];

    return (
        <>

            {/* Categories Grid */}
            <>

                {/* Categories */}
                <section className="bg-[#FFFBF5] py-10">
                    <div className="max-w-[1420] mx-auto px-4 lg:px-6">

                        <div className="flex items-center justify-between mb-10">

                            <div>
                                <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                                    राजस्थान की पारंपरिक विरासत
                                </span>

                                <h2 className="lg:text-5xl md:text-4xl text-2xl mt-4 font-bold text-[#2D1B12]">
                                    सभी श्रेणियाँ
                                </h2>

                                <p className="mt-6 max-w-4xl text-lg leading-9 text-[#6B5B4D]">
                                    राज परंपरा पर राजस्थान के हस्तनिर्मित उत्पादों की
                                    सभी प्रमुख श्रेणियों का संग्रह उपलब्ध है। अपनी
                                    पसंदीदा श्रेणी चुनें और पारंपरिक कला, संस्कृति
                                    एवं उत्कृष्ट शिल्पकारी का अनुभव करें।
                                </p>
                            </div>

                            <span className="hidden md:flex rounded-full text-white border border-[#E8DCC7] px-5 py-2 text-sm font-medium bg-[#2D1B12]">
                                10 श्रेणियाँ
                            </span>

                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 lg:gap-10 sm:gap-5 gap-5 items-center justify-between">

                            {categories.map((item, index) => (
                                <CategoryCard
                                    item={item}
                                    index={index}
                                    key={item.id}
                                />
                            ))}

                        </div>

                    </div>
                </section>
            </>

            {/* Bottom SEO Content */}
            <section className="bg-white py-16">
                <div className="max-w-[1420] mx-auto px-4 lg:px-6">

                    <div className="text-center mb-12">

                        <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                            क्यों चुनें राज परंपरा
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-[#2D1B12]">
                            हर श्रेणी में गुणवत्ता और परंपरा
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                        <div className="rounded-3xl border border-[#E8DCC7] p-7">
                            <div className="text-4xl">🎨</div>

                            <h3 className="mt-5 text-xl font-bold text-[#2D1B12]">
                                हस्तनिर्मित उत्पाद
                            </h3>

                            <p className="mt-3 text-[#6B5B4D] leading-7">
                                अनुभवी राजस्थानी कारीगरों द्वारा तैयार किए गए
                                प्रामाणिक हस्तनिर्मित उत्पाद।
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#E8DCC7] p-7">
                            <div className="text-4xl">🏺</div>

                            <h3 className="mt-5 text-xl font-bold text-[#2D1B12]">
                                सांस्कृतिक विरासत
                            </h3>

                            <p className="mt-3 text-[#6B5B4D] leading-7">
                                राजस्थान की समृद्ध कला, संस्कृति और
                                परंपराओं का अनूठा संग्रह।
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#E8DCC7] p-7">
                            <div className="text-4xl">⭐</div>

                            <h3 className="mt-5 text-xl font-bold text-[#2D1B12]">
                                श्रेष्ठ गुणवत्ता
                            </h3>

                            <p className="mt-3 text-[#6B5B4D] leading-7">
                                हर उत्पाद गुणवत्ता की जाँच के बाद
                                ग्राहकों तक पहुँचाया जाता है।
                            </p>
                        </div>

                        <div className="rounded-3xl border border-[#E8DCC7] p-7">
                            <div className="text-4xl">🤝</div>

                            <h3 className="mt-5 text-xl font-bold text-[#2D1B12]">
                                स्थानीय कारीगर
                            </h3>

                            <p className="mt-3 text-[#6B5B4D] leading-7">
                                प्रत्येक खरीद राजस्थान के स्थानीय
                                शिल्पकारों को सहयोग देती है।
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <BecomeSellerCTA />

        </>
    )
}


export function BecomeSellerCTA() {
    return (
        <section className="py-10 footer-bg ">

            <div className='flex flex-col items-center'>
                <div className="lg:px-6 px-4 relative overflow-hidden">

                    {/* Badge */}
                    <div className='flex justify-center'>
                        <span className="inline-flex items-center rounded-full bg-amber-400/20 border border-amber-400/30 px-4 py-2 text-sm font-semibold text-amber-300 ">
                            राजस्थान के विक्रेताओं के लिए
                        </span>
                    </div>

                    <div className="mt-6 text-center max-w-3xl">

                        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                            अपने हस्तनिर्मित उत्पादों को
                            <span className="text-amber-400">
                                {" "}देश और दुनिया{" "}
                            </span>
                            तक पहुँचाएँ।
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            राज परंपरा के साथ जुड़ें और अपने हस्तशिल्प,
                            आभूषण, मोजड़ी, ब्लू पॉटरी, वस्त्र एवं अन्य
                            पारंपरिक उत्पाद लाखों ग्राहकों तक पहुँचाएँ।
                            आसान पंजीकरण, सुरक्षित भुगतान और विश्वसनीय
                            डिजिटल प्लेटफ़ॉर्म के साथ अपना व्यवसाय बढ़ाएँ।
                        </p>

                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex justify-center flex-wrap gap-4">

                        <Link
                            href="/seller-onboarding"
                            className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-semibold text-[#2D1B12] transition hover:bg-amber-300"
                        >
                            <HiOutlineBuildingStorefront size={22} />
                            विक्रेता बनें
                        </Link>

                        <Link
                            href="/contact-us"
                            className="inline-flex gap-3 items-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#2D1B12]"
                        >
                            <FaPhone className='rotate-90' size={22} /> संपर्क करें
                        </Link>

                    </div>

                </div>
            </div>

        </section>
    );
}