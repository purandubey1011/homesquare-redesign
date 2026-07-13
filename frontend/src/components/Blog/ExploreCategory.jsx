import { CategoriesSection } from "../site/PageSections";

const section = {
  type: "categories",
  heading: "Explore by category.",
  items: [
    "All Blogs",
    "Project Updates",
    "Awards & Recognition",
    "Commercial Spaces",
    "Business Growth",
    "Interior & Home Trends",
    "Siliguri Market Insights",
    "Brand Stories",
    "Press Releases"
  ]
};

const ExploreCategory = () => <CategoriesSection section={section} />;

export default ExploreCategory;
