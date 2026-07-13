import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Conveniences & Amenities",
  title: "Premium conveniences that make business smoother and visits more comfortable.",
  subtitle: "Home Square supports both customer experience and day-to-day commercial practicality through a thoughtful amenities layer.",
  body: "The destination is designed to make arrival, circulation, exploration, operations and longer visits feel easier for everyone using the space.",
  primaryCta: {
    label: "Enquire Now",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Explore Leasing",
    href: "/leasing"
  },
  trustLine: "Built for brands, visitors, staff and real-world daily use.",
  image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
