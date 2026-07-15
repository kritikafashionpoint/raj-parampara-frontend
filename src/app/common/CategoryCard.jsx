import Image from "next/image";
import Link from "next/link";

export default function itemCard({ item, index }) {
    return (

        <Link
            key={item.id}
            href={`/category/${item.slug}`}
            className="group"
        >
            <div className="rounded-t-full overflow-hidden bg-white border border-[#E8DCC7] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300">

                {/* Image */}
                <div className="relative h-[260] overflow-hidden">
                    <Image
                        src="/banners/b3.png"
                        alt={item.title}
                        fill
                        className="object-cover rounded-t-full group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="px-5 py-5 flex items-center justify-between">

                    <h3 className="text-lg font-semibold text-[#2D1B12] line-clamp-2">
                        {item.title}
                    </h3>

                    <button className="mt-1 rounded-full border border-[#D4AF37] bg-[#FFF7E6] px-6 py-2 text-sm font-semibold text-[#2D1B12] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white">
                        श्रेणी देखें
                    </button>

                </div>

            </div>
        </Link>

    );
}