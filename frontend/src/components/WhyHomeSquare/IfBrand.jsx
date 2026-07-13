import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "If your brand depends on the home, interior or lifestyle customer journey, Home Square is built for that decision path.",
  body: "Explore the location, understand the destination and see how your business can fit into a stronger ecosystem.",
  primaryCta: {
    label: "Explore Leasing",
    href: "/leasing"
  },
  secondaryCta: {
    label: "Contact Our Team",
    href: "/contact-us"
  }
};

const IfBrand = () => <CTABanner section={section} />;

export default IfBrand;
