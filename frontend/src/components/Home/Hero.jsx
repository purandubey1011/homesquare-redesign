export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1f1512]" id="top">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://thedamai.com/media/pages/home/1f6141a387-1703335668/kien_thedamai-6.jpg"
        src="https://thedamai.com/media/pages/home/cafd949d1a-1703335685/header-video-compressed.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(0,0,0,0.12),rgba(0,0,0,0.68)_88%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.32))]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 pb-10 pt-36 text-center text-[#f8f6f4] md:px-6 md:pb-14 lg:pb-16">
        <div className="mb-7 mt-auto flex h-10 w-10 items-center justify-center text-white/95">
          <span className="relative block h-7 w-7 before:absolute before:left-1/2 before:top-0 before:h-3 before:w-px before:-translate-x-1/2 before:bg-white after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-px after:-translate-x-1/2 after:bg-white">
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white" />
            <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white" />
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90" />
          </span>
        </div>

        <span className="inline-flex items-center text-[0.72rem] font-normal uppercase tracking-[0.18em] text-[rgba(248,246,244,0.82)]">
          The Damai Resort - Bali
        </span>
        <h1 className="mt-7 whitespace-nowrap font-['Kaftan_Serif'] text-[clamp(2.8rem,6.35vw,6.35rem)] leading-[0.92] tracking-[-0.045em] text-white">
          Find the spirit of Bali
        </h1>

        <div className="mt-6 flex flex-col items-center">
          <span className="mb-9 block h-[4.2rem] w-px bg-[rgba(248,246,244,0.55)]" />
          <a
            className="inline-flex min-h-[4.25rem] items-center justify-center gap-4 rounded-full bg-[#00545a] px-8 text-[0.82rem] font-semibold text-[#f8f6f4] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#0a666b]"
            href="#villas"
          >
            <span className="text-[0.95rem] text-[#79d4d0]">❉</span>
            <span>Explore our villas</span>
            <span className="text-[0.95rem] text-[#79d4d0]">❉</span>
          </a>
        </div>
      </div>
    </section>
  );
}
