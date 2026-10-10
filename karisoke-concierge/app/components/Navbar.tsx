"use client";

import Link from "next/link";
import { useState } from "react";

const phone = "250789162022";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/#packages", label: "Packages" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#173d25]/10 bg-[#faf9f5] text-[#173d25]"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >
      <div className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 xl:px-8 2xl:px-12">
        {/* BRAND */}
        <Link
          href="/"
          onClick={closeMenu}
          className="min-w-0"
        >
          <span className="block max-w-64 font-serif text-lg font-bold leading-tight sm:max-w-none sm:text-xl">
            Rwanda Karisoke Concierge
          </span>

          <span className="mt-1 block max-w-60 text-xs font-semibold uppercase leading-relaxed tracking-wider text-[#907025] sm:max-w-none">
            Your journey. Locally arranged.
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:flex 2xl:gap-3"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded px-3 py-3 text-sm font-medium transition-colors hover:bg-[#173d25]/5 hover:text-[#907025]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CONTACT BUTTONS */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a
            href={`tel:+${phone}`}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded border border-[#173d25]/25 px-4 py-3 text-sm font-semibold hover:bg-[#173d25]/5"
          >
            Call us
          </a>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded bg-[#173d25] px-4 py-3 text-sm font-semibold text-white hover:bg-[#245d38]"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE HAMBURGER / CLOSE BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#173d25]/20 hover:bg-[#173d25]/5 xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6L18 18" />
                <path d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M4 6H20" />
                <path d="M4 12H20" />
                <path d="M4 18H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        id="mobile-navigation"
        className={`${
          open ? "block" : "hidden"
        } absolute inset-x-0 top-full max-h-[70dvh] overflow-y-auto border-t border-[#173d25]/10 bg-[#faf9f5] shadow-lg xl:hidden`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium hover:bg-[#173d25]/5"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#173d25]/10 pt-5">
            <a
              href={`tel:+${phone}`}
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-lg border border-[#173d25]/25 px-4 py-3 text-sm font-semibold"
            >
              Call us
            </a>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-lg bg-[#173d25] px-4 py-3 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}