
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, journeys } from "./journeys";

const WHATSAPP_NUMBER = "250789162022";

export default function PackagesContent() {
  const [activeCategory, setActiveCategory] = useState("All journeys");

  const availableCategories = useMemo(
    () => [
      "All journeys",
      ...categories.filter((category) => category !== "All journeys"),
    ],
    [],
  );

  const filteredJourneys = useMemo(() => {
    if (activeCategory === "All journeys") {
      return journeys;
    }

    return journeys.filter(
      (journey) => journey.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredJourney = journeys[0];

  const whatsappMessage = encodeURIComponent(
    "Hello Karisoke Concierge! I would like help planning a personalised Rwanda journey.",
  );

  return (
    <main className="min-h-screen bg-[#f1eee6] text-[#173d25]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#173d25] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#102b1b]/95 via-[#173d25]/80 to-[#173d25]/30" />

        {featuredJourney && (
          <div className="absolute inset-0">
            <Image
              src={featuredJourney.image}
              alt={featuredJourney.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
          </div>
        )}

        <div className="relative mx-auto flex min-h-[480px] w-full max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:min-h-[560px] lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e4bc64] sm:text-xs">
            Discover Rwanda with Karisoke
          </p>

          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
            Journeys shaped around you.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            From unforgettable wildlife encounters to peaceful lakeside
            escapes, discover the experiences that make Rwanda extraordinary.
            We help you bring them together into a journey of your own.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#journeys"
              className="inline-flex min-h-12 items-center justify-center bg-[#e4bc64] px-6 py-3 text-sm font-semibold text-[#173d25] transition hover:bg-[#f0d89d]"
            >
              Explore journeys <span className="ml-3">↓</span>
            </Link>

            <Link
              href="/enquire"
              className="inline-flex min-h-12 items-center justify-center border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Help me plan my trip <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-end lg:px-12 lg:py-20">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#856326]">
            More than a destination
          </p>

          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Rwanda is ready to surprise you.
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-sm leading-7 text-[#61675e]">
            Wander through ancient forests, meet remarkable wildlife, discover
            the warmth of Rwandan culture, or slow down beside beautiful lakes.
            Explore our suggested journeys and tell us what you would love to
            experience. We will help you shape the details around your interests
            and travel plans.
          </p>
        </div>
      </section>

      {/* Journey collection */}
      <section
        id="journeys"
        className="scroll-mt-8 border-t border-[#173d25]/10 bg-[#faf9f5] py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#856326]">
                Find your experience
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Explore our journeys
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#61675e]">
                Every traveller is different. Browse these ideas and choose
                the experiences that speak to you.
              </p>
            </div>

            <Link
              href="/enquire"
              className="inline-flex min-h-11 items-center justify-center self-start border border-[#344532] px-5 py-3 text-sm font-semibold text-[#344532] transition hover:bg-[#344532] hover:text-white sm:self-auto"
            >
              Plan a personal journey ↗
            </Link>
          </div>

          {/* Category filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {availableCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`min-h-10 border px-4 py-2 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "border-[#173d25] bg-[#173d25] text-white"
                    : "border-[#173d25]/20 bg-transparent text-[#344532] hover:border-[#173d25]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Journey cards */}
          {filteredJourneys.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredJourneys.map((journey) => (
                <article
                  key={journey.id}
                  className="group flex h-full flex-col overflow-hidden border border-[#173d25]/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    href={`/packages/${journey.id}`}
                    className="relative block aspect-[4/3] overflow-hidden bg-[#e5e3d9]"
                    aria-label={`Discover ${journey.title}`}
                  >
                    <Image
                      src={journey.image}
                      alt={journey.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 bg-[#f1eee6] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#173d25]">
                      {journey.category}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#856326]">
                      {journey.days} days · {journey.nights} nights
                    </p>

                    <h3 className="mt-3 font-serif text-2xl leading-snug">
                      {journey.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#61675e]">
                      {journey.description}
                    </p>

                    {journey.route && (
                      <p className="mt-4 border-t border-[#173d25]/10 pt-4 text-xs leading-6 text-[#61675e]">
                        <span className="font-semibold text-[#344532]">
                          Journey:
                        </span>{" "}
                        {journey.route}
                      </p>
                    )}

                    <div className="mt-auto pt-6">
                      <Link
                        href={`/packages/${journey.id}`}
                        className="inline-flex min-h-10 items-center text-xs font-bold uppercase tracking-widest text-[#344532] underline decoration-[#c7a45b] decoration-2 underline-offset-4 transition hover:text-[#856326]"
                      >
                        Discover journey <span className="ml-2">↗</span>
                      </Link>

                      <Link
                        href={`/enquire?tour=${encodeURIComponent(journey.id)}`}
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center bg-[#344532] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#52644d]"
                      >
                        Plan this journey <span className="ml-3">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-[#173d25]/10 bg-white px-6 py-12 text-center">
              <h3 className="font-serif text-2xl">
                More journeys are on the way.
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#61675e]">
                Tell us what you have in mind, and we can help you explore
                experiences across Rwanda.
              </p>

              <Link
                href="/enquire"
                className="mt-6 inline-flex min-h-11 items-center justify-center bg-[#344532] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#52644d]"
              >
                Tell us what you love ↗
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Bespoke trip section */}
      <section className="bg-[#e7e4d9]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#856326]">
              Your story, your way
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Haven&apos;t found exactly what you&apos;re looking for?
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-[#61675e]">
              These journeys are starting points, not fixed plans. Tell us
              about your interests, the people travelling with you, and the
              moments you hope to experience. We will help you explore a
              personalised Rwanda itinerary.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/enquire"
                className="inline-flex min-h-12 items-center justify-center bg-[#173d25] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b5136]"
              >
                Create my journey ↗
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-[#173d25]/30 px-6 py-3 text-sm font-semibold text-[#173d25] transition hover:bg-white/50"
              >
                Chat with us on WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#173d25] px-5 py-16 text-center text-white sm:px-8 lg:py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e4bc64]">
          Your Rwanda story starts here
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          Tell us what you dream of discovering.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75">
          Share a few details with us, and let&apos;s begin planning a Rwanda
          experience that feels uniquely yours.
        </p>

        <Link
          href="/enquire"
          className="mt-8 inline-flex min-h-12 items-center justify-center bg-[#e4bc64] px-7 py-3 text-sm font-semibold text-[#173d25] transition hover:bg-[#f0d89d]"
        >
          Help me plan my trip ↗
        </Link>
      </section>
    </main>
  );
}
