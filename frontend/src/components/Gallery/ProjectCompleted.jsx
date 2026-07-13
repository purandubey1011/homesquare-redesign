import { GalleryPreviewSection } from "../site/PageSections";

const section = {
  type: "galleryPreview",
  heading: "Project completed, elevations and interiors.",
  items: [
    {
      title: "Project Completed",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Elevations",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "Interiors",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
    }
  ]
};

const ProjectCompleted = () => <GalleryPreviewSection section={section} />;

export default ProjectCompleted;
