import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "See the destination before you decide.",
  body: "A site visit helps you understand frontage, layout, customer movement, amenities, access and the overall brand environment in a practical way.",
  primaryCta: {
    label: "Schedule a Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Explore Brands",
    href: "/brands"
  }
};

const SeeDestination = () => <CTABanner section={section} />;

export default SeeDestination;
