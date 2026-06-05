import { useState } from "react";
import { Link } from "react-router-dom";
import { contactDetails } from "../../content/siteContent";

function Ornament({ light = false }) {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 sm:h-10 sm:w-10"
      fill="none"
      viewBox="0 0 64 64"
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
        <path key={d} d={d} fill={light ? "#8f8174" : "#322018"} />
      ))}
    </svg>
  );
}

function MotionWords({ text }) {
  return String(text)
    .split(" ")
    .map((word, index, words) => (
      <span key={`${word}-${index}`}>
        <span className="motion-word-wrap inline-block overflow-hidden align-bottom">
          <span className="motion-word inline-block will-change-transform">{word}</span>
        </span>
        {index < words.length - 1 ? " " : ""}
      </span>
    ));
}

function HeroTitleWords({ text }) {
  return String(text)
    .split(" ")
    .map((word, index, words) => (
      <span key={`${word}-${index}`}>
        <span className="inline-block overflow-hidden align-bottom">
          <span className="inline-block will-change-transform" data-hero-line>{word}</span>
        </span>
        {index < words.length - 1 ? " " : ""}
      </span>
    ));
}

function SectionHeading({ eyebrow, title, body, centered = false, light = false }) {
  return (
    <div className={`${centered ? "mx-auto max-w-[54rem] text-center" : "max-w-[46rem]"} w-full`}>
      {eyebrow ? (
        <span
          className={`mb-6 inline-flex text-[0.76rem] uppercase tracking-[0.18em] ${
            light ? "text-[rgba(86,72,60,0.56)]" : "text-[rgba(50,32,24,0.38)]"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        data-motion-heading
        className={`font-['Kaftan_Serif'] text-[clamp(3rem,5.1vw,5.55rem)] leading-[0.93] tracking-[-0.045em] ${
          light ? "text-[#322018]" : "text-[#322018]"
        }`}
      >
        <MotionWords text={title} />
      </h2>
      {body ? (
        <p
          data-motion-text
          className={`mt-7 text-[1.02rem] leading-[1.76] ${
            light ? "text-[rgba(50,32,24,0.72)]" : "text-[rgba(50,32,24,0.72)]"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

function Action({ action, className = "", subtle = false }) {
  if (!action) return null;

  const baseClass = subtle
    ? "border border-[rgba(50,32,24,0.12)] bg-[rgba(255,255,255,0.5)] text-[#322018] backdrop-blur-[14px]"
    : "bg-[#9f4b03] text-[#f8f6f4]";

  const classes = `premium-button inline-flex min-h-[4.05rem] items-center justify-center rounded-full px-7 text-[0.84rem] font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 ${baseClass} ${className}`;

  if (action.href.startsWith("/")) {
    return (
      <Link className={classes} to={action.href}>
        {action.label}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={action.href}
      rel={action.href.startsWith("http") ? "noreferrer" : undefined}
      target={action.href.startsWith("http") ? "_blank" : undefined}
    >
      {action.label}
    </a>
  );
}

export function PageHero({ hero }) {
  const secondaryIsInternal = hero.secondaryCta.href.startsWith("/");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1f1512]" data-hero id="top">
      {hero.video ? (
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          data-hero-media
          loop
          muted
          playsInline
          poster={hero.image}
          src={hero.video}
        />
      ) : (
        <img
          alt={hero.title}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          data-hero-media
          src={hero.image}
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(0,0,0,0.05),rgba(0,0,0,0.5)_82%),linear-gradient(to_bottom,rgba(0,0,0,0.14),rgba(0,0,0,0.26))]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 pb-10 pt-36 text-center text-[#f8f6f4] md:px-6 md:pb-14 lg:pb-16">
        <div className="mb-7 mt-auto flex h-10 w-10 items-center justify-center text-white/95" data-hero-fade>
          <span className="relative block h-7 w-7 before:absolute before:left-1/2 before:top-0 before:h-3 before:w-px before:-translate-x-1/2 before:bg-white after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-px after:-translate-x-1/2 after:bg-white">
            <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white" />
            <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-white" />
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90" />
          </span>
        </div>

        <span className="inline-flex items-center text-[0.72rem] uppercase tracking-[0.18em] text-[rgba(248,246,244,0.82)]" data-hero-fade>
          {hero.eyebrow}
        </span>
        <h1 className="mt-7 w-full max-w-[12ch] font-['Kaftan_Serif'] text-[clamp(3rem,6.4vw,6.4rem)] leading-[0.92] tracking-[-0.05em] text-white sm:max-w-[16ch]">
          <HeroTitleWords text={hero.title} />
        </h1>
        <p className="mt-6 w-full max-w-[18rem] text-[1.02rem] leading-[1.82] text-[rgba(248,246,244,0.82)] lg:max-w-[48rem] lg:text-[1.08rem]" data-hero-fade>
          {hero.subtitle}
        </p>
        <p className="mt-4 w-full max-w-[18rem] text-[0.98rem] leading-[1.78] text-[rgba(248,246,244,0.68)] lg:max-w-[44rem]" data-hero-fade>
          {hero.body}
        </p>

        <div className="mt-6 flex flex-col items-center" data-hero-fade>
          <span className="mb-9 block h-[4.2rem] w-px bg-[rgba(248,246,244,0.55)]" />
          <div className="flex flex-col gap-4 sm:flex-row">
            <Action action={hero.primaryCta} className="bg-[#00545a]" />
            {secondaryIsInternal ? (
              <Link
                className="premium-button inline-flex min-h-[4.25rem] items-center justify-center rounded-full border border-white/28 bg-white/8 px-8 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[#f8f6f4] backdrop-blur-[14px] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/14"
                to={hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </Link>
            ) : (
              <a
                className="premium-button inline-flex min-h-[4.25rem] items-center justify-center rounded-full border border-white/28 bg-white/8 px-8 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-[#f8f6f4] backdrop-blur-[14px] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/14"
                href={hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        <p className="mt-8 w-full max-w-[18rem] text-[0.92rem] leading-[1.68] text-[rgba(248,246,244,0.72)] lg:max-w-[38rem]" data-hero-fade>
          {hero.trustLine}
        </p>
      </div>
    </section>
  );
}

function HighlightsSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1520px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid gap-0 border-y border-[rgba(50,32,24,0.12)] md:grid-cols-2 xl:grid-cols-4" data-motion-stagger>
          {section.items.map((item, index) => (
            <article
              className="motion-card border-b border-[rgba(50,32,24,0.12)] px-6 py-9 md:border-r md:[&:nth-child(2n)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2n)]:border-r xl:[&:last-child]:border-r-0"
              key={item.title}
            >
              <span className="text-[0.8rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.36)]" data-count-prefix="0" data-count-value={index + 1}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-['Kaftan_Serif'] text-[2.15rem] leading-[0.98] tracking-[-0.03em] text-[#322018]">
                {item.title}
              </h3>
              <p className="mt-5 max-w-[18rem] text-[0.98rem] leading-[1.74] text-[rgba(50,32,24,0.72)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20" data-motion-section id={section.id}>
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div
          className={`${section.reverse ? "lg:order-2 lg:pl-[7%] xl:pl-[9%]" : "lg:pr-[4%] xl:pr-[6%]"}`}
        >
          <div className="h-[30rem] overflow-hidden bg-[#d8d0c8] sm:h-[38rem] lg:h-[50rem]" data-motion-image>
            <img
              alt={section.title}
              className="h-full w-full object-cover"
              loading="lazy"
              src={section.image}
            />
          </div>
        </div>

        <div
          className={`${section.reverse ? "lg:order-1" : ""} flex items-center py-4 sm:py-6 lg:px-[7%] xl:px-[10%]`}
        >
          <div className="mx-auto flex w-full max-w-[35rem] flex-col items-start">
            <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />
            {section.points?.length ? (
              <div className="mt-9 grid gap-4" data-motion-stagger>
                {section.points.map((point) => (
                  <div
                    className="border-l border-[rgba(50,32,24,0.18)] pl-4 text-[0.98rem] leading-[1.72] text-[rgba(50,32,24,0.72)]"
                    key={point}
                  >
                    {point}
                  </div>
                ))}
              </div>
            ) : null}
            <Action action={section.cta} className="mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardsSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1860px]">
        <div className="relative mb-20 flex items-center justify-center sm:mb-24">
          <span className="absolute left-0 right-[52%] top-1/2 h-px -translate-y-1/2 bg-[rgba(50,32,24,0.14)]" />
          <span className="absolute left-[52%] right-0 top-1/2 h-px -translate-y-1/2 bg-[rgba(50,32,24,0.14)]" />
          <div className="relative z-10 bg-[#eae5df] px-6">
            <Ornament />
          </div>
        </div>

        <div className="mx-auto mb-14 flex max-w-[54rem] flex-col items-center text-center">
          <SectionHeading centered title={section.heading} body={section.intro} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-12" data-motion-stagger>
          {section.items.map((item, index) => (
            <article
              className={`motion-card group relative overflow-hidden ${
                index % 2 === 0 ? "bg-[#f2ebe4] text-[#322018]" : "bg-[#f7f1ea] text-[#322018]"
              } min-h-[26rem] sm:min-h-[30rem]`}
              key={item.title}
            >
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.58),rgba(255,255,255,0.18))]"
                    : "bg-[linear-gradient(160deg,rgba(255,255,255,0.56),rgba(255,255,255,0.14))]"
                }`}
              />
              <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 sm:px-8 sm:py-10">
                <span className="text-[0.78rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.42)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-12">
                  <h3 className="font-['Kaftan_Serif'] text-[clamp(2.35rem,3.7vw,3.5rem)] leading-[0.96] tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-[27rem] text-[1rem] leading-[1.72] text-[rgba(50,32,24,0.72)]">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {section.cta ? <Action action={section.cta} className="mt-12" /> : null}
      </div>
    </section>
  );
}

function CategoriesSection({ section }) {
  return (
    <section className="bg-[#f2ebe3] px-4 py-18 text-[#322018] md:px-8 lg:px-10" data-motion-section id={section.id}>
      <div className="mx-auto max-w-[1620px]">
        <div className="mx-auto mb-12 flex max-w-[52rem] flex-col items-center text-center">
          <Ornament light />
          <SectionHeading centered light title={section.heading} />
        </div>

        <div className="grid gap-px bg-[rgba(50,32,24,0.08)] md:grid-cols-2 xl:grid-cols-3" data-motion-stagger>
          {section.items.map((item) => (
            <div
              className="motion-card bg-[#fbf7f1] px-6 py-8 font-['Kaftan_Serif'] text-[2rem] leading-[1] tracking-[-0.025em] text-[#322018]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        {section.cta ? (
          <div className="mt-12 flex justify-center">
            <Action
              action={section.cta}
              className="border border-[rgba(50,32,24,0.12)] bg-[#cdb194] text-[#2f221b] shadow-[0_16px_28px_rgba(120,91,62,0.18)] hover:bg-[#c4a688]"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function AmenitiesSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1520px]">
        <div className="mx-auto mb-12 flex max-w-[52rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" data-motion-stagger>
          {section.items.map((item) => (
            <div
              className="motion-card border border-[rgba(50,32,24,0.12)] bg-[#f5f0ea] px-6 py-10 font-['Kaftan_Serif'] text-[2rem] leading-[1] tracking-[-0.03em] text-[#322018]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        {section.cta ? <Action action={section.cta} className="mt-12" /> : null}
      </div>
    </section>
  );
}

function GalleryPreviewSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1860px]">
        <div className="mx-auto mb-14 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-12" data-motion-stagger>
          {section.items.map((item) => (
            <article
              className="motion-card group relative min-h-[34rem] overflow-hidden bg-[#1b1614] text-[#f6f0ea] sm:min-h-[38rem] xl:min-h-[42rem]"
              data-motion-image
              key={item.title}
            >
              <img
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
                src={item.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,12,10,0.58)_8%,rgba(18,12,10,0.22)_42%,rgba(18,12,10,0.36)_100%)]" />
              <div className="relative z-10 flex h-full flex-col justify-end px-6 py-8 text-center sm:px-7 sm:py-10">
                <h3 className="font-['Kaftan_Serif'] text-[clamp(2.45rem,4vw,3.7rem)] leading-[0.98] tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        {section.cta ? <Action action={section.cta} className="mt-12" /> : null}
      </div>
    </section>
  );
}

function LeadFormSection({ section }) {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState(section.options?.[0] ?? "");

  return (
    <section className="relative overflow-hidden bg-[#f3ece4] px-4 py-20 text-[#322018] md:px-8 lg:px-12" data-motion-section id={section.id}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0)_44%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-[34rem]">
          <Ornament light />
          <div className="mt-8">
            <SectionHeading eyebrow="Enquiry" light title={section.heading} body={section.description} />
          </div>
          <p className="mt-8 text-[0.95rem] leading-[1.76] text-[rgba(50,32,24,0.56)]">
            {section.microcopy}
          </p>
        </div>

        <form
          className="motion-card grid gap-4 rounded-[2rem] border border-[rgba(50,32,24,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(247,241,234,0.92))] p-6 shadow-[0_26px_60px_rgba(94,74,56,0.12)] backdrop-blur-[16px] md:grid-cols-2 md:gap-5 md:p-10"
          data-motion-stagger
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Full Name" />
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Phone Number" />
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Email Address" />
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Business / Brand Name" />
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Business Category" />
          <select
            className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]"
            onChange={(event) => setInterest(event.target.value)}
            value={interest}
          >
            {section.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Approx. Space Requirement" />
          <input className="min-h-[4.1rem] rounded-[1.35rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 text-[#322018] outline-none transition-all duration-300 focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)]" placeholder="Preferred Visit Date" type="date" />
          <textarea
            className="min-h-[12.5rem] rounded-[1.6rem] border border-[rgba(50,32,24,0.08)] bg-[rgba(255,255,255,0.72)] px-5 py-5 text-[#322018] outline-none transition-all duration-300 placeholder:text-[rgba(50,32,24,0.42)] focus:border-[#c9b29c] focus:bg-white focus:shadow-[0_0_0_1px_rgba(201,178,156,0.3)] md:col-span-2"
            placeholder="Message"
          />
          <button
            className="premium-button inline-flex min-h-[4.8rem] items-center justify-center rounded-full bg-[#00545a] px-8 text-[0.88rem] font-medium uppercase tracking-[0.2em] text-[#f8f6f4] shadow-[0_22px_38px_rgba(0,84,90,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a666b] md:col-span-2"
            type="submit"
          >
            {section.submitLabel}
          </button>
          {submitted ? (
            <p className="text-[0.95rem] leading-[1.7] text-[#c7ece9] md:col-span-2">
              {section.successMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function ContactStripSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1260px] border-t border-[rgba(50,32,24,0.1)] pt-16 text-center">
        <div className="mx-auto flex max-w-[52rem] flex-col items-center">
          <Ornament />
          <div className="mt-7">
            <SectionHeading centered title={section.heading} body={section.body} />
          </div>
          <div className="mt-10 grid gap-3 text-[1rem] leading-[1.75] text-[rgba(50,32,24,0.74)]" data-motion-stagger>
            <a href={`tel:${contactDetails.phone}`}>T: {contactDetails.phone}</a>
            <a href={`mailto:${contactDetails.email}`}>E: {contactDetails.email}</a>
            <a href={contactDetails.maps} rel="noreferrer" target="_blank">
              {contactDetails.address}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBandSection({ section }) {
  return (
    <section className="bg-[#f1ebe3] px-4 py-[5rem] text-[#322018] md:px-8 lg:px-12" data-motion-section>
      <div className="mx-auto flex max-w-[1060px] flex-col items-center text-center">
        <Ornament light />
        <div className="mt-8">
          <SectionHeading centered light title={section.heading} body={section.body} />
        </div>
      </div>
    </section>
  );
}

function ComparisonSection({ section }) {
  return (
    <section className="bg-[#ede8e2] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="overflow-hidden border border-[rgba(50,32,24,0.12)] bg-[#f7f1ea]">
          <div className="grid grid-cols-2 bg-[#efe6dc]">
            <div className="border-r border-[rgba(50,32,24,0.1)] px-5 py-5 text-[0.8rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.48)]">
              {section.leftLabel}
            </div>
            <div className="px-5 py-5 text-[0.8rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.48)]">
              {section.rightLabel}
            </div>
          </div>
          <div data-motion-stagger>
          {section.rows.map(([left, right]) => (
            <div className="grid grid-cols-2 border-t border-[rgba(50,32,24,0.1)]" key={left}>
              <div className="border-r border-[rgba(50,32,24,0.1)] px-5 py-5 text-[0.98rem] leading-[1.74] text-[rgba(50,32,24,0.68)]">
                {left}
              </div>
              <div className="px-5 py-5 text-[0.98rem] leading-[1.74] text-[#322018]">{right}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner({ section }) {
  return (
    <section className="relative overflow-hidden bg-[#f2ebe3] px-4 py-[5rem] text-[#322018] md:px-8 lg:px-10" data-motion-section>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_38%)]" />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Ornament light />
        <h2 className="mt-8 max-w-[16ch] font-['Kaftan_Serif'] text-[clamp(3rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.04em] text-[#322018]" data-motion-heading>
          <MotionWords text={section.heading} />
        </h2>
        <p className="mt-6 max-w-[42rem] text-[1rem] leading-[1.8] text-[rgba(50,32,24,0.72)]" data-motion-text>
          {section.body}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row" data-motion-stagger>
          <Action action={section.primaryCta} className="bg-[#00545a]" />
          <Action action={section.secondaryCta} subtle />
        </div>
      </div>
    </section>
  );
}

function ReasonGridSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1520px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-motion-stagger>
          {section.items.map((item, index) => (
            <article className="motion-card border border-[rgba(50,32,24,0.1)] bg-[#f4efe9] p-7" key={item.title}>
              <span className="text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.38)]">
                Reason {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-['Kaftan_Serif'] text-[2.15rem] leading-[0.98] tracking-[-0.03em] text-[#322018]">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-[1.72] text-[rgba(50,32,24,0.72)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandGridSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section id={section.id}>
      <div className="mx-auto max-w-[1860px]">
        <div className="mx-auto mb-14 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-12" data-motion-stagger>
          {section.items.map((item, index) => (
            <article
              className={`motion-card brand-card min-h-[26rem] border border-[rgba(50,32,24,0.08)] ${
                index % 2 === 0 ? "bg-[#f2ebe4] text-[#322018]" : "bg-[#f8f3ed] text-[#322018]"
              } p-7 sm:p-8`}
              key={item.title}
            >
              <span className="text-[0.78rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.42)]">
                {item.meta}
              </span>
              <h3 className="mt-4 font-['Kaftan_Serif'] text-[2.35rem] leading-[0.98] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-[1.74] text-[rgba(50,32,24,0.72)]">
                {item.body}
              </p>
              <p className="mt-6 text-[0.92rem] leading-[1.68] text-[#8d4f1d]">
                {item.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ section }) {
  return (
    <section className="bg-[#ede8e2] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid gap-6" data-motion-stagger>
          {section.items.map((item) => (
            <article className="motion-card grid gap-4 border-l border-[rgba(50,32,24,0.16)] pl-6 md:grid-cols-[10rem_1fr]" key={item.title}>
              <span className="text-[0.82rem] uppercase tracking-[0.18em] text-[rgba(50,32,24,0.42)]">
                {item.title}
              </span>
              <p className="text-[0.98rem] leading-[1.74] text-[rgba(50,32,24,0.72)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedBlogSection({ section }) {
  const { item } = section;
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1380px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <article className="motion-card overflow-hidden bg-[#f3ede6] text-[#322018]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden" data-motion-image>
              <img
                alt={item.title}
                className="h-[22rem] w-full object-cover lg:h-full"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
              />
            </div>
            <div className="p-7 sm:p-10">
              <span className="text-[0.76rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.52)]">{item.category}</span>
              <h3 className="mt-4 font-['Kaftan_Serif'] text-[clamp(2.4rem,4vw,3.9rem)] leading-[0.96] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-6 text-[1rem] leading-[1.76] text-[rgba(50,32,24,0.72)]">
                {item.excerpt}
              </p>
              <button
                className="premium-button mt-8 inline-flex min-h-[3.9rem] items-center justify-center rounded-full bg-[rgba(50,32,24,0.08)] px-6 text-[0.85rem] uppercase tracking-[0.12em] text-[#322018]"
                type="button"
              >
                {item.cta}
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function BlogListSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section id={section.id}>
      <div className="mx-auto max-w-[1860px]">
        <div className="mx-auto mb-14 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-12" data-motion-stagger>
          {section.items.map((item, index) => (
            <article
              className={`motion-card min-h-[22rem] ${
                index === 0 ? "bg-[#f2ebe4] text-[#322018]" : "bg-[#f7f1ea] text-[#322018]"
              } p-7 sm:p-8`}
              key={item.title}
            >
              <span className="text-[0.78rem] uppercase tracking-[0.16em] text-[rgba(50,32,24,0.42)]">
                {item.category}
              </span>
              <h3 className="mt-4 font-['Kaftan_Serif'] text-[2.2rem] leading-[0.98] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.82rem] uppercase tracking-[0.16em] text-[#8d4f1d]">
                {item.date}
              </p>
              <p className="mt-6 text-[0.98rem] leading-[1.74] text-[rgba(50,32,24,0.72)]">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCardsSection({ section }) {
  return (
    <section className="bg-[#eae5df] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1520px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid gap-6 lg:grid-cols-3" data-motion-stagger>
          {section.items.map((item, index) => (
            <article
              className={`motion-card min-h-[21rem] ${
                index === 1 ? "bg-[#f2ebe4] text-[#322018]" : "bg-[#f8f3ed] text-[#322018]"
              } p-7 sm:p-8`}
              key={item.title}
            >
              <h3 className="font-['Kaftan_Serif'] text-[2.3rem] leading-[0.98] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.68] text-[#8d4f1d]">
                {item.meta}
              </p>
              <p className="mt-5 text-[0.98rem] leading-[1.72] text-[rgba(50,32,24,0.72)]">
                {item.body}
              </p>
              <Action action={item.cta} className="mt-8" subtle={index === 1} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ section }) {
  return (
    <section className="bg-[#ede8e2] px-4 py-18 md:px-8 lg:px-10" data-motion-section>
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-12 flex max-w-[54rem] flex-col items-center text-center">
          <Ornament />
          <SectionHeading centered title={section.heading} />
        </div>
        <div className="grid gap-4" data-motion-stagger>
          {section.items.map((item) => (
            <article className="motion-card border border-[rgba(50,32,24,0.1)] bg-[#f8f3ee] p-6 sm:p-7" key={item.title}>
              <h3 className="font-['Kaftan_Serif'] text-[1.95rem] leading-[1.05] tracking-[-0.03em] text-[#322018]">
                {item.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-[1.74] text-[rgba(50,32,24,0.72)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageSection({ section }) {
  switch (section.type) {
    case "highlights":
      return <HighlightsSection section={section} />;
    case "split":
      return <SplitSection section={section} />;
    case "cards":
      return <CardsSection section={section} />;
    case "categories":
      return <CategoriesSection section={section} />;
    case "amenities":
      return <AmenitiesSection section={section} />;
    case "galleryPreview":
      return <GalleryPreviewSection section={section} />;
    case "leadForm":
      return <LeadFormSection section={section} />;
    case "contactStrip":
      return <ContactStripSection section={section} />;
    case "quoteBand":
      return <QuoteBandSection section={section} />;
    case "comparison":
      return <ComparisonSection section={section} />;
    case "ctaBanner":
      return <CTABanner section={section} />;
    case "reasonGrid":
      return <ReasonGridSection section={section} />;
    case "brandGrid":
      return <BrandGridSection section={section} />;
    case "timeline":
      return <TimelineSection section={section} />;
    case "statusCards":
      return <CardsSection section={section} />;
    case "featuredBlog":
      return <FeaturedBlogSection section={section} />;
    case "blogList":
      return <BlogListSection section={section} />;
    case "contactCards":
      return <ContactCardsSection section={section} />;
    case "faq":
      return <FAQSection section={section} />;
    default:
      return null;
  }
}
