import { useState } from "react";
import { menuCategories, menuNote } from "./diningData";

function MenuCard({ item }) {
  return (
    <article className="border-t border-[rgba(72,54,42,0.16)] pt-7">
      <h4 className="text-[0.9rem] uppercase tracking-[0.12em] text-[#aa5204]">
        {item.name}
      </h4>
      {item.description ? (
        <p className="mt-4 max-w-[35rem] text-[0.94rem] leading-[1.6] text-[rgba(72,54,42,0.84)] md:text-[0.98rem]">
          {item.description}
        </p>
      ) : null}
      <p className="mt-5 text-[0.95rem] font-normal text-[#48362a]">{item.price}</p>
    </article>
  );
}

export default function DiningMenuSection() {
  const [activeTab, setActiveTab] = useState("starters");
  const activeCategory =
    menuCategories.find((category) => category.id === activeTab) ?? menuCategories[0];

  const leftColumn = [];
  const rightColumn = [];
  activeCategory.items.forEach((item, index) => {
    if (index % 2 === 0) leftColumn.push(item);
    else rightColumn.push(item);
  });

  return (
    <section className="border-t border-[rgba(72,54,42,0.12)] bg-[#eae5df] px-4 py-22 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1224px]">
        <h2 className="font-['Kaftan_Serif'] text-[clamp(3.5rem,5.4vw,4.8rem)] leading-[0.92] tracking-[-0.04em] text-[#34211a]">
          Our menu
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          {menuCategories.map((category) => {
            const isActive = category.id === activeCategory.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveTab(category.id)}
                className={`rounded-full border px-5 py-[0.78rem] text-[0.88rem] transition-colors duration-300 ${
                  isActive
                    ? "border-[rgba(72,54,42,0.18)] bg-transparent text-[#48362a]"
                    : "border-transparent text-[rgba(72,54,42,0.42)] hover:text-[rgba(72,54,42,0.72)]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {activeCategory.featured ? (
          <div className="mt-8 bg-[rgba(255,255,255,0.28)] px-8 py-9 md:px-8">
            <h3 className="text-[0.9rem] uppercase tracking-[0.12em] text-[#aa5204]">
              * {activeCategory.featured.name}
            </h3>
            <p className="mt-4 max-w-[48rem] text-[0.96rem] leading-[1.58] text-[rgba(72,54,42,0.84)] md:text-[0.98rem]">
              {activeCategory.featured.description}
            </p>
            <p className="mt-5 text-[0.95rem] font-normal text-[#48362a]">
              {activeCategory.featured.price}
            </p>
          </div>
        ) : null}

        <div className="mt-9 grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-2">
          <div className="grid gap-8">
            {leftColumn.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
          <div className="grid gap-8">
            {rightColumn.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <p className="mt-12 text-[0.86rem] leading-[1.7] text-[rgba(72,54,42,0.38)]">
          {menuNote}
        </p>

        <a
          href="#reservation"
          className="mt-14 inline-flex items-center gap-4 rounded-full bg-[#aa5204] px-8 py-[1.1rem] text-[0.94rem] font-medium text-white"
        >
          <span>Make a reservation</span>
          <span className="text-[1.2rem] leading-none">◔</span>
        </a>
      </div>
    </section>
  );
}
