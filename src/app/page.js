import Image from "next/image";
import Banner from "./home/Banner";
import Shopbycategory from "./home/Shopbycategory";
import TopSelling from "./home/TopSelling";
import WhyChooseUs from "./home/WhyChooseUs";
import BecomeSeller from "./home/BecomeSeller";
import NewArrivals from "./home/NewArrivals";
import OurStory from "./home/OurStory";

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
    </>
  );
}
