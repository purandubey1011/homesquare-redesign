import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Business use cases by category.",
  items: [
    {
      title: "For Furniture Brands",
      body: "Large displays, room concepts and comparison-led shopping become easier in a destination format."
    },
    {
      title: "For Electronics Brands",
      body: "Appliances and home electronics benefit from strong complementary traffic and modern positioning."
    },
    {
      title: "For Modular Kitchen Brands",
      body: "Consultation-heavy businesses gain from qualified walk-ins and destination-based research visits."
    },
    {
      title: "For Decor & Lifestyle Brands",
      body: "Premium impulse and project-led purchases improve when the surrounding context is aligned."
    }
  ]
};

const BusinessUse = () => <CardsSection section={section} />;

export default BusinessUse;
