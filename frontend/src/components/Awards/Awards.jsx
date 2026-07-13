import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import FeaturedRecognition from "./FeaturedRecognition";
import RecognitionTimeline from "./RecognitionTimeline";
import RecognitionSupports from "./RecognitionSupports";
import ExploreDestination from "./ExploreDestination";

const pageMeta = {
  title: "Awards & Recognition | Home Square and Manakamna Group",
  description: "Discover awards, recognitions, media visibility and credibility signals connected to Home Square and Manakamna Group."
};

const Awards = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <FeaturedRecognition />
      <RecognitionTimeline />
      <RecognitionSupports />
      <ExploreDestination />
    </SiteShell>
  );
};

export default Awards;
