import {
  discoverLinks,
  socialLinks,
  stayMenuLinks,
  stayNavLinks,
} from "./stayData";

function BuiltInMark() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#b86d2b]/30 text-[0.8rem] leading-none text-[#b86d2b]">
      *
    </span>
  );
}

function Stars() {
  return <span className="text-[1.2rem] tracking-[0.08em] text-[#ef8f16]">*****</span>;
}

export default function StayFooter() {
  return (
    <footer className="border-t border-[rgba(50,32,24,0.12)] bg-[#eae5df]" id="reservation">
      <div className="grid grid-cols-1 border-y border-[rgba(50,32,24,0.12)] xl:grid-cols-[1.12fr_1.12fr_1.1fr]">
        <div className="border-b border-[rgba(50,32,24,0.12)] px-8 py-12 sm:px-10 lg:px-16 lg:py-20 xl:border-b-0 xl:border-r xl:border-[rgba(50,32,24,0.12)]">
          <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
            Menu
          </span>
          <div className="flex flex-col items-start gap-3">
            {stayNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Kaftan_Serif'] text-[clamp(2.65rem,4.4vw,3.95rem)] leading-[0.94] tracking-[-0.028em] text-[#322018]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 border-b border-[rgba(50,32,24,0.12)] px-8 py-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20 xl:border-b-0 xl:border-r xl:border-[rgba(50,32,24,0.12)]">
          <div>
            <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
              Stay
            </span>
            <div className="flex flex-col items-start gap-2.5 text-[1rem] leading-[1.55] text-[rgba(76,58,46,0.88)]">
              {stayMenuLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
              Discover
            </span>
            <div className="flex flex-col items-start gap-2.5 text-[1rem] leading-[1.55] text-[rgba(76,58,46,0.88)]">
              {discoverLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 py-12 sm:px-10 lg:px-16 lg:py-20">
          <span className="mb-10 inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.38)]">
            Contact
          </span>
          <div className="flex flex-col gap-10 text-[1rem] leading-[1.55] text-[rgba(76,58,46,0.88)]">
            <div>
              <p className="m-0">Jl. Damai, Kayu Putih</p>
              <p className="m-0">Lovina, Buleleng, Bali, Indonesia</p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:+6287788841008">T: +62 877 888 41008</a>
              <a href="mailto:resort@thedamai.com">E: resort@thedamai.com</a>
              <a href="https://wa.me/6287788841008" target="_blank" rel="noreferrer">
                Reception: WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-[rgba(50,32,24,0.12)] md:grid-cols-3">
        <div className="border-b border-[rgba(50,32,24,0.12)] px-8 py-7 sm:px-10 lg:px-16 md:border-b-0 md:border-r md:border-[rgba(50,32,24,0.12)]">
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g1599608-d309351-Reviews-The_Damai-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html"
            target="_blank"
            rel="noreferrer"
            className="flex flex-wrap items-center gap-3 text-[rgba(76,58,46,0.48)]"
          >
            <Stars />
            <span className="text-[0.9rem] text-[rgba(50,32,24,0.84)]">5.0</span>
            <span className="text-[0.9rem]">/ 1,230 reviews</span>
          </a>
        </div>

        <div className="border-b border-[rgba(50,32,24,0.12)] px-8 py-7 text-[0.9rem] text-[rgba(76,58,46,0.48)] sm:px-10 lg:px-16 md:border-b-0 md:border-r md:border-[rgba(50,32,24,0.12)]">
          <div className="flex flex-wrap items-center gap-8">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 px-8 py-7 text-[0.9rem] text-[rgba(76,58,46,0.48)] sm:px-10 lg:px-16 md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 The Damai</span>
          <span className="flex items-center gap-3 text-[rgba(50,32,24,0.92)]">
            <BuiltInMark />
            <span>Built in Bali at the Damai</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
