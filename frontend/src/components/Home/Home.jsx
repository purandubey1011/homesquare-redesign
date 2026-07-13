import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import BuiltBusiness from "./BuiltBusiness";
import FocusedCommercial from "./FocusedCommercial";
import LocationAdvantage from "./LocationAdvantage";
import DesignedSupport from "./DesignedSupport";
import CategoryEcosystem from "./CategoryEcosystem";
import CommercialSpaces from "./CommercialSpaces";
import BusinessReady from "./BusinessReady";
import DestinationVisitors from "./DestinationVisitors";
import BackedTrusted from "./BackedTrusted";
import VisualPreview from "./VisualPreview";
import EnquireCommercial from "./EnquireCommercial";
import VisitEnquire from "./VisitEnquire";

const pageMeta = {
  title: "Home Square Siliguri | Premium Commercial Spaces for Interior & Lifestyle Brands",
  description: "Home Square is Siliguri's dedicated home, interior, decor, furnishing and lifestyle destination with premium commercial spaces, strong connectivity, parking, security, food court and business-ready amenities."
};

const Home = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <BuiltBusiness />
      <FocusedCommercial />
      <LocationAdvantage />
      <DesignedSupport />
      <CategoryEcosystem />
      <CommercialSpaces />
      <BusinessReady />
      <DestinationVisitors />
      <BackedTrusted />
      <VisualPreview />
      <EnquireCommercial />
      <VisitEnquire />
    </SiteShell>
  );
};

export default Home;
