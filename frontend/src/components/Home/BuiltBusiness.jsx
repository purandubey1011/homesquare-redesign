import { HighlightsSection } from "../site/PageSections";

const section = {
  type: "highlights",
  heading: "Built for Business. Designed for Footfall.",
  items: [
    {
      title: "Prime Salugara Location",
      body: "Easy access for Siliguri, nearby towns and customers travelling from the hills."
    },
    {
      title: "Home & Interior Ecosystem",
      body: "A focused destination for furniture, furnishing, electronics, decor, lighting, tiles and more."
    },
    {
      title: "Business-Ready Spaces",
      body: "Premium commercial spaces suitable for showrooms, offices, retail and experience centres."
    },
    {
      title: "Customer Convenience",
      body: "Parking, security, lifts, wide passages, food court access and a smooth visitor journey."
    }
  ]
};

const BuiltBusiness = () => <HighlightsSection section={section} />;

export default BuiltBusiness;
