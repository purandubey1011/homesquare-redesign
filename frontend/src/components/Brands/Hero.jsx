import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Brands at Home Square",
  title: "Brands that make Home Square a complete destination.",
  subtitle: "Home Square brings together leading home, interior, lifestyle, furnishing, electronics and service brands under one premium commercial address in Salugara, Siliguri.",
  body: "From electronics and furnishings to interiors, lifestyle services and home improvement solutions, Home Square is growing into a destination where customers can explore multiple trusted brands in one visit.",
  primaryCta: {
    label: "Explore Brands",
    href: "#featured-brands"
  },
  secondaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  },
  trustLine: "A curated ecosystem where each brand adds relevance to the whole destination.",
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
