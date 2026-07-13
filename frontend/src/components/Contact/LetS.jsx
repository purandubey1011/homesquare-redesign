import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "Let's start the conversation.",
  body: "Whether you need a showroom, retail unit, office, experience centre or simply want to visit the destination, Home Square is ready for your enquiry.",
  primaryCta: {
    label: "Call 80011-71000",
    href: "tel:80011-71000"
  },
  secondaryCta: {
    label: "Email Us",
    href: "mailto:hello@homesquare.info"
  }
};

const LetS = () => <CTABanner section={section} />;

export default LetS;
