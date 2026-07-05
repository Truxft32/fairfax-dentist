import { AnimatedReveal } from "./AnimatedReveal";
import { ArrowIcon, IconBadge, ShieldIcon, SparkIcon, ToothIcon } from "./ui";
import type { FeaturedTreatment, HeroHighlight, IconTone, Service } from "@/lib/site";

type BenefitStatCardProps = {
  value: string;
  label: string;
  delay?: number;
};

export function BenefitStatCard({ value, label, delay = 0 }: BenefitStatCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="bg-white p-7 text-center ring-1 ring-slate-100 transition hover:bg-[#fbf8f1]"
    >
      <p className="text-3xl font-semibold tracking-tight text-[#2f6682]">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
    </AnimatedReveal>
  );
}

type HeroHighlightCardProps = {
  item: HeroHighlight;
  index: number;
};

export function HeroHighlightCard({ item, index }: HeroHighlightCardProps) {
  const tone: IconTone = index === 1 ? "gold" : "teal";

  return (
    <AnimatedReveal
      delay={index * 90}
      className="group relative bg-white px-7 py-8 text-center ring-1 ring-slate-200 transition hover:z-10 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
    >
      <div className="mx-auto flex size-14 items-center justify-center rounded-sm bg-[#eef6f8] text-[#2f6682] ring-1 ring-[#c7dde3]">
        <IconBadge tone={tone}>
          <ToothIcon />
        </IconBadge>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#14364a]">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
    </AnimatedReveal>
  );
}

type PracticeFeatureCardProps = {
  title: string;
  copy: string;
  tone: IconTone;
  delay?: number;
};

export function PracticeFeatureCard({
  title,
  copy,
  tone,
  delay = 0,
}: PracticeFeatureCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="rounded-sm bg-white/75 p-7 ring-1 ring-[#dfd8cc]"
    >
      <IconBadge tone={tone}>
        <SparkIcon />
      </IconBadge>
      <h3 className="mt-6 text-xl font-semibold text-[#14364a]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{copy}</p>
    </AnimatedReveal>
  );
}

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const tone: IconTone = index % 3 === 0 ? "blue" : index % 3 === 1 ? "teal" : "gold";

  return (
    <AnimatedReveal
      delay={index * 70}
      className="group rounded-sm bg-white p-7 shadow-sm ring-1 ring-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <IconBadge tone={tone}>
        <ToothIcon />
      </IconBadge>
      <h3 className="mt-7 min-h-14 text-xl font-semibold text-[#14364a]">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{service.copy}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#2f6682] group-hover:text-teal-700">
        Learn more <ArrowIcon />
      </span>
    </AnimatedReveal>
  );
}

type FeaturedTreatmentCardProps = {
  treatment: FeaturedTreatment;
  index: number;
};

export function FeaturedTreatmentCard({ treatment, index }: FeaturedTreatmentCardProps) {
  const tone: IconTone = index % 2 === 0 ? "blue" : "teal";

  return (
    <AnimatedReveal
      delay={index * 90}
      className="group flex h-full flex-col rounded-sm bg-white p-7 shadow-sm ring-1 ring-slate-100 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <IconBadge tone={tone}>
        <SparkIcon />
      </IconBadge>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
        {treatment.kicker}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#14364a]">
        {treatment.title}
      </h3>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{treatment.copy}</p>
      <a
        href={treatment.href}
        className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#2f6682] group-hover:text-teal-700"
      >
        Request Consultation <ArrowIcon />
      </a>
    </AnimatedReveal>
  );
}

type CredentialCardProps = {
  item: string;
  delay?: number;
};

export function CredentialCard({ item, delay = 0 }: CredentialCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="rounded-sm bg-[#eef6f8] p-5 text-sm font-semibold text-[#2f6682]"
    >
      {item}
    </AnimatedReveal>
  );
}

type ReviewCardProps = {
  quote: string;
  name: string;
  detail: string;
  delay?: number;
};

export function ReviewCard({ quote, name, detail, delay = 0 }: ReviewCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="rounded-sm bg-white/10 p-7 ring-1 ring-white/15"
    >
      <div className="mb-5 text-amber-300" aria-label="Five star review">
        {"\u2605\u2605\u2605\u2605\u2605"}
      </div>
      <blockquote className="leading-8 text-blue-50">&ldquo;{quote}&rdquo;</blockquote>
      <div className="mt-7">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-blue-200">{detail}</p>
      </div>
    </AnimatedReveal>
  );
}

type WhyChooseCardProps = {
  item: string;
  delay?: number;
};

export function WhyChooseCard({ item, delay = 0 }: WhyChooseCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="flex gap-4 rounded-sm bg-slate-50 p-6 ring-1 ring-slate-100"
    >
      <IconBadge tone="teal">
        <ShieldIcon />
      </IconBadge>
      <p className="pt-2 font-semibold leading-7 text-slate-800">{item}</p>
    </AnimatedReveal>
  );
}

type FinancingCardProps = {
  item: string;
  delay?: number;
};

export function FinancingCard({ item, delay = 0 }: FinancingCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="rounded-sm bg-white p-8 shadow-sm ring-1 ring-slate-100"
    >
      <h3 className="text-2xl font-semibold text-slate-950">{item}</h3>
      <p className="mt-4 leading-7 text-slate-600">
        Receive a written estimate, benefit guidance, and a care coordinator who keeps the
        financial side organized.
      </p>
    </AnimatedReveal>
  );
}

type FaqCardProps = {
  question: string;
  answer: string;
  delay?: number;
};

export function FaqCard({ question, answer, delay = 0 }: FaqCardProps) {
  return (
    <AnimatedReveal delay={delay}>
      <details className="group rounded-sm bg-slate-50 p-6 ring-1 ring-slate-100 open:bg-white open:shadow-xl open:shadow-blue-950/10">
        <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
          {question}
        </summary>
        <p className="mt-4 leading-7 text-slate-600">{answer}</p>
      </details>
    </AnimatedReveal>
  );
}
