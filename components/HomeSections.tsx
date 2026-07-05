import Image from "next/image";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import {
  BenefitStatCard,
  CredentialCard,
  FaqCard,
  FeaturedTreatmentCard,
  FinancingCard,
  PracticeFeatureCard,
  ReviewCard,
  ServiceCard,
  WhyChooseCard,
} from "@/components/content-cards";
import { ArrowIcon, SectionShell } from "@/components/ui";
import {
  benefits,
  clinicImages,
  doctorCredentials,
  faqs,
  featuredTreatments,
  financingOptions,
  practiceFeatures,
  services,
  siteConfig,
  testimonials,
  whyChooseItems,
} from "@/lib/site";

export function TrustBar() {
  return (
    <section
      className="border-b border-slate-100 bg-slate-50 px-5 py-12 sm:px-8 lg:px-12"
      aria-label="Practice highlights"
    >
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => (
          <BenefitStatCard
            key={item.label}
            value={item.value}
            label={item.label}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About practice"
      title="Boutique dentistry with clinical precision and spa-level calm."
      intro="Fairfax Dental Atelier blends modern diagnostics, thoughtful treatment planning, and a hospitality-first experience. Every visit is designed to feel clear, comfortable, and personal."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-slate-100">
          <Image
            src={clinicImages.operatory}
            alt="Modern Fairfax dental operatory prepared for a patient visit"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/35 to-transparent" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {practiceFeatures.map((feature, index) => (
            <PracticeFeatureCard
              key={feature.title}
              title={feature.title}
              copy={feature.copy}
              tone={feature.tone}
              delay={index * 90}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Dental services"
      title="Comprehensive care for healthy, confident smiles."
      intro="From routine prevention to full smile rehabilitation, our Fairfax dental team coordinates the details so your care feels simple."
      className="bg-slate-50"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

export function FeaturedTreatmentsSection() {
  return (
    <SectionShell
      id="implants"
      eyebrow="Focused treatment"
      title="Implants, cosmetic dentistry, emergency care, and Invisalign in Fairfax."
      intro="These are the treatment categories patients most often compare when choosing a dentist in Fairfax, VA. Each begins with a clear exam, photography when helpful, and a written plan."
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredTreatments.map((treatment, index) => (
          <FeaturedTreatmentCard key={treatment.title} treatment={treatment} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

export function DoctorSection() {
  return (
    <SectionShell
      id="doctor"
      eyebrow="Meet the doctor"
      title="Led by Dr. Elena Hart, DDS."
      intro="Dr. Hart is known for calm communication, meticulous cosmetic work, and restorative dentistry that protects long-term function."
      className="bg-slate-50"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] bg-slate-100">
          <Image
            src={clinicImages.doctor}
            alt="Portrait of a Fairfax dentist in a clinical setting"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xl leading-9 text-slate-700">
            Patients choose Dr. Hart for her blend of technical excellence and plain-spoken
            guidance. She takes time to understand your concerns, explain findings with
            photography, and create care plans that fit your health, schedule, and budget.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {doctorCredentials.map((item, index) => (
              <CredentialCard key={item} item={item} delay={index * 90} />
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function ReviewsSection() {
  return (
    <SectionShell
      id="reviews"
      eyebrow="Patient reviews"
      title="Trusted by Fairfax patients who value comfort and clarity."
      className="bg-blue-950 text-white"
      theme="dark"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((review, index) => (
          <ReviewCard
            key={review.name}
            quote={review.quote}
            name={review.name}
            detail={review.detail}
            delay={index * 100}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export function WhyChooseSection() {
  return (
    <SectionShell
      eyebrow="Why choose us"
      title="A premium dental experience without the pressure."
      intro="We focus on the details patients actually feel: respectful timing, clear costs, gentle techniques, and results that look like you."
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyChooseItems.map((item, index) => (
          <WhyChooseCard key={item} item={item} delay={index * 70} />
        ))}
      </div>
    </SectionShell>
  );
}

export function FinancingSection() {
  return (
    <SectionShell
      eyebrow="Insurance & financing"
      title="Clear estimates and flexible ways to invest in your smile."
      intro="Our team helps you understand benefits before treatment begins and offers financing options for larger restorative or cosmetic plans."
      className="bg-slate-50"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {financingOptions.map((item, index) => (
          <FinancingCard key={item} item={item} delay={index * 90} />
        ))}
      </div>
    </SectionShell>
  );
}

export function FaqSection() {
  return (
    <SectionShell
      eyebrow="FAQ"
      title="Questions patients ask before their first visit."
      className="bg-white"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {faqs.map((item, index) => (
          <FaqCard key={item.q} question={item.q} answer={item.a} delay={index * 80} />
        ))}
      </div>
    </SectionShell>
  );
}

export function AppointmentSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-br from-blue-950 to-teal-900 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <AnimatedReveal className="text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
            Request appointment
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Start with a calmer dental visit in Fairfax.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50">
            Tell us what you need and our patient care team will follow up with availability,
            insurance guidance, and next steps.
          </p>
          <address className="mt-8 rounded-[1.25rem] bg-white/10 p-6 not-italic ring-1 ring-white/15">
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.phoneHref}`} className="text-white underline-offset-4 hover:underline">
                Call Now: {siteConfig.phone}
              </a>
            </p>
            <p className="mt-2 text-blue-100">{siteConfig.fullAddress}</p>
          </address>
        </AnimatedReveal>
        <AnimatedReveal delay={140}>
          <form
            className="rounded-[1.5rem] bg-white p-6 shadow-2xl shadow-slate-950/25 sm:p-8"
            aria-label="Request an appointment"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                First name
                <input
                  name="firstName"
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Last name
                <input
                  name="lastName"
                  autoComplete="family-name"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-slate-700">
              How can we help?
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:w-auto"
            >
              Schedule Appointment <ArrowIcon />
            </button>
          </form>
        </AnimatedReveal>
      </div>
    </section>
  );
}
