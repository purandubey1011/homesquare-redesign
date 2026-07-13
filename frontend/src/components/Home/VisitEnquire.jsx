import { ContactStripSection } from "../site/PageSections";

const section = {
  type: "contactStrip",
  heading: "Visit, enquire or connect with our team.",
  body: "Book a site visit, request brochure support or speak with us about commercial availability at Home Square, Siliguri."
};

const VisitEnquire = () => <ContactStripSection section={section} />;

export default VisitEnquire;
