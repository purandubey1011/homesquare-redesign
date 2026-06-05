import StayCollageSection from "./StayCollageSection";
import StayFooter from "./StayFooter";
import StayHero from "./StayHero";
import StayNavbar from "./StayNavbar";
import StayVillaGrid from "./StayVillaGrid";

export default function Stay() {
  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <StayNavbar />
      <StayHero />
      <StayVillaGrid />
      <StayCollageSection />
      <StayFooter />
    </div>
  );
}
