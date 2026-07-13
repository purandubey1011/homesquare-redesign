import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import DestinationCategory from "./DestinationCategory";
import EightReasons from "./EightReasons";
import RegularCommercial from "./RegularCommercial";
import BestSuited from "./BestSuited";
import IfBrand from "./IfBrand";

const pageMeta = {
  title: "Why Home Square Siliguri | Premium Commercial Space for Business Growth",
  description: "Discover why Home Square is one of Siliguri's most promising commercial destinations for home, interior, lifestyle, furniture, electronics, decor and furnishing brands."
};

const WhyHomeSquare = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <DestinationCategory />
      <EightReasons />
      <RegularCommercial />
      <BestSuited />
      <IfBrand />
    </SiteShell>
  );
};

export default WhyHomeSquare;
