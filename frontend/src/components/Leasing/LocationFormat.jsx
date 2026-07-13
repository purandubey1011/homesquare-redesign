import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Why Lease at Home Square",
  title: "A location and format designed to support commercial growth.",
  body: "Leasing at Home Square means being part of a destination that already aligns with your category, attracts relevant customers and gives your brand a stronger environment to be seen, compared and chosen.",
  points: [
    "Category-led visitor intent",
    "Premium destination value",
    "Operational convenience and amenity support",
    "Better customer discovery and stay time"
  ],
  cta: {
    label: "Why It Works",
    href: "/why-homesquare"
  },
  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
};

const LocationFormat = () => <SplitSection section={section} />;

export default LocationFormat;
