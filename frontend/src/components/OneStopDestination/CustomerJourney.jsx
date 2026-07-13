import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "The customer journey at Home Square.",
  items: [
    {
      title: "Discover",
      body: "Explore multiple relevant brands in one destination instead of scattered locations."
    },
    {
      title: "Compare",
      body: "Evaluate solutions across categories, finishes, budgets and styles in a more efficient way."
    },
    {
      title: "Decide",
      body: "Move from inspiration to consultation to purchase with less friction."
    },
    {
      title: "Stay Longer",
      body: "Amenities and food options make the visit more comfortable and complete."
    }
  ]
};

const CustomerJourney = () => <CardsSection section={section} />;

export default CustomerJourney;
