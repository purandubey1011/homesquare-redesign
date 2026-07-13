import { SiteShell } from "../site/SiteShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import Hero from "./Hero";
import ConnectUs from "./ConnectUs";
import EnquireCommercial from "./EnquireCommercial";
import BookSite from "./BookSite";
import IdealHome from "./IdealHome";
import FrequentlyAsked from "./FrequentlyAsked";
import LetS from "./LetS";

const pageMeta = {
  title: "Contact Home Square Siliguri | Book Site Visit & Enquire for Commercial Space",
  description: "Contact Home Square, Siliguri to enquire about commercial spaces, showroom spaces, retail stores, offices, experience centres and site visits at Salugara."
};

const Contact = () => {
  usePageMeta(pageMeta.title, pageMeta.description);

  return (
    <SiteShell>
      <Hero />
      <ConnectUs />
      <EnquireCommercial />
      <BookSite />
      <IdealHome />
      <FrequentlyAsked />
      <LetS />
    </SiteShell>
  );
};

export default Contact;
