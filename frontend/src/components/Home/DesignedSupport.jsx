import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Why Home Square",
  title: "Designed to support better business performance.",
  body: "Home Square combines category relevance, business-ready amenities, customer convenience and destination value so brands can operate from a stronger commercial environment.",
  points: [
    "High-intent visitor movement",
    "Premium frontage and better visibility",
    "Amenities that support day-to-day operations",
    "A stronger environment for brand positioning"
  ],
  cta: {
    label: "See the Business Case",
    href: "/why-homesquare"
  },
  image: "/photos/home/homesquarebrands.jpeg",
  reverse: true
};

const DesignedSupport = () => <SplitSection section={section} />;

export default DesignedSupport;
