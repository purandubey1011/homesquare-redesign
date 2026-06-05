import { packages } from "../Home/homeData";

export const packageNavLinks = [
  { label: "Stay", href: "/stay" },
  { label: "Dining", href: "/dining" },
  { label: "Relax", href: "/relax" },
  { label: "Discover", href: "/discover" },
  { label: "Packages", href: "/packages" },
];

export const packagePageHero = {
  eyebrow: "Enhance your stay",
  title: "Damai packages",
  description:
    "Upgrade your stay with one of our package offers to let you enjoy more of The Damai at a special promotional rate.",
};

export const packageCards = packages.map((item) =>
  item.name === "Damai Spa Bliss"
    ? {
        ...item,
        image:
          "https://thedamai.com/media/pages/home/d076611b2a-1703335664/kien-the-damai-228-1080x1440-crop-q72.webp",
      }
    : item,
);
