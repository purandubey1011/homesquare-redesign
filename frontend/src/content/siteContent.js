export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Home Square", href: "/why-homesquare" },
  { label: "Leasing", href: "/leasing" },
  { label: "One-Stop Destination", href: "/one-stop-interior-destination" },
  { label: "Amenities", href: "/amenities" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/gallery" },
  { label: "Awards", href: "/awards-recognition" },
  { label: "Project Updates", href: "/project-updates" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const contactDetails = {
  phone: "80011-71000",
  email: "hello@homesquare.info",
  address: "Home Square, Bikash Nagar, Salugara Bazar, Siliguri - 734008",
  whatsapp: "https://wa.me/918001171000",
  maps: "https://maps.google.com/?q=Home+Square+Salugara+Siliguri",
};

const visuals = {
  hero:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
  glassAtrium:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
  facade:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80",
  lobby:
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80",
  showroom:
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  workspace:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  category:
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1500&q=80",
  dining:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
  award:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
  skyline:
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1800&q=80",
  galleryOne:
    "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
  galleryTwo:
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  galleryThree:
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
};

const defaultEnquiryFields = [
  "Full Name",
  "Phone Number",
  "Email Address",
  "Business / Brand Name",
  "Business Category",
  "Interested In",
  "Approx. Space Requirement",
  "Preferred Visit Date",
  "Message",
];

const defaultInterestOptions = [
  "Showroom Space",
  "Retail Store",
  "Office Space",
  "Experience Centre",
  "Food & Dining Space",
  "Other",
];

export const pages = [
  {
    slug: "/",
    navLabel: "Home",
    title:
      "Home Square Siliguri | Premium Commercial Spaces for Interior & Lifestyle Brands",
    description:
      "Home Square is Siliguri's dedicated home, interior, decor, furnishing and lifestyle destination with premium commercial spaces, strong connectivity, parking, security, food court and business-ready amenities.",
    hero: {
      eyebrow: "Home Square, Siliguri",
      title:
        "Siliguri's Dedicated Destination for Home, Interior & Lifestyle Brands",
      subtitle:
        "A premium commercial hub designed for brands in interiors, furniture, electronics, decor, furnishing, tiles, lighting, kitchen solutions and more.",
      body:
        "Located in Salugara, Home Square brings together high-intent customers, strong connectivity, business-ready spaces and a complete home improvement ecosystem under one roof.",
      primaryCta: { label: "Book a Site Visit", href: "/contact-us" },
      secondaryCta: {
        label: "Download Brochure",
        href: "mailto:hello@homesquare.info?subject=Home%20Square%20Brochure%20Request",
      },
      trustLine:
        "Premium commercial spaces available for showrooms, retail stores, offices and experience centres.",
      image: visuals.hero,
      video: "/video/homesqaurehero.mp4",
    },
    sections: [
      {
        type: "highlights",
        heading: "Built for Business. Designed for Footfall.",
        items: [
          {
            title: "Prime Salugara Location",
            body: "Easy access for Siliguri, nearby towns and customers travelling from the hills.",
          },
          {
            title: "Home & Interior Ecosystem",
            body: "A focused destination for furniture, furnishing, electronics, decor, lighting, tiles and more.",
          },
          {
            title: "Business-Ready Spaces",
            body: "Premium commercial spaces suitable for showrooms, offices, retail and experience centres.",
          },
          {
            title: "Customer Convenience",
            body: "Parking, security, lifts, wide passages, food court access and a smooth visitor journey.",
          },
        ],
      },
      {
        type: "split",
        eyebrow: "Positioning",
        title: "A focused commercial destination for brands that shape how homes live.",
        body:
          "Home Square is not a generic mixed-use marketplace. It is a category-led destination built around the home improvement journey, where furniture, decor, appliances, interiors, finishes and lifestyle solutions work together to create stronger customer intent and more relevant footfall.",
        points: [
          "Purpose-built for home, interior and lifestyle-led businesses",
          "Designed to help customers discover, compare and buy in one visit",
          "Creates stronger synergy between complementary brands",
        ],
        cta: { label: "Why Home Square", href: "/why-homesquare" },
        image: visuals.glassAtrium,
      },
      {
        type: "cards",
        heading: "Location Advantage",
        intro:
          "Positioned at Bikash Nagar, Salugara Bazar, Home Square gives brands visibility, access and a commercially strategic address.",
        items: [
          {
            title: "Connected to Siliguri and nearby towns",
            body: "A location that is practical for customers, staff and suppliers arriving from multiple catchments.",
          },
          {
            title: "Accessible from the hills corridor",
            body: "Ideal for destination visits from shoppers and decision-makers travelling through the region.",
          },
          {
            title: "Easy to locate and visit",
            body: "A premium business address with convenient arrival and repeat-visit potential.",
          },
        ],
        cta: { label: "Explore the Location", href: "/contact-us" },
      },
      {
        type: "split",
        eyebrow: "Why Home Square",
        title: "Designed to support better business performance.",
        body:
          "Home Square combines category relevance, business-ready amenities, customer convenience and destination value so brands can operate from a stronger commercial environment.",
        points: [
          "High-intent visitor movement",
          "Premium frontage and better visibility",
          "Amenities that support day-to-day operations",
          "A stronger environment for brand positioning",
        ],
        cta: { label: "See the Business Case", href: "/why-homesquare" },
        image: visuals.facade,
        reverse: true,
      },
      {
        type: "categories",
        heading: "A category ecosystem built for the complete home journey.",
        items: [
          "Furniture & Furnishings",
          "Electronics & Appliances",
          "Lighting, Tiles & Paint",
          "Kitchen & Sanitaryware",
          "Decor & Lifestyle",
          "Design, Styling & Home Solutions",
        ],
        cta: { label: "Explore the Ecosystem", href: "/one-stop-interior-destination" },
      },
      {
        type: "cards",
        heading: "Commercial spaces for multiple business formats.",
        intro:
          "From large-format showrooms to offices and experience centres, Home Square supports diverse business use cases within one premium destination.",
        items: [
          { title: "Showroom Spaces", body: "For furniture, appliances, sanitaryware, lighting and large-format brands." },
          { title: "Retail Stores", body: "For decor, furnishing, accessories and lifestyle-led businesses." },
          { title: "Office & Studio Spaces", body: "For architects, interior consultants, designers and service-led teams." },
          { title: "Experience Centres", body: "For businesses that need consultation, product demos and immersive walk-throughs." },
        ],
        cta: { label: "View Leasing Options", href: "/leasing" },
      },
      {
        type: "amenities",
        heading: "Business-ready conveniences that improve every visit.",
        items: [
          "Parking",
          "Security",
          "Lifts",
          "Wide passages",
          "Food court access",
          "Smooth visitor circulation",
          "Comfortable common areas",
          "Practical daily operations support",
        ],
        cta: { label: "See All Amenities", href: "/amenities" },
      },
      {
        type: "split",
        eyebrow: "Food Court Advantage",
        title: "A destination where visitors stay longer and brands benefit more.",
        body:
          "The food and leisure layer adds comfort, convenience and pause points that extend time on site. That makes the overall destination feel more complete and gives brands more opportunities to be discovered.",
        points: [
          "Longer dwell time",
          "Better family and group visits",
          "A stronger all-day destination experience",
        ],
        cta: { label: "Discover the Experience", href: "/one-stop-interior-destination" },
        image: visuals.dining,
      },
      {
        type: "cards",
        heading: "Backed by a trusted developer.",
        intro:
          "Home Square is developed by Manakamna Group, bringing credibility, execution confidence and a legacy-led approach to commercial development.",
        items: [
          { title: "Established developer backing", body: "Built with long-term intent, not short-term speculation." },
          { title: "Credibility in planning and delivery", body: "A premium project shaped for sustainable business use and trust." },
          { title: "Recognition and market confidence", body: "Supported by awards, media visibility and regional credibility." },
        ],
        cta: { label: "Know About the Developer", href: "/about" },
      },
      {
        type: "galleryPreview",
        heading: "A visual preview of the destination.",
        items: [
          { title: "Architecture & Elevations", image: visuals.galleryOne },
          { title: "Interiors & Common Areas", image: visuals.galleryTwo },
          { title: "Commercial Spaces & Amenities", image: visuals.galleryThree },
        ],
        cta: { label: "View Gallery", href: "/gallery" },
      },
      {
        type: "leadForm",
        id: "enquiry",
        heading: "Enquire for commercial space at Home Square.",
        description:
          "Whether you're exploring a showroom, store, office or experience centre, our team can help you identify the right fit.",
        fields: defaultEnquiryFields,
        options: defaultInterestOptions,
        submitLabel: "Submit Enquiry",
        successMessage:
          "Thank you for your enquiry. Our team will connect with you shortly.",
        microcopy:
          "Your details are safe with us. We'll only contact you regarding your Home Square enquiry.",
      },
      {
        type: "contactStrip",
        heading: "Visit, enquire or connect with our team.",
        body:
          "Book a site visit, request brochure support or speak with us about commercial availability at Home Square, Siliguri.",
      },
    ],
  },
  {
    slug: "/about",
    navLabel: "About",
    title: "About Home Square Siliguri | Developed by Manakamna Group",
    description:
      "Learn about Home Square, Siliguri and the developer vision behind a focused premium commercial destination for interiors, lifestyle and home improvement brands.",
    hero: {
      eyebrow: "About Home Square",
      title: "Built with a focused vision for the future of home and lifestyle retail.",
      subtitle:
        "Home Square is a premium commercial destination created to bring together complementary categories, stronger customer journeys and credible business opportunities under one address.",
      body:
        "Developed by Manakamna Group, Home Square reflects a deliberate approach to category-led commerce, better visitor experience and a premium environment for brands ready to grow in Siliguri.",
      primaryCta: { label: "Explore Leasing", href: "/leasing" },
      secondaryCta: { label: "Contact the Team", href: "/contact-us" },
      trustLine: "A commercial destination shaped around trust, utility and long-term relevance.",
      image: visuals.facade,
    },
    sections: [
      {
        type: "split",
        eyebrow: "Brand Introduction",
        title: "More than a building. A curated business destination.",
        body:
          "Home Square is designed to serve the complete home and interior journey while offering brands a more focused commercial environment. It blends visibility, functionality and category synergy into one premium address.",
        points: [
          "Category-led destination planning",
          "Premium positioning for modern brands",
          "A stronger bridge between customer need and brand discovery",
        ],
        cta: { label: "Why Home Square", href: "/why-homesquare" },
        image: visuals.lobby,
      },
      {
        type: "cards",
        heading: "A vision rooted in relevance, experience and long-term value.",
        items: [
          { title: "For customers", body: "A single destination to explore home, decor, furnishing, electronics and lifestyle needs more efficiently." },
          { title: "For brands", body: "A stronger commercial environment where complementary categories improve discovery and conversion." },
          { title: "For the city", body: "A premium development that contributes to Siliguri's growing market and modern retail landscape." },
        ],
      },
      {
        type: "split",
        eyebrow: "Developer Introduction",
        title: "Developed by Manakamna Group.",
        body:
          "The project is backed by Manakamna Group's intent to create meaningful commercial spaces with clearer market logic, stronger trust and a more complete user experience.",
        points: [
          "Focused on quality-led commercial development",
          "Driven by long-term thinking and credibility",
          "Committed to building destinations that work in practice",
        ],
        cta: { label: "Awards & Recognition", href: "/awards-recognition" },
        image: visuals.workspace,
        reverse: true,
      },
      {
        type: "quoteBand",
        heading: "Developer Philosophy",
        body:
          "Create commercial spaces that are practical, future-ready, experience-led and built around how people actually discover, evaluate and choose brands.",
      },
      {
        type: "cards",
        heading: "Why Home Square was created.",
        intro:
          "Home Square was created to answer a market gap: a premium, category-focused destination for businesses connected to homes, interiors, furnishing, lifestyle and modern living.",
        items: [
          { title: "To reduce fragmentation", body: "Customers no longer need to jump across disconnected locations to complete one decision journey." },
          { title: "To improve quality of footfall", body: "Brands benefit more when visitors arrive with category-specific intent." },
          { title: "To create stronger brand synergy", body: "Complementary businesses create a more useful and persuasive destination together." },
        ],
      },
      {
        type: "categories",
        heading: "A preview of the Home Square ecosystem.",
        items: [
          "Furniture & Furnishings",
          "Paints, Marbles & Surfaces",
          "Interiors & Design Services",
          "Electronics & Appliances",
          "Decor & Lifestyle",
          "Food, Experience & Support Services",
        ],
        cta: { label: "Explore the One-Stop Format", href: "/one-stop-interior-destination" },
      },
      {
        type: "cards",
        heading: "Completed and ongoing momentum.",
        items: [
          { title: "Project delivery confidence", body: "Home Square is positioned as an active, credible and business-ready destination." },
          { title: "Recognition-backed perception", body: "Awards, media visibility and market acknowledgement strengthen project trust." },
          { title: "Future growth potential", body: "The destination is built to attract both visitors and brands over the long term." },
        ],
      },
      {
        type: "ctaBanner",
        heading: "See the project, meet the team and explore the business potential.",
        body:
          "Whether you're evaluating a space or learning more about the destination, Home Square is ready for informed conversations and site visits.",
        primaryCta: { label: "Book a Site Visit", href: "/contact-us" },
        secondaryCta: { label: "View Project Updates", href: "/project-updates" },
      },
    ],
  },
  {
    slug: "/why-homesquare",
    navLabel: "Why Home Square",
    title:
      "Why Home Square Siliguri | Premium Commercial Space for Business Growth",
    description:
      "Discover why Home Square is one of Siliguri's most promising commercial destinations for home, interior, lifestyle, furniture, electronics, decor and furnishing brands.",
    hero: {
      eyebrow: "Why Home Square",
      title: "A stronger commercial destination for brands that want relevance, visibility and growth.",
      subtitle:
        "Home Square brings together market opportunity, category focus, customer intent, premium infrastructure and strategic location into one business case.",
      body:
        "For tenants, investors and growth-minded brands, Home Square offers more than space. It offers a more purposeful commercial environment.",
      primaryCta: { label: "Enquire for Space", href: "/leasing" },
      secondaryCta: { label: "Book a Site Visit", href: "/contact-us" },
      trustLine: "Built around long-term business value, not generic retail clutter.",
      image: visuals.skyline,
    },
    sections: [
      {
        type: "quoteBand",
        heading: "A destination where category relevance and business practicality work together.",
        body:
          "Home Square is designed to help brands operate inside a commercially sharper environment with better audience fit, stronger visibility and more useful amenities.",
      },
      {
        type: "reasonGrid",
        heading: "Eight reasons businesses choose the Home Square proposition.",
        items: [
          {
            title: "Growing Market",
            body: "Siliguri continues to expand as a commercial and residential decision hub for the wider region.",
          },
          {
            title: "Category-Focused Destination",
            body: "A focused ecosystem creates stronger relevance than generic mixed retail environments.",
          },
          {
            title: "High-Intent Footfall",
            body: "Visitors come with a clearer reason to explore home, interior and lifestyle solutions.",
          },
          {
            title: "Prime Salugara Location",
            body: "Strategic positioning improves access, visibility and repeat visits.",
          },
          {
            title: "Business-Ready Amenities",
            body: "Daily operations are supported through practical infrastructure and visitor convenience.",
          },
          {
            title: "Better Brand Visibility",
            body: "A premium destination helps businesses present themselves with more confidence and clarity.",
          },
          {
            title: "Food Court & Sky Lounge Advantage",
            body: "Comfort and dwell time improve the overall experience for visitors and brands alike.",
          },
          {
            title: "Trusted Developer Backing",
            body: "Manakamna Group adds credibility, execution trust and market confidence.",
          },
        ],
      },
      {
        type: "comparison",
        heading: "Regular commercial space vs Home Square.",
        leftLabel: "Regular commercial space",
        rightLabel: "Home Square",
        rows: [
          ["Mixed or unrelated footfall", "Category-aligned, higher-intent footfall"],
          ["Standalone visibility challenges", "Destination-led visibility and stronger brand context"],
          ["Limited visitor comfort", "Parking, security, lifts, food court and wider convenience"],
          ["Transactional space value", "Longer-term ecosystem and positioning value"],
        ],
      },
      {
        type: "cards",
        heading: "Best suited for brands across the home and lifestyle journey.",
        items: [
          { title: "Furniture & Furnishing Brands", body: "For businesses that need destination discovery, display-led selling and comparison-friendly customer journeys." },
          { title: "Lighting, Tiles & Paint Brands", body: "For technical and finish-driven categories that benefit from adjacency and project-led buying." },
          { title: "Modular Kitchen & Sanitaryware Brands", body: "For consultative businesses that need serious inquiry traffic and experience-led selling." },
          { title: "Lifestyle & Decor Brands", body: "For premium offerings that gain from being surrounded by complementary categories." },
        ],
      },
      {
        type: "ctaBanner",
        heading: "If your brand depends on the home, interior or lifestyle customer journey, Home Square is built for that decision path.",
        body:
          "Explore the location, understand the destination and see how your business can fit into a stronger ecosystem.",
        primaryCta: { label: "Explore Leasing", href: "/leasing" },
        secondaryCta: { label: "Contact Our Team", href: "/contact-us" },
      },
    ],
  },
  {
    slug: "/leasing",
    navLabel: "Leasing",
    title: "Leasing Home Square Siliguri | Premium Commercial Spaces for Brands",
    description:
      "Explore commercial spaces at Home Square, Siliguri for showrooms, offices, retail stores and experience centres in a premium category-led destination.",
    hero: {
      eyebrow: "Leasing / Available Spaces",
      title: "Premium commercial spaces for ambitious brands.",
      subtitle:
        "Home Square offers showroom, office, retail and experience-led commercial spaces for businesses aligned with the home, interior and lifestyle ecosystem.",
      body:
        "If your business benefits from category relevance, destination footfall and premium presentation, Home Square offers a stronger place to grow.",
      primaryCta: { label: "Enquire for Space", href: "#page-form" },
      secondaryCta: { label: "Schedule Site Visit", href: "/contact-us" },
      trustLine: "Commercial spaces designed for performance, perception and long-term business value.",
      image: visuals.showroom,
    },
    sections: [
      {
        type: "quoteBand",
        heading: "Choose a space that matches your business format.",
        body:
          "Home Square supports multiple business models, from large product-led showrooms to offices, studios, service hubs and experience centres.",
      },
      {
        type: "cards",
        heading: "Space types available.",
        items: [
          { title: "Showroom Spaces", body: "Ideal for furniture, appliances, marbles, lighting, tiles and sanitaryware brands." },
          { title: "Retail Stores", body: "Suitable for decor, furnishing, accessories, lifestyle and home styling businesses." },
          { title: "Office Spaces", body: "For interior firms, architects, consultants and back-end support teams." },
          { title: "Experience Centres", body: "For consultation-led or demo-led brands that need a richer customer journey." },
        ],
      },
      {
        type: "categories",
        heading: "Best suited business categories.",
        items: [
          "Furniture Showrooms",
          "Furnishing Stores",
          "Electronics & Appliance Brands",
          "Lighting Brands",
          "Tiles & Flooring Brands",
          "Paint & Wallpaper Stores",
          "Modular Kitchen Brands",
          "Sanitaryware & Bath Fittings",
          "Interior Design Studios",
          "Architecture Firms",
          "Office Furniture Brands",
          "Decor & Lifestyle Stores",
          "Glass & Partition Solutions",
          "False Ceiling Brands",
          "Art & Planter Stores",
          "Smart Home Solutions",
        ],
      },
      {
        type: "split",
        eyebrow: "Why Lease at Home Square",
        title: "A location and format designed to support commercial growth.",
        body:
          "Leasing at Home Square means being part of a destination that already aligns with your category, attracts relevant customers and gives your brand a stronger environment to be seen, compared and chosen.",
        points: [
          "Category-led visitor intent",
          "Premium destination value",
          "Operational convenience and amenity support",
          "Better customer discovery and stay time",
        ],
        cta: { label: "Why It Works", href: "/why-homesquare" },
        image: visuals.workspace,
      },
      {
        type: "cards",
        heading: "Business use cases by category.",
        items: [
          { title: "For Furniture Brands", body: "Large displays, room concepts and comparison-led shopping become easier in a destination format." },
          { title: "For Electronics Brands", body: "Appliances and home electronics benefit from strong complementary traffic and modern positioning." },
          { title: "For Modular Kitchen Brands", body: "Consultation-heavy businesses gain from qualified walk-ins and destination-based research visits." },
          { title: "For Decor & Lifestyle Brands", body: "Premium impulse and project-led purchases improve when the surrounding context is aligned." },
        ],
      },
      {
        type: "leadForm",
        id: "page-form",
        heading: "Enquire for space availability.",
        description:
          "Tell us about your business format, category and approximate requirement. Our team will help you explore suitable options at Home Square.",
        fields: defaultEnquiryFields,
        options: defaultInterestOptions,
        submitLabel: "Submit Enquiry",
        successMessage: "Thank you for your enquiry. Our leasing team will connect with you shortly.",
        microcopy:
          "We only use your details to assist with your Home Square space enquiry.",
      },
      {
        type: "ctaBanner",
        heading: "See the destination before you decide.",
        body:
          "A site visit helps you understand frontage, layout, customer movement, amenities, access and the overall brand environment in a practical way.",
        primaryCta: { label: "Schedule a Visit", href: "/contact-us" },
        secondaryCta: { label: "Explore Brands", href: "/brands" },
      },
    ],
  },
  {
    slug: "/one-stop-interior-destination",
    navLabel: "One-Stop Destination",
    title: "One Stop Interior Destination in Siliguri | Home Square",
    description:
      "Home Square is Siliguri's one-stop destination for furniture, furnishings, electronics, lighting, tiles, paint, decor, kitchen solutions, sanitaryware and complete home improvement needs.",
    hero: {
      eyebrow: "One Stop Interior Destination",
      title: "A complete destination for home, interior, decor, furnishing and lifestyle needs.",
      subtitle:
        "Home Square is designed to bring multiple relevant categories together so customers can discover more and businesses can benefit from shared intent.",
      body:
        "It is a one-stop destination built around how real home decisions happen: comparison, consultation, inspiration and convenience in one place.",
      primaryCta: { label: "Explore Categories", href: "#category-grid" },
      secondaryCta: { label: "See Available Spaces", href: "/leasing" },
      trustLine: "A destination format that works better for both customers and brands.",
      image: visuals.category,
    },
    sections: [
      {
        type: "quoteBand",
        heading: "Why a one-stop destination matters.",
        body:
          "When categories that serve the same customer journey are brought together, buying becomes easier and business discovery becomes stronger.",
      },
      {
        type: "categories",
        id: "category-grid",
        heading: "The Home Square category grid.",
        items: [
          "Furniture",
          "Furnishings",
          "Electronics",
          "Lighting",
          "Tiles & Paint",
          "Modular Kitchen",
          "Sanitaryware",
          "Decor",
          "Lifestyle Services",
          "Dining & Experience",
        ],
      },
      {
        type: "cards",
        heading: "The customer journey at Home Square.",
        items: [
          { title: "Discover", body: "Explore multiple relevant brands in one destination instead of scattered locations." },
          { title: "Compare", body: "Evaluate solutions across categories, finishes, budgets and styles in a more efficient way." },
          { title: "Decide", body: "Move from inspiration to consultation to purchase with less friction." },
          { title: "Stay Longer", body: "Amenities and food options make the visit more comfortable and complete." },
        ],
      },
      {
        type: "split",
        eyebrow: "Business Advantage",
        title: "When customer journeys connect, brand performance improves.",
        body:
          "Businesses inside Home Square benefit from adjacency, shared relevance, stronger discovery and a destination context that naturally supports better intent.",
        points: [
          "More relevant surrounding categories",
          "Improved dwell time and destination value",
          "Greater potential for cross-category discovery",
        ],
        cta: { label: "Explore Brands", href: "/brands" },
        image: visuals.showroom,
        reverse: true,
      },
      {
        type: "cards",
        heading: "Ideal for businesses that serve the home and lifestyle customer.",
        items: [
          { title: "For brands", body: "A stronger ecosystem for product-led, consultation-led and design-led businesses." },
          { title: "For customers", body: "A simpler, more complete place to plan purchases and project decisions." },
          { title: "For the destination", body: "A clearer identity that strengthens repeat visits and premium perception." },
        ],
      },
      {
        type: "ctaBanner",
        heading: "Experience a destination where multiple needs come together under one roof.",
        body:
          "If your business fits the home, interior or lifestyle journey, Home Square is designed to make that relevance visible.",
        primaryCta: { label: "Book a Site Visit", href: "/contact-us" },
        secondaryCta: { label: "Enquire for Space", href: "/leasing" },
      },
    ],
  },
  {
    slug: "/amenities",
    navLabel: "Amenities",
    title: "Conveniences & Amenities at Home Square Siliguri",
    description:
      "Discover the business-ready amenities and visitor conveniences that make Home Square a premium, practical commercial destination in Salugara, Siliguri.",
    hero: {
      eyebrow: "Conveniences & Amenities",
      title: "Premium conveniences that make business smoother and visits more comfortable.",
      subtitle:
        "Home Square supports both customer experience and day-to-day commercial practicality through a thoughtful amenities layer.",
      body:
        "The destination is designed to make arrival, circulation, exploration, operations and longer visits feel easier for everyone using the space.",
      primaryCta: { label: "Enquire Now", href: "/contact-us" },
      secondaryCta: { label: "Explore Leasing", href: "/leasing" },
      trustLine: "Built for brands, visitors, staff and real-world daily use.",
      image: visuals.lobby,
    },
    sections: [
      {
        type: "cards",
        heading: "Customer conveniences.",
        items: [
          { title: "Parking", body: "Practical arrival support for families, individual visitors and destination-led shopping." },
          { title: "Security", body: "A safer and more reassuring environment that supports premium perception." },
          { title: "Lifts & Access", body: "Easier movement across the property for all age groups and use cases." },
          { title: "Food & Pause Points", body: "Comfort layers that make visits longer, easier and more complete." },
        ],
      },
      {
        type: "cards",
        heading: "Business conveniences.",
        items: [
          { title: "Operational practicality", body: "Amenities that support daily business flow and customer management." },
          { title: "Better visit quality", body: "A more complete destination encourages more meaningful in-person exploration." },
          { title: "Premium brand environment", body: "Convenience and presentation together create stronger perception." },
        ],
      },
      {
        type: "amenities",
        heading: "Amenities at a glance.",
        items: [
          "Parking",
          "Security",
          "Lifts",
          "Wide passages",
          "Comfortable common areas",
          "Food court support",
          "Easy visitor circulation",
          "Business-ready environment",
        ],
      },
      {
        type: "cards",
        heading: "Why amenities matter.",
        items: [
          { title: "They reduce friction", body: "Practical conveniences make a destination easier to visit and easier to operate within." },
          { title: "They support dwell time", body: "Comfort-driven infrastructure encourages customers to spend more useful time on site." },
          { title: "They influence perception", body: "Premium convenience shapes how brands and visitors judge the destination." },
        ],
      },
      {
        type: "ctaBanner",
        heading: "A premium destination is not just about space. It is about the full experience around that space.",
        body:
          "Explore how Home Square's convenience layer supports stronger visits, better brand presence and smoother daily operations.",
        primaryCta: { label: "Book a Site Visit", href: "/contact-us" },
        secondaryCta: { label: "See the One-Stop Journey", href: "/one-stop-interior-destination" },
      },
    ],
  },
  {
    slug: "/brands",
    navLabel: "Brands",
    title:
      "Brands at Home Square Siliguri | Interior, Furniture, Electronics & Lifestyle Stores",
    description:
      "Explore brands at Home Square, Siliguri including electronics, furniture, furnishing, interior, salon, decor and lifestyle businesses inside a premium commercial destination in Salugara.",
    hero: {
      eyebrow: "Brands at Home Square",
      title: "Brands that make Home Square a complete destination.",
      subtitle:
        "Home Square brings together leading home, interior, lifestyle, furnishing, electronics and service brands under one premium commercial address in Salugara, Siliguri.",
      body:
        "From electronics and furnishings to interiors, lifestyle services and home improvement solutions, Home Square is growing into a destination where customers can explore multiple trusted brands in one visit.",
      primaryCta: { label: "Explore Brands", href: "#featured-brands" },
      secondaryCta: { label: "Enquire for Space", href: "/leasing" },
      trustLine: "A curated ecosystem where each brand adds relevance to the whole destination.",
      image: visuals.showroom,
    },
    sections: [
      {
        type: "quoteBand",
        heading: "A growing ecosystem of relevant brands.",
        body:
          "When brands serve the same customer journey, the entire destination becomes stronger.",
      },
      {
        type: "brandGrid",
        id: "featured-brands",
        heading: "Featured brands at Home Square.",
        items: [
          {
            title: "JioMart Digital",
            meta: "Electronics & Appliances",
            body: "Electronics and appliances for modern homes, offices and lifestyle needs.",
            caption: "Best for TVs, refrigerators, washing machines, ACs, gadgets and home electronics.",
          },
          {
            title: "The Furnishing Story",
            meta: "Furnishings & Home Styling",
            body: "Premium furnishing solutions for homes, offices and interior styling.",
            caption: "Best for curtains, fabrics, upholstery, soft furnishings and decor styling.",
          },
          {
            title: "Livspace",
            meta: "Interior Design & Home Solutions",
            body: "Interior design and home transformation solutions for modern living.",
            caption: "Best for modular interiors, design consultation, space planning and home makeovers.",
          },
          {
            title: "Neel David's Luxury Salon",
            meta: "Salon & Lifestyle",
            body: "A premium salon experience for beauty, grooming and transformation services.",
            caption: "Best for hair, beauty, grooming, makeup and premium salon services.",
          },
          {
            title: "Paints and Coats",
            meta: "Paint & Surface Solutions",
            body: "Paint, finish and surface solutions for homes and commercial spaces.",
            caption: "Best for wall paints, textures, finishes and colour solutions.",
          },
          {
            title: "Bhawani Marbles",
            meta: "Marble & Surface Solutions",
            body: "Stone, marble and surface solutions for premium interiors.",
            caption: "Best for marble, stone finishes, flooring and interior surfaces.",
          },
          {
            title: "Hungry Hippies",
            meta: "Food & Dining",
            body: "A food and dining destination that adds comfort, energy and experience to every visit.",
            caption: "Best for visitor breaks, casual dining and longer customer stay time.",
          },
        ],
      },
      {
        type: "cards",
        heading: "A brand mix built around customer needs.",
        items: [
          { title: "Home Improvement", body: "Paints, marbles, surfaces, furnishings, interiors and design-led products." },
          { title: "Electronics & Lifestyle", body: "Appliances, gadgets and modern home electronics for everyday living." },
          { title: "Interior & Decor Solutions", body: "Design services, furnishings, finishes and styling support for homes and offices." },
          { title: "Food & Experience", body: "Dining options that make the destination more engaging and encourage visitors to spend more time." },
          { title: "Beauty & Lifestyle Services", body: "Supporting services that make the destination more rounded, relevant and convenient." },
        ],
      },
      {
        type: "cards",
        heading: "Why customers and businesses benefit from this ecosystem.",
        items: [
          { title: "Customers benefit", body: "They can discover, compare and complete more of their decision journey in one visit." },
          { title: "Brands benefit", body: "They gain stronger adjacency, better context and more meaningful customer flow." },
          { title: "The destination benefits", body: "A more relevant mix strengthens repeat visits, trust and premium perception." },
        ],
      },
      {
        type: "ctaBanner",
        heading: "Discover brands. Explore possibilities. Experience Home Square.",
        body:
          "If your business belongs in this ecosystem, now is the time to explore the opportunity.",
        primaryCta: { label: "Enquire for Space", href: "/leasing" },
        secondaryCta: { label: "Contact the Team", href: "/contact-us" },
      },
    ],
  },
  {
    slug: "/gallery",
    navLabel: "Gallery",
    title: "Home Square Gallery | Commercial Project Photos in Siliguri",
    description:
      "Explore the Home Square gallery featuring architecture, interiors, common areas, commercial spaces, amenities and brand-ready visuals from the project in Siliguri.",
    hero: {
      eyebrow: "Gallery",
      title: "A visual look at the Home Square destination.",
      subtitle:
        "Explore the architecture, elevations, interiors, common areas, commercial spaces, amenities and brand-ready environment of Home Square.",
      body:
        "The gallery is designed to help visitors, brands and prospective tenants understand the physical quality and premium character of the destination.",
      primaryCta: { label: "View Gallery", href: "#gallery-sections" },
      secondaryCta: { label: "Book a Site Visit", href: "/contact-us" },
      trustLine: "A commercial destination built to be experienced in person and understood visually.",
      image: visuals.galleryOne,
    },
    sections: [
      {
        type: "categories",
        id: "gallery-sections",
        heading: "Gallery categories.",
        items: [
          "All Photos",
          "Project Completed",
          "Elevations",
          "Interiors",
          "Common Areas",
          "Commercial Spaces",
          "Amenities",
          "Brands & Stores",
        ],
      },
      {
        type: "galleryPreview",
        heading: "Project completed, elevations and interiors.",
        items: [
          { title: "Project Completed", image: visuals.galleryOne },
          { title: "Elevations", image: visuals.galleryTwo },
          { title: "Interiors", image: visuals.galleryThree },
        ],
      },
      {
        type: "galleryPreview",
        heading: "Common areas, commercial spaces and amenities.",
        items: [
          { title: "Common Areas", image: visuals.galleryTwo },
          { title: "Commercial Spaces", image: visuals.galleryThree },
          { title: "Amenities", image: visuals.galleryOne },
        ],
        cta: { label: "Enquire for Space", href: "/leasing" },
      },
      {
        type: "ctaBanner",
        heading: "See the destination, then see it in person.",
        body:
          "The gallery offers a preview, but a site visit gives the clearest sense of scale, frontage, accessibility and commercial fit.",
        primaryCta: { label: "Schedule Site Visit", href: "/contact-us" },
        secondaryCta: { label: "Explore Brands", href: "/brands" },
      },
    ],
  },
  {
    slug: "/awards-recognition",
    navLabel: "Awards",
    title: "Awards & Recognition | Home Square and Manakamna Group",
    description:
      "Discover awards, recognitions, media visibility and credibility signals connected to Home Square and Manakamna Group.",
    hero: {
      eyebrow: "Awards & Recognition",
      title: "Credibility built through recognition, visibility and trust.",
      subtitle:
        "Home Square and Manakamna Group are positioned through awards, recognitions, media mentions and long-term market confidence.",
      body:
        "For businesses evaluating a commercial destination, recognition matters because it signals credibility, seriousness and broader market trust.",
      primaryCta: { label: "Know About the Developer", href: "/about" },
      secondaryCta: { label: "Enquire for Space", href: "/leasing" },
      trustLine: "Recognition adds confidence to the destination behind the opportunity.",
      image: visuals.award,
    },
    sections: [
      {
        type: "cards",
        heading: "Featured recognition.",
        items: [
          { title: "Executive leadership recognition", body: "Sahil Chaudhary was honoured for Outstanding Contribution in Regional Infrastructure Development at the Iconic Achievers Award East Edition 2025." },
          { title: "Project-level credibility", body: "Home Square continues to gain recognition for its commercial concept, theme-based planning and market presence." },
          { title: "Media and market visibility", body: "Awards and coverage reinforce trust for tenants, brands and business decision-makers." },
        ],
      },
      {
        type: "timeline",
        heading: "Recognition timeline.",
        items: [
          { title: "2025", body: "Leadership recognition for regional infrastructure contribution and development impact." },
          { title: "2023", body: "A series of wins and visibility moments strengthened awareness around Home Square's commercial concept." },
          { title: "Ongoing", body: "Media mentions, trust signals and destination-led credibility continue to support the project narrative." },
        ],
      },
      {
        type: "split",
        eyebrow: "Why This Matters",
        title: "Recognition supports trust when businesses are choosing where to grow.",
        body:
          "Awards and visibility do not replace practical due diligence, but they do reinforce confidence in the developer, the project and the seriousness behind the destination.",
        points: [
          "Improves first-level trust",
          "Strengthens brand confidence",
          "Supports long-term credibility in the market",
        ],
        cta: { label: "See Project Updates", href: "/project-updates" },
        image: visuals.facade,
      },
      {
        type: "ctaBanner",
        heading: "Explore a destination backed by credibility and commercial intent.",
        body:
          "If recognition, trust and project quality matter to your business decision, Home Square is ready for a closer look.",
        primaryCta: { label: "Book a Site Visit", href: "/contact-us" },
        secondaryCta: { label: "Explore Leasing", href: "/leasing" },
      },
    ],
  },
  {
    slug: "/project-updates",
    navLabel: "Project Updates",
    title: "Project Updates | Home Square Siliguri",
    description:
      "Follow project completion, readiness and business opportunity updates for Home Square in Salugara, Siliguri.",
    hero: {
      eyebrow: "Project Updates",
      title: "Home Square is completed, active and ready for business.",
      subtitle:
        "Project updates help prospective brands and visitors understand progress, completion, readiness and the commercial opportunity ahead.",
      body:
        "From completion milestones to site visit readiness, Home Square is positioned as a destination that can now be explored in real terms.",
      primaryCta: { label: "Book a Site Visit", href: "/contact-us" },
      secondaryCta: { label: "Enquire for Space", href: "/leasing" },
      trustLine: "A completed destination is easier to evaluate, easier to trust and easier to plan for.",
      image: visuals.skyline,
    },
    sections: [
      {
        type: "statusCards",
        heading: "Current project status.",
        items: [
          { title: "Project completed", body: "The destination is positioned as operationally ready and visually established." },
          { title: "Spaces ready for brands", body: "Prospective tenants can now evaluate fit, frontage and environment more clearly." },
          { title: "Site visits available", body: "The project can be experienced in person for practical decision-making." },
        ],
      },
      {
        type: "timeline",
        heading: "Project journey timeline.",
        items: [
          { title: "Concept & Planning", body: "A category-led destination was shaped around the home, interior and lifestyle ecosystem." },
          { title: "Development & Build", body: "The project moved from idea to physical destination with a premium business-ready framework." },
          { title: "Completion & Activation", body: "Home Square is now positioned for business discovery, site visits and leasing conversations." },
        ],
      },
      {
        type: "galleryPreview",
        heading: "Project update gallery.",
        items: [
          { title: "Facade & Arrival", image: visuals.galleryOne },
          { title: "Interiors & Common Areas", image: visuals.galleryTwo },
          { title: "Brand-Ready Spaces", image: visuals.galleryThree },
        ],
      },
      {
        type: "cards",
        heading: "What completion means for businesses.",
        items: [
          { title: "More confidence", body: "Brands can evaluate the real environment instead of relying only on projections." },
          { title: "Faster decision-making", body: "Site visits, frontage review and location understanding become easier." },
          { title: "Clearer commercial planning", body: "Businesses can better assess fit, movement, visibility and experience value." },
        ],
      },
      {
        type: "ctaBanner",
        heading: "Ready to explore the opportunity in person?",
        body:
          "Visit Home Square, understand the destination and evaluate the business potential with our team.",
        primaryCta: { label: "Schedule a Visit", href: "/contact-us" },
        secondaryCta: { label: "Explore Leasing", href: "/leasing" },
      },
    ],
  },
  {
    slug: "/blog",
    navLabel: "Blog",
    title:
      "Home Square Blog | Commercial Space, Interiors & Business Growth in Siliguri",
    description:
      "Read Home Square blog articles on commercial space, project updates, awards, brand stories, home trends and business growth in Siliguri.",
    hero: {
      eyebrow: "Blog",
      title: "A knowledge hub for business growth, home lifestyle and destination updates.",
      subtitle:
        "The Home Square Blog brings together news, ideas and insights for businesses, brands, buyers and anyone interested in Siliguri's growing home and lifestyle market.",
      body:
        "From project updates and awards to commercial space guidance and category insights, the blog supports both trust-building and SEO growth.",
      primaryCta: { label: "Read Latest Blogs", href: "#latest-articles" },
      secondaryCta: { label: "Explore Home Square", href: "/" },
      trustLine: "For brands, buyers and businesses - stay informed with Home Square.",
      image: visuals.workspace,
    },
    sections: [
      {
        type: "quoteBand",
        heading: "More than updates. A knowledge hub for business and home lifestyle.",
        body:
          "Home Square sits at the intersection of commercial real estate, home improvement, interiors, lifestyle retail and business growth.",
      },
      {
        type: "featuredBlog",
        heading: "Featured stories.",
        item: {
          title:
            "Recognizing Excellence in Regional Development: Sahil Chaudhary Honored",
          category: "Awards & Recognition",
          excerpt:
            "Sahil Chaudhary, Executive Director of Manakamna Group, was honoured for Outstanding Contribution in Regional Infrastructure Development at the Iconic Achievers Award East Edition 2025.",
          cta: "Read More",
        },
      },
      {
        type: "categories",
        heading: "Explore by category.",
        items: [
          "All Blogs",
          "Project Updates",
          "Awards & Recognition",
          "Commercial Spaces",
          "Business Growth",
          "Interior & Home Trends",
          "Siliguri Market Insights",
          "Brand Stories",
          "Press Releases",
        ],
      },
      {
        type: "blogList",
        id: "latest-articles",
        heading: "Latest articles.",
        items: [
          {
            title:
              "Recognizing Excellence in Regional Development: Sahil Chaudhary Honored",
            category: "Awards & Recognition",
            date: "April 29, 2025",
            excerpt:
              "A proud recognition for Manakamna Group's contribution to regional infrastructure and development.",
          },
          {
            title: "A Series of Winnings for Home Square",
            category: "Awards & Media",
            date: "April 23, 2023",
            excerpt:
              "Home Square continues to gain recognition across media and industry platforms for its commercial concept and theme-based planning.",
          },
          {
            title: "Why Category-Focused Commercial Spaces Work Better for Retail Brands",
            category: "Commercial Spaces",
            date: "Suggested Topic",
            excerpt:
              "A look at why destination-led, category-driven commercial environments create stronger outcomes than generic retail clustering.",
          },
        ],
      },
      {
        type: "cards",
        heading: "Suggested blog topics for SEO growth.",
        items: [
          { title: "Why Retail Brands Need Experience Centres, Not Just Stores", body: "A thought piece on how modern buyers evaluate products and services in person." },
          { title: "Why Furniture & Furnishing Brands Should Choose Destination-Led Spaces", body: "An SEO-driven article aligned with Home Square's market fit." },
          { title: "Why Home Square Is Ideal for Home, Interior and Lifestyle Brands", body: "A conversion-friendly explainer built for organic search and business outreach." },
        ],
      },
      {
        type: "leadForm",
        id: "newsletter",
        heading: "Newsletter and lead capture.",
        description:
          "Stay updated on leasing opportunities, business updates and brand announcements at Home Square.",
        fields: ["Name", "Email", "Phone Number", "I am interested in"],
        options: [
          "Leasing Space",
          "Visiting Home Square",
          "Business Updates",
          "Brand Announcements",
        ],
        submitLabel: "Subscribe & Enquire",
        successMessage: "Thanks for signing up. We'll keep you updated with relevant Home Square news.",
        microcopy: "We keep communication relevant, focused and limited to Home Square updates.",
      },
      {
        type: "ctaBanner",
        heading: "Explore the destination behind the stories.",
        body:
          "The Home Square Blog is your space to learn more about Siliguri's commercial growth, category opportunities and the destination itself.",
        primaryCta: { label: "Read Latest Blogs", href: "#latest-articles" },
        secondaryCta: { label: "Enquire for Space", href: "/leasing" },
      },
    ],
  },
  {
    slug: "/contact-us",
    navLabel: "Contact",
    title:
      "Contact Home Square Siliguri | Book Site Visit & Enquire for Commercial Space",
    description:
      "Contact Home Square, Siliguri to enquire about commercial spaces, showroom spaces, retail stores, offices, experience centres and site visits at Salugara.",
    hero: {
      eyebrow: "Contact Home Square",
      title: "Book a site visit, enquire for space or speak with our team.",
      subtitle:
        "Looking for a premium commercial space in Siliguri? Get in touch with us to enquire, book a site visit or explore available spaces.",
      body:
        "Home Square is located at Bikash Nagar, Salugara Bazar - a strategic commercial address for brands, showrooms, offices, retail stores and experience centres.",
      primaryCta: { label: "Book a Site Visit", href: "#contact-form" },
      secondaryCta: { label: "Call 80011-71000", href: "tel:80011-71000" },
      trustLine: "Clear, premium and action-focused communication for serious business enquiries.",
      image: visuals.hero,
    },
    sections: [
      {
        type: "contactCards",
        heading: "Connect with us.",
        items: [
          {
            title: "Call Us",
            meta: "80011-71000",
            body: "Speak to our team for space enquiries, site visits and project details.",
            cta: { label: "Call Now", href: "tel:80011-71000" },
          },
          {
            title: "Email Us",
            meta: "hello@homesquare.info",
            body: "Send your enquiry and our team will connect with you.",
            cta: { label: "Send Email", href: "mailto:hello@homesquare.info" },
          },
          {
            title: "Visit Us",
            meta: "Bikash Nagar, Salugara Bazar, Siliguri - 734008",
            body: "Visit Home Square and explore the commercial destination in person.",
            cta: { label: "Get Directions", href: contactDetails.maps },
          },
        ],
      },
      {
        type: "leadForm",
        id: "contact-form",
        heading: "Enquire for commercial space.",
        description:
          "Share your business details and our team will help you explore suitable spaces at Home Square.",
        fields: defaultEnquiryFields,
        options: defaultInterestOptions,
        submitLabel: "Submit Enquiry",
        successMessage:
          "Thank you for your enquiry. Our team will connect with you shortly.",
        microcopy:
          "Your details are safe with us. We'll only contact you regarding your Home Square enquiry.",
      },
      {
        type: "cards",
        heading: "Why book a site visit?",
        items: [
          { title: "Explore available commercial spaces", body: "See the scale, fit and possible use of the destination in real terms." },
          { title: "Understand location and connectivity", body: "Evaluate access, visibility and business practicality firsthand." },
          { title: "Review amenities and common areas", body: "See how parking, circulation, comfort and convenience support the overall destination." },
        ],
      },
      {
        type: "quoteBand",
        heading: "Ideal for home, interior, lifestyle and retail brands.",
        body:
          "Furniture, decor, appliances, lighting, modular kitchen, sanitaryware, design studios and experience-led businesses can all explore relevant formats at Home Square.",
      },
      {
        type: "faq",
        heading: "Frequently asked questions.",
        items: [
          {
            title: "Can I book a site visit before deciding on a space?",
            body: "Yes. A site visit is one of the best ways to understand the location, layout, amenities and the overall commercial potential of Home Square.",
          },
          {
            title: "What types of spaces are available?",
            body: "Home Square is suitable for showroom spaces, retail stores, office spaces, experience centres and select food and dining formats.",
          },
          {
            title: "Is Home Square only for interior brands?",
            body: "The strongest fit is home, interior, decor, furnishing, electronics, lifestyle and related service businesses, but category relevance is what matters most.",
          },
          {
            title: "Can I enquire even if I am still exploring options?",
            body: "Yes. Our team can help you understand the destination and guide you based on your business format and approximate requirement.",
          },
          {
            title: "Is the project ready for brand visits and inspections?",
            body: "Yes. The website content positions Home Square as completed, active and ready for site visits and business evaluation.",
          },
          {
            title: "How quickly will the team respond?",
            body: "The contact flow is designed for quick follow-up on space enquiries, site visits and business requirements.",
          },
        ],
      },
      {
        type: "ctaBanner",
        heading: "Let's start the conversation.",
        body:
          "Whether you need a showroom, retail unit, office, experience centre or simply want to visit the destination, Home Square is ready for your enquiry.",
        primaryCta: { label: "Call 80011-71000", href: "tel:80011-71000" },
        secondaryCta: { label: "Email Us", href: "mailto:hello@homesquare.info" },
      },
    ],
  },
];
