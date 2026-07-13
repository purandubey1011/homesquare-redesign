import { CategoriesSection } from "../site/PageSections";

const section = {
  type: "categories",
  id: "gallery-sections",
  heading: "Gallery categories.",
  items: [
    "All Photos",
    "Project Completed",
    "Elevations",
    "Interiors",
    "Common Areas",
    "Commercial Spaces",
    "Amenities",
    "Brands & Stores"
  ]
};

const GalleryCategories = () => <CategoriesSection section={section} />;

export default GalleryCategories;
