"use client";

import {
    ImagePlus,
    Package,
    Tag,
    FileText,
    Sparkles,
    Send,
} from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Swal from "sweetalert2";
const MAX_IMAGES = 5;



export default function RequestProduct() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false)

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        if (images.length + files.length > MAX_IMAGES) {
            Swal.fire({
                title: `Maximum ${MAX_IMAGES} images allowed`,
                icon: 'warning',
                timer: 1500
            })
            return;
        }

        const imageData = files.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...imageData]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const files = Array.from(e.dataTransfer.files).filter(file =>
            file.type.startsWith("image/")
        );

        if (!files.length) return;

        if (images.length + files.length > MAX_IMAGES) {
            return Swal.fire({
                title: `Maximum ${MAX_IMAGES} images allowed`,
                icon: "warning",
                timer: 1500,
            });
        }

        const imageData = files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));

        setImages(prev => [...prev, ...imageData]);
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        if (images.length == 0) {
            return Swal.fire({
                title: 'Minimum 1 Image is required',
                icon: 'warning',
                timer: 1500
            })
        }
        try {
            setLoading(true)

        }
        catch (error) {
            console.log(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div>

            {/* Header */}

            <div className="my-10 bg-white sm:border border-gray-300 sm:shadow-lg sm:rounded-[40] sm:p-7">

                <h1 className="text-3xl font-bold text-amber-950">
                    नया उत्पाद अनुरोध
                </h1>

                <p className="text-amber-800 mt-3 max-w-3xl leading-8">
                    अपने हस्तनिर्मित, पारंपरिक या राजस्थानी उत्पाद की जानकारी
                    यहाँ साझा करें। हमारी टीम आपके उत्पाद की समीक्षा करेगी,
                    तस्वीरों को बेहतर बनाएगी, SEO सामग्री तैयार करेगी और
                    स्वीकृति मिलने के बाद उत्पाद को राज परंपरा पर प्रकाशित करेगी।
                </p>

            </div>

            {/* Card */}

            <div className="overflow-hidden rounded-[32] sm:border border-amber-200 bg-white sm:shadow-xl">

                {/* Top Banner */}

                <div className="sm:bg-amber-300 sm:px-8 py-8">

                    <h2 className="text-3xl font-bold text-amber-950">
                        उत्पाद की जानकारी
                    </h2>

                    <p className="mt-2 text-amber-950/80">
                        केवल आवश्यक जानकारी भरें। बाकी कार्य हमारी टीम करेगी।
                    </p>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}

                    className="space-y-8 sm:p-8 py-4">

                    {/* Product Name */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <Package size={18} />

                            उत्पाद का नाम

                        </label>

                        <input
                            required
                            type="text"
                            placeholder="जैसे - राजस्थानी कुंदन हार"
                            className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                    </div>

                    {/* Product Hint */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <Sparkles size={18} />

                            उत्पाद के बारे में संकेत

                        </label>

                        <input
                            required
                            type="text"
                            placeholder="जैसे - जयपुर का हस्तनिर्मित दुल्हन कुंदन हार"
                            className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                        <p className="mt-2 text-sm text-amber-700">
                            इस जानकारी की सहायता से हम शीर्षक, विवरण और SEO
                            सामग्री तैयार करेंगे।
                        </p>

                    </div>

                    {/* Category + Price */}

                    <div className="grid gap-6 lg:grid-cols-2">

                        <div>

                            <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                                <Tag size={18} />

                                श्रेणी

                            </label>

                            <select className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500">

                                <option>श्रेणी चुनें</option>

                                <option>आभूषण</option>

                                <option>मोजड़ी</option>

                                <option>हस्तशिल्प</option>

                                <option>कपड़े</option>

                                <option>बैग</option>

                                <option>सजावटी वस्तुएँ</option>

                            </select>

                        </div>

                        <div>

                            <label className="mb-3 block font-semibold text-amber-900">
                                बिक्री मूल्य
                            </label>

                            <input
                                required
                                type="number"
                                placeholder="₹ 999"
                                className="w-full rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                            />

                        </div>

                    </div>
                    {/* Product Description */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">

                            <FileText size={18} />

                            उत्पाद का विवरण

                        </label>

                        <textarea
                            rows={7}
                            placeholder="अपने उत्पाद के बारे में विस्तार से लिखें..."
                            className="w-full resize-none rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                        />

                        <p className="mt-2 text-sm text-amber-700">
                            जितनी अधिक जानकारी देंगे, उत्पाद उतना बेहतर दिखाई देगा।
                        </p>

                    </div>

                    {/* Upload Images */}

                    <div>

                        <label className="mb-3 flex items-center gap-2 font-semibold text-amber-900">
                            <ImagePlus size={18} />

                            उत्पाद की तस्वीरें

                        </label>

                        <label
                            htmlFor="images"
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onDragEnter={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onDrop={handleDrop}
                            className="
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        border-amber-300
        bg-linear-to-br
        from-amber-50
        to-yellow-50
        p-12
        cursor-pointer
        hover:border-amber-500
        hover:bg-amber-100/60
        transition
    "
                        >

                            <ImagePlus
                                size={45}
                                className="text-amber-600 group-hover:scale-110 transition"
                            />

                            <h3 className="mt-5 text-xl font-bold text-amber-900">
                                तस्वीरें चुनें
                            </h3>

                            <p className="mt-2 text-amber-700">
                                JPG, PNG, WEBP
                            </p>

                            <p className="mt-4 text-sm text-amber-600 text-center max-w-lg">
                                एक उत्पाद की कई तस्वीरें अपलोड करें।
                                हमारी टीम इनका बैकग्राउंड सफेद करेगी तथा गुणवत्ता बेहतर बनाएगी।
                            </p>

                        </label>

                        <input
                            id="images"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            className="hidden"
                        />

                    </div>

                    {images.length > 0 && (

                        <div className="mt-8">

                            <div className="flex justify-between items-center mb-5">

                                <h3 className="font-semibold text-amber-900">
                                    चुनी गई तस्वीरें
                                </h3>

                                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                                    {images.length}/5
                                </span>

                            </div>

                            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">

                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white shadow hover:shadow-xl transition-all duration-300 group"
                                    >

                                        <img
                                            src={image.preview}
                                            alt=""
                                            className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                                        />

                                        {index === 0 && (
                                            <span className="absolute top-3 left-3 bg-amber-300 border text-black text-sm px-2 py-1 rounded-full">
                                                मुख्य
                                            </span>
                                        )}

                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute cursor-pointer top-3 right-3 h-8 w-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-500 transition"
                                        >
                                            <X size={16} />
                                        </button>

                                    </div>
                                ))}

                            </div>

                        </div>

                    )}

                    {/* Notice */}

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

                        <h3 className="font-semibold text-amber-900">
                            महत्वपूर्ण सूचना
                        </h3>

                        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-800 list-disc pl-5">

                            <li>
                                केवल अपने स्वयं के उत्पादों की जानकारी भेजें।
                            </li>

                            <li>
                                सभी अनुरोध हमारी टीम द्वारा समीक्षा के बाद ही प्रकाशित किए जाएंगे।
                            </li>

                            <li>
                                SEO, शीर्षक, विवरण और तस्वीरों का अनुकूलन हमारी टीम करेगी।
                            </li>

                        </ul>

                    </div>

                    {/* Submit */}

                    <div className="flex justify-end">

                        <button
                            type="submit"
                            className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-linear-to-r
                            from-amber-300
                            to-amber-500
                            px-8
                            py-4
                            text-black
                            border
                            cursor-pointer
                            font-semibold
                            shadow-lg
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-2xl
                        "
                        >

                            <Send size={20} />

                            अनुरोध भेजें

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}