import { Link } from "react-router-dom";

const credentials = [
  { number: "01", title: "Established backing", body: "Built with long-term intent, not short-term speculation." },
  { number: "02", title: "Delivery confidence", body: "Thoughtful planning shaped for sustainable commercial use." },
  { number: "03", title: "Regional credibility", body: "A legacy strengthened by recognition and market confidence." }
];

const BackedTrusted = () => (
  <section className="relative overflow-hidden bg-[#eee9e3] px-4 py-18 text-[#322018] md:px-8 lg:px-10" data-motion-section>
    <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#073d78]/[0.035] blur-3xl" />
    <div className="mx-auto max-w-[1520px] border-y border-[rgba(50,32,24,0.12)] py-8 sm:py-12 lg:py-16">
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">
        <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden bg-white px-7 py-12 shadow-[0_22px_70px_rgba(50,32,24,0.08)] sm:min-h-[27rem] sm:px-12" data-motion-image>
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#d21f2b_0_48%,#073d78_48%_100%)]" />
          <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#073d78]/25" />
          <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#d21f2b]/25" />
          <img alt="Manakamna Group — Creating Landmarks" className="relative w-full max-w-[39rem] object-contain" loading="lazy" src="/logo/manakamna-logo.png" />
        </div>

        <div className="flex flex-col justify-center py-3 lg:py-6">
          <span className="text-[0.74rem] font-medium uppercase tracking-[0.2em] text-[#073d78]" data-motion-text>The developer behind Home Square</span>
          <h2 className="mt-6 max-w-[12ch] font-['Kaftan_Serif'] text-[clamp(3.2rem,5.5vw,5.8rem)] leading-[0.92] tracking-[-0.045em]" data-motion-heading>Backed by a trusted developer.</h2>
          <p className="mt-7 max-w-[42rem] text-[1.02rem] leading-[1.8] text-[rgba(50,32,24,0.7)]" data-motion-text>
            Home Square is developed by Manakamna Group, bringing credibility, execution confidence and a legacy-led approach to commercial development.
          </p>
          <Link className="premium-button mt-9 inline-flex min-h-[4.1rem] w-fit items-center justify-center rounded-full bg-[#073d78] px-7 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#052f5d]" to="/about">
            Know About the Developer
          </Link>
        </div>
      </div>

      <div className="mt-8 grid border-t border-[rgba(50,32,24,0.12)] md:grid-cols-3" data-motion-stagger>
        {credentials.map((item) => (
          <article className="border-b border-[rgba(50,32,24,0.12)] px-2 py-8 md:border-b-0 md:border-r md:px-7 md:last:border-r-0 lg:py-10" key={item.number}>
            <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-[#d21f2b]">{item.number}</span>
            <h3 className="mt-4 font-['Kaftan_Serif'] text-[2rem] leading-none tracking-[-0.025em]">{item.title}</h3>
            <p className="mt-4 max-w-[24rem] text-[0.96rem] leading-[1.7] text-[rgba(50,32,24,0.66)]">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BackedTrusted;
