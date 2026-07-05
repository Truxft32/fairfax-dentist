import {
  AboutSection,
  AppointmentSection,
  DoctorSection,
  FaqSection,
  FeaturedTreatmentsSection,
  FinancingSection,
  ReviewsSection,
  ServicesSection,
  TrustBar,
  WhyChooseSection,
} from "@/components/HomeSections";
import { HeroSection } from "@/components/HeroSection";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { benefits, dentistJsonLd, faqJsonLd, websiteJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-white">
        <HeroSection benefits={benefits} />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <FeaturedTreatmentsSection />
        <DoctorSection />
        <ReviewsSection />
        <WhyChooseSection />
        <FinancingSection />
        <FaqSection />
        <AppointmentSection />
      </main>
      <SiteFooter />
      <JsonLd data={[dentistJsonLd, websiteJsonLd, faqJsonLd]} />
    </>
  );
}
