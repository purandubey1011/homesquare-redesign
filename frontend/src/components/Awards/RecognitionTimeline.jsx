import { TimelineSection } from "../site/PageSections";

const section = {
  type: "timeline",
  heading: "Recognition timeline.",
  items: [
    {
      title: "2025",
      body: "Leadership recognition for regional infrastructure contribution and development impact."
    },
    {
      title: "2023",
      body: "A series of wins and visibility moments strengthened awareness around Home Square's commercial concept."
    },
    {
      title: "Ongoing",
      body: "Media mentions, trust signals and destination-led credibility continue to support the project narrative."
    }
  ]
};

const RecognitionTimeline = () => <TimelineSection section={section} />;

export default RecognitionTimeline;
