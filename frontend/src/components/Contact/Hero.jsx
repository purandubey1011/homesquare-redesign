import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Contact Home Square",
  title: "Book a site visit, enquire for space or speak with our team.",
  subtitle: "Looking for a premium commercial space in Siliguri? Get in touch with us to enquire, book a site visit or explore available spaces.",
  body: "Home Square is located at Bikash Nagar, Salugara Bazar - a strategic commercial address for brands, showrooms, offices, retail stores and experience centres.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "#contact-form"
  },
  secondaryCta: {
    label: "Call 80011-71000",
    href: "tel:80011-71000"
  },
  trustLine: "Clear, premium and action-focused communication for serious business enquiries.",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
