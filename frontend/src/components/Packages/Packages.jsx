import { useEffect } from "react";
import DiscoverFooter from "../Discover/DiscoverFooter";
import PackagesHeroSection from "./PackagesHeroSection";
import PackagesNavbar from "./PackagesNavbar";

export default function Packages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <PackagesNavbar />
      <PackagesHeroSection />
      <DiscoverFooter />
    </div>
  );
}
