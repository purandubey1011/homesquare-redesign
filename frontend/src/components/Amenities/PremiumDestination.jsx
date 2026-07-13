import { CTABanner } from "../site/PageSections";

const section = {
  type: "ctaBanner",
  heading: "A premium destination is not just about space. It is about the full experience around that space.",
  body: "Explore how Home Square's convenience layer supports stronger visits, better brand presence and smoother daily operations.",
  primaryCta: {
    label: "Book a Site Visit",
    href: "/contact-us"
  },
  secondaryCta: {
    label: "See the One-Stop Journey",
    href: "/one-stop-interior-destination"
  }
};

const PremiumDestination = () => <CTABanner section={section} />;

export default PremiumDestination;
