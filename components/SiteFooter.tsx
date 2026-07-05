import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 px-5 py-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-lg font-semibold text-blue-900">
              FD
            </span>
            <div>
              <p className="font-semibold">{siteConfig.name}</p>
              <p className="text-sm text-slate-400">Dentist in Fairfax, VA</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            Premium family, cosmetic, and restorative dentistry designed around comfort,
            clarity, and long-term oral health.
          </p>
        </div>
        <div>
          <p className="font-semibold">Visit</p>
          <address className="mt-4 text-sm leading-7 text-slate-300 not-italic">
            {siteConfig.addressLine1}
            <br />
            {siteConfig.cityStateZip}
          </address>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
            <br />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold">Hours</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Mon-Thu: 8:00 AM - 5:00 PM
            <br />
            Fri: 8:00 AM - 2:00 PM
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{"\u00A9"} 2026 {siteConfig.name}. All rights reserved.</p>
        <p>Emergency visits available for patients in Fairfax County.</p>
      </div>
    </footer>
  );
}
