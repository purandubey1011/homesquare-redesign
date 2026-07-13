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
  image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
