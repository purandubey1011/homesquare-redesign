import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Backed by a trusted developer.",
  intro: "Home Square is developed by Manakamna Group, bringing credibility, execution confidence and a legacy-led approach to commercial development.",
  items: [
    {
      title: "Established developer backing",
      body: "Built with long-term intent, not short-term speculation."
    },
    {
      title: "Credibility in planning and delivery",
      body: "A premium project shaped for sustainable business use and trust."
    },
    {
      title: "Recognition and market confidence",
      body: "Supported by awards, media visibility and regional credibility."
    }
  ],
  cta: {
    label: "Know About the Developer",
    href: "/about"
  }
};

const BackedTrusted = () => <CardsSection section={section} />;

export default BackedTrusted;
