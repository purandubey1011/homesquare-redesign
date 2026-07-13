import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "A brand mix built around customer needs.",
  items: [
    {
      title: "Home Improvement",
      body: "Paints, marbles, surfaces, furnishings, interiors and design-led products.",
      image: "/card-images/brandmix-home.jpg"
    },
    {
      title: "Electronics & Lifestyle",
      body: "Appliances, gadgets and modern home electronics for everyday living.",
      image: "/card-images/brandmix-electronics.jpg"
    },
    {
      title: "Interior & Decor Solutions",
      body: "Design services, furnishings, finishes and styling support for homes and offices.",
      image: "/card-images/brandmix-interior.jpg"
    },
    {
      title: "Food & Experience",
      body: "Dining options that make the destination more engaging and encourage visitors to spend more time.",
      image: "/card-images/brandmix-food.jpg"
    },
    {
      title: "Beauty & Lifestyle Services",
      body: "Supporting services that make the destination more rounded, relevant and convenient.",
      image: "/card-images/brandmix-beauty.jpg"
    }
  ]
};

const BrandMix = () => <CardsSection section={section} />;

export default BrandMix;
