
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#173d25]/10 bg-[#faf9f5]/95 text-[#173d25] shadow-[0_4px_24px_rgba(23,61,37,0.04)] backdrop-blur-xl">
      {/* Main navigation bar */}
      <div className="mx-auto flex min-h-[82px] w-full max-w-[1800px] items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[94px] lg:px-10 2xl:px-16">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Rwanda Karisoke Concierge home"
          className="group flex min-w-0 items-center gap-3"
        >
          {/* Decorative brand mark */}
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b99a52]/50 bg-[#173d25] text-[#e4d2a0] transition-transform duration-300 group-hover:rotate-[-6deg] sm:h-12 sm:w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              fill="none"
              className="h-7 w-7 sm:h-8 sm:w-8"
              aria-hidden="true"
            >
              <path
                d="M7 29 17 10l6 11 4-7 7 15H7Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path
                d="M13 29c2-4 4-5 7-5s5 2 7 5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="28" cy="9" r="2" fill="currentColor" />
            </svg>
          </span>

          <span className="min-w-0">
            <span className="block font-serif text-base font-semibold leading-tight tracking-[-0.035em] sm:text-xl lg:text-[22px]">
              Rwanda Karisoke
              <span className="hidden sm:inline"> Concierge</span>
              <span className="sm:hidden"> </span>
            </span>

            <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.15em] text-[#907025] sm:text-[10px] sm:tracking-[0.2em]">
              Your journey. Locally arranged.
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex 2xl:gap-2"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative whitespace-nowrap rounded-md px-2.5 py-3 text-[13px] font-medium text-[#344b39] transition-colors duration-200 hover:bg-[#173d25]/5 hover:text-[#907025] 2xl:px-3 2xl:text-sm"
            >
              {link.label}
              <span className="absolute bottom-1.5 left-3 right-3 h-px origin-left scale-x-0 bg-[#b99a52] transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop call to action */}
        <div className="hidden shrink-0 xl:block">
          <Link
            href="/enquire"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#173d25] px-5 py-3 text-sm font-semibold text-[#faf9f5] transition-all duration-300 hover:bg-[#245d38] hover:shadow-lg hover:shadow-[#173d25]/15 2xl:px-6"
          >
            <span>Plan Your Trip</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#173d25]/15 transition-colors hover:bg-[#173d25]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99a52] xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="m6 6 12 12" />
                <path d="M18 6 6 18" />
              </>
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 12h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation overlay and menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[82px] z-50 overflow-y-auto bg-[#faf9f5] xl:hidden sm:top-[82px]">
          <div className="mx-auto flex min-h-full w-full max-w-xl flex-col px-5 pb-8 pt-5 sm:px-8">
            <div className="mb-5 flex items-center justify-between border-b border-[#173d25]/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#907025]">
                Discover Rwanda
              </span>

              <span className="font-serif text-sm italic text-[#697668]">
                Your journey begins here.
              </span>
            </div>

            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-[#173d25]/10 py-4 transition-colors hover:text-[#907025]"
                >
                  <span className="flex items-center gap-4">
                    <span className="w-5 text-[10px] tracking-wider text-[#b99a52]">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl">
                      {link.label}
                    </span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            <div className="mt-7 rounded-sm bg-[#173d25] p-5 text-[#faf9f5] sm:p-7">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e4d2a0]">
                Made for your journey
              </span>

              <h2 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
                Let Rwanda surprise you.
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                Tell us what inspires you, and let us help you plan a
                memorable experience in Rwanda.
              </p>

              <Link
                href="/enquire"
                onClick={closeMenu}
                className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm bg-[#e4d2a0] px-5 py-3 text-sm font-semibold text-[#173d25] transition-colors hover:bg-[#f0e3bd]"
              >
                Plan Your Trip
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            <p className="mt-6 text-center text-[10px] uppercase tracking-[0.18em] text-[#697668]">
              Rwanda · Nature · Culture · Discovery
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
