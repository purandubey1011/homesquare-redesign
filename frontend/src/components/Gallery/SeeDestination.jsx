import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "See the destination, then see it in person.",
  body: "The gallery offers a preview, but a site visit gives the clearest sense of scale, frontage, accessibility and commercial fit.",
  primaryCta: {
    label: "Schedule Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Explore Brands",
    href: "/brands"
  }
};

const SeeDestination = () => <CTABanner section={section} />;

export default SeeDestination;
