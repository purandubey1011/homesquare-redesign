import { useEffect, useRef } from "react";
import gsap from "gsap";

const logoSrc = "/logo/HS Logo.png";

function formatCounter(value) {
  return String(Math.round(value)).padStart(3, "0");
}

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const metaRef = useRef(null);
  const counterRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const counter = counterRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (reduce) {
      counter.textContent = "100";
      const timer = window.setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        onComplete?.();
      }, 320);

      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
      };
    }

    const count = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        document.body.style.overflow = originalOverflow;
        onComplete?.();
      },
    });

    gsap.set(root, { clipPath: "inset(0% 0% 0% 0%)" });
    gsap.set([logoRef.current, metaRef.current], { autoAlpha: 0, y: 18 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });

    tl.to(logoRef.current, { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out" }, 0.1)
      .to(metaRef.current, { autoAlpha: 1, y: 0, duration: 0.8, ease: "expo.out" }, 0.32)
      .to(
        count,
        {
          value: 100,
          duration: 1.7,
          ease: "power2.inOut",
          onUpdate: () => {
            counter.textContent = formatCounter(count.value);
          },
        },
        0.35,
      )
      .to(lineRef.current, { scaleX: 1, duration: 1.7, ease: "power2.inOut" }, 0.35)
      .to([logoRef.current, metaRef.current], { autoAlpha: 0, y: -16, duration: 0.52, ease: "power3.inOut" }, 2.08)
      .to(root, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.92, ease: "expo.inOut" }, 2.2);

    return () => {
      tl.kill();
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="preloader fixed inset-0 z-[120] flex items-center justify-center bg-[#eee7dc] text-[#33231b]"
      aria-label="Loading Home Square"
      role="status"
    >
      <div className="preloader-vignette absolute inset-0" />
      <div className="relative z-10 flex w-[min(82vw,28rem)] flex-col items-center text-center">
        <div ref={logoRef} className="flex flex-col items-center">
          <img
            alt="Home Square"
            className="h-auto w-[min(62vw,18rem)] object-contain"
            draggable="false"
            src={logoSrc}
          />
        </div>

        <div ref={metaRef} className="mt-7 flex w-full flex-col items-center">
          <span className="text-[0.68rem] uppercase tracking-[0.46em] text-[rgba(51,35,27,0.55)]">
            Siliguri
          </span>
          <div className="mt-8 flex w-full items-center gap-5">
            <span className="h-px flex-1 overflow-hidden bg-[rgba(51,35,27,0.14)]">
              <span ref={lineRef} className="block h-full w-full bg-[#9f6b3f]" />
            </span>
            <span className="min-w-12 text-right text-[0.76rem] uppercase tracking-[0.26em] text-[rgba(51,35,27,0.68)]">
              <span className="sr-only">Loading </span>
              <span ref={counterRef}>000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
