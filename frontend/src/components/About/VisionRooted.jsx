import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "A vision rooted in relevance, experience and long-term value.",
  items: [
    {
      title: "For customers",
      body: "A single destination to explore home, decor, furnishing, electronics and lifestyle needs more efficiently."
    },
    {
      title: "For brands",
      body: "A stronger commercial environment where complementary categories improve discovery and conversion."
    },
    {
      title: "For the city",
      body: "A premium development that contributes to Siliguri's growing market and modern retail landscape."
    }
  ]
};

const VisionRooted = () => <CardsSection section={section} />;

export default VisionRooted;
