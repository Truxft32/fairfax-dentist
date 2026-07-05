import Image from "next/image";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ArrowIcon } from "@/components/ui";
import {
  clinicImages,
  doctorCredentials,
  featuredTreatments,
  services,
  siteConfig,
  testimonials,
  whyChooseItems,
} from "@/lib/site";

const welcomeNotes = [
  "Clear answers before treatment begins",
  "Comfortable visits for busy families",
  "Natural dentistry that still looks like you",
] as const;

export function TrustBar() {
  return (
    <section className="relative z-20 bg-[#efe8dc] px-5 sm:px-8 lg:px-12" aria-label="Practice highlights">
      <div className="mx-auto -mt-16 max-w-6xl bg-white px-7 py-8 shadow-2xl shadow-slate-950/10 ring-1 ring-[#ded8cc]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-serif text-3xl leading-tight text-[#14364a]">
            Dentistry that feels personal before it feels clinical.
          </p>
          <div className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:gap-8">
            <span>4.9/5 patient rating</span>
            <span className="hidden h-px w-10 bg-[#b7cbc8] sm:block" />
            <span>Same-day emergency visits</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-[#efe8dc] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f8c8b]">
            Welcome to Fairfax Dental Atelier
          </p>
          <h2 className="mt-5 text-balance font-serif text-5xl font-normal leading-tight text-[#14364a] sm:text-6xl">
            A calm dental home for people who want care to feel clear.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We keep visits focused, comfortable, and honest. You will know what we see, what it
            means, and which options fit your health, schedule, and budget.
          </p>
        </AnimatedReveal>

        <div className="relative mt-16 grid gap-6 md:block md:min-h-[760px]">
          <AnimatedReveal className="z-10 bg-white p-8 shadow-xl shadow-slate-950/8 ring-1 ring-[#ded8cc] md:absolute md:left-0 md:top-16 md:w-[24rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f8c8b]">
              What patients notice
            </p>
            <ul className="mt-7 space-y-5">
              {welcomeNotes.map((note) => (
                <li key={note} className="flex gap-4 text-base font-semibold leading-7 text-[#14364a]">
                  <span className="mt-2 h-px w-8 bg-[#b7cbc8]" />
                  {note}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#2f6682] pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f6682]"
            >
              Book Your Visit <ArrowIcon />
            </a>
          </AnimatedReveal>

          <AnimatedReveal delay={120} className="relative min-h-[440px] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-950/12 md:absolute md:left-[18%] md:top-0 md:h-[640px] md:w-[58%]">
            <Image
              src={clinicImages.operatory}
              alt="Bright dental treatment room prepared for a Fairfax patient"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </AnimatedReveal>

          <AnimatedReveal delay={180} className="relative min-h-[320px] overflow-hidden bg-slate-100 shadow-xl shadow-slate-950/10 md:absolute md:bottom-0 md:right-0 md:h-[420px] md:w-[38%]">
            <Image
              src={clinicImages.consultation}
              alt="Dentist reviewing treatment options with a patient"
              fill
              sizes="(min-width: 1024px) 26vw, 100vw"
              className="object-cover"
            />
          </AnimatedReveal>

          <div className="absolute bottom-16 left-[12%] z-20 hidden bg-[#14364a] px-8 py-7 text-white shadow-xl shadow-slate-950/15 md:block">
            <p className="text-4xl font-semibold">2,800+</p>
            <p className="mt-2 max-w-40 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
              Fairfax smiles cared for
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const primaryServices = services.slice(0, 6);

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="px-5 sm:px-8 lg:px-12">
          <AnimatedReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f8c8b]">
              Dental services
            </p>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-tight text-[#14364a] sm:text-6xl">
              Complete care, organized around real dental needs.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Prevention, cosmetic upgrades, urgent visits, and longer restorative plans all begin
              with the same thing: a careful exam and a clear conversation.
            </p>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={120} className="relative mt-16">
          <div className="relative min-h-[460px] overflow-hidden bg-slate-100 sm:min-h-[560px] lg:min-h-[620px]">
            <Image
              src={clinicImages.exterior}
              alt="Welcoming dental office exterior"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14364a]/90 via-[#14364a]/22 to-transparent" />
            <div className="absolute bottom-10 left-5 max-w-xl text-white sm:left-8 lg:left-20">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#dbe9d0]">
                Featured care
              </p>
              <h3 className="mt-4 font-serif text-5xl leading-tight">
                Dental implants, Invisalign, cosmetic dentistry.
              </h3>
            </div>
          </div>
          <div className="mx-5 -mt-10 grid bg-white shadow-2xl shadow-slate-950/14 ring-1 ring-[#ded8cc] sm:mx-8 md:grid-cols-2 lg:mx-20 xl:grid-cols-3">
            {primaryServices.slice(0, 3).map((service, index) => (
              <a
                key={service.title}
                href="#contact"
                className="border-b border-[#ded8cc] p-7 transition hover:bg-[#f8f5ef] xl:border-b-0 xl:border-r"
              >
                <span className="text-xs font-semibold text-[#5f8c8b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[#14364a]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.copy}</p>
              </a>
            ))}
          </div>
        </AnimatedReveal>

        <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="border-y border-[#ded8cc]">
            {primaryServices.slice(3).map((service, index) => (
              <AnimatedReveal key={service.title} delay={index * 50}>
                <a
                  href="#contact"
                  className="grid gap-4 border-b border-[#ded8cc] py-6 transition hover:bg-[#f8f5ef] md:grid-cols-[5rem_1fr_1.5fr_auto]"
                >
                  <span className="text-sm font-semibold text-[#5f8c8b]">
                    {String(index + 4).padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-semibold text-[#14364a]">{service.title}</span>
                  <span className="leading-7 text-slate-600">{service.copy}</span>
                  <span className="self-center text-[#2f6682]">
                    <ArrowIcon />
                  </span>
                </a>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedTreatmentsSection() {
  return (
    <section id="implants" className="bg-[#edf6f4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <AnimatedReveal className="relative min-h-[360px] overflow-hidden bg-slate-100 sm:min-h-[460px] lg:min-h-[620px]">
            <Image
              src={clinicImages.family}
              alt="Smiling family patient portrait"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={120} className="bg-white p-8 shadow-xl shadow-slate-950/8 ring-1 ring-[#c7dfda] lg:-ml-28 lg:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f8c8b]">
              Focused treatment
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#14364a]">
              Dentistry for the moments patients care about most.
            </h2>
            <div className="mt-8 space-y-6">
              {featuredTreatments.map((item) => (
                <div key={item.title} className="border-t border-[#ded8cc] pt-5">
                  <h3 className="text-xl font-semibold text-[#14364a]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}

export function DoctorSection() {
  return (
    <section id="doctor" className="relative overflow-hidden bg-[#14364a] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src={clinicImages.doctor}
          alt="Portrait of Dr. Elena Hart, DDS"
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14364a] via-[#14364a]/35 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <AnimatedReveal className="relative mb-10 min-h-[360px] overflow-hidden bg-slate-100 lg:hidden">
          <Image
            src={clinicImages.doctor}
            alt="Portrait of Dr. Elena Hart, DDS"
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </AnimatedReveal>
        <AnimatedReveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dbe9d0]">
            Meet the doctor
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Dr. Elena Hart brings calm, detailed dentistry to Fairfax.
          </h2>
          <p className="mt-7 text-lg leading-9 text-blue-50">
            Patients choose Dr. Hart for plain-spoken guidance, careful cosmetic planning, and
            restorative dentistry that protects long-term function.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {doctorCredentials.map((item) => (
              <div key={item} className="border border-white/20 p-5 text-sm font-semibold text-blue-50">
                {item}
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const [mainReview, ...smallReviews] = testimonials;

  return (
    <section id="reviews" className="bg-[#f4efe8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f8c8b]">
            Patient stories
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#14364a] sm:text-5xl">
            Trusted by Fairfax patients who value comfort and clarity.
          </h2>
        </AnimatedReveal>
        <AnimatedReveal delay={120} className="bg-white p-8 shadow-xl shadow-slate-950/8 ring-1 ring-[#ded8cc]">
          <p className="text-2xl leading-10 text-[#14364a]">&ldquo;{mainReview.quote}&rdquo;</p>
          <p className="mt-7 font-semibold text-[#2f6682]">{mainReview.name}</p>
          <p className="text-sm text-slate-500">{mainReview.detail}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {smallReviews.map((review) => (
              <div key={review.name} className="border-t border-[#ded8cc] pt-5">
                <p className="leading-7 text-slate-600">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-4 font-semibold text-[#14364a]">{review.name}</p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5f8c8b]">
            Why choose us
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#14364a] sm:text-5xl">
            The details that make dental care easier to say yes to.
          </h2>
        </AnimatedReveal>
        <div className="mt-14 grid gap-0 border-y border-[#ded8cc] lg:grid-cols-2">
          {whyChooseItems.map((item, index) => (
            <AnimatedReveal key={item} delay={index * 40}>
              <div className="grid grid-cols-[4rem_1fr] border-b border-[#ded8cc] py-6 lg:odd:border-r">
                <span className="text-sm font-semibold text-[#5f8c8b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xl font-semibold leading-8 text-[#14364a]">{item}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinancingSection() {
  return null;
}

export function FaqSection() {
  return null;
}

export function AppointmentSection() {
  return (
    <section id="contact" className="bg-[#14364a] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dbe9d0]">
            Request appointment
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Start with a dental visit that feels organized from the first call.
          </h2>
          <address className="mt-8 not-italic text-blue-50">
            <p className="font-semibold">{siteConfig.name}</p>
            <p className="mt-2">{siteConfig.fullAddress}</p>
            <a href={`tel:${siteConfig.phoneHref}`} className="mt-2 inline-block underline-offset-4 hover:underline">
              {siteConfig.phone}
            </a>
          </address>
        </AnimatedReveal>
        <AnimatedReveal delay={120}>
          <form className="bg-white p-7 text-slate-950 shadow-2xl shadow-slate-950/20" aria-label="Request an appointment">
            <div className="grid gap-4">
              <input name="name" placeholder="Name" className="border border-slate-200 px-4 py-3 outline-none focus:border-[#5f8c8b]" />
              <input name="phone" type="tel" placeholder="Phone" className="border border-slate-200 px-4 py-3 outline-none focus:border-[#5f8c8b]" />
              <input name="email" type="email" placeholder="Email" className="border border-slate-200 px-4 py-3 outline-none focus:border-[#5f8c8b]" />
              <textarea name="message" rows={4} placeholder="How can we help?" className="resize-none border border-slate-200 px-4 py-3 outline-none focus:border-[#5f8c8b]" />
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#2f6682] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Schedule Appointment <ArrowIcon />
            </button>
          </form>
        </AnimatedReveal>
      </div>
    </section>
  );
}
