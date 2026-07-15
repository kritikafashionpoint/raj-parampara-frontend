import Link from "next/link";
import {
  FiArrowRight,
} from "react-icons/fi";

export default function BecomeSeller() {
  return (
    <section className="bg-white lg:py-16 py-12">
      <div className="max-w-[1420] mx-auto lg:px-6 px-4">

        <div className="text-center max-w-3xl mx-auto my-7">

          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-amber-900 mt-5">
            आज ही राज परंपरा के विक्रेता बनें                    </h2>

          <p className="text-gray-600 md:leading-8 mt-3">
            अपनी कला और उत्पादों को लाखों ग्राहकों तक पहुँचाने का अवसर पाएं।
          </p>

        </div>


        <div className="grid lg:grid-cols-3 gap-10 items-center justify-between">


          {/* Left Content */}

          <div className="rounded-lg h-full flex flex-col items-center footer-bg px-3 py-7">

            <span className="inline-flex items-center gap-2 bg-white border px-5 py-2 rounded-full text-sm font-semibold text-[#2D1B12]">
              राज परंपरा विक्रेता बनें
            </span>


            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white text-center leading-tight">
              अपने राजस्थानी उत्पाद
              <br />
              <span className="text-amber-300">
                पूरे विश्व में बेचें
              </span>
            </h2>


            <p className="mt-5 text-gray-200 text-lg text-center leading-8">
              हस्तशिल्प, ज्वेलरी, मोजड़ी, कपड़े और
              पारंपरिक उत्पादों को लाखों ग्राहकों तक पहुँचाएं।
            </p>

          </div>



          {/* Center Token Reward */}

          <div className="rounded-lg h-full flex p-6 footer-bg px-3 py-7  items-center">

            <div>

              <div className="flex items-center  gap-4">

                <img
                  src="/token/token.png"
                  alt="Seller Token"
                  className="w-20 h-20 object-contain bg-amber-300 rounded-full"
                />


                <div>

                  <h4 className="font-bold text-white">
                    हर बिक्री पर मिलेगा 1 फ्री टोकन 🎁
                  </h4>

                  <p className="text-sm text-gray-200 mt-2">
                    टोकन को INR रुपये में बदल सकते हैं।
                    ज्यादा बिक्री करें और ज्यादा रिवॉर्ड पाएं।
                  </p>

                </div>

              </div>


              <div className="flex flex-col gap-1 max-w-[250] mx-auto mt-5 bg-white rounded-xl px-4 py-2 text-center border border-amber-100">

                <h4 className="font-bold text-[#2D1B12]">
                  1 टोकन = ₹0.20-2.00 (Rs.0.20 to 2.00)
                </h4>

                <p className="text-sm text-gray-800 ">
                  विक्रेता पुरस्कार प्रणाली
                </p>

              </div>
            </div>

          </div>





          {/* Right CTA + Token */}

          <div className="rounded-lg h-full flex flex-col items-center gap-8 footer-bg px-3 py-7">


            <div className="relative">

              <div className="lg:w-40 lg:h-40 w-56 h-56 bg-white hover:bg-amber-300 duration-1000 overflow-hidden rounded-full flex items-center justify-center">

                <img
                  src="/token/token.png"
                  alt="Raj Parampara Token"
                  className="w-full h-full object-contain hover:scale-130 duration-300"
                />

              </div>

            </div>



            <div className="grid grid-cols-2 justify-center gap-4">

              <Link
                href="/seller-onboarding"
                className="bg-amber-300 text-black lg:px-8 px-5 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-amber-400 transition"
              >
                विक्रेता बनें
                <FiArrowRight />
              </Link>


              <Link
                href="/seller"
                className="border text-[#2D1B12] lg:px-8 px-5 py-3 rounded-full bg-white hover:bg-amber-300 font-semibold transition"
              >
                अधिक जानें
              </Link>

            </div>


          </div>


        </div>

      </div>
    </section>
  );
}