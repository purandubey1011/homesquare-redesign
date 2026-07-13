import { ContactStripSection } from "../site/PageSections";

const section = {
  type: "contactStrip",
  heading: "Connect with us.",
  items: [
    {
      title: "Call Us",
      meta: "80011-71000",
      body: "Speak to our team for space enquiries, site visits and project details.",
      cta: {
        label: "Call Now",
        href: "tel:80011-71000"
      }
    },
    {
      title: "Email Us",
      meta: "hello@homesquare.info",
      body: "Send your enquiry and our team will connect with you.",
      cta: {
        label: "Send Email",
        href: "mailto:hello@homesquare.info"
      }
    },
    {
      title: "Visit Us",
      meta: "Bikash Nagar, Salugara Bazar, Siliguri - 734008",
      body: "Visit Home Square and explore the commercial destination in person.",
      cta: {
        label: "Get Directions",
        href: "https://maps.google.com/?q=Home+Square+Salugara+Siliguri"
      }
    }
  ]
};

const ConnectUs = () => <ContactStripSection section={section} />;

export default ConnectUs;
