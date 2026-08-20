import { SplitSection } from "../site/PageSections";

const section = {
  type: "split",
  eyebrow: "Food Court Advantage",
  title: "A destination where visitors stay longer and brands benefit more.",
  body: "The food and leisure layer adds comfort, convenience and pause points that extend time on site. That makes the overall destination feel more complete and gives brands more opportunities to be discovered.",
  points: [
    "Longer dwell time",
    "Better family and group visits",
    "A stronger all-day destination experience"
  ],
  cta: {
    label: "Discover the Experience",
    href: "/one-stop-interior-destination"
  },
  image: "/businesses/cafe/img-8333.webp"
};

const DestinationVisitors = () => <SplitSection section={section} />;

export default DestinationVisitors;
