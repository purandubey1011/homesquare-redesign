import { CardsSection } from "../site/PageSections";

const section = {
  type: "statusCards",
  heading: "Current project status.",
  items: [
    {
      title: "Project completed",
      body: "The destination is positioned as operationally ready and visually established."
    },
    {
      title: "Spaces ready for brands",
      body: "Prospective tenants can now evaluate fit, frontage and environment more clearly."
    },
    {
      title: "Site visits available",
      body: "The project can be experienced in person for practical decision-making."
    }
  ]
};

const CurrentProject = () => <CardsSection section={section} />;

export default CurrentProject;
