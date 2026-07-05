import type { CSSProperties } from "react";
import { siteConfig, type Benefit } from "@/lib/site";
import { HeroBackground } from "./HeroBackground";
import { ArrowIcon } from "./ui";

type HeroSectionProps = {
  benefits: readonly Benefit[];
};

export function HeroSection({ benefits }: HeroSectionProps) {
  const reviewScore = benefits[0]?.value ?? "4.9/5";

  const motionDelay = (delay: number) =>
    ({
      "--motion-delay": `${delay}ms`,
    }) as CSSProperties;

  return (
    <section className="relative isolate flex min-h-[760px] items-center overflow-hidden px-5 pb-40 pt-32 text-white sm:px-8 sm:pt-40 lg:px-12">
      <HeroBackground />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,48,67,0.18)_0%,rgba(16,48,67,0.34)_45%,rgba(16,48,67,0.78)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#efe8dc] to-transparent" />
      <div
        className="absolute inset-x-[-12%] bottom-[-7rem] h-44 bg-[#efe8dc]"
        style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
      />

      <div className="relative mx-auto w-full max-w-6xl text-center">
        <div className="mx-auto max-w-4xl">
          <p
            style={motionDelay(80)}
            className="premium-hero-in mb-6 inline-flex max-w-full border border-white/55 bg-white/12 px-6 py-2 text-center text-xs font-semibold uppercase leading-5 tracking-[0.28em] text-white shadow-sm"
          >
            Comprehensive dental care in Fairfax
          </p>

          <h1
            style={motionDelay(220)}
            className="premium-hero-in mx-auto max-w-4xl text-balance font-serif text-[clamp(3rem,6.2vw,6.4rem)] font-normal leading-[0.98] tracking-normal text-white drop-shadow-sm"
          >
            Trusted Dentist in Fairfax, VA
          </h1>

          <p
            style={motionDelay(380)}
            className="premium-hero-in mx-auto mt-7 max-w-2xl text-base leading-8 text-blue-50/95 sm:text-lg"
          >
            Comfortable family, cosmetic, emergency, implant, and Invisalign care in a calm
            neighborhood dental office.
          </p>
          <p className="premium-hero-in mx-auto mt-3 max-w-xl text-sm font-semibold uppercase tracking-[0.18em] text-[#f6f1df]">
            {reviewScore} patient rating | Same-day emergency visits when available
          </p>

          <div
            style={motionDelay(540)}
            className="premium-hero-in mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f6f1df] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#14364a] shadow-xl shadow-slate-950/15 transition duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
            >
              Request an Appointment
              <ArrowIcon />
            </a>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex items-center justify-center border border-white/55 bg-transparent px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-slate-950/10 transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/12"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-8 z-10 mx-auto hidden max-w-6xl border-y border-white/35 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-50 sm:flex sm:items-center sm:justify-between">
        <span>Fairfax, VA</span>
        <span>Family & Cosmetic Dentistry</span>
        <span>{siteConfig.phone}</span>
      </div>
    </section>
  );
}
