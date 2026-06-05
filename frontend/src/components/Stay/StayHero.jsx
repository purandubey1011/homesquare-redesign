import { stayHero } from "./stayData";

export default function StayHero() {
  const titleLines = stayHero.title.split("\n");

  return (
    <section className="bg-[#eae5df] px-4 pb-20 pt-28 text-center md:px-8 md:pb-24 lg:px-10 lg:pt-34 lg:pb-26" id="top">
      <div className="mx-auto max-w-[64rem]">
        <span className="text-[0.92rem] uppercase tracking-[0.18em] text-[#0a6a70]">
          {stayHero.eyebrow}
        </span>
        <h1 className="mt-10 font-['Kaftan_Serif'] text-[clamp(4.4rem,8vw,8.5rem)] leading-[0.9] tracking-[-0.055em] text-[#34211a]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-12 max-w-[50rem] text-[1.12rem] leading-[1.62] text-[rgba(72,54,42,0.82)]">
          {stayHero.description}
        </p>
      </div>
    </section>
  );
}
