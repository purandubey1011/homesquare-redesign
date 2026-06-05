import Footer from "./Footer";
import FeatureSection from "./FeatureSection";
import Hero from "./Hero";
import IntroSection from "./IntroSection";
import Navbar from "./Navbar";
import PackagesSection from "./PackagesSection";
import VillasSection from "./VillasSection";
import { featureSections } from "./homeData";

const Home = () => {
  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <Navbar />
      <Hero />
      <IntroSection />
      <VillasSection />
      {featureSections.map((section) => (
        <FeatureSection key={section.id} {...section} />
      ))}
      <PackagesSection />
      <Footer />
    </div>
  );
};

export default Home;
