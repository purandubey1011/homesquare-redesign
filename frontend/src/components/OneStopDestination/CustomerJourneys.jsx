import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Business Advantage",
  title: "When customer journeys connect, brand performance improves.",
  body: "Businesses inside Home Square benefit from adjacency, shared relevance, stronger discovery and a destination context that naturally supports better intent.",
  points: [
    "More relevant surrounding categories",
    "Improved dwell time and destination value",
    "Greater potential for cross-category discovery"
  ],
  cta: {
    label: "Explore Brands",
    href: "/brands"
  },
  image: "/businesses/interiors/img-8938.webp",
  reverse: true
};

const CustomerJourneys = () => <SplitSection section={section} />;

export default CustomerJourneys;
