import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import ChooseSpace from "./ChooseSpace";
import SpaceTypes from "./SpaceTypes";
import BestSuited from "./BestSuited";
import LocationFormat from "./LocationFormat";
import BusinessUse from "./BusinessUse";
import EnquireSpace from "./EnquireSpace";
import SeeDestination from "./SeeDestination";

const pageMeta = {
  title: "Leasing Home Square Siliguri | Premium Commercial Spaces for Brands",
  description: "Explore commercial spaces at Home Square, Siliguri for showrooms, offices, retail stores and experience centres in a premium category-led destination."
};

const Leasing = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <ChooseSpace />
      <SpaceTypes />
      <BestSuited />
      <LocationFormat />
      <BusinessUse />
      <EnquireSpace />
      <SeeDestination />
    </SiteShell>
  );
};

export default Leasing;
