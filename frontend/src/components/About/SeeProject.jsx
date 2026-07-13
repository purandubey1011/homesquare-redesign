import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "See the project, meet the team and explore the business potential.",
  body: "Whether you're evaluating a space or learning more about the destination, Home Square is ready for informed conversations and site visits.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "View Project Updates",
    href: "/project-updates"
  }
};

const SeeProject = () => <CTABanner section={section} />;

export default SeeProject;
