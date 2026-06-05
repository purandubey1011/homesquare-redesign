import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useLuxuryScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      document.documentElement.classList.add("reduced-motion");
      return undefined;
    }

    const lenis = new Lenis({
      anchors: { duration: 1.05, offset: 0 },
      duration: 1.18,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.12,
      wheelMultiplier: 0.85,
    });

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    window.__homeSquareLenis = lenis;

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      delete window.__homeSquareLenis;
    };
  }, []);
}

export function useLuxuryAnimations(routeKey, ready = true) {
  useGSAP(
    () => {
      if (!ready) return undefined;

      const reduce = prefersReducedMotion();

      if (reduce) {
        gsap.set("[data-motion-section], [data-motion-stagger] > *, [data-motion-image], [data-motion-heading] .motion-word", {
          clearProps: "all",
        });
        return undefined;
      }

      const ctx = gsap.context(() => {
        const hero = document.querySelector("[data-hero]");
        const heroMedia = document.querySelector("[data-hero-media]");
        const nav = document.querySelector("[data-motion-nav]");

        if (hero) {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          gsap.set(heroMedia, { scale: 1.08, transformOrigin: "50% 50%" });
          gsap.set("[data-hero-line]", { yPercent: 112, autoAlpha: 0 });
          gsap.set("[data-hero-fade]", { y: 22, autoAlpha: 0 });

          tl.fromTo(nav, { y: -28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0)
            .to(heroMedia, { scale: 1, duration: 2.1, ease: "power2.out" }, 0.08)
            .to("[data-hero-line]", { yPercent: 0, autoAlpha: 1, duration: 1.05, stagger: 0.11 }, 0.28)
            .to("[data-hero-fade]", { y: 0, autoAlpha: 1, duration: 0.82, stagger: 0.09 }, 0.78);

          if (heroMedia) {
            gsap.to(heroMedia, {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.7,
              },
            });
          }
        }

        gsap.utils.toArray("[data-motion-section]").forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                once: true,
              },
            },
          );

          const headingWords = section.querySelectorAll("[data-motion-heading] .motion-word");
          if (headingWords.length) {
            gsap.fromTo(
              headingWords,
              { yPercent: 105, autoAlpha: 0 },
              {
                yPercent: 0,
                autoAlpha: 1,
                duration: 0.86,
                ease: "power3.out",
                stagger: 0.026,
                scrollTrigger: {
                  trigger: section.querySelector("[data-motion-heading]") ?? section,
                  start: "top 84%",
                  once: true,
                },
              },
            );
          }

          const softText = section.querySelectorAll("[data-motion-text]");
          if (softText.length) {
            gsap.fromTo(
              softText,
              { autoAlpha: 0, y: 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.78,
                ease: "power2.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  once: true,
                },
              },
            );
          }

          const staggerChildren = section.querySelectorAll("[data-motion-stagger] > *");
          if (staggerChildren.length) {
            gsap.fromTo(
              staggerChildren,
              { autoAlpha: 0, y: 34, scale: 0.985 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.86,
                ease: "power3.out",
                stagger: 0.085,
                scrollTrigger: {
                  trigger: section.querySelector("[data-motion-stagger]") ?? section,
                  start: "top 82%",
                  once: true,
                },
              },
            );
          }

          section.querySelectorAll("[data-motion-image]").forEach((frame) => {
            const image = frame.querySelector("img, video");
            gsap.fromTo(
              frame,
              { clipPath: "inset(18% 0% 0% 0%)", autoAlpha: 0 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                autoAlpha: 1,
                duration: 1.15,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: frame,
                  start: "top 82%",
                  once: true,
                },
              },
            );
            if (image) {
              gsap.fromTo(
                image,
                { scale: 1.08 },
                {
                  scale: 1,
                  duration: 1.35,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: frame,
                    start: "top 82%",
                    once: true,
                  },
                },
              );

              gsap.to(image, {
                yPercent: -4,
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              });
            }
          });

          section.querySelectorAll("[data-count-value]").forEach((item) => {
            const value = Number(item.dataset.countValue);
            const prefix = item.dataset.countPrefix ?? "";
            const suffix = item.dataset.countSuffix ?? "";
            if (!Number.isFinite(value)) return;

            const counter = { value: 0 };
            gsap.to(counter, {
              value,
              duration: 1.25,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
              onUpdate: () => {
                item.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
              },
            });
          });
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    },
    { dependencies: [routeKey, ready], revertOnUpdate: true },
  );
}
