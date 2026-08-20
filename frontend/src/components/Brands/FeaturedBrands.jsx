import { BrandGridSection } from "../site/PageSections";

const section = {
  type: "brandGrid",
  id: "featured-brands",
  heading: "Featured brands at Home Square.",
  items: [
    {
      title: "JioMart Digital",
      image: "/businesses/electronics/img-8863.webp",
      logo: "/business-logos/jiomart-digital.webp",
      meta: "Electronics & Appliances",
      body: "Electronics and appliances for modern homes, offices and lifestyle needs.",
      caption: "Best for TVs, refrigerators, washing machines, ACs, gadgets and home electronics."
    },
    {
      title: "The Furnishing Story",
      image: "/businesses/furnishing/fullsizerender.webp",
      logo: "/business-logos/tfs.webp",
      meta: "Furnishings & Home Styling",
      body: "Premium furnishing solutions for homes, offices and interior styling.",
      caption: "Best for curtains, fabrics, upholstery, soft furnishings and decor styling."
    },
    {
      title: "Livspace",
      image: "/businesses/interiors/img-8937.webp",
      logo: "/business-logos/livspace.webp",
      meta: "Interior Design & Home Solutions",
      body: "Interior design and home transformation solutions for modern living.",
      caption: "Best for modular interiors, design consultation, space planning and home makeovers."
    },
    {
      title: "Neel David's Luxury Salon",
      image: "/businesses/salon/img-8868.webp",
      logo: "/business-logos/neeldavids.webp",
      meta: "Salon & Lifestyle",
      body: "A premium salon experience for beauty, grooming and transformation services.",
      caption: "Best for hair, beauty, grooming, makeup and premium salon services."
    },
    {
      title: "Paints and Coats",
      image: "/businesses/paint/img-8855.webp",
      logo: "/business-logos/paints-and-coat.webp",
      meta: "Paint & Surface Solutions",
      body: "Paint, finish and surface solutions for homes and commercial spaces.",
      caption: "Best for wall paints, textures, finishes and colour solutions."
    },
    {
      title: "Hungry Hippies",
      image: "/businesses/cafe/img-8332.webp",
      logo: "/business-logos/hungry-hippies.webp",
      meta: "Food & Dining",
      body: "A food and dining destination that adds comfort, energy and experience to every visit.",
      caption: "Best for visitor breaks, casual dining and longer customer stay time."
    }
  ]
};

const FeaturedBrands = () => <BrandGridSection section={section} />;

export default FeaturedBrands;
