import { AmenitiesSection } from "../site/PageSections";

const section = {
  type: "amenities",
  heading: "Business-ready conveniences that improve every visit.",
  items: [
    "Parking",
    "Security",
    "Lifts",
    "Wide passages",
    "Food court access",
    "Smooth visitor circulation",
    "Comfortable common areas",
    "Practical daily operations support"
  ],
  cta: {
    label: "See All BusinessReady",
    href: "/amenities"
  }
};

const BusinessReady = () => <AmenitiesSection section={section} />;

export default BusinessReady;
