import { stayCollageSection } from "./stayData";

export default function StayCollageSection() {
  const titleLines = stayCollageSection.title.split("\n");

  return (
    <section className="bg-[#eae5df] px-0 pb-24 pt-4 md:pb-28" id={stayCollageSection.id}>
      <div className="relative">
        <div className="relative h-[31rem] overflow-hidden md:h-[36rem] lg:h-[40rem]">
          <img
            className="h-full w-full object-cover"
            src={stayCollageSection.backgroundImage}
            alt={stayCollageSection.title}
            loading="lazy"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[58%] flex justify-center">
          <div className="w-[13rem] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:w-[17rem] lg:w-[20rem]">
            <img
              className="h-[16rem] w-full object-cover md:h-[21rem] lg:h-[27rem]"
              src={stayCollageSection.centerImage}
              alt="The Damai stay collage"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[10rem] flex max-w-[58rem] flex-col items-center px-4 text-center md:mt-[12rem] md:px-8 lg:mt-[14rem]">
        <h2 className="font-['Kaftan_Serif'] text-[clamp(4rem,6.4vw,6rem)] leading-[0.92] tracking-[-0.05em] text-[#34211a]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mt-10 max-w-[46rem] text-[1.08rem] leading-[1.6] text-[rgba(72,54,42,0.82)] md:text-[1.1rem]">
          {stayCollageSection.description}
        </p>
      </div>
    </section>
  );
}
