import type { ReactNode } from "react";
import { AnimatedReveal } from "./AnimatedReveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  theme = "light",
}: SectionProps) {
  const isDark = theme === "dark";

  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal className="mb-12 max-w-3xl">
          <div>
            {eyebrow ? (
              <p
                className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${
                  isDark ? "text-amber-200" : "text-teal-700"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              className={`text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
                isDark ? "text-white" : "text-slate-950"
              }`}
            >
              {title}
            </h2>
            {intro ? (
              <p className={`mt-5 text-lg leading-8 ${isDark ? "text-blue-50" : "text-slate-600"}`}>
                {intro}
              </p>
            ) : null}
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={120}>{children}</AnimatedReveal>
      </div>
    </section>
  );
}

type IconBadgeProps = {
  children: ReactNode;
  tone?: "blue" | "teal" | "gold";
};

export function IconBadge({ children, tone = "blue" }: IconBadgeProps) {
  const tones = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    teal: "bg-teal-50 text-teal-700 ring-teal-100",
    gold: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return (
    <div
      className={`flex size-12 items-center justify-center rounded-2xl ring-1 ${tones[tone]}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
      <path
        d="M7.5 4.5 13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ToothIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M7.4 3.7c1.4-.8 3.1-.3 4.6.5 1.5-.8 3.2-1.3 4.6-.5 2.5 1.4 3.2 4.8 1.9 8.5-.8 2.3-1.2 4.6-1.5 6.3-.2 1.2-.9 2-1.8 2-1.1 0-1.6-1.1-2.1-2.8-.3-1.1-.6-2-1.1-2s-.8.9-1.1 2c-.5 1.7-1 2.8-2.1 2.8-.9 0-1.6-.8-1.8-2-.3-1.7-.7-4-1.5-6.3-1.3-3.7-.6-7.1 1.9-8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M12 3.5 19 6v5.3c0 4.4-2.8 7.8-7 9.2-4.2-1.4-7-4.8-7-9.2V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2 2 4.4-4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="m12 3 1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m18 16 .8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8L18 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path
        d="M7 3.5v3M17 3.5v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
