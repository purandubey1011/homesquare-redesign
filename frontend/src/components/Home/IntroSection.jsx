const introImages = {
  topLeft:
    "https://thedamai.com/media/pages/home/f0de12a143-1703335684/wayankulit-540x720-crop-q72.webp",
  bottomLeft:
    "https://thedamai.com/media/pages/home/012b8d2501-1703335675/lobbyview-540x720-crop-q72.webp",
  topRight:
    "https://thedamai.com/media/pages/home/d0ea95869f-1703335680/poolvillapoollookoutcombo2-540x720-crop-q72.webp",
  bottomRight:
    "https://thedamai.com/media/pages/home/90793d0953-1703335682/restaurantdamai1-540x720-crop-q72.webp",
};

function Ornament() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center text-[#d8cbbd]">
      <span className="absolute left-1/2 top-0 h-3.5 w-px -translate-x-1/2 bg-current" />
      <span className="absolute bottom-0 left-1/2 h-3.5 w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-3.5 -translate-y-1/2 bg-current" />
      <span className="absolute right-0 top-1/2 h-px w-3.5 -translate-y-1/2 bg-current" />
      <span className="absolute left-[22%] top-[22%] h-px w-2.5 rotate-45 bg-current" />
      <span className="absolute right-[22%] top-[22%] h-px w-2.5 -rotate-45 bg-current" />
      <span className="absolute bottom-[22%] left-[22%] h-px w-2.5 -rotate-45 bg-current" />
      <span className="absolute bottom-[22%] right-[22%] h-px w-2.5 rotate-45 bg-current" />
      <span className="h-1.5 w-1.5 rounded-full border border-current" />
    </span>
  );
}

function FloatImage({ src, alt, className = "" }) {
  return (
    <figure className={`overflow-hidden ${className}`}>
      <img
        className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
        src={src}
        alt={alt}
      />
    </figure>
  );
}

export default function IntroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eae5df]">
        <div className="mx-auto min-h-[130vh] w-full max-w-[1920px] px-4 pb-28 pt-28 md:px-8 md:pb-32 md:pt-32 xl:px-16">
          <div className="grid min-h-[calc(130vh-8rem)] grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(31rem,34rem)_1fr] lg:items-center lg:gap-12 xl:min-h-[calc(130vh-10rem)]">
            <div className="order-2 grid gap-10 lg:order-1 lg:gap-28">
              <div className="flex justify-start lg:justify-end lg:pr-6">
                <FloatImage
                  src={introImages.topLeft}
                  alt="Wayang kulit silhouettes"
                  className="aspect-[0.77] w-[9.5rem] md:w-[12rem] xl:w-[13rem]"
                />
              </div>

              <div className="flex justify-start">
                <FloatImage
                  src={introImages.bottomLeft}
                  alt="Damai lounge seating"
                  className="aspect-[0.76] w-[15rem] md:w-[22rem] xl:w-[27.5rem]"
                />
              </div>
            </div>

            <div className="order-1 mx-auto flex w-full max-w-[34rem] flex-col items-center text-center lg:order-2 lg:max-w-[36rem] xl:max-w-[39rem]">
              <Ornament />
              <h2 className="mt-10 font-['Kaftan_Serif'] text-[clamp(3.6rem,5.7vw,5.55rem)] leading-[0.94] tracking-[-0.045em] text-[#322018]">
                Hard to find,
                <br />
                hard to leave
              </h2>
              <p className="mt-12 max-w-[32rem] text-[1rem] leading-[1.78] text-[rgba(50,32,24,0.72)] md:text-[1.05rem]">
                Just a few hours from the airport. Light years away from the
                crowds. Here you you find the true Bali. And a small resort with
                a big view, a great restaurant, and a special sense of calm.
                Welcome to The Damai.
              </p>
              <a
                className="mt-12 inline-flex min-h-[4.15rem] items-center justify-center gap-4 rounded-full bg-[#aa5204] px-8 text-[0.82rem] font-semibold text-[#f8f6f4] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#914502]"
                href="#villas"
              >
                <span className="text-[0.92rem] text-[#f1d6b7]">❉</span>
                <span>Explore our villas</span>
                <span className="text-[0.92rem] text-[#f1d6b7]">❉</span>
              </a>
            </div>

            <div className="order-3 grid gap-10 lg:gap-28">
              <div className="flex justify-end">
                <FloatImage
                  src={introImages.topRight}
                  alt="Pool edge view"
                  className="aspect-[0.76] w-[15rem] md:w-[22rem] xl:w-[27.5rem]"
                />
              </div>

              <div className="flex justify-end lg:justify-start lg:pl-6">
                <FloatImage
                  src={introImages.bottomRight}
                  alt="Staff at dining table"
                  className="aspect-[0.77] w-[9.5rem] md:w-[12rem] xl:w-[13rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1260px,calc(100vw-2rem))] pb-28 lg:w-[min(1260px,calc(100vw-72px))]">
        <div className="border-t border-[rgba(50,32,24,0.1)] pt-16 md:pt-18">
          <div className="mx-auto max-w-[51rem] text-center">
            <span className="mb-6 inline-block text-[0.76rem] font-normal uppercase tracking-[0.18em] text-[rgba(50,32,24,0.34)]">
              Damai means &quot;peaceful&quot;
            </span>
            <p className="m-0 text-[1.05rem] leading-[1.68] text-[rgba(50,32,24,0.74)] md:text-[1.1rem]">
              The Damai has just 15 villas, set in one of the most beautiful
              gardens in Bali. Some have pools, some have verandas. They all have
              views. And often the breeze carries the scent of cloves from the
              nearby spice plantations. Simple luxuries. Graceful tropical
              living. The good things in life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
