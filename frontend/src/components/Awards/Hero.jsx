import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Awards & Recognition",
  title: "Credibility built through recognition, visibility and trust.",
  subtitle: "Home Square and Manakamna Group are positioned through awards, recognitions, media mentions and long-term market confidence.",
  body: "For businesses evaluating a commercial destination, recognition matters because it signals credibility, seriousness and broader market trust.",
  primaryCta: {
    label: "Know About the Developer",
    href: "/about"
  },
  secondaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  },
  trustLine: "Recognition adds confidence to the destination behind the opportunity.",
  image: "/businesses/property/out-close-2.webp"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
