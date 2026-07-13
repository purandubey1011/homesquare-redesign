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
  image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
