"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const photos = [
  {
    title: "A closer connection to nature",
    label: "Gorillas",
    image: "/images/gorillas.jpeg",
    alt: "An adult gorilla with a young gorilla in green vegetation",
    category: "Primates",
  },
  {
    title: "Take the scenic route",
    label: "Elephants",
    image: "/images/elephant.jpeg",
    alt: "An elephant walking along a dirt track",
    category: "Safari wildlife",
  },
  {
    title: "Let the wild set the pace",
    label: "Giraffes & zebras",
    image: "/images/giraffes.jpeg",
    alt: "Giraffes and zebras standing in green grassland",
    category: "Safari wildlife",
  },
  {
    title: "Make room for extraordinary moments",
    label: "Lions",
    image: "/images/lions.jpeg",
    alt: "A group of lions resting together in grassland",
    category: "Safari wildlife",
  },
  {
    title: "Find wonder in the everyday wild",
    label: "Buffalo",
    image: "/images/buffalo.jpeg",
    alt: "Buffalo surrounded by white birds in tall grass",
    category: "Safari wildlife",
  },
];

const filters = ["All wildlife", "Primates", "Safari wildlife"];

const services = [
  {
    number: "01",
    title: "Find your perfect stay",
    description:
      "Get help choosing accommodation around your itinerary, preferences, and budget.",
  },
  {
    number: "02",
    title: "Move with ease",
    description:
      "Plan airport pickups and transport between the places you want to explore.",
  },
  {
    number: "03",
    title: "Make the journey yours",
    description:
      "Bring your interests and ideas. We’ll help you shape a personal Rwanda itinerary.",
  },
];

const buttonStyle =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4";

export default function Home() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [filter, setFilter] = useState("All wildlife");

  const selectedPhoto = photos[activePhoto];

  const visiblePhotos = photos.filter(
    (photo) => filter === "All wildlife" || photo.category === filter
  );

  return (
    <main className="bg-white text-emerald-950">
      {/* Opening section */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              Rwanda, at your own pace
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              A little closer
              <br />
              to the <span className="text-amber-300">extraordinary.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-emerald-100">
              Discover Rwanda with a personal concierge to help arrange
              your stays, transport, and experiences. You bring the
              curiosity. We help with the details.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#experiences"
                className={`${buttonStyle} bg-amber-300 text-emerald-950 hover:bg-amber-200`}
              >
                Find your inspiration
              </a>

              <Link
                href="/services"
                className={`${buttonStyle} border border-white/40 hover:bg-white/10`}
              >
                Explore our services
              </Link>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-sm text-emerald-100">
                Personal planning · Rwanda only · Your kind of journey
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-emerald-900 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                key={selectedPhoto.image}
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                fill
                unoptimized
                loading="eager"
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              <figcaption
                aria-live="polite"
                className="absolute inset-x-0 bottom-0 p-7"
              >
                <p className="text-sm font-medium text-amber-300">
                  {selectedPhoto.label}
                </p>
                <p className="mt-2 max-w-sm text-2xl font-semibold">
                  {selectedPhoto.title}
                </p>
              </figcaption>
            </figure>

            <div
              role="group"
              aria-label="Choose the featured photograph"
              className="mt-4 grid grid-cols-5 gap-3"
            >
              {photos.map((photo, index) => (
                <button
                  key={photo.image}
                  type="button"
                  aria-label={`Show ${photo.label}`}
                  aria-pressed={activePhoto === index}
                  onClick={() => setActivePhoto(index)}
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${
                    activePhoto === index
                      ? "border-amber-300"
                      : "border-transparent opacity-65 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 1023px) 18vw, 9vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filterable gallery */}
      <section
        id="experiences"
        aria-labelledby="experiences-title"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Follow your curiosity
            </p>
            <h2
              id="experiences-title"
              className="mt-3 text-3xl font-semibold sm:text-4xl"
            >
              What would you love to discover?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Start with a little wildlife inspiration, then explore
              the places that could shape your Rwanda journey.
            </p>
          </div>

          <Link
            href="/destinations"
            className="rounded-lg py-3 font-semibold underline underline-offset-4 hover:text-emerald-700"
          >
            Explore Rwanda
          </Link>
        </div>

        <div
          role="group"
          aria-label="Filter wildlife photographs"
          className="my-8 flex flex-wrap gap-3"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors ${
                filter === item
                  ? "border-emerald-950 bg-emerald-950 text-white"
                  : "border-slate-300 bg-white text-emerald-950 hover:bg-emerald-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {visiblePhotos.length} photographs
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePhotos.map((photo) => (
            <article
              key={photo.image}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-emerald-700">
                  {photo.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  {photo.label}
                </h3>
                <p className="mt-2 text-slate-600">{photo.title}.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Concierge services */}
      <section className="bg-emerald-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Leave the details with us
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            More exploring. Less organizing.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl bg-white p-8"
              >
                <span className="text-sm font-semibold text-emerald-700">
                  {service.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-block rounded font-semibold underline underline-offset-4 hover:text-emerald-700"
                >
                  Explore services
                  <span className="sr-only">: {service.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next step */}
      <section className="bg-emerald-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Your journey starts with an idea
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
            Make Rwanda your next story.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-emerald-100">
            A nature escape, a relaxed stay, or a little of everything.
            Discover how Karisoke Concierge can help you bring it together.
          </p>
          <Link
            href="/about"
            className={`${buttonStyle} mt-8 bg-amber-300 text-emerald-950 hover:bg-amber-200`}
          >
            How we plan your journey
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/15 bg-emerald-950 px-6 py-6 text-center text-sm text-emerald-100">
        Karisoke Concierge · Your personal connection to Rwanda
      </footer>
    </main>
  );
}