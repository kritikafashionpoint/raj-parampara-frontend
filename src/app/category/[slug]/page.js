import { specific_category_meta } from "@/app/seo/meta_content";
import SpecificCategory from "./SpecificCategory";

export const metadata = {
    title : specific_category_meta.title,
    description : specific_category_meta.description
}

export default function page() {
   
    return (
      <>
        <SpecificCategory/>
      </>
    )
}
