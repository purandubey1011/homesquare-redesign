import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Why Home Square was created.",
  intro: "Home Square was created to answer a market gap: a premium, category-focused destination for businesses connected to homes, interiors, furnishing, lifestyle and modern living.",
  items: [
    {
      title: "To reduce fragmentation",
      body: "Customers no longer need to jump across disconnected locations to complete one decision journey."
    },
    {
      title: "To improve quality of footfall",
      body: "Brands benefit more when visitors arrive with category-specific intent."
    },
    {
      title: "To create stronger brand synergy",
      body: "Complementary businesses create a more useful and persuasive destination together."
    }
  ]
};

const HomeSquare = () => <CardsSection section={section} />;

export default HomeSquare;
