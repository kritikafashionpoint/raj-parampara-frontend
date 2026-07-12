import Image from "next/image";
import Loading from "../Loading";

export default function Banner() {
    return (
        <section className="relative w-full aspect-19/9">
            <Image
                src="/banners/b3.png"
                alt="Raj Parampara Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
        </section>
    );
}