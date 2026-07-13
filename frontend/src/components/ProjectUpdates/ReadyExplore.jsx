import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "Ready to explore the opportunity in person?",
  body: "Visit Home Square, understand the destination and evaluate the business potential with our team.",
  primaryCta: {
    label: "Schedule a Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Explore Leasing",
    href: "/leasing"
  }
};

const ReadyExplore = () => <CTABanner section={section} />;

export default ReadyExplore;
