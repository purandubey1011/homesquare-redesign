import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "Experience a destination where multiple needs come together under one roof.",
  body: "If your business fits the home, interior or lifestyle journey, Home Square is designed to make that relevance visible.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  }
};

const ExperienceDestination = () => <CTABanner section={section} />;

export default ExperienceDestination;
