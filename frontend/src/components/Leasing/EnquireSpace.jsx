import { LeadFormSection } from "../site/PageSections";

const section = {
  type: "leadForm",
  id: "page-form",
  heading: "Enquire for space availability.",
  description: "Tell us about your business format, category and approximate requirement. Our team will help you explore suitable options at Home Square.",
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
  successMessage: "Thank you for your enquiry. Our leasing team will connect with you shortly.",
  microcopy: "We only use your details to assist with your Home Square space enquiry."
};

const EnquireSpace = () => <LeadFormSection section={section} />;

export default EnquireSpace;
