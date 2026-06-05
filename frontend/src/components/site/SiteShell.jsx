import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { contactDetails, navigation } from "../../content/siteContent";
import { useLuxuryAnimations, useLuxuryScroll } from "../../hooks/useLuxuryMotion";

let introLoaderHasPlayed = false;

function resetRouteScroll() {
  window.__homeSquareLenis?.scrollTo?.(0, { force: true, immediate: true });
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function BrandMark() {
  return (
    <div className="flex flex-col items-center text-[#f8f6f4]">
      <span className="mb-1 text-[0.62rem] uppercase tracking-[0.58em] text-white/72">
        The
      </span>
      <span className="font-['Kaftan_Serif'] text-[2.55rem] leading-none tracking-[0.08em] xl:text-[2.75rem]">
        HOME
      </span>
      <span className="-mt-1 text-[0.76rem] uppercase tracking-[0.5em] text-white/86">
        SQUARE
      </span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(50,32,24,0.12)] bg-[#eae5df]" id="footer">
      <div className="grid grid-cols-1 border-b border-[rgba(50,32,24,0.12)] xl:grid-cols-[1.1fr_1.15fr_0.95fr]">
        <div className="border-b border-[rgba(50,32,24,0.12)] px-8 py-12 sm:px-10 lg:px-16 lg:py-20 xl:border-r xl:border-b-0">
          <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
            Menu
          </span>
          <div className="flex flex-col items-start gap-3">
            {navigation.slice(0, 7).map((item) => (
              <Link
                key={item.href}
                className="font-['Kaftan_Serif'] text-[clamp(2.45rem,4vw,3.85rem)] leading-[0.94] tracking-[-0.03em] text-[#322018]"
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-[rgba(50,32,24,0.12)] px-8 py-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20 xl:border-r xl:border-b-0">
          <div>
            <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
              Explore
            </span>
            <div className="flex flex-col items-start gap-2.5 text-[1rem] leading-[1.55] text-[rgba(76,58,46,0.88)]">
              {navigation.slice(7).map((item) => (
                <Link key={item.href} to={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              className="mt-8 inline-flex items-center gap-3 text-[0.98rem] font-medium text-[#a65414]"
              to="/contact-us"
            >
              <span>Book a site visit</span>
              <span className="text-[1.25rem] leading-none">...</span>
            </Link>
          </div>

          <div>
            <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
              Key Focus
            </span>
            <div className="flex flex-col items-start gap-2.5 text-[1rem] leading-[1.55] text-[rgba(76,58,46,0.88)]">
              <span>Home & interior ecosystem</span>
              <span>Premium commercial spaces</span>
              <span>Business-ready amenities</span>
              <span>Destination-led visibility</span>
              <span>Trusted developer backing</span>
            </div>
            <Link
              className="mt-8 inline-flex items-center gap-3 text-[0.98rem] font-medium text-[#a65414]"
              to="/leasing"
            >
              <span>Explore leasing</span>
              <span className="text-[1.25rem] leading-none">...</span>
            </Link>
          </div>
        </div>

        <div className="px-8 py-12 sm:px-10 lg:px-16 lg:py-20">
          <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
            Contact
          </span>
          <div className="flex flex-col gap-10 text-[1rem] leading-[1.55] text-[rgba(76,58,46,0.88)]">
            <div>
              <p className="m-0">Home Square</p>
              <p className="m-0">Bikash Nagar, Salugara Bazar</p>
              <p className="m-0">Siliguri - 734008</p>
            </div>

            <div className="flex flex-col gap-3">
              <a href={`tel:${contactDetails.phone}`}>T: {contactDetails.phone}</a>
              <a href={`mailto:${contactDetails.email}`}>E: {contactDetails.email}</a>
              <a href={contactDetails.whatsapp} rel="noreferrer" target="_blank">
                WhatsApp Reception
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-[rgba(50,32,24,0.12)] md:grid-cols-3">
        <div className="border-b border-[rgba(50,32,24,0.12)] px-8 py-7 sm:px-10 lg:px-16 md:border-r md:border-b-0">
          <span className="flex flex-wrap items-center gap-3 text-[rgba(76,58,46,0.6)]">
            <span className="text-[1.1rem] tracking-[0.08em] text-[#ef8f16]">*****</span>
            <span className="text-[0.9rem] text-[rgba(50,32,24,0.84)]">Premium</span>
            <span className="text-[0.9rem]">commercial destination</span>
          </span>
        </div>

        <div className="border-b border-[rgba(50,32,24,0.12)] px-8 py-7 text-[0.9rem] text-[rgba(76,58,46,0.48)] sm:px-10 lg:px-16 md:border-r md:border-b-0">
          <div className="flex flex-wrap items-center gap-8">
            <a href={contactDetails.maps} rel="noreferrer" target="_blank">
              Maps
            </a>
            <Link to="/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-8 py-7 text-[0.9rem] text-[rgba(76,58,46,0.48)] sm:px-10 lg:px-16 md:flex-row md:items-center md:justify-between">
          <span>(c) 2026 Home Square</span>
          <span className="text-[rgba(50,32,24,0.92)]">
            Built for home, interior and lifestyle brands
          </span>
        </div>
      </div>
    </footer>
  );
}

function PremiumLoader({ hidden }) {
  return (
    <div
      className={`premium-loader fixed inset-0 z-[120] flex items-center justify-center bg-[#211610] text-[#f8f6f4] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        hidden ? "pointer-events-none translate-y-[-100%] opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="flex flex-col items-center">
        <span className="text-[0.66rem] uppercase tracking-[0.54em] text-white/62">The</span>
        <span className="mt-2 font-['Kaftan_Serif'] text-[clamp(3rem,8vw,6rem)] leading-none tracking-[0.08em]">
          HOME
        </span>
        <span className="-mt-1 text-[0.82rem] uppercase tracking-[0.46em] text-white/86">Square</span>
        <span className="mt-8 h-px w-28 overflow-hidden bg-white/18">
          <span className="premium-loader-line block h-full w-full origin-left bg-[#c7a16d]" />
        </span>
      </div>
    </div>
  );
}

export function SiteShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(introLoaderHasPlayed);
  const location = useLocation();
  const primaryDesktopLinks = navigation.filter((item) =>
    ["/", "/about", "/leasing", "/brands", "/contact-us"].includes(item.href),
  );
  const drawerSplitIndex = Math.ceil(navigation.length / 2);
  const drawerColumns = [
    navigation.slice(0, drawerSplitIndex),
    navigation.slice(drawerSplitIndex),
  ];

  useLuxuryScroll();
  useLuxuryAnimations(location.pathname, loaded);

  useLayoutEffect(() => {
    resetRouteScroll();
    setMenuOpen(false);

    const frame = window.requestAnimationFrame(() => {
      resetRouteScroll();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  useEffect(() => {
    if (introLoaderHasPlayed) {
      setLoaded(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      introLoaderHasPlayed = true;
      setLoaded(true);
    }, 620);
    return () => {
      introLoaderHasPlayed = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      "[data-menu-item]",
      { x: -18, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.55, ease: "power3.out", stagger: 0.035, delay: 0.14 },
    );
  }, [menuOpen]);

  return (
    <div className="bg-[#eae5df] text-[rgba(50,32,24,0.84)]">
      <PremiumLoader hidden={loaded} />
      <header
        data-motion-nav
        className={`fixed inset-x-0 top-0 z-50 border-b px-4 transition-all duration-500 md:px-8 xl:px-12 ${
          scrolled
            ? "border-white/15 bg-[rgba(18,12,9,0.42)] shadow-[0_18px_46px_rgba(0,0,0,0.14)] backdrop-blur-[16px]"
            : "border-white/18 bg-transparent"
        }`}
      >
        <div className="grid h-[92px] w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="flex min-w-0 items-center gap-4 xl:gap-6">
            <button
              className="group relative inline-flex h-10 w-10 items-center justify-center bg-transparent"
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span
                className={`absolute h-px w-6 bg-[#f8f6f4] transition-transform duration-500 ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px bg-[#f8f6f4] transition-all duration-500 ${
                  menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                }`}
              />
              <span
                className={`absolute h-px bg-[#f8f6f4] transition-all duration-500 ${
                  menuOpen ? "w-6 translate-y-0 -rotate-45" : "w-3 -translate-y-[0.37rem] translate-x-1.5"
                }`}
              />
            </button>

            <span className="hidden h-4 w-px bg-white/35 lg:block" />

            <nav className="hidden min-w-0 items-center gap-1 xl:gap-2 lg:flex" aria-label="Primary">
              {primaryDesktopLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link-luxury relative flex h-10 items-center whitespace-nowrap px-3 text-[0.72rem] font-normal uppercase tracking-[0.14em] text-[#f8f6f4] transition-all duration-500 xl:px-4 xl:text-[0.76rem] ${
                    location.pathname === link.href ? "is-active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            aria-label="Home Square"
            className="relative z-10 mx-auto"
            to="/"
          >
            <BrandMark />
          </Link>

          <div className="flex items-center justify-end">
            <Link
              className="premium-button hidden min-h-[3.2rem] items-center justify-center rounded-full bg-white/20 px-6 text-[0.74rem] font-normal uppercase tracking-[0.14em] text-[#f8f6f4] backdrop-blur-[14px] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/28 lg:inline-flex xl:min-h-[3.35rem] xl:px-8 xl:text-[0.82rem]"
              to="/contact-us"
            >
              Book site visit
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] bg-[rgba(10,8,7,0.48)] transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`flex h-screen max-h-screen w-[min(100vw,38rem)] flex-col overflow-hidden bg-[#ece7e1] p-5 text-[#322018] transition-transform duration-700 ease-[cubic-bezier(0.3,1,0.3,1)] md:w-[min(64vw,38rem)] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex shrink-0 items-start justify-between gap-4">
            <button
              type="button"
              className="relative mt-1 h-10 w-10 bg-transparent"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#322018]" />
              <span className="absolute left-1/2 top-1/2 block h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#322018]" />
            </button>
            <Link
              className="premium-button inline-flex min-h-[3.5rem] items-center justify-center rounded-full bg-[rgba(50,32,24,0.08)] px-6 text-[0.82rem] font-normal uppercase tracking-[0.12em] text-[#322018] transition-all duration-500 hover:bg-[rgba(50,32,24,0.12)]"
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
            >
              Book site visit
            </Link>
          </div>

          <div className="mt-8 shrink-0">
            <span className="mb-7 inline-flex text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(50,32,24,0.42)]">
              Menu
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <nav className="flex-1 pr-1" aria-label="Mobile">
              <div className="grid grid-cols-2 items-start gap-x-8 gap-y-0 pb-6">
                {drawerColumns.map((column, columnIndex) => (
                  <div key={`drawer-column-${columnIndex}`} className="grid content-start gap-y-0">
                    {column.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        data-menu-item
                        className="group block max-w-full border-b border-[rgba(50,32,24,0.08)] py-2.5 font-['Kaftan_Serif'] text-[clamp(1.1rem,1.45vw,1.7rem)] leading-[1.04] tracking-[-0.025em] text-[#322018] transition-colors duration-300 hover:text-[#8d4f1d]"
                      >
                        <span className="inline-block border-b border-transparent pb-[0.22rem] transition-all duration-300 group-hover:border-[rgba(141,79,29,0.42)]">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </nav>

            <div className="mt-4 shrink-0 border-t border-[rgba(50,32,24,0.1)] pt-5">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <span className="mb-5 inline-flex text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(50,32,24,0.42)]">
                    Contact
                  </span>
                  <div className="grid gap-3 text-[0.95rem] leading-none text-[rgba(50,32,24,0.76)]">
                    <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
                    <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                    <a href={contactDetails.maps} rel="noreferrer" target="_blank">
                      Get directions
                    </a>
                  </div>
                </div>

                <div>
                  <span className="mb-5 inline-flex text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(50,32,24,0.42)]">
                    Address
                  </span>
                  <div className="grid gap-3 text-[0.95rem] leading-[1.45] text-[rgba(50,32,24,0.76)]">
                    <span>Home Square</span>
                    <span>Bikash Nagar, Salugara Bazar</span>
                    <span>Siliguri - 734008</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>{children}</main>
      <Footer />
      <a
        aria-label="WhatsApp Home Square"
        className="whatsapp-float fixed bottom-5 right-5 z-40 inline-flex min-h-14 items-center justify-center rounded-full bg-[#00545a] px-5 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#f8f6f4] shadow-[0_18px_34px_rgba(0,84,90,0.28)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0a666b] sm:bottom-7 sm:right-7"
        href={contactDetails.whatsapp}
        rel="noreferrer"
        target="_blank"
      >
        WhatsApp
      </a>
    </div>
  );
}
