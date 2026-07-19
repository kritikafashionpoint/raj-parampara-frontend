"use client";

import { ArrowRight, Clock3, HeartHandshake, MailOpen, MessageCircleMore, PhoneCall, ShieldCheck, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function ContactUsClient() {
    return (
        <main className="relative overflow-hidden bg-linear-to-b from-[#fffdf8] via-[#fffaf3] to-white">

            {/* Decorative Background */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className="absolute -left-44 top-0 h-[500] w-[500] rounded-full bg-amber-200/30 blur-[120]" />

                <div className="absolute right-0 top-40 h-[420] w-[420] rounded-full bg-orange-200/20 blur-[120]" />



            </div>

            {/* ================= HERO ================= */}

            <section className="relative">

                <div className="mx-auto max-w-[1420] px-4 lg:px-6 py-20 lg:py-28">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* Left */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-medium text-amber-800 shadow">

                                <Sparkles className="h-4 w-4" />

                                राज परंपरा सहायता केंद्र

                            </span>

                            <h1 className="mt-7 text-4xl font-black leading-tight text-[#2D1B12] lg:text-7xl">

                                हम आपकी
                                <span className="block bg-linear-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                                    सहायता के लिए
                                </span>

                                हमेशा तैयार हैं।

                            </h1>

                            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">

                                ऑर्डर, भुगतान, विक्रेता, सहयोग या किसी भी अन्य जानकारी के लिए
                                हमारी टीम से संपर्क करें। हम राजस्थान की परंपरा को दुनिया तक
                                पहुँचाने के अपने मिशन में हर ग्राहक और हर कारीगर के साथ हैं।

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <a
                                    href="tel:+918079092775"
                                    className="group inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 px-7 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <PhoneCall className="h-5 w-5" />

                                    अभी कॉल करें

                                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

                                </a>

                                <a
                                    href="mailto:tarunmehra80790@gmail.com"
                                    className="inline-flex items-center gap-3 rounded-2xl border border-amber-300 bg-white px-7 py-4 font-semibold text-[#2D1B12] shadow-md transition hover:border-amber-500 hover:bg-amber-50"
                                >
                                    <MailOpen className="h-5 w-5 text-amber-600" />

                                    ईमेल भेजें

                                </a>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="relative">

                            {/* Glow */}

                            <div className="absolute inset-0 rounded-[40] bg-linear-to-br from-amber-300/30 via-orange-200/20 to-transparent blur-3xl" />

                            {/* Glass Card */}

                            <div className="relative overflow-hidden rounded-[36] border border-white/60 bg-white/70 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                                <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-linear-to-br from-amber-300/20 to-orange-300/20 blur-3xl" />

                                <div className="relative">

                                    <div className="flex items-center gap-4">

                                        <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-xl">

                                            <PhoneCall size={40} />

                                        </div>

                                        <div>

                                            <p className="text-sm uppercase tracking-[4] text-amber-700">

                                                CONTACT

                                            </p>

                                            <h2 className="mt-1 text-xl font-bold text-[#2D1B12]">

                                                Get in Touch

                                            </h2>

                                        </div>

                                    </div>

                                    <div className="mt-10 space-y-6">

                                        <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

                                            <PhoneCall className="h-8 w-8 text-amber-600" />

                                            <div>

                                                <p className="text-sm text-gray-500">

                                                    Mobile Number

                                                </p>

                                                <p className="font-semibold text-[#2D1B12]">

                                                    +91 80790 92775

                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

                                            <MailOpen className="h-8 w-8 text-amber-600" />

                                            <div>

                                                <p className="text-sm text-gray-500">

                                                    Email Address

                                                </p>

                                                <p className="font-semibold break-all text-[#2D1B12]">

                                                    tarunmehra80790@gmail.com

                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm">

                                            <Clock3 className="h-8 w-8 text-amber-600" />

                                            <div>

                                                <p className="text-sm text-gray-500">

                                                    Support Timing

                                                </p>

                                                <p className="font-semibold text-[#2D1B12]">

                                                    Mon - Sat | 10:00 AM - 7:00 PM

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FOUNDER ================= */}

            <section className="relative py-12">

                <div className="mx-auto max-w-[1420] px-4 lg:px-6">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* Left */}

                        <div className="relative">

                            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[40] border border-white/60 bg-linear-to-br from-[#fffdf8] to-white p-10 shadow-[0_20px_80px_rgba(0,0,0,.08)]">

                                <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-linear-to-br from-amber-200/30 to-orange-200/20 blur-3xl" />

                                <div className="relative">

                                    <div className="flex items-center gap-6">

                                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-orange-500 shadow-xl">

                                            <Users
                                                size={60}
                                                className="text-white"
                                                strokeWidth={1.7}
                                            />

                                        </div>

                                        <div>

                                            <p className="text-sm font-semibold uppercase tracking-[5] text-amber-600">

                                                Founder

                                            </p>

                                            <h2 className="mt-2 text-4xl font-black text-[#2D1B12]">

                                                Tarun Mehra

                                            </h2>

                                            <p className="mt-2 text-gray-600">

                                                Founder & Creator of Raj Parampara

                                            </p>

                                        </div>

                                    </div>

                                    <div className="mt-10 rounded-3xl bg-linear-to-r from-amber-50 to-orange-50 p-6">

                                        <p className="text-lg leading-9 text-gray-700">

                                            <span className="font-semibold text-[#2D1B12]">
                                                राज परंपरा
                                            </span>{" "}
                                            का उद्देश्य राजस्थान के स्थानीय कारीगरों, हस्तशिल्प,
                                            पारंपरिक आभूषण और सांस्कृतिक विरासत को पूरे भारत एवं विश्व
                                            तक पहुँचाना है। प्रत्येक उत्पाद के पीछे किसी कलाकार की
                                            मेहनत, परंपरा और पहचान छिपी होती है।

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">

                                <Sparkles className="h-4 w-4" />

                                Personal Contact

                            </span>

                            <h2 className="mt-6 text-4xl font-black leading-tight text-[#2D1B12]">

                                सीधे संस्थापक
                                <br />

                                से संपर्क करें

                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-9 text-gray-600">

                                यदि आपके पास व्यवसाय, साझेदारी, विक्रेता पंजीकरण, सुझाव या
                                किसी विशेष सहायता से जुड़ा प्रश्न है, तो आप सीधे संस्थापक से
                                संपर्क कर सकते हैं।

                            </p>

                            <div className="mt-10 space-y-5">

                                <div className="group flex items-center gap-5 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-white">

                                        <PhoneCall
                                            size={28}
                                            strokeWidth={1.8}
                                        />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Mobile Number

                                        </p>

                                        <a
                                            href="tel:+918079092775"
                                            className="text-xl font-bold text-[#2D1B12]"
                                        >
                                            +91 80790 92775
                                        </a>

                                    </div>

                                </div>

                                <div className="group flex items-center gap-5 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-white">

                                        <MailOpen
                                            size={28}
                                            strokeWidth={1.8}
                                        />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            Email Address

                                        </p>

                                        <a
                                            href="mailto:tarunmehra80790@gmail.com"
                                            className="font-semibold text-[#2D1B12] break-all"
                                        >
                                            tarunmehra80790@gmail.com
                                        </a>

                                    </div>

                                </div>

                                <div className="group flex items-center gap-5 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 text-white">

                                        <MessageCircleMore
                                            size={28}
                                            strokeWidth={1.8}
                                        />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500">

                                            WhatsApp Support

                                        </p>

                                        <a
                                            href="https://wa.me/918079092775"
                                            target="_blank"
                                            className="font-semibold text-[#2D1B12]"
                                        >
                                            Start Conversation

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT OPTIONS ================= */}

            <section className="relative py-12">

                <div className="mx-auto max-w-[1420] px-4 lg:px-6">

                    <div className="text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">

                            <Sparkles className="h-4 w-4" />

                            Quick Contact

                        </span>

                        <h2 className="mt-5 text-4xl font-black text-[#2D1B12]">

                            संपर्क करने के सभी माध्यम

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">

                            जिस माध्यम से आपको सुविधा हो, उसी माध्यम से हमसे संपर्क करें।
                            हमारी टीम जल्द से जल्द आपकी सहायता करेगी।

                        </p>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {/* PHONE */}

                        <a
                            href="tel:+918079092775"
                            className="group relative overflow-hidden rounded-[32] border border-amber-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-amber-100 opacity-50 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-xl">

                                    <PhoneCall size={25} strokeWidth={1.5} />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    Call Us

                                </h3>

                                <p className="mt-3 leading-8 text-gray-600">

                                    सीधे फोन पर बात करें।

                                </p>

                                <p className="mt-6 font-semibold text-amber-700">

                                    +91 80790 92775

                                </p>

                            </div>

                        </a>

                        {/* EMAIL */}

                        <a
                            href="mailto:tarunmehra80790@gmail.com"
                            className="group relative overflow-hidden rounded-[32] border border-orange-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-orange-100 opacity-60 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-orange-500 to-amber-500 text-white shadow-xl">

                                    <MailOpen size={25} strokeWidth={1.5} />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    Email

                                </h3>

                                <p className="mt-3 leading-8 text-gray-600">

                                    किसी भी प्रकार की सहायता हेतु ईमेल करें।

                                </p>

                                <p className="mt-6 font-semibold break-all text-orange-700">

                                    tarunmehra80790@gmail.com

                                </p>

                            </div>

                        </a>

                        {/* WHATSAPP */}

                        <a
                            href="https://wa.me/918079092775"
                            target="_blank"
                            className="group relative overflow-hidden rounded-[32] border border-green-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-green-100 opacity-60 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-green-500 to-emerald-500 text-white shadow-xl">

                                    <MessageCircleMore size={25} strokeWidth={1.5} />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    WhatsApp

                                </h3>

                                <p className="mt-3 leading-8 text-gray-600">

                                    तुरंत चैट करें और सहायता प्राप्त करें।

                                </p>

                                <p className="mt-6 font-semibold text-green-700">

                                    Chat Now

                                </p>

                            </div>

                        </a>

                        {/* SUPPORT */}

                        <div
                            className="group relative overflow-hidden rounded-[32] border border-blue-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-blue-100 opacity-50 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-sky-500 to-blue-600 text-white shadow-xl">

                                    <Clock3 size={25} strokeWidth={1.5} />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    Support

                                </h3>

                                <p className="mt-3 leading-8 text-gray-600">

                                    सोमवार से शनिवार तक सहायता उपलब्ध।

                                </p>

                                <p className="mt-6 font-semibold text-blue-700">

                                    10:00 AM - 7:00 PM

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* TRUST CARDS */}

                    <div className="mt-20 grid gap-8 md:grid-cols-3">

                        <div className="rounded-[30] bg-linear-to-br from-amber-500 to-orange-500 p-8 text-white shadow-xl">

                            <ShieldCheck
                                size={70}
                                strokeWidth={1.3}
                            />

                            <h3 className="mt-6 text-xl font-bold">

                                सुरक्षित सेवा

                            </h3>

                            <p className="mt-4 leading-8 text-white/90">

                                आपकी जानकारी पूरी तरह सुरक्षित रखी जाती है और हर सहायता
                                विश्वसनीय तरीके से प्रदान की जाती है।

                            </p>

                        </div>

                        <div className="rounded-[30] bg-linear-to-br from-[#4A1D12] to-[#2D1B12] p-8 text-white shadow-xl">

                            <HeartHandshake
                                size={70}
                                strokeWidth={1.3}
                            />

                            <h3 className="mt-6 text-xl font-bold">

                                ग्राहक पहले

                            </h3>

                            <p className="mt-4 leading-8 text-gray-300">

                                हर ग्राहक हमारे लिए महत्वपूर्ण है।
                                आपकी संतुष्टि हमारी प्राथमिकता है।

                            </p>

                        </div>

                        <div className="rounded-[30] bg-linear-to-br from-orange-500 via-amber-500 to-yellow-500 p-8 text-white shadow-xl">

                            <Users
                                size={70}
                                strokeWidth={1.3}
                            />

                            <h3 className="mt-6 text-xl font-bold">

                                विक्रेता सहायता

                            </h3>

                            <p className="mt-4 leading-8 text-white/90">

                                यदि आप राजस्थान के कारीगर हैं,
                                तो हमारे प्लेटफ़ॉर्म से जुड़कर
                                अपने उत्पाद पूरे भारत में बेच सकते हैं।

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= SOCIAL + BRAND ================= */}

            <section className="relative py-12">

                <div className="mx-auto max-w-[1420] px-4 lg:px-6">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">

                                <Sparkles className="h-4 w-4" />

                                Follow Raj Parampara

                            </span>

                            <h2 className="mt-6 text-4xl font-black leading-tight text-[#2D1B12]">

                                सोशल मीडिया पर
                                <br />
                                जुड़े रहें

                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-9 text-gray-600">

                                नए कलेक्शन, ऑफर, पारंपरिक हस्तशिल्प,
                                राजस्थान की संस्कृति तथा नवीनतम अपडेट
                                सबसे पहले प्राप्त करें।

                            </p>

                            <div className="mt-10 grid gap-5 sm:grid-cols-2">

                                {/* Instagram */}

                                <Link
                                    href="#"
                                    className="group overflow-hidden rounded-[30] border border-pink-100 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-pink-500 via-rose-500 to-orange-500 text-white shadow-xl">

                                        <BsInstagram
                                            size={25}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-[#2D1B12]">

                                        Instagram

                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-8">

                                        Latest Collections & Reels

                                    </p>

                                </Link>

                                {/* Facebook */}

                                <Link
                                    href="#"
                                    className="group overflow-hidden rounded-[30] border border-blue-100 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-sky-500 to-blue-700 text-white shadow-xl">

                                        <FaFacebook
                                            size={25}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-[#2D1B12]">

                                        Facebook

                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-8">

                                        Community & Updates

                                    </p>

                                </Link>

                                {/* LinkedIn */}

                                <Link
                                    href="#"
                                    className="group overflow-hidden rounded-[30] border border-cyan-100 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-xl">

                                        <LiaLinkedin
                                            size={25}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-[#2D1B12]">

                                        LinkedIn

                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-8">

                                        Business & Partnerships

                                    </p>

                                </Link>

                                {/* WhatsApp */}

                                <Link
                                    href="https://wa.me/918079092775"
                                    target="_blank"
                                    className="group overflow-hidden rounded-[30] border border-green-100 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex lg:h-20 lg:w-20 w-12 h-12 items-center justify-center rounded-3xl bg-linear-to-br from-green-500 to-emerald-500 text-white shadow-xl">

                                        <MessageCircleMore
                                            size={25}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-[#2D1B12]">

                                        WhatsApp

                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-8">

                                        Instant Customer Support

                                    </p>

                                </Link>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-[45] bg-linear-to-br from-amber-300/30 to-orange-300/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[40] border border-white/60 bg-white/80 p-10 shadow-[0_30px_90px_rgba(0,0,0,.08)] backdrop-blur-xl">

                                <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-linear-to-br from-amber-300/30 to-orange-300/20 blur-3xl" />

                                <div className="relative">

                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-xl">

                                        <Sparkles
                                            size={52}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <h2 className="mt-8 text-4xl font-black text-[#2D1B12]">

                                        राजस्थान से
                                        <br />
                                        विश्व तक

                                    </h2>

                                    <p className="mt-7 text-lg leading-9 text-gray-600">

                                        राज परंपरा केवल एक ऑनलाइन स्टोर नहीं है,
                                        बल्कि राजस्थान की कला, संस्कृति,
                                        हस्तशिल्प, आभूषण, वस्त्र और परंपरा
                                        को दुनिया तक पहुँचाने का एक प्रयास है।

                                    </p>

                                    <div className="mt-10 grid grid-cols-2 gap-5">

                                        <div className="rounded-3xl bg-linear-to-br from-amber-50 to-orange-50 p-6">

                                            <h3 className="text-4xl font-black text-amber-600">

                                                100%

                                            </h3>

                                            <p className="mt-3 text-gray-600">

                                                Authentic Products

                                            </p>

                                        </div>

                                        <div className="rounded-3xl bg-linear-to-br from-orange-50 to-amber-50 p-6">

                                            <h3 className="text-4xl font-black text-orange-600">

                                                24×7

                                            </h3>

                                            <p className="mt-3 text-gray-600">

                                                Online Presence

                                            </p>

                                        </div>

                                        <div className="rounded-3xl bg-linear-to-br from-amber-50 to-yellow-50 p-6">

                                            <h3 className="text-4xl font-black text-amber-600">

                                                Local

                                            </h3>

                                            <p className="mt-3 text-gray-600">

                                                Rajasthan Artisans

                                            </p>

                                        </div>

                                        <div className="rounded-3xl bg-linear-to-br from-orange-50 to-amber-50 p-6">

                                            <h3 className="text-4xl font-black text-orange-600">

                                                Trust

                                            </h3>

                                            <p className="mt-3 text-gray-600">

                                                Customer First

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= WHY CONTACT US ================= */}

            <section className="relative overflow-hidden py-12">

                <div className="absolute inset-0">

                    <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-200/20 blur-[120]" />

                    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-200/20 blur-[150]" />

                </div>

                <div className="relative mx-auto max-w-[1420] px-4 lg:px-6">

                    <div className="text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">

                            <Sparkles className="h-4 w-4" />

                            Why Choose Us

                        </span>

                        <h2 className="mt-6 text-4xl font-black text-[#2D1B12]">

                            क्यों करें राज परंपरा से संपर्क?

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">

                            हमारा उद्देश्य केवल प्रश्नों का उत्तर देना नहीं,
                            बल्कि प्रत्येक ग्राहक और प्रत्येक कारीगर को सर्वोत्तम अनुभव
                            प्रदान करना है।

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {/* Card 1 */}

                        <div className="group relative overflow-hidden rounded-[34] border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex h-24 w-24 items-center justify-center rounded-[30] bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-xl">

                                    <ShieldCheck
                                        size={52}
                                        strokeWidth={1.4}
                                    />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    सुरक्षित सहायता

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    आपके सभी प्रश्नों का उत्तर पूरी पारदर्शिता,
                                    सुरक्षा और विश्वसनीयता के साथ दिया जाता है।

                                </p>

                            </div>

                        </div>

                        {/* Card 2 */}

                        <div className="group relative overflow-hidden rounded-[34] border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex h-24 w-24 items-center justify-center rounded-[30] bg-linear-to-br from-[#4A1D12] to-[#2D1B12] text-white shadow-xl">

                                    <HeartHandshake
                                        size={52}
                                        strokeWidth={1.4}
                                    />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    व्यक्तिगत सहयोग

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    प्रत्येक ग्राहक और विक्रेता को व्यक्तिगत
                                    सहायता प्रदान करना हमारी प्राथमिकता है।

                                </p>

                            </div>

                        </div>

                        {/* Card 3 */}

                        <div className="group relative overflow-hidden rounded-[34] border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                            <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-green-200/40 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex h-24 w-24 items-center justify-center rounded-[30] bg-linear-to-br from-green-500 to-emerald-500 text-white shadow-xl">

                                    <Users
                                        size={52}
                                        strokeWidth={1.4}
                                    />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    विक्रेता सहायता

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    राजस्थान के स्थानीय कारीगर और छोटे व्यवसाय
                                    हमारे साथ आसानी से जुड़ सकते हैं।

                                </p>

                            </div>

                        </div>

                        {/* Card 4 */}

                        <div className="group relative overflow-hidden rounded-[34] border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                            <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl transition group-hover:scale-150" />

                            <div className="relative">

                                <div className="flex h-24 w-24 items-center justify-center rounded-[30] bg-linear-to-br from-blue-500 to-sky-600 text-white shadow-xl">

                                    <Clock3
                                        size={52}
                                        strokeWidth={1.4}
                                    />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D1B12]">

                                    तेज़ प्रतिक्रिया

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    अधिकांश प्रश्नों का उत्तर
                                    24 घंटे के भीतर देने का प्रयास किया जाता है।

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Bottom Premium Card */}

                    <div className="mt-20 overflow-hidden rounded-[40] bg-linear-to-r from-[#2D1B12] via-[#4A1D12] to-[#6B2F1A] p-12 shadow-2xl">

                        <div className="grid items-center gap-10 lg:grid-cols-2">

                            <div>

                                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-amber-300">

                                    Raj Parampara Promise

                                </span>

                                <h2 className="mt-6 text-4xl font-black leading-tight text-white">

                                    आपकी संतुष्टि
                                    <br />

                                    हमारी प्राथमिकता है।

                                </h2>

                                <p className="mt-6 text-lg leading-9 text-gray-300">

                                    चाहे आपका प्रश्न ऑर्डर, भुगतान,
                                    उत्पाद, विक्रेता या साझेदारी से जुड़ा हो,
                                    हमारी टीम हर कदम पर आपकी सहायता के लिए तैयार है।

                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-6">

                                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

                                    <h3 className="text-4xl font-black text-amber-300">

                                        100%

                                    </h3>

                                    <p className="mt-3 text-gray-300">

                                        Customer Support

                                    </p>

                                </div>

                                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

                                    <h3 className="text-4xl font-black text-amber-300">

                                        Fast

                                    </h3>

                                    <p className="mt-3 text-gray-300">

                                        Response

                                    </p>

                                </div>

                                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

                                    <h3 className="text-4xl font-black text-amber-300">

                                        Trust

                                    </h3>

                                    <p className="mt-3 text-gray-300">

                                        Secure Communication

                                    </p>

                                </div>

                                <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">

                                    <h3 className="text-4xl font-black text-amber-300">

                                        Local

                                    </h3>

                                    <p className="mt-3 text-gray-300">

                                        Rajasthan First

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= FAQ ================= */}

            <section className="relative py-12">

                <div className="mx-auto max-w-[1200] px-4 lg:px-6">

                    <div className="text-center">

                        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">

                            <Sparkles className="h-4 w-4" />

                            Frequently Asked Questions

                        </span>

                        <h2 className="mt-6 text-4xl font-black text-[#2D1B12]">

                            अक्सर पूछे जाने वाले प्रश्न

                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

                            यदि आपका प्रश्न नीचे नहीं है,
                            तो बेझिझक हमसे संपर्क करें।

                        </p>

                    </div>

                    <div className="mt-16 space-y-6">

                        {[
                            {
                                q: "मैं अपना ऑर्डर कैसे ट्रैक कर सकता हूँ?",
                                a: "ऑर्डर कन्फर्म होने के बाद आपको Tracking Details उपलब्ध करा दी जाएँगी।",
                            },
                            {
                                q: "क्या सभी उत्पाद राजस्थान के हैं?",
                                a: "हाँ, हमारा उद्देश्य राजस्थान के कारीगरों एवं विक्रेताओं के उत्पादों को बढ़ावा देना है।",
                            },
                            {
                                q: "क्या मैं Seller बन सकता हूँ?",
                                a: "हाँ, यदि आप राजस्थान के विक्रेता या कारीगर हैं तो हमारे साथ जुड़ सकते हैं।",
                            },
                            {
                                q: "सपोर्ट कितनी जल्दी मिलता है?",
                                a: "हम अधिकतर प्रश्नों का उत्तर 24 घंटे के भीतर देने का प्रयास करते हैं।",
                            },
                        ].map((item) => (

                            <details
                                key={item.q}
                                className="group rounded-[28] border border-amber-100 bg-white p-8 shadow-lg transition"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-[#2D1B12]">

                                    {item.q}

                                    <span className="rounded-full bg-amber-100 p-2 transition group-open:rotate-45">

                                        +

                                    </span>

                                </summary>

                                <p className="mt-6 leading-8 text-gray-600">

                                    {item.a}

                                </p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= FINAL CTA ================= */}

            <section className="">

                <div className="w-full bg-red-900 lg:p-14 p-5">

                    <div className="overflow-hidden ">

                        <div className="max-w-[1420] mx-auto lg:px-6 px-4 flex gap-8 items-center justify-between flex-wrap">

                            <div>

                                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-amber-300">

                                    Need Help?

                                </span>

                                <h2 className="mt-6 text-4xl font-black leading-tight text-white">

                                    आइए बात करते हैं।

                                </h2>

                                <p className="mt-6 max-w-xl text-lg leading-9 text-gray-300">

                                    यदि आपके मन में कोई प्रश्न है,
                                    हम आपकी सहायता के लिए हमेशा उपलब्ध हैं।

                                </p>

                            </div>

                            <div className="flex flex-wrap justify-start gap-5 lg:justify-end">

                                <a
                                    href="tel:+918079092775"
                                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 font-semibold text-[#2D1B12] shadow-xl transition hover:scale-105"
                                >
                                    <PhoneCall className="h-5 w-5 text-amber-600" />

                                    +91 80790 92775
                                </a>

                                <a
                                    href="mailto:tarunmehra80790@gmail.com"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                                >
                                    <MailOpen className="h-5 w-5" />

                                    Email Us
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );
}