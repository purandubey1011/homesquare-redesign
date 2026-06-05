import { yogaSection } from "./relaxData";
import { FaWhatsapp } from "react-icons/fa";

export default function RelaxYogaSection() {
  return (
    <section className="bg-[#eae5df] pb-28 pt-0 md:pb-32">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            className="h-[calc(100svh-106px)] w-full object-cover"
            src={yogaSection.backgroundImage}
            alt={yogaSection.title}
            loading="lazy"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-full z-10 flex -translate-y-[42%] justify-center px-4 md:-translate-y-[70%]">
          <div className="overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
            <img
              className="h-[17rem] w-[13rem] object-cover md:h-[21rem] md:w-[16rem] lg:h-[22rem] lg:w-[16rem]"
              src={yogaSection.portraitImage}
              alt="Yoga portrait"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-56 flex max-w-[54rem] flex-col items-center px-4 text-center md:mt-64 md:px-8 lg:mt-55">
        <h2 className="font-['Kaftan_Serif'] text-[clamp(3.35rem,5.3vw,4.9rem)] leading-[0.92] tracking-[-0.05em] text-[#34211a]">
          {yogaSection.title}
        </h2>
        <p className="mt-8 max-w-[30rem] text-[clamp(1rem,1.05vw,1.04rem)] leading-[1.6] text-[rgba(72,54,42,0.84)]">
          {yogaSection.description}
        </p>
        <a
          href={yogaSection.href}
          className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#884206] px-6 py-[1rem] text-[1rem] font-medium text-white"
        >
          <span>{yogaSection.cta}</span>
          <FaWhatsapp className="h-[1.18rem] w-[1.18rem]" />
        </a>
      </div>
    </section>
  );
}
