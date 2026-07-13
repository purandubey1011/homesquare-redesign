import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Completed and ongoing momentum.",
  items: [
    {
      title: "Project delivery confidence",
      body: "Home Square is positioned as an active, credible and business-ready destination."
    },
    {
      title: "Recognition-backed perception",
      body: "Awards, media visibility and market acknowledgement strengthen project trust."
    },
    {
      title: "Future growth potential",
      body: "The destination is built to attract both visitors and brands over the long term."
    }
  ]
};

const CompletedOngoing = () => <CardsSection section={section} />;

export default CompletedOngoing;
