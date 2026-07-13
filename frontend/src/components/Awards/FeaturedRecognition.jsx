import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Featured recognition.",
  items: [
    {
      title: "Executive leadership recognition",
      body: "Sahil Chaudhary was honoured for Outstanding Contribution in Regional Infrastructure Development at the Iconic Achievers Award East Edition 2025."
    },
    {
      title: "Project-level credibility",
      body: "Home Square continues to gain recognition for its commercial concept, theme-based planning and market presence."
    },
    {
      title: "Media and market visibility",
      body: "Awards and coverage reinforce trust for tenants, brands and business decision-makers."
    }
  ]
};

const FeaturedRecognition = () => <CardsSection section={section} />;

export default FeaturedRecognition;
