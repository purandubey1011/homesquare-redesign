import { CategoriesSection } from "../site/PageSections";

const section = {
  type: "categories",
  heading: "A category ecosystem built for the complete home journey.",
  items: [
    "Furniture & Furnishings",
    "Electronics & Appliances",
    "Lighting, Tiles & Paint",
    "Kitchen & Sanitaryware",
    "Decor & Lifestyle",
    "Design, Styling & Home Solutions"
  ],
  cta: {
    label: "Explore the Ecosystem",
    href: "/one-stop-interior-destination"
  }
};

const CategoryEcosystem = () => <CategoriesSection section={section} />;

export default CategoryEcosystem;
