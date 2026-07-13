import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import OneStop from "./OneStop";
import HomeSquare from "./HomeSquare";
import CustomerJourney from "./CustomerJourney";
import CustomerJourneys from "./CustomerJourneys";
import IdealBusinesses from "./IdealBusinesses";
import ExperienceDestination from "./ExperienceDestination";

const pageMeta = {
  title: "One Stop Interior Destination in Siliguri | Home Square",
  description: "Home Square is Siliguri's one-stop destination for furniture, furnishings, electronics, lighting, tiles, paint, decor, kitchen solutions, sanitaryware and complete home improvement needs."
};

const OneStopDestination = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <OneStop />
      <HomeSquare />
      <CustomerJourney />
      <CustomerJourneys />
      <IdealBusinesses />
      <ExperienceDestination />
    </SiteShell>
  );
};

export default OneStopDestination;
