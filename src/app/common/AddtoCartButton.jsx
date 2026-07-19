import { ShoppingCart } from "lucide-react";

export default function AddtoCartButton({
    disabled = false,
    loading,
    alreadyAdded,
    onClick
}) {
    return (
        <button
            onClick={onClick}
            disabled={loading || alreadyAdded}
            className="sm:text-md text-sm w-full bg-linear-to-t from-black to-black/80 shadow-lg cursor-pointer hover:scale-105 flex items-center justify-center gap-2 text-white sm:py-3 py-2 rounded-full font-semibold duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {loading ?
                <span>लोडिंग...</span>
                :
                alreadyAdded ?
                    <span>✓ कार्ट</span>
                    :

                    <div className="flex items-center gap-1">
                        <ShoppingCart size={18} />
                        <span>कार्ट</span>
                    </div>
            }
        </button>
    );
}