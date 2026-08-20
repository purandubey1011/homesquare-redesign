import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "Common areas, commercial spaces and amenities.",
  items: [
    {
      title: "Common Areas",
      image: "/businesses/property/full-size-photo-1.webp"
    },
    {
      title: "Commercial Spaces",
      image: "/businesses/property/side-front.webp"
    },
    {
      title: "Amenities",
      image: "/businesses/property/parking.webp"
    }
  ],
  cta: {
    label: "Enquire for Space",
    href: "/leasing"
  }
};

const Gallery = () => <GalleryPreviewSection section={section} />;

export default Gallery;
