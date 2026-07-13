import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Business conveniences.",
  items: [
    {
      title: "Operational practicality",
      body: "Amenities that support daily business flow and customer management."
    },
    {
      title: "Better visit quality",
      body: "A more complete destination encourages more meaningful in-person exploration."
    },
    {
      title: "Premium brand environment",
      body: "Convenience and presentation together create stronger perception."
    }
  ]
};

const BusinessConveniences = () => <CardsSection section={section} />;

export default BusinessConveniences;
