import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Gallery",
  title: "A visual look at the Home Square destination.",
  subtitle: "Explore the architecture, elevations, interiors, common areas, commercial spaces, amenities and brand-ready environment of Home Square.",
  body: "The gallery is designed to help visitors, brands and prospective tenants understand the physical quality and premium character of the destination.",
  primaryCta: {
    label: "View Gallery",
    href: "#gallery-sections"
  },
  secondaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  trustLine: "A commercial destination built to be experienced in person and understood visually.",
  image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
