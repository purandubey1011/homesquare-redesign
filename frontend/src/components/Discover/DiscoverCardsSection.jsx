import { LuMapPin } from "react-icons/lu";
import { discoverCardRows } from "./discoverData";

function DiscoverCard({ item }) {
  return (
    <article className="relative h-full overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src={item.image}
        alt={item.title}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,11,9,0.58),rgba(14,11,9,0.04)_52%,rgba(14,11,9,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 px-8 pb-8 text-white md:px-10 md:pb-10">
        <h3 className="text-[1.52rem] font-medium uppercase tracking-[0.08em] md:text-[1.65rem]">
          {item.title}
        </h3>
        <div className="mt-4 inline-flex items-center gap-2 text-[0.98rem] text-white/82 md:text-[1rem]">
          <LuMapPin className="h-[1.08rem] w-[1.08rem]" />
          <span>{item.location}</span>
        </div>
      </div>
    </article>
  );
}

export default function DiscoverCardsSection() {
  return (
    <section className="bg-[#eae5df] px-4 pb-28 md:px-8 md:pb-32">
      <div className="mx-auto max-w-[1788px]">
        {discoverCardRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-8 pt-5 pb-5 lg:h-[calc(100svh-106px-40px)] lg:grid-cols-3 ${
              rowIndex === 0 ? "" : "mt-8 lg:mt-10"
            }`}
          >
            {row.map((item) => (
              <DiscoverCard key={item.title} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
