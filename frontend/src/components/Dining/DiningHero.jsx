import { heroContent } from "./diningData";

function Ornament() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center text-[rgba(248,246,244,0.96)]">
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

export default function DiningHero() {
  const titleLines = heroContent.title.split("\n");

  return (
    <section
      className="relative overflow-visible bg-[#eae5df] pb-[9rem] md:pb-[10.5rem]"
      id="top"
    >
      <div className="relative h-[100svh] min-h-[48rem] overflow-hidden bg-[#201915]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={heroContent.image}
          alt={titleLines.join(" ")}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38),rgba(0,0,0,0.28)_20%,rgba(0,0,0,0.42)_56%,rgba(0,0,0,0.74)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.03),rgba(0,0,0,0)_28%),linear-gradient(to_right,rgba(0,0,0,0.2),rgba(0,0,0,0.02)_28%,rgba(0,0,0,0.02)_72%,rgba(0,0,0,0.24))]" />

        <div className="absolute inset-x-0 top-[22%] z-10 mx-auto flex w-[min(92vw,62rem)] flex-col items-center text-center text-[#f8f6f4] md:top-[23%]">
          <Ornament />
          <span className="mt-5 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-[rgba(248,246,244,0.78)]">
            {heroContent.eyebrow}
          </span>
          <div className="mt-16 flex w-full justify-center px-4 md:mt-14">
            <h1 className="m-0 max-w-[12.5ch] font-['Kaftan_Serif'] text-[clamp(4.2rem,8vw,7.8rem)] leading-[0.88] tracking-[-0.05em] text-white">
              {titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 z-30 px-4"
        style={{ top: "calc(max(100svh, 48rem) - 6.25rem)" }}
      >
        <div className="relative left-1/2 mx-0 aspect-[0.79] w-[min(20vw,12rem)] min-w-[8.25rem] -translate-x-1/2 overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:w-[min(16vw,13.5rem)]">
          <img
            className="h-full w-full object-cover"
            src={heroContent.previewImage}
            alt="Damai signature dining preview"
          />
        </div>
      </div>
    </section>
  );
}
