import { AnimatedReveal } from "./AnimatedReveal";
import { ArrowIcon, IconBadge, ShieldIcon, SparkIcon, ToothIcon } from "./ui";
import type { IconTone } from "@/lib/site";

type BenefitStatCardProps = {
  value: string;
  label: string;
  delay?: number;
};

export function BenefitStatCard({ value, label, delay = 0 }: BenefitStatCardProps) {
  return (
    <AnimatedReveal
      delay={delay}
      className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <p className="text-3xl font-semibold tracking-tight text-blue-900">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
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
      className="rounded-[1.5rem] bg-slate-50 p-7 ring-1 ring-slate-100"
    >
      <IconBadge tone={tone}>
        <SparkIcon />
      </IconBadge>
      <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{copy}</p>
    </AnimatedReveal>
  );
}

type ServiceCardProps = {
  service: string;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const tone: IconTone = index % 3 === 0 ? "blue" : index % 3 === 1 ? "teal" : "gold";

  return (
    <AnimatedReveal
      delay={index * 70}
      className="group rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-slate-100 transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <IconBadge tone={tone}>
        <ToothIcon />
      </IconBadge>
      <h3 className="mt-7 min-h-14 text-xl font-semibold text-slate-950">{service}</h3>
      <p className="mt-3 leading-7 text-slate-600">
        Personalized planning, modern materials, and gentle care tailored to your smile goals.
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 group-hover:text-teal-700">
        Learn more <ArrowIcon />
      </span>
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
      className="rounded-3xl bg-blue-50 p-5 text-sm font-semibold text-blue-900"
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
      className="rounded-[1.5rem] bg-white/10 p-7 ring-1 ring-white/15"
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
      className="flex gap-4 rounded-[1.5rem] bg-slate-50 p-6 ring-1 ring-slate-100"
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
      className="rounded-[1.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-100"
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
      <details className="group rounded-[1.25rem] bg-slate-50 p-6 ring-1 ring-slate-100 open:bg-white open:shadow-xl open:shadow-blue-950/10">
        <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950">
          {question}
        </summary>
        <p className="mt-4 leading-7 text-slate-600">{answer}</p>
      </details>
    </AnimatedReveal>
  );
}
