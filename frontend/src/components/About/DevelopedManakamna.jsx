import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Developer Introduction",
  title: "Developed by Manakamna Group.",
  body: "The project is backed by Manakamna Group's intent to create meaningful commercial spaces with clearer market logic, stronger trust and a more complete user experience.",
  points: [
    "Focused on quality-led commercial development",
    "Driven by long-term thinking and credibility",
    "Committed to building destinations that work in practice"
  ],
  cta: {
    label: "Awards & Recognition",
    href: "/awards-recognition"
  },
  image: "/businesses/property/full-size-photo-2.webp",
  reverse: true
};

const DevelopedManakamna = () => <SplitSection section={section} />;

export default DevelopedManakamna;
