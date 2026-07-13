import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Customer conveniences.",
  items: [
    {
      title: "Parking",
      body: "Practical arrival support for families, individual visitors and destination-led shopping."
    },
    {
      title: "Security",
      body: "A safer and more reassuring environment that supports premium perception."
    },
    {
      title: "Lifts & Access",
      body: "Easier movement across the property for all age groups and use cases."
    },
    {
      title: "Food & Pause Points",
      body: "Comfort layers that make visits longer, easier and more complete."
    }
  ]
};

const CustomerConveniences = () => <CardsSection section={section} />;

export default CustomerConveniences;
