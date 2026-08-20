import { PageHero } from "../site/PageSections";

const hero = {
  eyebrow: "Blog",
  title: "A knowledge hub for business growth, home lifestyle and destination updates.",
  subtitle: "The Home Square Blog brings together news, ideas and insights for businesses, brands, buyers and anyone interested in Siliguri's growing home and lifestyle market.",
  body: "From project updates and awards to commercial space guidance and category insights, the blog supports both trust-building and SEO growth.",
  primaryCta: {
    label: "Read Latest Blogs",
    href: "#latest-articles"
  },
  secondaryCta: {
    label: "Explore Home Square",
    href: "/"
  },
  trustLine: "For brands, buyers and businesses - stay informed with Home Square.",
  image: "/businesses/interiors/img-8959.webp"
};

const Hero = () => <PageHero hero={hero} />;

export default Hero;
