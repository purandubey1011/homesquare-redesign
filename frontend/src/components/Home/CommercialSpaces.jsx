import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Commercial spaces for multiple business formats.",
  intro: "From large-format showrooms to offices and experience centres, Home Square supports diverse business use cases within one premium destination.",
  items: [
    {
      title: "Showroom Spaces",
      body: "For furniture, appliances, sanitaryware, lighting and large-format brands."
    },
    {
      title: "Retail Stores",
      body: "For decor, furnishing, accessories and lifestyle-led businesses."
    },
    {
      title: "Office & Studio Spaces",
      body: "For architects, interior consultants, designers and service-led teams."
    },
    {
      title: "Experience Centres",
      body: "For businesses that need consultation, product demos and immersive walk-throughs."
    }
  ],
  cta: {
    label: "View Leasing Options",
    href: "/leasing"
  }
};

const CommercialSpaces = () => <CardsSection section={section} />;

export default CommercialSpaces;
