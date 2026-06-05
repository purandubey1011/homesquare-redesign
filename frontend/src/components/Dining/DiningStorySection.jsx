export default function DiningStorySection({
  id,
  layout,
  eyebrow,
  title,
  description,
  image,
  collage,
  reverse = false,
}) {
  const hasCollage = Array.isArray(collage) && collage.length > 0;

  if (layout === "centered-collage" && hasCollage) {
    return (
      <section className="bg-[#eae5df] px-0 pb-14 pt-10 md:pb-18 lg:pb-24" id={id}>
        <div className="mx-auto max-w-[1920px]">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center px-4 pt-18 text-center md:px-8 md:pt-24 lg:pt-28">
            <span className="text-[0.82rem] uppercase tracking-[0.16em] text-[#ae5a18]">
              {eyebrow}
            </span>

            <h2 className="mt-10 font-['Kaftan_Serif'] text-[clamp(3.4rem,6.1vw,5.9rem)] leading-[0.92] tracking-[-0.04em] text-[#34211a]">
              {title}
            </h2>

            <p className="mt-11 max-w-[50rem] text-[1.08rem] leading-[1.68] text-[rgba(76,58,46,0.84)] md:text-[1.12rem]">
              {description}
            </p>
          </div>

          <div className="mt-18 grid grid-cols-3 items-start gap-6 px-0 md:mt-20 md:gap-8 lg:gap-10">
            <figure className="overflow-hidden bg-[#d8d0c8]">
              <img
                className="h-[38rem] w-full object-cover md:h-[42rem] lg:h-[46rem]"
                src={collage[0]}
                alt={`${title} left`}
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden bg-[#d8d0c8] pt-10 md:pt-12 lg:pt-16">
              <img
                className="h-[38rem] w-full object-cover md:h-[42rem] lg:h-[46rem]"
                src={collage[1]}
                alt={`${title} center`}
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden bg-[#d8d0c8]">
              <img
                className="h-[38rem] w-full object-cover md:h-[42rem] lg:h-[46rem]"
                src={collage[2]}
                alt={`${title} right`}
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#eae5df] px-4 py-0 md:px-8 lg:px-10" id={id}>
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start lg:grid-cols-2">
        <div
          className={`${reverse ? "lg:order-2 lg:pl-[7%] xl:pl-[9%]" : "lg:pr-[4%] xl:pr-[6%]"} pt-0`}
        >
          {hasCollage ? (
            <div className="grid h-full min-h-[30rem] grid-cols-[1.1fr_0.9fr] gap-4 sm:min-h-[38rem] lg:min-h-[50rem]">
              <div className="overflow-hidden bg-[#d8d0c8]">
                <img
                  className="h-full w-full object-cover"
                  src={collage[0]}
                  alt={title}
                  loading="lazy"
                />
              </div>
              <div className="grid gap-4">
                {collage.slice(1).map((photo) => (
                  <div key={photo} className="overflow-hidden bg-[#d8d0c8]">
                    <img
                      className="h-full w-full object-cover"
                      src={photo}
                      alt={title}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-[30rem] overflow-hidden bg-[#d8d0c8] sm:h-[38rem] lg:h-[50rem]">
              <img
                className="h-full w-full object-cover"
                src={image}
                alt={title}
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div
          className={`${reverse ? "lg:order-1" : ""} flex items-start py-14 sm:py-16 lg:px-[7%] lg:pt-16 lg:pb-0 xl:px-[10%]`}
        >
          <div className="mx-auto flex w-full max-w-[34rem] flex-col items-start lg:pt-[4.2rem]">
            <span className="mb-10 inline-flex items-center text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.42)] sm:mb-12">
              {eyebrow}
            </span>

            <h2 className="m-0 max-w-[10.5ch] font-['Kaftan_Serif'] text-[clamp(3.25rem,5.8vw,5.8rem)] leading-[0.92] tracking-[-0.028em] text-[#34211a]">
              {title}
            </h2>

            <div className="mt-10 max-w-[33rem] space-y-5 text-[1.02rem] leading-[1.62] text-[rgba(76,58,46,0.82)] sm:mt-12 sm:text-[1.08rem]">
              {description.split("\n\n").map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
