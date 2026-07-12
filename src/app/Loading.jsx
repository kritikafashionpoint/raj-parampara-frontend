import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/95">
            <div className="flex flex-col items-center">
                {/* Logo */}
                <div className="relative">
                    <div className="absolute inset-0 rounded-full border-4 border-amber-700/20"></div>

                    <div className="h-28 w-28 animate-spin rounded-full border-[3px] border-transparent border-t-amber-700 border-r-amber-500"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/logo.png"
                            alt="Raj Parampara"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                </div>

                {/* Brand */}
                <h2 className="mt-8 text-3xl font-bold text-[#5C2B1D] tracking-wide">
                    राज परंपरा
                </h2>

                <p className="mt-2 text-sm text-amber-700">
                    राजस्थान से विश्व तक...
                </p>

                {/* Loading Dots */}
                <div className="mt-6 flex gap-7">
                    <span className="h-1 w-5 animate-ping rounded-full bg-amber-700 [animation-delay:-0.3s]" />
                    <span className="h-1 w-5 animate-ping rounded-full bg-amber-600 [animation-delay:-0.10s]" />
                    <span className="h-1 w-5 animate-ping rounded-full bg-amber-500" />
                </div>
            </div>
        </div>
    );
}