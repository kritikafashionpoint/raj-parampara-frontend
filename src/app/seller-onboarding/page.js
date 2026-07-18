
import { seller_onboarding_meta } from "../seo/meta_content";
import SellerOnboardingClient from "./SellerOnboardingClient";

export const meta_data = {
    title: seller_onboarding_meta.title,
    description: seller_onboarding_meta.description
}

export default function Page() {

    return (
        <>
            <SellerOnboardingClient />
        </>
    );
}