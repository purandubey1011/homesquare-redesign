import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Why customers and businesses benefit from this ecosystem.",
  items: [
    {
      title: "Customers benefit",
      body: "They can discover, compare and complete more of their decision journey in one visit.",
      image: "/card-images/benefit-customers.jpg"
    },
    {
      title: "Brands benefit",
      body: "They gain stronger adjacency, better context and more meaningful customer flow.",
      image: "/card-images/benefit-brands.jpg"
    },
    {
      title: "The destination benefits",
      body: "A more relevant mix strengthens repeat visits, trust and premium perception.",
      image: "/card-images/benefit-destination.jpg"
    }
  ]
};

const CustomersBusinesses = () => <CardsSection section={section} />;

export default CustomersBusinesses;
