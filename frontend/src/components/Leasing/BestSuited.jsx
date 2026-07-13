import { CategoriesSection } from "../site/PageSections";

const section = {
  type: "categories",
  heading: "Best suited business categories.",
  items: [
    "Furniture Showrooms",
    "Furnishing Stores",
    "Electronics & Appliance Brands",
    "Lighting Brands",
    "Tiles & Flooring Brands",
    "Paint & Wallpaper Stores",
    "Modular Kitchen Brands",
    "Sanitaryware & Bath Fittings",
    "Interior Design Studios",
    "Architecture Firms",
    "Office Furniture Brands",
    "Decor & Lifestyle Stores",
    "Glass & Partition Solutions",
    "False Ceiling Brands",
    "Art & Planter Stores",
    "Smart Home Solutions"
  ]
};

const BestSuited = () => <CategoriesSection section={section} />;

export default BestSuited;
