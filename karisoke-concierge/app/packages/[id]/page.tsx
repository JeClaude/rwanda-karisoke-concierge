
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { journeys } from "../journeys";

const container =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14";

const eyebrow =
  "text-[10px] font-semibold uppercase tracking-[0.22em]";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3a33d]";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4.5 12h14m-5.5-5.5 5.5 5.5-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className={`${eyebrow} flex items-center gap-3 text-[#a8752b]`}>
      {children}
      <span className="h-px w-10 bg-[#bd914f]" />
    </p>
  );
}

export default function TourDetailsPage() {
  const params = useParams<{ id: string }>();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const journey = journeys.find((item) => item.id === id);

  if (!journey) {
    return (
      <main className="min-h-screen bg-[#f7f5ee] px-5 py-24 text-[#153b30]">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Karisoke Concierge</SectionLabel>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl">
            Journey not found.
          </h1>

          <p className="mt-5 leading-7 text-[#647067]">
            This journey may have moved or is no longer available.
          </p>

          <Link
            href="/packages"
            className={`mt-8 inline-flex min-h-12 items-center gap-3 bg-[#153b30] px-6 text-sm font-semibold text-white transition hover:bg-[#245443] ${focus}`}
          >
            <span aria-hidden="true">←</span>
            Explore all packages
          </Link>
        </div>
      </main>
    );
  }

  const gallery = journey.gallery?.length
    ? journey.gallery
    : [journey.image];

  const routeStops = journey.route
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);

  const enquiryUrl = `/enquire?tour=${encodeURIComponent(journey.id)}`;

  return (
    <main className="min-w-0 overflow-hidden bg-[#f7f5ee] pb-24 text-[#153b30] sm:pb-28">
      {/* BREADCRUMB */}
      <section className="pt-5 sm:pt-8">
        <div className={container}>
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[#647067]"
          >
            <Link
              href="/"
              className={`transition hover:text-[#a8752b] ${focus}`}
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/packages"
              className={`transition hover:text-[#a8752b] ${focus}`}
            >
              Packages
            </Link>

            <span>/</span>

            <span aria-current="page" className="text-[#153b30]">
              {journey.title}
            </span>
          </nav>

          {/* PHOTO GALLERY */}
          <div className="grid h-[300px] grid-cols-2 gap-2 overflow-hidden sm:h-[430px] lg:h-[540px] lg:grid-cols-4 lg:grid-rows-2">
            <div className="relative col-span-2 row-span-2 min-h-0 overflow-hidden bg-[#dce2d6]">
              <Image
                src={gallery[0]}
                alt={journey.alt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              <span className="absolute bottom-5 left-5 bg-[#e9b85f] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#153b30] sm:bottom-7 sm:left-7">
                {journey.category}
              </span>
            </div>

            {gallery.slice(1, 5).map((src, index) => (
              <div
                key={`${src}-${index}`}
                className={`relative min-h-0 overflow-hidden bg-[#dce2d6] ${
                  index === 3 ? "hidden lg:block" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${journey.title}, view ${index + 2}`}
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TITLE AND JOURNEY SUMMARY */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div
          className={`${container} grid gap-10 lg:grid-cols-[1fr_350px] lg:gap-16`}
        >
          <div>
            <SectionLabel>
              Discover Rwanda · Karisoke Concierge
            </SectionLabel>

            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {journey.title}
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#647067] sm:text-base sm:leading-8">
              {journey.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#153b30]/15 py-5 sm:grid-cols-3">
              <div>
                <p className="font-serif text-2xl sm:text-3xl">
                  {journey.days}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#647067]">
                  Days
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl">
                  {journey.nights}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#647067]">
                  Nights
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-serif text-xl sm:text-2xl">
                  {routeStops.length} destinations
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#647067]">
                  Suggested route
                </p>
              </div>
            </div>

            <div className="mt-7">
              <p className={`${eyebrow} text-[#a8752b]`}>
                Your route through Rwanda
              </p>

              <p className="mt-3 text-sm leading-7 text-[#647067]">
                {journey.route}
              </p>
            </div>
          </div>

          {/* EXPERIENCE CARD */}
          <aside className="h-fit border border-[#e4e0d6] bg-white shadow-sm">
            <div className="h-1 bg-[#d3a33d]" />

            <div className="p-6 sm:p-8">
              <SectionLabel>Your journey</SectionLabel>

              <h2 className="mt-4 font-serif text-2xl sm:text-3xl">
                Make it yours.
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#647067]">
                Discover Rwanda at your own pace. Tell us when you would
                like to travel, who is joining you, and the experiences
                that interest you. We&apos;ll help you shape a journey
                around your preferences.
              </p>

              <div className="mt-6 border-y border-[#153b30]/10 py-5">
                <p className={`${eyebrow} text-[#a8752b]`}>
                  Your experience
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#647067]">
                  <li className="flex gap-3">
                    <span className="text-[#a8752b]">01.</span>
                    A personalised travel plan
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#a8752b]">02.</span>
                    Activities matched to your interests
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#a8752b]">03.</span>
                    Accommodation and transport planning
                  </li>
                </ul>
              </div>

              <Link
                href={enquiryUrl}
                className={`mt-6 flex min-h-12 items-center justify-center gap-3 bg-[#e9b85f] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#153b30] transition hover:bg-[#f2cc83] ${focus}`}
              >
                Plan your journey
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <p className="mt-4 text-center text-xs leading-6 text-[#647067]">
                Tell us what you have in mind. We&apos;ll help with
                the next steps.
              </p>

              <Link
                href="/packages"
                className={`mt-4 flex min-h-10 items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#153b30] transition hover:text-[#a8752b] ${focus}`}
              >
                Browse all packages
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* JOURNEY HIGHLIGHTS */}
      <section className="bg-[#153b30] py-16 text-[#fffdf7] sm:py-20 lg:py-24">
        <div
          className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
        >
          <div>
            <SectionLabel>Journey highlights</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              The moments
              <br />
              you&apos;ll remember.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Discover the landscapes, wildlife, and local experiences
              that make this Rwanda journey special.
            </p>
          </div>

          <ul className="grid gap-x-8 sm:grid-cols-2">
            {journey.highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="flex gap-4 border-t border-white/20 py-5"
              >
                <span className="font-serif text-2xl text-[#e9b85f]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm leading-7 text-white/85">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DAY-BY-DAY ITINERARY */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className={container}>
          <div className="max-w-3xl">
            <SectionLabel>Day by day</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Your itinerary.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#647067] sm:text-base sm:leading-8">
              Explore the proposed programme for your stay. We&apos;ll
              discuss your preferred activities, accommodation, transfers,
              and timings while planning your trip.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-14">
            <div className="relative">
              <div className="absolute bottom-8 left-5 top-8 w-px bg-[#153b30]/20" />

              <div className="space-y-4">
                {journey.itinerary.map((step, index) => (
                  <article
                    key={`${journey.id}-${step.day}`}
                    className="relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-[44px_1fr] sm:gap-5"
                  >
                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d3a33d] bg-[#f7f5ee] font-serif text-sm sm:h-11 sm:w-11">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="border border-[#e4e0d6] bg-white p-5 transition hover:border-[#d3a33d] sm:p-7">
                      <p className={`${eyebrow} text-[#a8752b]`}>
                        {step.day}
                      </p>

                      <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#647067]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* ROUTE AND ACCOMMODATION */}
            <aside className="lg:sticky lg:top-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#dce2d6]">
                <Image
                  src={gallery[Math.min(2, gallery.length - 1)]}
                  alt={`Scenery from ${journey.title}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="border border-t-0 border-[#e4e0d6] bg-white p-6 sm:p-8">
                <SectionLabel>Explore the route</SectionLabel>

                <h3 className="mt-4 font-serif text-2xl sm:text-3xl">
                  Across Rwanda.
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#647067]">
                  {journey.route}
                </p>

                <div className="mt-6 border-t border-[#153b30]/10 pt-5">
                  <p className={`${eyebrow} text-[#a8752b]`}>
                    Accommodation
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#647067]">
                    {journey.accommodation}
                  </p>
                </div>

                <Link
                  href={enquiryUrl}
                  className={`mt-6 inline-flex items-center gap-2 border-b border-[#bd914f] pb-1 text-xs font-semibold uppercase tracking-[0.12em] transition hover:text-[#a8752b] ${focus}`}
                >
                  Personalise this journey
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TRAVEL PLANNING */}
      <section className="bg-[#efede4] py-16 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-2 md:gap-16`}>
          <div>
            <SectionLabel>Travel with confidence</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              The details matter.
              <br />
              We help you plan.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#647067]">
              Every traveller has different priorities. Share your
              preferences with us, and we&apos;ll help you work through
              the arrangements for your Rwanda experience.
            </p>

            <Link
              href={enquiryUrl}
              className={`mt-7 inline-flex min-h-12 items-center gap-3 bg-[#153b30] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#245443] ${focus}`}
            >
              Tell us your plans
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-[#e4e0d6] bg-white p-5 sm:p-6">
              <h3 className="font-serif text-2xl">
                Your journey
              </h3>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-[#647067]">
                <li>Accommodation preferences</li>
                <li>Transport and transfers</li>
                <li>Activities and experiences</li>
                <li>Itinerary and travel timing</li>
              </ul>
            </div>

            <div className="border border-[#e4e0d6] bg-white p-5 sm:p-6">
              <h3 className="font-serif text-2xl">
                Your preferences
              </h3>

              <ul className="mt-5 space-y-4 text-sm leading-6 text-[#647067]">
                <li>Travel dates and group size</li>
                <li>Preferred accommodation</li>
                <li>Interests and optional activities</li>
                <li>Dietary and special requests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-[#082c22]">
        <Image
          src={gallery[0]}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082c22]/95 via-[#082c22]/90 to-[#082c22]/75" />

        <div
          className={`${container} relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-24`}
        >
          <div className="max-w-3xl">
            <SectionLabel>Start your journey</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] text-[#fffdf7] sm:text-5xl lg:text-6xl">
              Let&apos;s make this journey yours.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Tell us when you want to travel and what you&apos;d love
              to experience. We&apos;ll help you take the next step
              towards discovering Rwanda.
            </p>
          </div>

          <Link
            href={enquiryUrl}
            className={`inline-flex min-h-14 w-fit items-center justify-center gap-4 bg-[#e9b85f] px-7 py-4 text-sm font-semibold text-[#153b30] transition hover:bg-[#f2cc83] sm:px-9 ${focus}`}
          >
            Plan your trip
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* FIXED ENQUIRY BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#153b30] text-white shadow-[0_-8px_30px_rgba(0,0,0,0.14)]">
        <div
          className={`${container} flex min-h-[76px] items-center justify-between gap-4 py-3`}
        >
          <div className="flex min-w-0 flex-wrap items-center gap-x-6 gap-y-1 sm:gap-x-10">
            <div>
              <p className="font-serif text-xl">
                {journey.days}
              </p>
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/65">
                Days
              </p>
            </div>

            <div>
              <p className="font-serif text-xl">
                {routeStops.length}
              </p>
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/65">
                Stops
              </p>
            </div>

            <div className="hidden sm:block">
              <p className="font-serif text-lg">
                {journey.title}
              </p>
              <p className="text-[10px] text-white/65">
                Personalise your itinerary
              </p>
            </div>
          </div>

          <Link
            href={enquiryUrl}
            className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#e9b85f] px-5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#153b30] transition hover:bg-[#f2cc83] sm:px-7 sm:text-xs ${focus}`}
          >
            Plan your trip
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
