"use client";

import { useState } from "react";
import { CalendarIcon } from "./ui";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 px-5 py-4 shadow-sm shadow-slate-950/5 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Primary">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-lg font-semibold text-white shadow-lg shadow-blue-900/20">
            FD
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-semibold tracking-tight text-slate-950">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-blue-700 sm:block">
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

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-blue-900 transition hover:border-blue-200 hover:bg-blue-50"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            <CalendarIcon />
            Schedule Appointment
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto max-w-7xl overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[calc(100vh-5rem)] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-2 border-t border-slate-100 pb-5 pt-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="grid gap-3 py-3 sm:hidden">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-blue-900"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="rounded-full bg-blue-900 px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
