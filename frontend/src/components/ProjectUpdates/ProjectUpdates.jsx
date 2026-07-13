import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import CurrentProject from "./CurrentProject";
import ProjectJourney from "./ProjectJourney";
import ProjectUpdate from "./ProjectUpdate";
import CompletionMeans from "./CompletionMeans";
import ReadyExplore from "./ReadyExplore";

const pageMeta = {
  title: "Project Updates | Home Square Siliguri",
  description: "Follow project completion, readiness and business opportunity updates for Home Square in Salugara, Siliguri."
};

const ProjectUpdates = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <CurrentProject />
      <ProjectJourney />
      <ProjectUpdate />
      <CompletionMeans />
      <ReadyExplore />
    </SiteShell>
  );
};

export default ProjectUpdates;
