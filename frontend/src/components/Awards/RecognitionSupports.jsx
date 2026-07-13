import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Why This Matters",
  title: "Recognition supports trust when businesses are choosing where to grow.",
  body: "Awards and visibility do not replace practical due diligence, but they do reinforce confidence in the developer, the project and the seriousness behind the destination.",
  points: [
    "Improves first-level trust",
    "Strengthens brand confidence",
    "Supports long-term credibility in the market"
  ],
  cta: {
    label: "See Project Updates",
    href: "/project-updates"
  },
  image: "/photos/home/homesquarebrands.jpeg"
};

const RecognitionSupports = () => <SplitSection section={section} />;

export default RecognitionSupports;
