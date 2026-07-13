import { ComparisonSection } from "../site/PageSections";

const section = {
  type: "comparison",
  heading: "Regular commercial space vs Home Square.",
  leftLabel: "Regular commercial space",
  rightLabel: "Home Square",
  rows: [
    [
      "Mixed or unrelated footfall",
      "Category-aligned, higher-intent footfall"
    ],
    [
      "Standalone visibility challenges",
      "Destination-led visibility and stronger brand context"
    ],
    [
      "Limited visitor comfort",
      "Parking, security, lifts, food court and wider convenience"
    ],
    [
      "Transactional space value",
      "Longer-term ecosystem and positioning value"
    ]
  ]
};

const RegularCommercial = () => <ComparisonSection section={section} />;

export default RegularCommercial;
