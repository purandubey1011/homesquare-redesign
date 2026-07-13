import { FeaturedBlogSection } from "../site/PageSections";

const section = {
  type: "featuredBlog",
  heading: "FeaturedStories stories.",
  item: {
    title: "Recognizing Excellence in Regional Development: Sahil Chaudhary Honored",
    category: "Awards & Recognition",
    excerpt: "Sahil Chaudhary, Executive Director of Manakamna Group, was honoured for Outstanding Contribution in Regional Infrastructure Development at the Iconic Achievers Award East Edition 2025.",
    cta: "Read More"
  }
};

const FeaturedStories = () => <FeaturedBlogSection section={section} />;

export default FeaturedStories;
