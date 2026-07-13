import { BrandGridSection } from "../site/PageSections";

const section = {
  type: "brandGrid",
  id: "featured-brands",
  heading: "Featured brands at Home Square.",
  items: [
    {
      title: "JioMart Digital",
      image: "/brand/jiomartreal.jpg",
      meta: "Electronics & Appliances",
      body: "Electronics and appliances for modern homes, offices and lifestyle needs.",
      caption: "Best for TVs, refrigerators, washing machines, ACs, gadgets and home electronics."
    },
    {
      title: "The Furnishing Story",
      image: "/brand/thestoryfurnishing.jpg",
      meta: "Furnishings & Home Styling",
      body: "Premium furnishing solutions for homes, offices and interior styling.",
      caption: "Best for curtains, fabrics, upholstery, soft furnishings and decor styling."
    },
    {
      title: "Livspace",
      image: "/brand/interior.jpg",
      meta: "Interior Design & Home Solutions",
      body: "Interior design and home transformation solutions for modern living.",
      caption: "Best for modular interiors, design consultation, space planning and home makeovers."
    },
    {
      title: "Neel David's Luxury Salon",
      image: "/brand/saloon.jpg",
      meta: "Salon & Lifestyle",
      body: "A premium salon experience for beauty, grooming and transformation services.",
      caption: "Best for hair, beauty, grooming, makeup and premium salon services."
    },
    {
      title: "Paints and Coats",
      image: "/brand/paint.jpeg",
      meta: "Paint & Surface Solutions",
      body: "Paint, finish and surface solutions for homes and commercial spaces.",
      caption: "Best for wall paints, textures, finishes and colour solutions."
    },
    {
      title: "Bhawani Marbles",
      image: "/brand/bhawani.png",
      meta: "Marble & Surface Solutions",
      body: "Stone, marble and surface solutions for premium interiors.",
      caption: "Best for marble, stone finishes, flooring and interior surfaces."
    },
    {
      title: "Hungry Hippies",
      image: "/brand/hungry.jpg",
      meta: "Food & Dining",
      body: "A food and dining destination that adds comfort, energy and experience to every visit.",
      caption: "Best for visitor breaks, casual dining and longer customer stay time."
    }
  ]
};

const FeaturedBrands = () => <BrandGridSection section={section} />;

export default FeaturedBrands;
