import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Why book a site visit?",
  items: [
    {
      title: "Explore available commercial spaces",
      body: "See the scale, fit and possible use of the destination in real terms."
    },
    {
      title: "Understand location and connectivity",
      body: "Evaluate access, visibility and business practicality firsthand."
    },
    {
      title: "Review amenities and common areas",
      body: "See how parking, circulation, comfort and convenience support the overall destination."
    }
  ]
};

const BookSite = () => <CardsSection section={section} />;

export default BookSite;
