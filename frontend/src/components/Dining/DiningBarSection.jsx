import { barSection } from "./diningData";

export default function DiningBarSection() {
  return (
    <section className="bg-[#eae5df] px-0 pt-6 pb-24 md:pb-28" id={barSection.id}>
      <div className="relative">
        <div className="relative h-[37rem] overflow-hidden md:h-[43rem] lg:h-[49rem]">
          <img
            className="h-full w-full object-cover"
            src={barSection.backgroundImage}
            alt={barSection.title}
            loading="lazy"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[60%] flex justify-center">
          <div className="w-[13.6rem] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:w-[17rem] lg:w-[20.2rem]">
            <img
              className="h-[16rem] w-full object-cover md:h-[20rem] lg:h-[24rem]"
              src={barSection.centerImage}
              alt="Damai cocktail moment"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[10rem] flex max-w-[52rem] flex-col items-center px-4 text-center md:mt-[12rem] md:px-8">
        <h2 className="font-['Kaftan_Serif'] text-[clamp(3.8rem,6.2vw,5.9rem)] leading-[0.94] tracking-[-0.045em] text-[#34211a]">
          {barSection.title}
        </h2>

        <p className="mt-10 max-w-[46rem] text-[1.06rem] leading-[1.6] text-[rgba(72,54,42,0.82)] md:text-[1.08rem]">
          {barSection.description}
        </p>

        <a
          href={barSection.href}
          className="mt-12 inline-flex items-center gap-4 rounded-full bg-[#aa5204] px-9 py-[1.2rem] text-[1rem] font-medium text-white"
        >
          <span>{barSection.cta}</span>
          <span className="text-[1.25rem] leading-none">◔</span>
        </a>
      </div>
    </section>
  );
}
