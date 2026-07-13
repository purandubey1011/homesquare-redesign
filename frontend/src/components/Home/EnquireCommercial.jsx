import { LeadFormSection } from "../site/PageSections";

const section = {
  type: "leadForm",
  id: "enquiry",
  heading: "Enquire for commercial space at Home Square.",
  description: "Whether you're exploring a showroom, store, office or experience centre, our team can help you identify the right fit.",
  fields: [
    "Full Name",
    "Phone Number",
    "Email Address",
    "Business / Brand Name",
    "Business Category",
    "Interested In",
    "Approx. Space Requirement",
    "Preferred Visit Date",
    "Message"
  ],
  options: [
    "Showroom Space",
    "Retail Store",
    "Office Space",
    "Experience Centre",
    "Food & Dining Space",
    "Other"
  ],
  submitLabel: "Submit Enquiry",
  successMessage: "Thank you for your enquiry. Our team will connect with you shortly.",
  microcopy: "Your details are safe with us. We'll only contact you regarding your Home Square enquiry."
};

const EnquireCommercial = () => <LeadFormSection section={section} />;

export default EnquireCommercial;
