import { relaxHero } from "./relaxData";

function Ornament() {
  return (
    <svg
      aria-hidden="true"
      className="h-11 w-11"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32.0002 0.45819L32.0002 17.7408C30.3687 15.6619 29.3335 12.562 29.3335 9.09948C29.3335 5.63692 30.3687 2.53704 32.0002 0.45819Z" fill="#fff" />
      <path d="M21.9711 9.42993L30.2054 23.0501C29.3318 23.1031 28.4577 23.0752 27.607 22.9528C24.2867 22.4752 21.9262 19.5168 21.5569 16.1827C21.3208 14.0503 21.4427 11.6686 21.9711 9.42993Z" fill="#fff" />
      <path d="M0.458008 32.0002L17.7406 32.0002C15.6617 30.3687 12.5619 29.3335 9.0993 29.3335C5.63674 29.3335 2.53686 30.3687 0.458008 32.0002Z" fill="#fff" />
      <path d="M9.42993 21.9711L23.0501 30.2054C23.1031 29.3318 23.0752 28.4577 22.9528 27.607C22.4752 24.2867 19.5168 21.9262 16.1828 21.5569C14.0503 21.3208 11.6686 21.4427 9.42993 21.9711Z" fill="#fff" />
      <path d="M0.458008 31.9998L17.7406 31.9998C15.6617 33.6313 12.5619 34.6665 9.0993 34.6665C5.63674 34.6665 2.53686 33.6313 0.458008 31.9998Z" fill="#fff" />
      <path d="M9.42993 42.0289L23.0501 33.7946C23.1031 34.6682 23.0752 35.5423 22.9528 36.393C22.4752 39.7133 19.5168 42.0738 16.1828 42.4431C14.0503 42.6792 11.6686 42.5573 9.42993 42.0289Z" fill="#fff" />
      <path d="M32.0002 63.5418L32.0002 46.2592C30.3687 48.3381 29.3335 51.438 29.3335 54.9005C29.3335 58.3631 30.3687 61.463 32.0002 63.5418Z" fill="#fff" />
      <path d="M21.9711 54.5701L30.2054 40.9499C29.3318 40.8969 28.4577 40.9248 27.607 41.0472C24.2867 41.5248 21.9262 44.4832 21.5569 47.8172C21.3208 49.9497 21.4427 52.3314 21.9711 54.5701Z" fill="#fff" />
      <path d="M63.5415 32.0002L46.2589 32.0002C48.3378 30.3687 51.4377 29.3335 54.9002 29.3335C58.3628 29.3335 61.4627 30.3687 63.5415 32.0002Z" fill="#fff" />
      <path d="M54.5701 21.9711L40.9499 30.2054C40.8969 29.3318 40.9248 28.4577 41.0472 27.607C41.5248 24.2867 44.4832 21.9262 47.8172 21.5569C49.9497 21.3208 52.3314 21.4427 54.5701 21.9711Z" fill="#fff" />
      <path d="M31.9998 0.458191L31.9998 17.7408C33.6313 15.6619 34.6665 12.562 34.6665 9.09948C34.6665 5.63692 33.6313 2.53704 31.9998 0.458191Z" fill="#fff" />
      <path d="M42.0289 9.42993L33.7946 23.0501C34.6682 23.1031 35.5423 23.0752 36.393 22.9528C39.7133 22.4752 42.0738 19.5168 42.4431 16.1827C42.6792 14.0503 42.5573 11.6686 42.0289 9.42993Z" fill="#fff" />
      <path d="M31.9998 63.5418L31.9998 46.2592C33.6313 48.3381 34.6665 51.438 34.6665 54.9005C34.6665 58.3631 33.6313 61.463 31.9998 63.5418Z" fill="#fff" />
      <path d="M42.0289 54.5701L33.7946 40.9499C34.6682 40.8969 35.5423 40.9248 36.393 41.0472C39.7133 41.5248 42.0738 44.4832 42.4431 47.8172C42.6792 49.9497 42.5573 52.3314 42.0289 54.5701Z" fill="#fff" />
      <path d="M63.5415 31.9998L46.2589 31.9998C48.3378 33.6313 51.4377 34.6665 54.9002 34.6665C58.3628 34.6665 61.4627 33.6313 63.5415 31.9998Z" fill="#fff" />
      <path d="M54.5701 42.0289L40.9499 33.7946C40.8969 34.6682 40.9248 35.5423 41.0472 36.393C41.5248 39.7133 44.4832 42.0738 47.8173 42.4431C49.9497 42.6792 52.3314 42.5573 54.5701 42.0289Z" fill="#fff" />
    </svg>
  );
}

export default function RelaxHero() {
  return (
    <section className="relative overflow-visible bg-[#eae5df] pb-[8.5rem] md:pb-[10rem]">
      <div className="relative h-[120svh] min-h-[58rem] overflow-hidden bg-[#201915]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={relaxHero.backgroundImage}
          alt={relaxHero.title}
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.34),rgba(0,0,0,0.2)_18%,rgba(0,0,0,0.36)_56%,rgba(0,0,0,0.74)_100%)]" />

        <div className="absolute inset-x-0 top-[31%] z-10 flex flex-col items-center px-4 text-center text-white md:top-[33%]">
          <Ornament />
          <span className="mt-6 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-white/78 md:text-[0.86rem]">
            {relaxHero.eyebrow}
          </span>
          <h1 className="mt-9 max-w-[16ch] font-['Kaftan_Serif'] text-[clamp(3.9rem,6.6vw,6.8rem)] leading-[0.9] tracking-[-0.05em] text-white">
            {relaxHero.title}
          </h1>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 z-30 flex justify-center px-4"
        style={{ top: "calc(max(120svh, 58rem) - 17rem)" }}
      >
        <div className="w-[12rem] overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.22)] md:w-[14.5rem] lg:w-[17rem]">
          <img
            className="h-[16rem] w-full object-cover md:h-[20rem] lg:h-[24rem]"
            src={relaxHero.previewImage}
            alt="Spa portrait"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
