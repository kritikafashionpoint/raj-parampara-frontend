import ProductCard from "../common/ProductCard";
import { products } from "../home/NewArrivals";

export default function ShopNowClient() {


    return (
        <>
            {/* Hero */}
            <section className="bg-[#FFFBF5] border-b border-[#E8DCC7]">
                <div className="max-w-[1420] mx-auto px-4 lg:px-6 py-16">

                    <span className="inline-flex rounded-full bg-amber-100 text-amber-800 px-4 py-2 text-sm font-semibold">
                        राजस्थान की प्रामाणिक कला
                    </span>

                    <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-[#2D1B12]">
                        सभी उत्पाद
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-9 text-[#6B5B4D]">
                        राज परंपरा पर उपलब्ध हस्तनिर्मित राजस्थानी
                        आभूषण, मोजड़ी, ब्लू पॉटरी, हस्तशिल्प,
                        परिधान और अन्य पारंपरिक उत्पादों का संग्रह।
                    </p>

                </div>
            </section>

            {/* Toolbar */}
            <section className="bg-white border-b">
                <div className="max-w-[1420] mx-auto px-4 lg:px-6 py-6">

                    <div className="flex flex-wrap gap-4 justify-between items-center">

                        <h2 className="font-semibold text-[#2D1B12]">
                            20 उत्पाद मिले
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            <select className="h-12 rounded-full border px-5 bg-white">
                                <option>सभी श्रेणियाँ</option>
                            </select>

                            <select className="h-12 rounded-full border px-5 bg-white">
                                <option>कीमत</option>
                            </select>

                            <select className="h-12 rounded-full border px-5 bg-white">
                                <option>क्रमबद्ध करें</option>
                                <option>नवीनतम</option>
                                <option>कम कीमत</option>
                                <option>अधिक कीमत</option>
                            </select>

                        </div>

                    </div>

                </div>
            </section>

            {/* Products */}
            <section className="bg-[#FFFBF5] py-12">

                <div className="max-w-[1420] mx-auto">

                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">

                        {products.map((item, index) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                                index={index}
                            />
                        ))}

                    </div>

                    <div className="flex justify-center mt-14">

                        <button className="rounded-full bg-linear-to-t from-green-900 to-green-600 px-8 py-3 text-white font-semibold">
                            और उत्पाद देखें
                        </button>

                    </div>

                </div>

            </section>

            {/* SEO */}
            <section className="bg-white py-20">

                <div className="max-w-[1000] mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-[#2D1B12]">
                        राजस्थान की प्रामाणिक कला और संस्कृति का ऑनलाइन संग्रह
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-[#6B5B4D]">
                        राज परंपरा राजस्थान के स्थानीय कारीगरों और
                        पारंपरिक विक्रेताओं द्वारा तैयार किए गए
                        प्रामाणिक उत्पादों का विश्वसनीय ऑनलाइन
                        मार्केटप्लेस है। यहाँ आपको हस्तनिर्मित
                        आभूषण, मोजड़ी, ब्लू पॉटरी, होम डेकोर,
                        हस्तशिल्प, महिलाओं और पुरुषों के पारंपरिक
                        परिधान सहित अनेक श्रेणियों में गुणवत्तापूर्ण
                        उत्पाद मिलते हैं।
                    </p>

                    <p className="mt-6 text-lg leading-9 text-[#6B5B4D]">
                        हमारा उद्देश्य राजस्थान की समृद्ध विरासत को
                        डिजिटल माध्यम से देश और दुनिया तक पहुँचाना
                        तथा स्थानीय कारीगरों को नई पहचान देना है।
                        प्रत्येक खरीदारी राजस्थान की संस्कृति और
                        शिल्पकला को आगे बढ़ाने में योगदान देती है।
                    </p>

                </div>

            </section>
        </>
    );
}