import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "One Stop Interior Destination",
  title: "A complete destination for home, interior, decor, furnishing and lifestyle needs.",
  subtitle: "Home Square is designed to bring multiple relevant categories together so customers can discover more and businesses can benefit from shared intent.",
  body: "It is a one-stop destination built around how real home decisions happen: comparison, consultation, inspiration and convenience in one place.",
  primaryCta: {
    label: "Explore Categories",
    href: "#category-grid"
  },
  secondaryCta: {
    label: "See Available Spaces",
    href: "/leasing"
  },
  trustLine: "A destination format that works better for both customers and brands.",
  image: "/businesses/furnishing/img-8322.webp"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
