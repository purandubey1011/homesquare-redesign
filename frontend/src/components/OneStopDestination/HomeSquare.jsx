import { CategoriesSection } from "../site/PageSections";

const section = {
  type: "categories",
  id: "category-grid",
  heading: "The Home Square category grid.",
  items: [
    "Furniture",
    "Furnishings",
    "Electronics",
    "Lighting",
    "Tiles & Paint",
    "Modular Kitchen",
    "Sanitaryware",
    "Decor",
    "Lifestyle Services",
    "Dining & Experience"
  ]
};

const HomeSquare = () => <CategoriesSection section={section} />;

export default HomeSquare;
