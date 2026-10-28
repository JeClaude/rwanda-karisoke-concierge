
"use client";

import Link from "next/link";

const phone = "250789162022";

function whatsapp(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Travel packages" },
  { href: "/about", label: "About us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#26382d] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        {/* Main content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-wide"
            >
              Karisoke Concierge
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
              Discover Rwanda your way. We help you arrange accommodation,
              transport, tours, and memorable local experiences.
            </p>

            <a
              href={whatsapp(
                "Hello Karisoke Concierge! I would like help planning my Rwanda trip."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#e5d3a7] px-5 py-3 text-sm font-semibold text-[#26382d] transition hover:bg-white"
            >
              Plan your trip <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e5d3a7]">
              Quick links
            </h2>

            <ul className="mt-4 space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-[#e5d3a7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rwanda highlights and contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e5d3a7]">
              Explore Rwanda
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              From Kigali's vibrant city life to Lake Kivu, the Volcanoes
              National Park, and Nyungwe Forest, your next adventure starts
              here.
            </p>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-white/90 transition hover:text-[#e5d3a7]"
            >
              Chat with us on WhatsApp ↗
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Karisoke Concierge. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                  "(prefers-reduced-motion: reduce)"
                ).matches
                  ? "instant"
                  : "smooth",
              })
            }
            className="self-start transition hover:text-[#e5d3a7] sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
