import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "Common areas, commercial spaces and amenities.",
  items: [
    {
      title: "Common Areas",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Commercial Spaces",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Amenities",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80"
    }
  ],
  cta: {
    label: "Enquire for Space",
    href: "/leasing"
  }
};

const Gallery = () => <GalleryPreviewSection section={section} />;

export default Gallery;
