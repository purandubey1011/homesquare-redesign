import { useEffect } from "react";
import RelaxFooter from "./RelaxFooter";
import RelaxHero from "./RelaxHero";
import RelaxIntroSection from "./RelaxIntroSection";
import RelaxNavbar from "./RelaxNavbar";
import RelaxOrganicSection from "./RelaxOrganicSection";
import RelaxTreatmentsSection from "./RelaxTreatmentsSection";
import RelaxYogaSection from "./RelaxYogaSection";

export default function Relax() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <RelaxNavbar />
      <RelaxHero />
      <RelaxIntroSection />
      <RelaxOrganicSection />
      <RelaxTreatmentsSection />
      <RelaxYogaSection />
      <RelaxFooter />
    </div>
  );
}
