import { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { treatmentCategories, treatmentNote } from "./relaxData";

function TreatmentCard({ item }) {
  return (
    <article className="border-t border-[rgba(72,54,42,0.16)] pt-8 md:pt-10">
      <h3 className="text-[1.02rem] font-medium leading-none tracking-[0.1em] text-[#aa5204] uppercase">
        {item.name}
      </h3>
      <p className="mt-4 max-w-[34rem] text-[clamp(1rem,1.06vw,1.06rem)] leading-[1.6] text-[rgba(72,54,42,0.84)]">
        {item.description}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-6 text-[1.01rem] text-[#3d2a21]">
        <span className="font-medium tracking-[-0.01em]">{item.price}</span>
        <span className="inline-flex items-center gap-2 text-[rgba(72,54,42,0.52)]">
          <LuClock3 className="h-[1rem] w-[1rem]" />
          {item.duration}
        </span>
      </div>
    </article>
  );
}

export default function RelaxTreatmentsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(treatmentCategories[0].id);

  const activeCategory = useMemo(
    () => treatmentCategories.find((category) => category.id === activeCategoryId) ?? treatmentCategories[0],
    [activeCategoryId]
  );

  const columns = useMemo(() => {
    const midpoint = Math.ceil(activeCategory.items.length / 2);
    return [
      activeCategory.items.slice(0, midpoint),
      activeCategory.items.slice(midpoint),
    ];
  }, [activeCategory]);

  return (
    <section className="bg-[#eae5df] pb-28 pt-10 md:pb-32 md:pt-12">
      <div className="h-px w-full bg-[rgba(72,54,42,0.14)]" />
      <div className="mx-auto w-full max-w-[1456px] px-4 pt-16 md:px-8 md:pt-18 lg:w-[76%]">
        <h2 className="font-['Kaftan_Serif'] text-[clamp(3.6rem,5.2vw,5.3rem)] leading-[0.9] tracking-[-0.05em] text-[#34211a]">
          Our treatments
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-8">
          {treatmentCategories.map((category) => {
            const active = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`rounded-full border px-[1.35rem] py-[0.82rem] text-[0.97rem] transition-all duration-300 ${
                  active
                    ? "border-[rgba(72,54,42,0.16)] bg-[#f4f0eb] text-[#34211a]"
                    : "border-transparent text-[rgba(72,54,42,0.54)] hover:text-[#34211a]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-x-14 gap-y-0 lg:grid-cols-2 lg:gap-x-16">
          {columns.map((items, index) => (
            <div key={index} className="space-y-0">
              {items.map((item) => (
                <TreatmentCard key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>

        <p className="mt-14 text-[0.96rem] text-[rgba(72,54,42,0.48)]">
          {treatmentNote}
        </p>

        <a
          href="#reservation"
          className="mt-14 inline-flex items-center gap-4 rounded-full bg-[#aa5204] px-8 py-[1.15rem] text-[1rem] font-medium text-white"
        >
          <span>Make a reservation</span>
          <FaWhatsapp className="h-[1.18rem] w-[1.18rem]" />
        </a>
      </div>
    </section>
  );
}
