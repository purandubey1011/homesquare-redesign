import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "Explore a destination backed by credibility and commercial intent.",
  body: "If recognition, trust and project quality matter to your business decision, Home Square is ready for a closer look.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Explore Leasing",
    href: "/leasing"
  }
};

const ExploreDestination = () => <CTABanner section={section} />;

export default ExploreDestination;
