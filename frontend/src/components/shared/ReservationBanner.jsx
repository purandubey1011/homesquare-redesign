export default function ReservationBanner({
  id = "reservation",
  eyebrow = "Make a reservation",
  title = "Dine under\nthe Bali sky",
  description = "Reserve a table for sunset cocktails, poolside dinner or a slow breakfast with mountain air and sea views.",
  primaryLabel = "Email the restaurant",
  primaryHref = "mailto:resort@thedamai.com",
  secondaryLabel = "WhatsApp reception",
  secondaryHref = "https://wa.me/6287788841008",
}) {
  const titleLines = title.split("\n");

  return (
    <section className="bg-[#eae5df] px-4 py-16 md:px-8 lg:px-10 lg:py-20" id={id}>
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-10 rounded-[2rem] bg-[#ded4c9] p-8 text-[#322018] lg:grid-cols-[1.2fr_0.9fr] lg:items-end lg:p-12">
          <div>
            <span className="inline-flex text-[0.82rem] uppercase tracking-[0.16em] text-[rgba(76,58,46,0.42)]">
              {eyebrow}
            </span>
            <h2 className="mt-6 max-w-[9ch] font-['Kaftan_Serif'] text-[clamp(3rem,5.5vw,5.4rem)] leading-[0.92] tracking-[-0.04em]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-[32rem] text-[1rem] leading-[1.7] text-[rgba(76,58,46,0.82)]">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              className="inline-flex min-h-[4.2rem] items-center justify-center rounded-full bg-[#00545a] px-8 text-[0.95rem] font-medium text-[#f8f6f4] transition-transform duration-300 hover:-translate-y-0.5"
              href={primaryHref}
            >
              {primaryLabel}
            </a>
            <a
              className="inline-flex min-h-[4.2rem] items-center justify-center rounded-full border border-[rgba(50,32,24,0.18)] px-8 text-[0.95rem] font-medium text-[#322018]"
              href={secondaryHref}
              target="_blank"
              rel="noreferrer"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
