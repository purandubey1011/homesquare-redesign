import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Why customers and businesses benefit from this ecosystem.",
  items: [
    {
      title: "Customers benefit",
      body: "They can discover, compare and complete more of their decision journey in one visit.",
      image: "/businesses/cafe/img-8880.webp"
    },
    {
      title: "Brands benefit",
      body: "They gain stronger adjacency, better context and more meaningful customer flow.",
      image: "/businesses/property/brands-at-home-square.webp"
    },
    {
      title: "The destination benefits",
      body: "A more relevant mix strengthens repeat visits, trust and premium perception.",
      image: "/businesses/property/side-front.webp"
    }
  ]
};

const CustomersBusinesses = () => <CardsSection section={section} />;

export default CustomersBusinesses;
