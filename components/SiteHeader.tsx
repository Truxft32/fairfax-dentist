import { CalendarIcon } from "./ui";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/85 px-5 py-4 shadow-sm shadow-slate-950/5 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="flex size-11 items-center justify-center rounded-2xl bg-blue-900 text-lg font-semibold text-white shadow-lg shadow-blue-900/20">
            FD
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight text-slate-950">
              {siteConfig.name}
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-blue-700">
              Family & Cosmetic Dentistry
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-800"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:flex"
        >
          <CalendarIcon />
          Request Appointment
        </a>
      </nav>
    </header>
  );
}
