"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/destinations", label: "Explore Rwanda" },
  { href: "/about", label: "About us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-emerald-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <span className="block text-xl font-bold tracking-wide">
            KARISOKE
          </span>
          <span className="block text-xs uppercase tracking-widest text-amber-300">
            Concierge
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-white/30 px-4 py-2 md:hidden"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } w-full flex-col gap-2 md:flex md:w-auto md:flex-row md:gap-3`}
        >
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-amber-300 text-emerald-950"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}