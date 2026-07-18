import { ShoppingCart } from "lucide-react";

export default function AddtoCartButton({
    onClick,
    disabled = false,
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="sm:text-md text-sm w-full bg-linear-to-t from-black to-black/80 shadow-lg cursor-pointer hover:scale-105 flex items-center justify-center gap-2 text-white sm:py-3 py-2.5 rounded-full font-semibold duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <ShoppingCart size={18} />
            कार्ट
        </button>
    );
}