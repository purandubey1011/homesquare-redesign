import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Why amenities matter.",
  items: [
    {
      title: "They reduce friction",
      body: "Practical conveniences make a destination easier to visit and easier to operate within."
    },
    {
      title: "They support dwell time",
      body: "Comfort-driven infrastructure encourages customers to spend more useful time on site."
    },
    {
      title: "They influence perception",
      body: "Premium convenience shapes how brands and visitors judge the destination."
    }
  ]
};

const AmenitiesMatter = () => <CardsSection section={section} />;

export default AmenitiesMatter;
