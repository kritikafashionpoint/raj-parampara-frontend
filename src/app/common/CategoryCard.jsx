import Image from "next/image";
import Link from "next/link";

export default function ItemCard({ item }) {
    return (
        <div className="w-full h-full flex justify-center">
            <Link
                href={`/category/${item.slug}`}
                className="group flex flex-col items-center"
            >
                {/* Image */}
                <div className="relative w-[130] h-[130] lg:w-[150] lg:h-[150] overflow-hidden rounded-full border border-gray-300">
                    <Image
                        src="/token/token.png"
                        alt={item.title}
                        fill
                        className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Content */}
                <h3 className="mt-3 text-center text-lg font-semibold text-[#2D1B12] line-clamp-2">
                    {item.title}
                </h3>
            </Link>
        </div>
    );
}