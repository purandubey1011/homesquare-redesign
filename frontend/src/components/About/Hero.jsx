import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "About Home Square",
  title: "Built with a focused vision for the future of home and lifestyle retail.",
  subtitle: "Home Square is a premium commercial destination created to bring together complementary categories, stronger customer journeys and credible business opportunities under one address.",
  body: "Developed by Manakamna Group, Home Square reflects a deliberate approach to category-led commerce, better visitor experience and a premium environment for brands ready to grow in Siliguri.",
  primaryCta: {
    label: "Explore Leasing",
    href: "/leasing"
  },
  secondaryCta: {
    label: "Contact the Team",
    href: "/contact-us"
  },
  trustLine: "A commercial destination shaped around trust, utility and long-term relevance.",
  image: "/businesses/property/brands-at-home-square.webp"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
