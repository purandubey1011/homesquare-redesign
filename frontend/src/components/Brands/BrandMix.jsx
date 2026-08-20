import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "A brand mix built around customer needs.",
  items: [
    {
      title: "Home Improvement",
      body: "Paints, marbles, surfaces, furnishings, interiors and design-led products.",
      image: "/businesses/furnishing/img-8328.webp"
    },
    {
      title: "Electronics & Lifestyle",
      body: "Appliances, gadgets and modern home electronics for everyday living.",
      image: "/businesses/electronics/img-8864.webp"
    },
    {
      title: "Interior & Decor Solutions",
      body: "Design services, furnishings, finishes and styling support for homes and offices.",
      image: "/businesses/interiors/img-8949.webp"
    },
    {
      title: "Food & Experience",
      body: "Dining options that make the destination more engaging and encourage visitors to spend more time.",
      image: "/businesses/cafe/img-8334.webp"
    },
    {
      title: "Beauty & Lifestyle Services",
      body: "Supporting services that make the destination more rounded, relevant and convenient.",
      image: "/businesses/salon/img-8873.webp"
    }
  ]
};

const BrandMix = () => <CardsSection section={section} />;

export default BrandMix;
