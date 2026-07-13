import { LeadFormSection } from "../site/PageSections";

const section = {
  type: "leadForm",
  id: "contact-form",
  heading: "Enquire for commercial space.",
  description: "Share your business details and our team will help you explore suitable spaces at Home Square.",
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
