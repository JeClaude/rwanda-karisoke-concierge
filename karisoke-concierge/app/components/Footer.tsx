"use client";

import Link from "next/link";

const phone = "250789162022";
const displayPhone = "+250 789 162 022";

function whatsapp(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/destinations", label: "Explore Rwanda" },
  { href: "/#packages", label: "Trip ideas & packages" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About Karisoke" },
];

const serviceLinks = [
  "Hotels & accommodation",
  "Airport transfers",
  "Private car & driver",
  "Tours & wildlife experiences",
  "Personalized itineraries",
  "Dining & local experiences",
];

const destinationLinks = [
  "Kigali",
  "Musanze",
  "Lake Kivu",
  "Nyungwe",
];

const linkStyle =
  "inline-flex min-h-11 items-center rounded py-2 text-sm leading-relaxed text-white/75 transition-colors hover:text-[#e4bc64] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4bc64]";

const buttonStyle =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4";

export default function Footer() {
  function backToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <footer className="text-white">
      {/* CONTACT BANNER */}
      <section
        id="contact"
        aria-labelledby="footer-contact-title"
        className="scroll-mt-28 bg-[#d3a33d] px-4 py-12 text-[#173d25] sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Let’s plan something memorable
            </p>

            <h2
              id="footer-contact-title"
              className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl"
            >
              Your Rwanda journey starts with a conversation.
            </h2>

            <p className="mt-4 max-w-xl leading-relaxed">
              Tell us your travel dates, interests, and group size.
              We’ll help you explore the possibilities.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <a
              href={whatsapp(
                "Hello Karisoke Concierge! I would like help planning my Rwanda trip.\n\nTravel dates:\nNumber of travelers:\nPlaces or activities I am interested in:\nServices needed:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyle} bg-[#173d25] text-white hover:bg-[#245d38]`}
            >
              Plan my trip on WhatsApp
            </a>

            <a
              href={`tel:+${phone}`}
              className={`${buttonStyle} border border-[#173d25]/35 hover:bg-white/20`}
            >
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="bg-[#173d25] px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
            {/* BRAND & CONTACT */}
            <div className="min-w-0">
              <Link
                href="/"
                className="inline-block rounded font-serif text-2xl font-bold leading-tight focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Rwanda Karisoke
                <br />
                Concierge
              </Link>

              <p className="mt-3 text-xs font-semibold uppercase leading-relaxed tracking-widest text-[#e4bc64]">
                Your journey. Locally arranged.
              </p>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
                Personal travel planning for your visit to Rwanda.
                Accommodation, transport, and experiences coordinated
                around you.
              </p>

              <address className="mt-6 not-italic">
                <a
                  href={`tel:+${phone}`}
                  className={linkStyle}
                >
                  {displayPhone}
                </a>

                <a
                  href={whatsapp(
                    "Hello Karisoke Concierge! I have a question about visiting Rwanda."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkStyle} flex`}
                >
                  Ask us a question on WhatsApp
                </a>
              </address>
            </div>

            {/* WEBSITE LINKS */}
            <nav aria-labelledby="footer-explore-title">
              <h2
                id="footer-explore-title"
                className="text-sm font-semibold uppercase tracking-widest text-[#e4bc64]"
              >
                Explore
              </h2>

              <ul className="mt-4 space-y-1">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkStyle}>
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <a href="#contact" className={linkStyle}>
                    Contact & trip planning
                  </a>
                </li>
              </ul>
            </nav>

            {/* SERVICE ENQUIRIES */}
            <nav aria-labelledby="footer-services-title">
              <h2
                id="footer-services-title"
                className="text-sm font-semibold uppercase tracking-widest text-[#e4bc64]"
              >
                Enquire about a service
              </h2>

              <p className="mt-4 text-xs leading-relaxed text-white/60">
                Opens a conversation on WhatsApp.
              </p>

              <ul className="mt-2 space-y-1">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <a
                      href={whatsapp(
                        `Hello Karisoke Concierge! I would like to enquire about ${service.toLowerCase()}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkStyle}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* DESTINATION ENQUIRIES */}
            <nav aria-labelledby="footer-destinations-title">
              <h2
                id="footer-destinations-title"
                className="text-sm font-semibold uppercase tracking-widest text-[#e4bc64]"
              >
                Where would you go?
              </h2>

              <p className="mt-4 text-xs leading-relaxed text-white/60">
                Ask about a destination on WhatsApp.
              </p>

              <ul className="mt-2 space-y-1">
                {destinationLinks.map((destination) => (
                  <li key={destination}>
                    <a
                      href={whatsapp(
                        `Hello! I would like to visit ${destination}. Could you help me include it in my Rwanda itinerary?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkStyle}
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                href="/destinations"
                className="mt-4 inline-flex min-h-11 items-center rounded text-sm font-semibold text-[#e4bc64] underline underline-offset-4 hover:text-white"
              >
                Browse all destinations
              </Link>
            </nav>
          </div>

          {/* USEFUL NEXT STEPS */}
          <div className="mt-12 grid gap-5 border-y border-white/15 py-8 md:grid-cols-3">
            <Link
              href="/#packages"
              className="group min-w-0 rounded-lg border border-white/15 p-5 transition-colors hover:bg-white/5"
            >
              <h3 className="font-serif text-xl font-bold group-hover:text-[#e4bc64]">
                Still finding inspiration?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Browse trip ideas you can shape around your interests.
              </p>
            </Link>

            <Link
              href="/#how-it-works"
              className="group min-w-0 rounded-lg border border-white/15 p-5 transition-colors hover:bg-white/5"
            >
              <h3 className="font-serif text-xl font-bold group-hover:text-[#e4bc64]">
                New to concierge travel?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                See how we help turn your ideas into travel arrangements.
              </p>
            </Link>

            <a
              href={whatsapp(
                "Hello Karisoke Concierge! I am not sure where to start with my Rwanda trip. Could you help me explore some options?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-0 rounded-lg border border-white/15 p-5 transition-colors hover:bg-white/5"
            >
              <h3 className="font-serif text-xl font-bold group-hover:text-[#e4bc64]">
                Prefer to talk it through?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Start a WhatsApp conversation about your plans.
              </p>
            </a>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-white/60">
              © Rwanda Karisoke Concierge. All rights reserved.
            </p>

            <button
              type="button"
              onClick={backToTop}
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg border border-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 sm:self-auto"
            >
              Back to top
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 15 6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}