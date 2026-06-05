import { packages } from "./homeData";

function Ornament() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 sm:h-10 sm:w-10"
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
        <path key={d} d={d} fill="#322018" />
      ))}
    </svg>
  );
}

export default function PackagesSection() {
  return (
    <section className="bg-[#eae5df] pb-18 pt-4 sm:pb-24 lg:pb-28" id="packages">
      <div className="relative mx-auto max-w-[1860px] px-4 md:px-8 lg:px-10">
        <div className="relative mb-20 flex items-center justify-center sm:mb-24 lg:mb-28">
          <span className="absolute left-0 right-[52%] top-1/2 h-px -translate-y-1/2 bg-[rgba(50,32,24,0.14)]" />
          <span className="absolute left-[52%] right-0 top-1/2 h-px -translate-y-1/2 bg-[rgba(50,32,24,0.14)]" />
          <div className="relative z-10 bg-[#eae5df] px-6">
            <Ornament />
          </div>
        </div>

        <div className="mx-auto mb-16 flex max-w-[52rem] flex-col items-center text-center sm:mb-20 lg:mb-24">
          <h2 className="m-0 font-['Kaftan_Serif'] text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.92] tracking-[-0.035em] text-[#322018]">
            Damai packages
          </h2>
          <p className="mt-7 max-w-[37rem] text-[1.08rem] leading-[1.58] text-[rgba(76,58,46,0.78)] sm:mt-8 sm:text-[1.12rem]">
            Upgrade your stay with one of our package offers to let you enjoy
            more of The Damai at a special promotional rate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {packages.map((item) => (
            <article
              className="group relative min-h-[34rem] overflow-hidden bg-[#1b1614] text-[#f6f0ea] sm:min-h-[38rem] xl:min-h-[46rem]"
              key={item.name}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,12,10,0.58)_8%,rgba(18,12,10,0.22)_42%,rgba(18,12,10,0.36)_100%)]" />

              <div className="relative z-10 flex h-full flex-col items-center justify-between px-5 py-10 text-center sm:px-7 sm:py-12">
                <span className="mt-1 text-[0.88rem] font-medium uppercase tracking-[0.1em] text-[rgba(246,240,234,0.76)] sm:text-[0.95rem]">
                  {item.tag}
                </span>

                <div className="flex max-w-[28rem] flex-col items-center">
                  <h3 className="m-0 font-['Kaftan_Serif'] text-[clamp(2.7rem,4.2vw,4rem)] leading-[0.98] tracking-[-0.03em] text-white">
                    {item.name}
                  </h3>
                  <p className="mt-6 max-w-[24rem] text-[1.02rem] leading-[1.45] text-[rgba(246,240,234,0.86)] sm:text-[1.06rem]">
                    {item.description}
                  </p>
                </div>

                <a
                  className="inline-flex min-h-[3.9rem] items-center justify-center rounded-full bg-[rgba(98,99,105,0.82)] px-8 text-[1rem] font-semibold text-white backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(112,113,120,0.9)]"
                  href="#top"
                >
                  <span className="mr-4 text-[1rem] leading-none">*</span>
                  <span>More info</span>
                  <span className="ml-4 text-[1rem] leading-none">*</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
