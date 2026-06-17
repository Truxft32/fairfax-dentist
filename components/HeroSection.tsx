"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Benefit } from "@/lib/site";
import { HeroBackground } from "./HeroBackground";
import { ArrowIcon } from "./ui";

type HeroSectionProps = {
  benefits: readonly Benefit[];
};

const ease = [0.16, 1, 0.3, 1] as const;

const cards = [
  { value: "4.9\u2605", label: "Google Rating" },
  { value: "2,800+", label: "Happy Patients" },
  { value: "Same-Day", label: "Emergency Care" },
  { value: "Board Certified", label: "Specialist Network" },
] as const;

const yearsOfExperience = { value: "10+", label: "Years of experience" } as const;

export function HeroSection({ benefits }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const reviewScore = benefits[0]?.value ?? "4.9/5";
  const patientCount = benefits[1]?.value ?? "2,800+";

  const motionDelay = (delay: number) =>
    ({
      "--motion-delay": shouldReduceMotion ? "0ms" : `${delay}ms`,
    }) as CSSProperties;

  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-32 text-white sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
      <HeroBackground />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,6,23,0.76)_0%,rgba(15,35,65,0.62)_44%,rgba(15,23,42,0.44)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/70 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.62fr)] lg:items-end">
        <div className="max-w-4xl">
          <motion.p
            style={motionDelay(80)}
            className="premium-hero-in mb-6 inline-flex max-w-full rounded-full border border-white/20 bg-white/12 px-4 py-2 text-left text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-blue-50 shadow-sm backdrop-blur-md sm:tracking-[0.22em]"
          >
            Advanced dental care in the heart of Fairfax
          </motion.p>

          <motion.h1
            style={motionDelay(220)}
            className="premium-hero-in max-w-4xl text-balance text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-tight text-white"
          >
            Trusted Dentist in Fairfax, VA
          </motion.h1>

          <motion.p
            style={motionDelay(380)}
            className="premium-hero-in mt-7 max-w-2xl text-lg leading-8 text-blue-50/95 sm:text-xl"
          >
            Experience precise, compassionate dentistry in a calm boutique practice built for
            families, professionals, and smile transformations.
          </motion.p>

          <motion.div
            style={motionDelay(540)}
            className="premium-hero-in mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-slate-950/20 transition duration-300 ease-out hover:-translate-y-1 hover:bg-amber-200 hover:shadow-2xl"
            >
              Request Appointment
              <ArrowIcon />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-slate-950/10 backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/18"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            style={motionDelay(700)}
            className="premium-hero-in mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/18 pt-6"
          >
            {[
              { value: reviewScore, label: "Reviews" },
              { value: patientCount, label: "Patients served" },
              yearsOfExperience,
            ].map((stat) => (
              <div key={stat.label} className="min-w-0">
                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 break-words text-[10px] font-medium uppercase leading-4 tracking-[0.1em] text-blue-100/85 sm:text-xs sm:tracking-[0.16em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              style={motionDelay(420 + index * 170)}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease }}
              className="premium-hero-in rounded-2xl border border-white/18 bg-white/92 p-4 shadow-2xl shadow-slate-950/18 backdrop-blur-md transition duration-300 ease-out hover:bg-white"
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-xl font-semibold tracking-tight text-blue-950">
                    {card.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{card.label}</p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-900 ring-1 ring-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
