import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "Project completed, elevations and interiors.",
  items: [
    {
      title: "Project Completed",
      image: "/businesses/property/out-medium-2.webp"
    },
    {
      title: "Elevations",
      image: "/businesses/property/out-medium-3.webp"
    },
    {
      title: "Interiors",
      image: "/businesses/property/side-photo.webp"
    }
  ]
};

const ProjectCompleted = () => <GalleryPreviewSection section={section} />;

export default ProjectCompleted;
