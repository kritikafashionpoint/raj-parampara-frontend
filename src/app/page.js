import Image from "next/image";
import Banner from "./home/Banner";
import Shopbycategory from "./home/Shopbycategory";
import TopSelling from "./home/TopSelling";
import WhyChooseUs from "./home/WhyChooseUs";
import BecomeSeller from "./home/BecomeSeller";
import NewArrivals from "./home/NewArrivals";
import OurStory from "./home/OurStory";
import FAQSection from "./home/Faq";

export default function Home() {
  return (
    <>
      <Banner />
      <Shopbycategory />
      <NewArrivals />
      <TopSelling />
      <OurStory />
      <WhyChooseUs />
      <BecomeSeller />
      <FAQSection/>
    </>
  );
}
