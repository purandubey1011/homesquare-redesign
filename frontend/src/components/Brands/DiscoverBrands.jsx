import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "Discover brands. Explore possibilities. Experience Home Square.",
  body: "If your business belongs in this ecosystem, now is the time to explore the opportunity.",
  primaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  },
  secondaryCta: {
    label: "Contact the Team",
    href: "/contact-us"
  }
};

const DiscoverBrands = () => <CTABanner section={section} />;

export default DiscoverBrands;
