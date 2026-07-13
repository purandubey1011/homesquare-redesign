import { CardsSection } from "../site/PageSections";

const section = {
  type: "cards",
  heading: "Location Advantage",
  intro: "Positioned at Bikash Nagar, Salugara Bazar, Home Square gives brands visibility, access and a commercially strategic address.",
  items: [
    {
      title: "Connected to Siliguri and nearby towns",
      body: "A location that is practical for customers, staff and suppliers arriving from multiple catchments."
    },
    {
      title: "Accessible from the hills corridor",
      body: "Ideal for destination visits from shoppers and decision-makers travelling through the region."
    },
    {
      title: "Easy to locate and visit",
      body: "A premium business address with convenient arrival and repeat-visit potential."
    }
  ],
  cta: {
    label: "Explore the Location",
    href: "/contact-us"
  }
};

const LocationAdvantage = () => <CardsSection section={section} />;

export default LocationAdvantage;
