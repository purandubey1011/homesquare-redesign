import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Positioning",
  title: "A focused commercial destination for brands that shape how homes live.",
  body: "Home Square is not a generic mixed-use marketplace. It is a category-led destination built around the home improvement journey, where furniture, decor, appliances, interiors, finishes and lifestyle solutions work together to create stronger customer intent and more relevant footfall.",
  points: [
    "Purpose-built for home, interior and lifestyle-led businesses",
    "Designed to help customers discover, compare and buy in one visit",
    "Creates stronger synergy between complementary brands"
  ],
  cta: {
    label: "Why Home Square",
    href: "/why-homesquare"
  },
  image: "/businesses/interiors/img-8937.webp"
};

const FocusedCommercial = () => <SplitSection section={section} />;

export default FocusedCommercial;
