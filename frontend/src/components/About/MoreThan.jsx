import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Brand Introduction",
  title: "More than a building. A curated business destination.",
  body: "Home Square is designed to serve the complete home and interior journey while offering brands a more focused commercial environment. It blends visibility, functionality and category synergy into one premium address.",
  points: [
    "Category-led destination planning",
    "Premium positioning for modern brands",
    "A stronger bridge between customer need and brand discovery"
  ],
  cta: {
    label: "Why Home Square",
    href: "/why-homesquare"
  },
  image: "/businesses/interiors/img-8960.webp"
};

const MoreThan = () => <SplitSection section={section} />;

export default MoreThan;
