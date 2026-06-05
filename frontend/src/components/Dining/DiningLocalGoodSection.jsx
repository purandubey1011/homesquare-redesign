import { useState } from "react";
import { localGoodSection, localGoodSlides } from "./diningData";

function Ornament() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[
        "M32.0002 0.45819L32.0002 17.7408C30.3687 15.6619 29.3335 12.562 29.3335 9.09948C29.3335 5.63692 30.3687 2.53704 32.0002 0.45819Z",
        "M21.9711 9.42993L30.2054 23.0501C29.3318 23.1031 28.4577 23.0752 27.607 22.9528C24.2867 22.4752 21.9262 19.5168 21.5569 16.1827C21.3208 14.0503 21.4427 11.6686 21.9711 9.42993Z",
        "M0.458008 32.0002L17.7406 32.0002C15.6617 30.3687 12.5619 29.3335 9.0993 29.3335C5.63674 29.3335 2.53686 30.3687 0.458008 32.0002Z",
        "M9.42993 21.9711L23.0501 30.2054C23.1031 29.3318 23.0752 28.4577 22.9528 27.607C22.4752 24.2867 19.5168 21.9262 16.1828 21.5569C14.0503 21.3208 11.6686 21.4427 9.42993 21.9711Z",
        "M0.458008 31.9998L17.7406 31.9998C15.6617 33.6313 12.5619 34.6665 9.0993 34.6665C5.63674 34.6665 2.53686 33.6313 0.458008 31.9998Z",
        "M9.42993 42.0289L23.0501 33.7946C23.1031 34.6682 23.0752 35.5423 22.9528 36.393C22.4752 39.7133 19.5168 42.0738 16.1828 42.4431C14.0503 42.6792 11.6686 42.5573 9.42993 42.0289Z",
        "M32.0002 63.5418L32.0002 46.2592C30.3687 48.3381 29.3335 51.438 29.3335 54.9005C29.3335 58.3631 30.3687 61.463 32.0002 63.5418Z",
        "M21.9711 54.5701L30.2054 40.9499C29.3318 40.8969 28.4577 40.9248 27.607 41.0472C24.2867 41.5248 21.9262 44.4832 21.5569 47.8172C21.3208 49.9497 21.4427 52.3314 21.9711 54.5701Z",
        "M63.5415 32.0002L46.2589 32.0002C48.3378 30.3687 51.4377 29.3335 54.9002 29.3335C58.3628 29.3335 61.4627 30.3687 63.5415 32.0002Z",
        "M54.5701 21.9711L40.9499 30.2054C40.8969 29.3318 40.9248 28.4577 41.0472 27.607C41.5248 24.2867 44.4832 21.9262 47.8172 21.5569C49.9497 21.3208 52.3314 21.4427 54.5701 21.9711Z",
        "M31.9998 0.458191L31.9998 17.7408C33.6313 15.6619 34.6665 12.562 34.6665 9.09948C34.6665 5.63692 33.6313 2.53704 31.9998 0.458191Z",
        "M42.0289 9.42993L33.7946 23.0501C34.6682 23.1031 35.5423 23.0752 36.393 22.9528C39.7133 22.4752 42.0738 19.5168 42.4431 16.1827C42.6792 14.0503 42.5573 11.6686 42.0289 9.42993Z",
        "M31.9998 63.5418L31.9998 46.2592C33.6313 48.3381 34.6665 51.438 34.6665 54.9005C34.6665 58.3631 33.6313 61.463 31.9998 63.5418Z",
        "M42.0289 54.5701L33.7946 40.9499C34.6682 40.8969 35.5423 40.9248 36.393 41.0472C39.7133 41.5248 42.0738 44.4832 42.4431 47.8172C42.6792 49.9497 42.5573 52.3314 42.0289 54.5701Z",
        "M63.5415 31.9998L46.2589 31.9998C48.3378 33.6313 51.4377 34.6665 54.9002 34.6665C58.3628 34.6665 61.4627 33.6313 63.5415 31.9998Z",
        "M54.5701 42.0289L40.9499 33.7946C40.8969 34.6682 40.9248 35.5423 41.0472 36.393C41.5248 39.7133 44.4832 42.0738 47.8173 42.4431C49.9497 42.6792 52.3314 42.5573 54.5701 42.0289Z",
      ].map((d) => (
        <path key={d} d={d} fill="#d4c4b0" />
      ))}
    </svg>
  );
}

function ArrowButton({ direction = "left", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-1/2 z-10 inline-flex h-[3.7rem] w-[3.7rem] -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(72,72,72,0.72)] text-white backdrop-blur-[6px] transition-all duration-300 hover:bg-[rgba(72,72,72,0.84)]"
    >
      <span className="text-[2rem] leading-none">
        {direction === "left" ? "←" : "→"}
      </span>
    </button>
  );
}

export default function DiningLocalGoodSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = localGoodSlides.length;

  const goPrev = () => setActiveIndex((current) => (current - 1 + total) % total);
  const goNext = () => setActiveIndex((current) => (current + 1) % total);

  return (
    <section className="bg-[#eae5df] px-0 py-16 md:py-20 lg:py-24" id={localGoodSection.id}>
      <div className="mx-auto max-w-[1920px]">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center px-4 text-center md:px-8">
          <Ornament />

          <h2 className="mt-12 max-w-none whitespace-nowrap px-2 font-['Kaftan_Serif'] text-[clamp(2.3rem,3.45vw,3.45rem)] leading-[0.96] tracking-[-0.038em] text-[#34211a]">
            {localGoodSection.title}
          </h2>

          <p className="mt-10 max-w-[47rem] text-[1rem] leading-[1.62] text-[rgba(76,58,46,0.84)] md:text-[1.02rem]">
            {localGoodSection.description}
          </p>
        </div>

        <div className="relative mt-18 md:mt-20">
          <div className="grid grid-cols-2 gap-8 px-0 lg:gap-16">
            <div className="relative overflow-hidden bg-[#d6cec4]">
              <img
                className="h-[36rem] w-full object-cover md:h-[42rem] lg:h-[30rem]"
                src={localGoodSlides[activeIndex].leftImage}
                alt="Local ingredients and plated dish"
                loading="lazy"
              />
              <div className="absolute left-10 top-1/2 -translate-y-1/2">
                <ArrowButton direction="left" onClick={goPrev} />
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#d6cec4]">
              <img
                className="h-[36rem] w-full object-cover md:h-[42rem] lg:h-[30rem]"
                src={localGoodSlides[activeIndex].rightImage}
                alt="Dining atmosphere and service"
                loading="lazy"
              />
              <div className="absolute right-10 top-1/2 -translate-y-1/2">
                <ArrowButton direction="right" onClick={goNext} />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-center gap-5">
              {localGoodSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group inline-flex items-center"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span
                    className={`h-px w-[4.1rem] transition-colors duration-300 ${
                      index === activeIndex
                        ? "bg-[rgba(50,32,24,0.82)]"
                        : "bg-[rgba(50,32,24,0.16)] group-hover:bg-[rgba(50,32,24,0.32)]"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-2 text-[2rem] leading-none text-[#34211a]">.</div>
            <div className="mt-5 text-[1.75rem] leading-none text-[rgba(76,58,46,0.76)]">
              {activeIndex + 1} / {total}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
