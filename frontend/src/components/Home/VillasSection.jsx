import { useEffect, useState } from "react";
import { villaCards } from "./homeData";

const AUTOPLAY_MS = 4200;

function wrapIndex(index, length) {
  return (index + length) % length;
}

export default function VillasSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = villaCards.length;

  const upcomingIndex = wrapIndex(activeIndex + 1, total);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, total));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [total]);

  return (
    <section className="relative overflow-visible bg-[#eae5df] pb-[16rem] md:pb-[18rem]" id="villas">
      <div className="relative h-[100svh] min-h-[46rem] overflow-hidden bg-[#201915]">
        <div
          className="absolute inset-0 flex transition-transform duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translate3d(-${activeIndex * 100}%,0,0)` }}
        >
          {villaCards.map((villa) => (
            <div className="relative h-full min-w-full" key={villa.name}>
              <img
                className="h-full w-full object-cover"
                src={villa.image}
                alt={villa.name}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.12)_32%,rgba(0,0,0,0.32)_72%,rgba(0,0,0,0.52))]" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 top-[4.7rem] z-10 flex items-center justify-center gap-5 text-[1rem] font-medium text-[rgba(248,246,244,0.92)] md:top-[5rem]">
          <span>{activeIndex + 1}</span>
          <span className="h-px w-[5.5rem] bg-[rgba(248,246,244,0.38)]" />
          <span className="text-[rgba(248,246,244,0.54)]">{total}</span>
        </div>

        <div className="absolute inset-x-0 top-1/2 z-10 mx-auto flex w-[min(92vw,48rem)] -translate-y-[62%] flex-col items-center text-center text-[#f8f6f4] md:w-[min(82vw,52rem)]">
          <div className="relative min-h-[2.5rem] overflow-hidden md:min-h-[3rem]">
            {villaCards.map((villa, index) => {
              let stateClass = "translate-y-4 opacity-0";
              if (index === activeIndex) stateClass = "translate-y-0 opacity-100";
              return (
                <p
                  key={`${villa.name}-desc`}
                  className={`absolute inset-0 m-0 text-[1.2rem] leading-[1.35] text-[rgba(248,246,244,0.92)] transition-all duration-[900ms] ease-out ${stateClass}`}
                >
                  {villa.description}
                </p>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[41%] z-40 md:bottom-[43%]">
          <div className="relative mx-auto flex h-[clamp(7.5rem,15vw,13rem)] w-full items-center justify-center px-4">
            {villaCards.map((villa, index) => {
              let stateClass = "translate-y-8 opacity-0";
              if (index === activeIndex) stateClass = "translate-y-0 opacity-100";

              return (
                <h3
                  key={`${villa.name}-title`}
                  className={`absolute left-1/2 top-1/2 m-0 w-full max-w-[92vw] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center font-['Kaftan_Serif'] text-[clamp(3.4rem,8.2vw,7.6rem)] leading-[1] tracking-[-0.04em] text-white transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${stateClass}`}
                >
                  {villa.name}
                </h3>
              );
            })}
          </div>
        </div>

      </div>

      <div
        className="pointer-events-none absolute inset-x-0 z-30 px-4"
        style={{ top: "calc(max(100svh, 46rem) - 17rem)" }}
      >
        <div className="relative left-1/2 mx-0 aspect-[0.79] w-[min(34vw,18rem)] min-w-[10rem] -translate-x-1/2 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:w-[min(24vw,20rem)]">
          {villaCards.map((villa, index) => (
            <img
              key={`${villa.name}-preview`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                index === upcomingIndex
                  ? "translate-x-0 opacity-100"
                  : index === activeIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
              src={villa.previewImage ?? villa.image}
              alt={`${villa.name} upcoming preview`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
