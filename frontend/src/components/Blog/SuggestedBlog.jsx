import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Suggested blog topics for SEO growth.",
  items: [
    {
      title: "Why Retail Brands Need Experience Centres, Not Just Stores",
      body: "A thought piece on how modern buyers evaluate products and services in person."
    },
    {
      title: "Why Furniture & Furnishing Brands Should Choose Destination-Led Spaces",
      body: "An SEO-driven article aligned with Home Square's market fit."
    },
    {
      title: "Why Home Square Is Ideal for Home, Interior and Lifestyle Brands",
      body: "A conversion-friendly explainer built for organic search and business outreach."
    }
  ]
};

const SuggestedBlog = () => <CardsSection section={section} />;

export default SuggestedBlog;
