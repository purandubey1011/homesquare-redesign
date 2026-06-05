import { packages } from "../Home/homeData";

export default function DiscoverPackagesSection() {
  const discoverPackages = packages.map((item) =>
    item.name === "Damai Spa Bliss"
      ? {
          ...item,
          image:
            "https://thedamai.com/media/pages/home/d076611b2a-1703335664/kien-the-damai-228-1080x1440-crop-q72.webp",
        }
      : item,
  );

  return (
    <section className="bg-[#eae5df] px-4 pb-24 pt-18 md:px-8 md:pb-28 md:pt-24 lg:pb-32 lg:pt-28">
      <div className="mx-auto max-w-[1860px]">
        <div className="mx-auto mb-18 flex max-w-[52rem] flex-col items-center text-center md:mb-22 lg:mb-24">
          <h2 className="m-0 font-['Kaftan_Serif'] text-[clamp(3.5rem,6.3vw,5.9rem)] leading-[0.92] tracking-[-0.04em] text-[#322018]">
            Damai packages
          </h2>
          <p className="mt-8 max-w-[37rem] text-[1.05rem] leading-[1.55] text-[rgba(76,58,46,0.78)] md:mt-9 md:text-[1.1rem]">
            Upgrade your stay with one of our package offers to let you enjoy
            more of The Damai at a special promotional rate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {discoverPackages.map((item) => (
            <article
              className="group relative min-h-[28rem] overflow-hidden bg-[#1b1614] text-[#f6f0ea] sm:min-h-[31rem] xl:min-h-[36rem]"
              key={item.name}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,12,10,0.58)_8%,rgba(18,12,10,0.22)_42%,rgba(18,12,10,0.36)_100%)]" />

              <div className="relative z-10 flex h-full flex-col items-center justify-between px-5 py-9 text-center sm:px-7 sm:py-10">
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
                  href="/#packages"
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
