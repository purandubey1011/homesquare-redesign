import { cookbookSection } from "./diningData";

function DividerOrnament() {
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
        <path key={d} d={d} fill="#d6c4b3" />
      ))}
    </svg>
  );
}

export default function DiningCookbookSection() {
  const titleLines = cookbookSection.title.split("\n");

  return (
    <section className="bg-[#eae5df] px-4 pb-24 pt-10 md:px-8 lg:px-10 lg:pb-28" id={cookbookSection.id}>
      <div className="mx-auto max-w-[1456px]">
        <div className="relative flex items-center justify-center py-10">
          <span className="absolute left-0 top-1/2 h-px w-[calc(50%-2.25rem)] -translate-y-1/2 bg-[rgba(72,54,42,0.12)]" />
          <span className="absolute right-0 top-1/2 h-px w-[calc(50%-2.25rem)] -translate-y-1/2 bg-[rgba(72,54,42,0.12)]" />
          <div className="relative z-10 bg-[#eae5df] px-6">
            <DividerOrnament />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:items-start">
          <div className="flex justify-center">
            <div className="w-full max-w-[40rem] overflow-hidden bg-[#ddd5cb] lg:w-[68%]">
              <img
                className="h-[31rem] w-full object-cover md:h-[38rem] lg:h-[47rem]"
                src={cookbookSection.image}
                alt="My Bali Kitchen by Danish master chef Per Thøstesen"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex lg:justify-start">
            <div className="max-w-[31.5rem] pt-3 lg:w-[76%] lg:pt-6">
            <span className="text-[0.88rem] uppercase tracking-[0.14em] text-[#aa5204]">
              {cookbookSection.eyebrow}
            </span>

            <h2 className="mt-7 font-['Kaftan_Serif'] text-[clamp(3.55rem,5.6vw,5.25rem)] leading-[0.93] tracking-[-0.05em] text-[#34211a]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-9 space-y-7 text-[0.98rem] leading-[1.58] font-light text-[rgba(72,54,42,0.82)] md:text-[1.01rem]">
              {cookbookSection.description.map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={cookbookSection.href}
              className="mt-11 inline-flex items-center gap-5 rounded-full border border-[rgba(72,54,42,0.14)] px-8 py-[1.1rem] text-[0.95rem] font-medium text-[#48362a] transition-colors duration-300 hover:border-[rgba(72,54,42,0.22)]"
            >
              <span className="text-[1rem] leading-none text-[rgba(72,54,42,0.72)]">✳</span>
              <span>{cookbookSection.cta}</span>
              <span className="text-[1rem] leading-none text-[rgba(72,54,42,0.72)]">✳</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
