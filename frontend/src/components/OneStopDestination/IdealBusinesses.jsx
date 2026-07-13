import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Ideal for businesses that serve the home and lifestyle customer.",
  items: [
    {
      title: "For brands",
      body: "A stronger ecosystem for product-led, consultation-led and design-led businesses."
    },
    {
      title: "For customers",
      body: "A simpler, more complete place to plan purchases and project decisions."
    },
    {
      title: "For the destination",
      body: "A clearer identity that strengthens repeat visits and premium perception."
    }
  ]
};

const IdealBusinesses = () => <CardsSection section={section} />;

export default IdealBusinesses;
