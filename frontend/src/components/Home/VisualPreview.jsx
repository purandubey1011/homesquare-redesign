import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "A visual preview of the destination.",
  items: [
    {
      title: "Architecture & Elevations",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Interiors & Common Areas",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Commercial Spaces & Amenities",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
    }
  ],
  cta: {
    label: "View VisualPreview",
    href: "/gallery"
  }
};

const VisualPreview = () => <GalleryPreviewSection section={section} />;

export default VisualPreview;
