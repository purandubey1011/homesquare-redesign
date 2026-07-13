import { BlogListSection } from "../site/PageSections";

const section = {
  type: "blogList",
  id: "latest-articles",
  heading: "Latest articles.",
  items: [
    {
      title: "Recognizing Excellence in Regional Development: Sahil Chaudhary Honored",
      category: "Awards & Recognition",
      date: "April 29, 2025",
      excerpt: "A proud recognition for Manakamna Group's contribution to regional infrastructure and development."
    },
    {
      title: "A Series of Winnings for Home Square",
      category: "Awards & Media",
      date: "April 23, 2023",
      excerpt: "Home Square continues to gain recognition across media and industry platforms for its commercial concept and theme-based planning."
    },
    {
      title: "Why Category-Focused Commercial Spaces Work Better for Retail Brands",
      category: "Commercial Spaces",
      date: "Suggested Topic",
      excerpt: "A look at why destination-led, category-driven commercial environments create stronger outcomes than generic retail clustering."
    }
  ]
};

const LatestArticles = () => <BlogListSection section={section} />;

export default LatestArticles;
