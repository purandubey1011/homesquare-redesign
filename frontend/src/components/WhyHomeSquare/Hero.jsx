import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Why Home Square",
  title: "A stronger commercial destination for brands that want relevance, visibility and growth.",
  subtitle: "Home Square brings together market opportunity, category focus, customer intent, premium infrastructure and strategic location into one business case.",
  body: "For tenants, investors and growth-minded brands, Home Square offers more than space. It offers a more purposeful commercial environment.",
  primaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  },
  secondaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  trustLine: "Built around long-term business value, not generic retail clutter.",
  image: "/businesses/property/out-medium-1.webp"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
