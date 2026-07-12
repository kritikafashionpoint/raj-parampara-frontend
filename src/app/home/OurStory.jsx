import { Crown, Target, HeartHandshake } from "lucide-react";

export default function OurStory() {
    const cards = [
        {
            icon: Crown,
            title: "हमारा नाम 'राज परंपरा' क्यों?",
            description:
                "राज परंपरा नाम दो शब्दों से मिलकर बना है— 'राज', जो राजस्थान की शाही विरासत, गौरव और समृद्ध संस्कृति का प्रतीक है, और 'परंपरा', जो पीढ़ी दर पीढ़ी चली आ रही कला, हस्तशिल्प, पहनावे और लोक संस्कृति का प्रतिनिधित्व करती है। हमारा मानना है कि हर हस्तनिर्मित उत्पाद केवल एक वस्तु नहीं, बल्कि राजस्थान की सदियों पुरानी कहानी और कारीगरों की मेहनत का जीवंत स्वरूप है।",
            highlight: "राजस्थान की शान • परंपराओं का सम्मान",
        },
        {
            icon: Target,
            title: "हमारा उद्देश्य",
            description:
                "राज परंपरा का उद्देश्य राजस्थान के स्थानीय कारीगरों, छोटे व्यापारियों और पारिवारिक व्यवसायों को एक ऐसा डिजिटल मंच प्रदान करना है जहाँ वे अपने पारंपरिक उत्पादों को पूरे विश्व के ग्राहकों तक आसानी से पहुँचा सकें। हम चाहते हैं कि हर कलाकार की मेहनत, हर हस्तनिर्मित वस्तु और हर स्थानीय दुकान को वह पहचान मिले जिसकी वह वास्तव में हकदार है।",
            highlight: "लोकल कारीगरों को वैश्विक पहचान",
        },
        {
            icon: HeartHandshake,
            title: "हमारा संकल्प",
            description:
                "हम केवल एक ई-कॉमर्स वेबसाइट नहीं बना रहे, बल्कि राजस्थान की कला, संस्कृति और विरासत को आने वाली पीढ़ियों तक सुरक्षित रखने का प्रयास कर रहे हैं। हर खरीदारी किसी स्थानीय परिवार की आजीविका को मजबूत बनाती है और हर विक्रेता हमारे साथ मिलकर राजस्थान की पहचान को राजस्थान से विश्व तक पहुँचाने में अपना योगदान देता है।",
            highlight: "राजस्थान से विश्व तक",
        },
    ];

    return (
        <section className="w-full bg-white lg:py-24 py-16">
            <div className="max-w-[1420] mx-auto px-6">
                {/* Heading */}
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-flex items-center rounded-full bg-amber-100 text-[#7B341E] px-5 py-2 text-sm font-semibold">
                        ✨ हमारी पहचान
                    </span>

                    <h2 className="mt-5 text-2xl md:text-3xl lg:text-5xl font-bold text-amber-800 leading-tight">
                        राज परंपरा की कहानी
                    </h2>

                    <p className="mt-5 text-gray-600 text-lg leading-8">
                        राजस्थान की शाही विरासत, स्थानीय कारीगरों और पारंपरिक कला को
                        <span className="font-semibold text-[#8A5A13]">
                            {" "}
                            राजस्थान से विश्व तक
                        </span>{" "}
                        पहुँचाने का हमारा एक छोटा सा प्रयास।
                    </p>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-[30px] border border-amber-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden hover:bg-amber-200"
                            >
                                {/* Top Gradient */}
                                <div className="h-2 bg-linear-to-r from-amber-700 via-amber-500 to-amber-700"></div>

                                <div className="p-8">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-[#8A5A13]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-7 text-2xl font-bold text-[#2D1B12] leading-snug">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 text-gray-600 leading-8 text-[16px]">
                                        {card.description}
                                    </p>

                                    {/* Highlight */}
                                    <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                                        <p className="text-center font-semibold text-[#8A5A13]">
                                            {card.highlight}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Quote */}
                <div className="mt-20 rounded-[32] bg-linear-to-r from-[#2D1B12] via-[#3A2418] to-[#2D1B12] px-8 py-14 text-center shadow-xl">
                    <h3 className="text-2xl md:text-4xl font-bold text-white leading-relaxed">
                        "राज परंपरा केवल उत्पाद नहीं बेचता,
                        <br className="hidden md:block" />
                        बल्कि राजस्थान की
                        <span className="text-amber-300">
                            {" "}
                            संस्कृति, कला और परंपराओं को{" "}
                        </span>
                        <br className="hidden md:block" />
                        <span className="text-amber-300">राजस्थान से विश्व तक</span>
                        {" "}पहुँचाने का एक संकल्प है।"
                    </h3>

                    <p className="mt-6 max-w-3xl mx-auto text-amber-100 text-lg leading-8">
                        हर खरीदारी केवल एक उत्पाद नहीं, बल्कि राजस्थान के कारीगरों,
                        पारंपरिक व्यवसायों और सांस्कृतिक विरासत को आगे बढ़ाने की दिशा में
                        आपका एक महत्वपूर्ण योगदान है।
                    </p>
                </div>
            </div>
        </section>
    );
}