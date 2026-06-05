import { useEffect, useState } from "react";
import { discoverLinks, stayMenuLinks, stayNavLinks } from "./stayData";

const navLinkClass =
  "relative flex h-10 items-center px-[1.15rem] text-[0.82rem] font-normal text-[#322018] transition-all duration-500 before:absolute before:left-1/2 before:top-[calc(100%+0.2rem)] before:h-1 before:w-1 before:-translate-x-1/2 before:rounded-full before:bg-[#5f4a3f] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100";

function BrandMark() {
  return (
    <div className="flex flex-col items-center text-[#322018]">
      <span className="mb-1 text-[0.72rem] font-normal uppercase tracking-[0.6em]">
        The
      </span>
      <span className="font-['Kaftan_Serif'] text-[2.55rem] leading-none tracking-[0.06em] xl:text-[2.75rem]">
        DAMAI
      </span>
    </div>
  );
}

export default function StayNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-40 border-b border-[rgba(72,54,42,0.12)] bg-[#eae5df] px-4 md:px-8 xl:px-12">
        <div className="flex h-[106px] w-full items-center justify-between">
          <div className="flex min-w-0 items-center gap-4 xl:gap-6">
            <button
              className="group relative inline-flex h-10 w-10 items-center justify-center bg-transparent"
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span
                className={`absolute h-px w-6 bg-[#5f4a3f] transition-transform duration-500 ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px bg-[#5f4a3f] transition-all duration-500 ${
                  menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                }`}
              />
              <span
                className={`absolute h-px bg-[#5f4a3f] transition-all duration-500 ${
                  menuOpen
                    ? "w-6 translate-y-0 -rotate-45"
                    : "w-3 -translate-y-[0.37rem] translate-x-1.5"
                }`}
              />
            </button>

            <span className="hidden h-4 w-px bg-[rgba(72,54,42,0.25)] lg:block" />

            <nav className="hidden items-center lg:flex" aria-label="Primary">
              {stayNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${navLinkClass} ${
                    link.label === "Stay" ? "before:opacity-100" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="/"
            aria-label="The Damai"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <BrandMark />
          </a>

          <div className="flex items-center">
            <a
              className="hidden min-h-[3.85rem] items-center justify-center rounded-full bg-[#00545a] px-8 text-[0.82rem] font-normal text-[#f8f6f4] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#0a666b] lg:inline-flex"
              href="#reservation"
            >
              Book your stay
            </a>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] bg-[rgba(10,8,7,0.48)] transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`flex h-screen max-h-screen w-[min(100vw,40rem)] flex-col overflow-hidden bg-[#ece7e1] p-6 text-[#322018] transition-transform duration-700 ease-[cubic-bezier(0.3,1,0.3,1)] md:w-[min(66vw,40rem)] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between gap-4 shrink-0">
            <button
              type="button"
              className="relative mt-1 h-10 w-10 bg-transparent"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#322018]" />
              <span className="absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#322018]" />
            </button>
            <a
              className="inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-[rgba(50,32,24,0.08)] px-6 text-[0.82rem] font-normal text-[#322018] transition-all duration-500 hover:bg-[rgba(50,32,24,0.12)]"
              href="#reservation"
              onClick={() => setMenuOpen(false)}
            >
              Book your stay
            </a>
          </div>

          <div className="mt-12 shrink-0">
            <span className="mb-7 inline-flex text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(50,32,24,0.42)]">
              Menu
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <nav className="grid shrink-0 gap-0.5" aria-label="Mobile">
              {stayNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-fit font-['Kaftan_Serif'] text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.92] tracking-[-0.04em] text-[#322018]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-[rgba(50,32,24,0.1)] pt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <span className="mb-5 inline-flex text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(50,32,24,0.42)]">
                    Stay
                  </span>
                  <div className="grid gap-3 text-[1rem] leading-none text-[rgba(50,32,24,0.76)]">
                    {stayMenuLinks.map((link) => (
                      <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="mb-5 inline-flex text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(50,32,24,0.42)]">
                    Discover
                  </span>
                  <div className="grid gap-3 text-[1rem] leading-none text-[rgba(50,32,24,0.76)]">
                    {discoverLinks.map((link) => (
                      <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
