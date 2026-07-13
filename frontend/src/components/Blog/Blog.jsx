import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import MoreThan from "./MoreThan";
import FeaturedStories from "./FeaturedStories";
import ExploreCategory from "./ExploreCategory";
import LatestArticles from "./LatestArticles";
import SuggestedBlog from "./SuggestedBlog";
import NewsletterLead from "./NewsletterLead";
import ExploreDestination from "./ExploreDestination";

const pageMeta = {
  title: "Home Square Blog | Commercial Space, Interiors & Business Growth in Siliguri",
  description: "Read Home Square blog articles on commercial space, project updates, awards, brand stories, home trends and business growth in Siliguri."
};

const Blog = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <MoreThan />
      <FeaturedStories />
      <ExploreCategory />
      <LatestArticles />
      <SuggestedBlog />
      <NewsletterLead />
      <ExploreDestination />
    </SiteShell>
  );
};

export default Blog;
