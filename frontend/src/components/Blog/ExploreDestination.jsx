import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "Explore the destination behind the stories.",
  body: "The Home Square Blog is your space to learn more about Siliguri's commercial growth, category opportunities and the destination itself.",
  primaryCta: {
    label: "Read Latest Blogs",
    href: "#latest-articles"
  },
  secondaryCta: {
    label: "Enquire for Space",
    href: "/leasing"
  }
};

const ExploreDestination = () => <CTABanner section={section} />;

export default ExploreDestination;
