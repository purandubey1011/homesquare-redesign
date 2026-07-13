import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import GrowingEcosystem from "./GrowingEcosystem";
import FeaturedBrands from "./FeaturedBrands";
import BrandMix from "./BrandMix";
import CustomersBusinesses from "./CustomersBusinesses";
import DiscoverBrands from "./DiscoverBrands";

const pageMeta = {
  title: "Brands at Home Square Siliguri | Interior, Furniture, Electronics & Lifestyle Stores",
  description: "Explore brands at Home Square, Siliguri including electronics, furniture, furnishing, interior, salon, decor and lifestyle businesses inside a premium commercial destination in Salugara."
};

const Brands = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <GrowingEcosystem />
      <FeaturedBrands />
      <BrandMix />
      <CustomersBusinesses />
      <DiscoverBrands />
    </SiteShell>
  );
};

export default Brands;
