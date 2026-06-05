import { introSection } from "./relaxData";

export default function RelaxIntroSection() {
  const titleLines = introSection.title.split("\n");

  return (
    <section className="bg-[#eae5df] px-4 pb-24 pt-[4.5rem] md:px-8 md:pb-28 md:pt-[5.5rem]">
      <div className="mx-auto w-full max-w-[75rem] lg:w-[74%]">
        <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <h2 className="max-w-[13.2ch] font-['Kaftan_Serif'] text-[clamp(3.35rem,5.1vw,5.1rem)] leading-[0.94] tracking-[-0.045em] text-[#34211a]">
            {titleLines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
        </div>

          <div className="max-w-[34rem] pt-2 lg:pt-4">
            {introSection.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-[clamp(0.98rem,1.12vw,1.02rem)] leading-[1.62] text-[rgba(72,54,42,0.82)] last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
