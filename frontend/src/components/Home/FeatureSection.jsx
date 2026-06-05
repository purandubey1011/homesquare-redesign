export default function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  cta,
  image,
  reverse = false,
}) {
  return (
    <section
      className="bg-[#eae5df] px-4 py-0 md:px-8 lg:px-10"
      id={id}
    >
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start lg:grid-cols-2">
        <div
          className={`${reverse ? "lg:order-2 lg:pl-[7%] xl:pl-[9%]" : "lg:pr-[4%] xl:pr-[6%]"} pt-0`}
        >
          <div className="h-[30rem] overflow-hidden bg-[#d8d0c8] sm:h-[38rem] lg:h-[50rem]">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={title}
              loading="lazy"
            />
          </div>
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

            <p className="mt-10 max-w-[32rem] text-[1.02rem] leading-[1.62] text-[rgba(76,58,46,0.82)] sm:mt-12 sm:text-[1.08rem]">
              {description}
            </p>

            <a
              className="mt-12 inline-flex min-h-[4.3rem] items-center justify-center rounded-full bg-[#9f4b03] px-8 text-[1.02rem] font-medium text-[#f7efe7] transition-transform duration-300 hover:-translate-y-0.5"
              href="#packages"
            >
              <span className="mr-4 text-[1rem] leading-none">*</span>
              <span>{cta}</span>
              <span className="ml-4 text-[1rem] leading-none">*</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
