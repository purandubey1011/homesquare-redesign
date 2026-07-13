import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Leasing / Available Spaces",
  title: "Premium commercial spaces for ambitious brands.",
  subtitle: "Home Square offers showroom, office, retail and experience-led commercial spaces for businesses aligned with the home, interior and lifestyle ecosystem.",
  body: "If your business benefits from category relevance, destination footfall and premium presentation, Home Square offers a stronger place to grow.",
  primaryCta: {
    label: "Enquire for Space",
    href: "#page-form"
  },
  secondaryCta: {
    label: "Schedule Site Visit",
    href: "/contact-us"
  },
  trustLine: "Commercial spaces designed for performance, perception and long-term business value.",
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
