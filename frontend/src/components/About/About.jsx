import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import MoreThan from "./MoreThan";
import VisionRooted from "./VisionRooted";
import DevelopedManakamna from "./DevelopedManakamna";
import DeveloperPhilosophy from "./DeveloperPhilosophy";
import HomeSquare from "./HomeSquare";
import PreviewHome from "./PreviewHome";
import CompletedOngoing from "./CompletedOngoing";
import SeeProject from "./SeeProject";

const pageMeta = {
  title: "About Home Square Siliguri | Developed by Manakamna Group",
  description: "Learn about Home Square, Siliguri and the developer vision behind a focused premium commercial destination for interiors, lifestyle and home improvement brands."
};

const About = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <MoreThan />
      <VisionRooted />
      <DevelopedManakamna />
      <DeveloperPhilosophy />
      <HomeSquare />
      <PreviewHome />
      <CompletedOngoing />
      <SeeProject />
    </SiteShell>
  );
};

export default About;
