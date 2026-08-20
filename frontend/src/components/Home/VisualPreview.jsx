import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "A visual preview of the destination.",
  items: [
    {
      title: "Architecture & Elevations",
      image: "/businesses/property/out-close-1.webp"
    },
    {
      title: "Interiors & Common Areas",
      image: "/businesses/property/side-front.webp"
    },
    {
      title: "Commercial Spaces & Amenities",
      image: "/businesses/property/parking.webp"
    }
  ],
  cta: {
    label: "View VisualPreview",
    href: "/gallery"
  }
};

const VisualPreview = () => <GalleryPreviewSection section={section} />;

export default VisualPreview;
