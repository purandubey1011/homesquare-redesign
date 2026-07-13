import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Space types available.",
  items: [
    {
      title: "Showroom Spaces",
      body: "Ideal for furniture, appliances, marbles, lighting, tiles and sanitaryware brands."
    },
    {
      title: "Retail Stores",
      body: "Suitable for decor, furnishing, accessories, lifestyle and home styling businesses."
    },
    {
      title: "Office Spaces",
      body: "For interior firms, architects, consultants and back-end support teams."
    },
    {
      title: "Experience Centres",
      body: "For consultation-led or demo-led brands that need a richer customer journey."
    }
  ]
};

const SpaceTypes = () => <CardsSection section={section} />;

export default SpaceTypes;
