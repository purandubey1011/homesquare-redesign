import DiningBarSection from "./DiningBarSection";
import DiningCookbookSection from "./DiningCookbookSection";
import DiningFooter from "./DiningFooter";
import DiningHero from "./DiningHero";
import DiningLocalGoodSection from "./DiningLocalGoodSection";
import DiningMenuSection from "./DiningMenuSection";
import DiningNavbar from "./DiningNavbar";
import DiningStorySection from "./DiningStorySection";
import { storySections } from "./diningData";

export default function Dining() {
  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <DiningNavbar />
      <DiningHero />
      {storySections.map((section, index) => (
        <DiningStorySection
          key={section.id}
          {...section}
          reverse={index % 2 === 1}
        />
      ))}
      <DiningLocalGoodSection />
      <DiningMenuSection />
      <DiningCookbookSection />
      <DiningBarSection />
      <DiningFooter />
    </div>
  );
}
