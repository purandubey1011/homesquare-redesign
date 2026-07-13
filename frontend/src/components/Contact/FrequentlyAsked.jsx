import { FAQSection } from "../site/PageSections";

const section = {
  type: "faq",
  heading: "Frequently asked questions.",
  items: [
    {
      title: "Can I book a site visit before deciding on a space?",
      body: "Yes. A site visit is one of the best ways to understand the location, layout, amenities and the overall commercial potential of Home Square."
    },
    {
      title: "What types of spaces are available?",
      body: "Home Square is suitable for showroom spaces, retail stores, office spaces, experience centres and select food and dining formats."
    },
    {
      title: "Is Home Square only for interior brands?",
      body: "The strongest fit is home, interior, decor, furnishing, electronics, lifestyle and related service businesses, but category relevance is what matters most."
    },
    {
      title: "Can I enquire even if I am still exploring options?",
      body: "Yes. Our team can help you understand the destination and guide you based on your business format and approximate requirement."
    },
    {
      title: "Is the project ready for brand visits and inspections?",
      body: "Yes. The website content positions Home Square as completed, active and ready for site visits and business evaluation."
    },
    {
      title: "How quickly will the team respond?",
      body: "The contact flow is designed for quick follow-up on space enquiries, site visits and business requirements."
    }
  ]
};

const FrequentlyAsked = () => <FAQSection section={section} />;

export default FrequentlyAsked;
