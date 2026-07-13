'use client'
import { useEffect, useState } from "react";
import CheckoutForm from "./comps/CheckoutForm";
import CheckoutHeader from "./comps/CheckoutHeader";
import OrderSummary from "./comps/OrderSummary";
import PaymentMethod from "./comps/PaymentMethod";



export default function CheckOutClient() {

    const [progress, setProgress] = useState(0);

    const [formData, setFormData] = useState({

        // Contact

        name: "",
        mobile: "",
        email: "",

        // Address

        house: "",
        street: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",

        // Payment
        payment: ""

    });

    useEffect(() => {
        const requiredFields = [
            "name",
            "mobile",
            "house",
            "street",
            "city",
            "state",
            "pincode",
            "payment",
        ];

        const completed = requiredFields.filter((field) => {
            const value = formData[field];
            return typeof value === "string"
                ? value.trim() !== ""
                : Boolean(value);
        }).length;

        setProgress(Math.round((completed / requiredFields.length) * 100));
    }, [formData]);

    console.log(formData);


    const handlePlaceOrder = async () => {
        if (formData.payment === "cod") {
            alert('cod ok')
            // Create order in DB
            // Payment Status = Pending
            // Order Status = Confirmed
            // router.push("/order-success");
        }

        if (formData.payment === "online") {
            alert('online ok')
            // 1. Create Razorpay Order from backend
            // 2. Open Razorpay Checkout
            // 3. Verify Payment
            // 4. Save Order
            // 5. router.push("/order-success");
        }
    };



    return (
        <section className="min-h-screen bg-amber-50 py-10 lg:py-16">
            <div className="max-w-[1420] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <CheckoutHeader progress={progress} />

                {/* Main Layout */}
                <div className="grid lg:grid-cols-[1.6fr_0.8fr] gap-8 mt-10">

                    {/* Left Side */}
                    <div className="space-y-8">

                        <CheckoutForm
                            formData={formData}
                            setFormData={setFormData} />

                        <PaymentMethod
                            formData={formData}
                            setFormData={setFormData}
                        />

                    </div>

                    {/* Right Side */}
                    <OrderSummary onPlaceOrder={handlePlaceOrder} />

                </div>

            </div>
        </section>
    );
}