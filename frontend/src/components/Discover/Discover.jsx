import { useEffect } from "react";
import DiscoverCardsSection from "./DiscoverCardsSection";
import DiscoverFooter from "./DiscoverFooter";
import DiscoverIntroSection from "./DiscoverIntroSection";
import DiscoverNavbar from "./DiscoverNavbar";
import DiscoverPackagesSection from "./DiscoverPackagesSection";
import DiscoverStorySection from "./DiscoverStorySection";

export default function Discover() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <DiscoverNavbar />
      <DiscoverIntroSection />
      <DiscoverCardsSection />
      <DiscoverStorySection />
      <DiscoverPackagesSection />
      <DiscoverFooter />
    </div>
  );
}
