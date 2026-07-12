import Link from "next/link";
import { AiFillMail } from "react-icons/ai";
import {
    FiFacebook,
    FiInstagram,
    FiYoutube,
    FiMail,
    FiPhone,
    FiMapPin,
    FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="footer-bg text-white">
            <div className="max-w-[1420] mx-auto px-6 lg:py-14 py-8">

                {/* Top */}
                <div className="grid lg:grid-cols-[28%_auto_auto_auto_auto] md:grid-cols-2 grid-cols-1 lg:gap-10 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center justify-start gap-3">
                            <img
                                src="/logo.png"
                                alt="राज परंपरा"
                                className="w-40 object-contain -ml-5 mt-4"
                            />

                            <div className="-ml-7">
                                <h2 className="text-2xl font-bold tracking-wider text-amber-400">
                                    राज परंपरा
                                </h2>

                                <p className="text-sm text-gray-300">
                                    राजस्थान से विश्व तक
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-8 text-sm">
                            राजस्थान की समृद्ध संस्कृति, हस्तशिल्प, पारंपरिक परिधान,
                            ब्लू पॉटरी, मोजड़ी, आभूषण और लोक कला को पूरे विश्व तक पहुँचाने
                            का हमारा प्रयास।
                        </p>

                        <div className="flex gap-4 mt-6 text-2xl">
                            <FiFacebook className="cursor-pointer hover:text-amber-400 duration-300" />
                            <FiInstagram className="cursor-pointer hover:text-amber-400 duration-300" />
                            <FiYoutube className="cursor-pointer hover:text-amber-400 duration-300" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-400 mb-5">
                            त्वरित लिंक
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-amber-300 duration-300 cursor-pointer"><Link href="/">होम</Link></li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer"><Link href="/shop">सभी उत्पाद</Link></li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer"><Link href="/categories">श्रेणियाँ</Link></li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer"><Link href="/about-us">हमारे बारे में</Link></li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer"><Link href="/contact-us">संपर्क करें</Link></li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer"><Link href="/blog">ब्लॉग</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-400 mb-5">
                            लोकप्रिय श्रेणियाँ
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">मोजड़ी</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">राजपूती परिधान</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">ब्लू पॉटरी</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">साड़ियाँ</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">कृत्रिम आभूषण</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">हस्तनिर्मित बैग</li>
                        </ul>
                    </div>

                    {/* Seller */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-400 mb-5">
                            विक्रेता केंद्र
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">विक्रेता बनें</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">विक्रेता लॉगिन</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">डैशबोर्ड</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">रिवॉर्ड्स</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">कमीशन नीति</li>
                            <li className="hover:text-amber-300 duration-300 cursor-pointer">सहायता</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-amber-400 mb-5">
                            संपर्क करें
                        </h3>

                        <div className="space-y-5 text-gray-300">

                            <div className="grid grid-cols-[7%_auto] gap-3">
                                <FiMapPin className="text-amber-400 mt-1" />
                                <span>जोधपुर, राजस्थान, भारत</span>
                            </div>

                            <div className="grid grid-cols-[7%_auto] gap-3">
                                <AiFillMail className="text-amber-400 mt-1" />
                                <span>tarunmehra80790@gmail.com</span>
                            </div>

                            <div className="grid grid-cols-[7%_auto] gap-3">
                                <FiPhone className="text-amber-400 mt-1" />
                                <span>+91 80790 92775</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Newsletter */}
                <div className="border-t border-white/10 mt-14 pt-10 flex lg:flex-row flex-col justify-between gap-8 items-center">

                    <div>
                        <h3 className="text-2xl font-semibold">
                            नए कलेक्शन और खास ऑफर्स की जानकारी सबसे पहले पाएं :
                        </h3>

                        <p className="text-gray-400 mt-2">
                            नए उत्पाद, विशेष ऑफ़र और राजस्थान की पारंपरिक विरासत की
                            जानकारी सबसे पहले प्राप्त करें।
                        </p>
                    </div>

                    <div className="flex min-w-[200]">
                        <input
                            type="email"
                            placeholder="अपना ईमेल पता दर्ज करें"
                            className=" bg-white text-black text-[17px] px-5 py-3 rounded-l-full outline-none w-full"
                        />

                        <button className="bg-amber-400 hover:bg-amber-600 px-6 rounded-r-full flex items-center justify-center">
                            <FiArrowRight className="text-2xl" />
                        </button>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-10 pt-6 flex lg:flex-row flex-col gap-4 justify-between items-center">

                    <div className="text-center lg:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2026 <span className="text-amber-400">राज परंपरा</span> | सर्वाधिकार सुरक्षित।
                        </p>

                        <p className="text-black text-xs my-3 bg-amber-200 py-3 px-3 rounded-full">
                            वेबसाइट का डिज़ाइन, विकास एवं डिजिटल ब्रांडिंग{" "}
                            <a
                                href="https://instagram.com/the_tm_creations"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-extrabold text-amber-700 hover:text-amber-600 transition"
                            >
                                THE TM CREATIONS
                            </a>{" "}
                            द्वारा।
                        </p>
                    </div>

                    <p className="text-gray-400 text-sm text-center">
                        हर उत्पाद्समें राजस्थान की कला, हर खरीद में हमारी परंपरा।
                    </p>

                </div>

            </div>
        </footer>
    );
}