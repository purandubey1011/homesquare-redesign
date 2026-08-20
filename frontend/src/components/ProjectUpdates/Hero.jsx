import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Project Updates",
  title: "Home Square is completed, active and ready for business.",
  subtitle: "Project updates help prospective brands and visitors understand progress, completion, readiness and the commercial opportunity ahead.",
  body: "From completion milestones to site visit readiness, Home Square is positioned as a destination that can now be explored in real terms.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  },
  trustLine: "A completed destination is easier to evaluate, easier to trust and easier to plan for.",
  image: "/businesses/property/out-far-3.webp"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
