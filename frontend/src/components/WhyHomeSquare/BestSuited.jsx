import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Best suited for brands across the home and lifestyle journey.",
  items: [
    {
      title: "Furniture & Furnishing Brands",
      body: "For businesses that need destination discovery, display-led selling and comparison-friendly customer journeys."
    },
    {
      title: "Lighting, Tiles & Paint Brands",
      body: "For technical and finish-driven categories that benefit from adjacency and project-led buying."
    },
    {
      title: "Modular Kitchen & Sanitaryware Brands",
      body: "For consultative businesses that need serious inquiry traffic and experience-led selling."
    },
    {
      title: "Lifestyle & Decor Brands",
      body: "For premium offerings that gain from being surrounded by complementary categories."
    }
  ]
};

const BestSuited = () => <CardsSection section={section} />;

export default BestSuited;
