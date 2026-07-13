import { ReasonGridSection } from "../site/PageSections";

const section = {
  type: "reasonGrid",
  heading: "Eight reasons businesses choose the Home Square proposition.",
  items: [
    {
      title: "Growing Market",
      body: "Siliguri continues to expand as a commercial and residential decision hub for the wider region."
    },
    {
      title: "Category-Focused Destination",
      body: "A focused ecosystem creates stronger relevance than generic mixed retail environments."
    },
    {
      title: "High-Intent Footfall",
      body: "Visitors come with a clearer reason to explore home, interior and lifestyle solutions."
    },
    {
      title: "Prime Salugara Location",
      body: "Strategic positioning improves access, visibility and repeat visits."
    },
    {
      title: "Business-Ready Amenities",
      body: "Daily operations are supported through practical infrastructure and visitor convenience."
    },
    {
      title: "Better Brand Visibility",
      body: "A premium destination helps businesses present themselves with more confidence and clarity."
    },
    {
      title: "Food Court & Sky Lounge Advantage",
      body: "Comfort and dwell time improve the overall experience for visitors and brands alike."
    },
    {
      title: "Trusted Developer Backing",
      body: "Manakamna Group adds credibility, execution trust and market confidence."
    }
  ]
};

const EightReasons = () => <ReasonGridSection section={section} />;

export default EightReasons;
