import { discoverIntro } from "./discoverData";

export default function DiscoverIntroSection() {
  const titleLines = discoverIntro.title.split("\n");

  return (
    <section className="bg-[#eae5df] px-4 pb-24 pt-[15rem] text-center md:px-8 md:pb-28 md:pt-[18rem]">
      <div className="mx-auto max-w-[72rem]">
        <span className="text-[0.95rem] uppercase tracking-[0.16em] text-[#aa5204]">
          {discoverIntro.eyebrow}
        </span>
        <h1 className="mx-auto mt-8 max-w-[11ch] font-['Kaftan_Serif'] text-[clamp(4.2rem,7vw,7rem)] leading-[0.92] tracking-[-0.055em] text-[#34211a]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-12 max-w-[48rem] text-[clamp(1.04rem,1.22vw,1.18rem)] leading-[1.56] text-[rgba(72,54,42,0.84)]">
          {discoverIntro.description}
        </p>
      </div>
    </section>
  );
}
