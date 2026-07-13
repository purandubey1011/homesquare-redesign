import { LeadFormSection } from "../site/PageSections";

const section = {
  type: "leadForm",
  id: "newsletter",
  heading: "Newsletter and lead capture.",
  description: "Stay updated on leasing opportunities, business updates and brand announcements at Home Square.",
  fields: [
    "Name",
    "Email",
    "Phone Number",
    "I am interested in"
  ],
  options: [
    "Leasing Space",
    "Visiting Home Square",
    "Business Updates",
    "Brand Announcements"
  ],
  submitLabel: "Subscribe & Enquire",
  successMessage: "Thanks for signing up. We'll keep you updated with relevant Home Square news.",
  microcopy: "We keep communication relevant, focused and limited to Home Square updates."
};

const NewsletterLead = () => <LeadFormSection section={section} />;

export default NewsletterLead;
