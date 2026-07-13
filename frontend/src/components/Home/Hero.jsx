import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Home Square, Siliguri",
  title: "Siliguri's Dedicated Destination for Home, Interior & Lifestyle Brands",
  subtitle: "A premium commercial hub designed for brands in interiors, furniture, electronics, decor, furnishing, tiles, lighting, kitchen solutions and more.",
  body: "Located in Salugara, Home Square brings together high-intent customers, strong connectivity, business-ready spaces and a complete home improvement ecosystem under one roof.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "Download Brochure",
    href: "mailto:hello@homesquare.info?subject=Home%20Square%20Brochure%20Request"
  },
  trustLine: "Premium commercial spaces available for showrooms, retail stores, offices and experience centres.",
  image: "/photos/home/hero/homesquare.png",
  videoBackup: "/video/homesqaurehero.mp4"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
