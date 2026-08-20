import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "Project update gallery.",
  items: [
    {
      title: "Facade & Arrival",
      image: "/businesses/property/out-far-1.webp"
    },
    {
      title: "Interiors & Common Areas",
      image: "/businesses/property/out-close-2.webp"
    },
    {
      title: "Brand-Ready Spaces",
      image: "/businesses/property/parking-2.webp"
    }
  ]
};

const ProjectUpdate = () => <GalleryPreviewSection section={section} />;

export default ProjectUpdate;
