import { AmenitiesSection } from "../site/PageSections";

const section = {
  type: "amenities",
  heading: "Amenities at a glance.",
  items: [
    "Parking",
    "Security",
    "Lifts",
    "Wide passages",
    "Comfortable common areas",
    "Food court support",
    "Easy visitor circulation",
    "Business-ready environment"
  ]
};

const Amenities = () => <AmenitiesSection section={section} />;

export default Amenities;
