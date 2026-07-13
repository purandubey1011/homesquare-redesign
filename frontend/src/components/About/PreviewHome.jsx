import { CategoriesSection } from "../site/PageSections";

const section = {
  type: "categories",
  heading: "A preview of the Home Square ecosystem.",
  items: [
    "Furniture & Furnishings",
    "Paints, Marbles & Surfaces",
    "Interiors & Design Services",
    "Electronics & Appliances",
    "Decor & Lifestyle",
    "Food, Experience & Support Services"
  ],
  cta: {
    label: "Explore the One-Stop Format",
    href: "/one-stop-interior-destination"
  }
};

const PreviewHome = () => <CategoriesSection section={section} />;

export default PreviewHome;
