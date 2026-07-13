import { TimelineSection } from "../site/PageSections";

const section = {
  type: "timeline",
  heading: "Project journey timeline.",
  items: [
    {
      title: "Concept & Planning",
      body: "A category-led destination was shaped around the home, interior and lifestyle ecosystem."
    },
    {
      title: "Development & Build",
      body: "The project moved from idea to physical destination with a premium business-ready framework."
    },
    {
      title: "Completion & Activation",
      body: "Home Square is now positioned for business discovery, site visits and leasing conversations."
    }
  ]
};

const ProjectJourney = () => <TimelineSection section={section} />;

export default ProjectJourney;
