import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "What completion means for businesses.",
  items: [
    {
      title: "More confidence",
      body: "Brands can evaluate the real environment instead of relying only on projections."
    },
    {
      title: "Faster decision-making",
      body: "Site visits, frontage review and location understanding become easier."
    },
    {
      title: "Clearer commercial planning",
      body: "Businesses can better assess fit, movement, visibility and experience value."
    }
  ]
};

const CompletionMeans = () => <CardsSection section={section} />;

export default CompletionMeans;
