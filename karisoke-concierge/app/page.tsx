"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const photos = [
  {
    title: "A closer connection to nature",
    label: "Gorillas",
    description:
      "Let a fascination with gorillas inspire a forest adventure as part of your Rwanda journey.",
    image: "/images/gorillas.jpeg",
    alt: "An adult gorilla with a young gorilla in green vegetation",
    category: "Primates",
  },
  {
    title: "Take the scenic route",
    label: "Elephants",
    description:
      "Make time for a safari experience, quiet observation, and the possibility of unforgettable wildlife encounters.",
    image: "/images/elephant.jpeg",
    alt: "An elephant walking along a dirt track",
    category: "Safari wildlife",
  },
  {
    title: "Let the wild set the pace",
    label: "Giraffes & zebras",
    description:
      "Bring your camera and your curiosity for a journey inspired by open landscapes and remarkable animals.",
    image: "/images/giraffes.jpeg",
    alt: "Giraffes and zebras standing in green grassland",
    category: "Safari wildlife",
  },
  {
    title: "Extraordinary moments await",
    label: "Lions",
    description:
      "Discover the appeal of a guided wildlife adventure, where every outing offers something different.",
    image: "/images/lions.jpeg",
    alt: "A group of lions resting together in grassland",
    category: "Safari wildlife",
  },
  {
    title: "Find wonder in the wild",
    label: "Buffalo",
    description:
      "Slow down and appreciate the smaller details, from animals moving together to birds sharing their surroundings.",
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [filter, setFilter] = useState("All wildlife");

  const selectedPhoto = photos[activePhoto];

  const visiblePhotos = photos.filter(
    (photo) => filter === "All wildlife" || photo.category === filter
  );

  // Respect visitors who prefer reduced motion.
  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    setIsPlaying(!preference.matches);

    const handleChange = () => {
      if (preference.matches) {
        setIsPlaying(false);
      }
    };

    preference.addEventListener("change", handleChange);

    return () => {
      preference.removeEventListener("change", handleChange);
    };
  }, []);

  // Advance the slideshow every six seconds.
  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActivePhoto((current) => (current + 1) % photos.length);
      }
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  function showSlide(index: number) {
    setIsPlaying(false);
    setActivePhoto((index + photos.length) % photos.length);
  }

  return (
    <main className="bg-white text-emerald-950">
      {/* HERO */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              Rwanda, at your own pace
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
              A little closer
              <br />
              to the{" "}
              <span className="text-amber-300">
                extraordinary.
              </span>
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
              <p className="text-sm leading-relaxed text-emerald-100">
                Personal planning · Rwanda only · Your kind of journey
              </p>
            </div>
          </div>

          {/* SLIDESHOW */}
          <section
            aria-label="Wildlife inspiration"
            aria-roledescription="carousel"
            className="min-w-0"
            onMouseEnter={() => setIsPlaying(false)}
            onFocusCapture={(event) => {
              // Pause when focus enters from outside the slideshow.
              // Moving between its controls should not override Play.
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPlaying(false);
              }
            }}
          >
            <div
              aria-live={isPlaying ? "off" : "polite"}
              aria-atomic="true"
            >
              <figure
                role="group"
                aria-roledescription="slide"
                aria-label={`${activePhoto + 1} of ${photos.length}`}
                className="overflow-hidden rounded-3xl border border-white/15 bg-emerald-900"
              >
                <div className="relative aspect-[4/5] sm:aspect-square">
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

                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 rounded-full bg-black/65 px-4 py-2 text-sm text-white"
                  >
                    {activePhoto + 1} / {photos.length}
                  </span>
                </div>

                <figcaption className="min-h-56 p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                    {selectedPhoto.label}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {selectedPhoto.title}
                  </h2>

                  <p className="mt-3 leading-relaxed text-emerald-100">
                    {selectedPhoto.description}
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Slideshow controls */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => showSlide(activePhoto - 1)}
                className={`${buttonStyle} border border-white/30 hover:bg-white/10`}
              >
                Previous
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying((current) => !current)}
                className={`${buttonStyle} bg-amber-300 text-emerald-950 hover:bg-amber-200`}
              >
                {isPlaying ? "Pause slideshow" : "Play slideshow"}
              </button>

              <button
                type="button"
                onClick={() => showSlide(activePhoto + 1)}
                className={`${buttonStyle} border border-white/30 hover:bg-white/10`}
              >
                Next
              </button>
            </div>

            {/* Photo thumbnails */}
            <div
              role="group"
              aria-label="Choose a slide"
              className="mt-4 grid grid-cols-5 gap-3"
            >
              {photos.map((photo, index) => (
                <button
                  key={photo.image}
                  type="button"
                  aria-label={`Show ${photo.label}`}
                  aria-pressed={activePhoto === index}
                  onClick={() => showSlide(index)}
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
          </section>
        </div>
      </section>

      {/* WILDLIFE GALLERY */}
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

        {/* Gallery filters */}
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
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
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

                <p className="mt-3 leading-relaxed text-slate-600">
                  {photo.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-labelledby="services-title"
        className="bg-emerald-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Leave the details with us
          </p>

          <h2
            id="services-title"
            className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl"
          >
            More exploring. Less organizing.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="flex flex-col rounded-2xl bg-white p-8"
              >
                <span className="text-sm font-semibold text-emerald-700">
                  {service.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-block self-start rounded font-semibold underline underline-offset-4 hover:text-emerald-700"
                >
                  Explore services
                  <span className="sr-only">
                    : {service.title}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        aria-labelledby="planning-title"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Simple, personal planning
          </p>

          <h2
            id="planning-title"
            className="mt-3 text-3xl font-semibold sm:text-4xl"
          >
            From your first idea to a thoughtful itinerary.
          </h2>
        </div>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Tell us what you love",
              description:
                "Share your interests, travel dates, group size, and preferred pace.",
            },
            {
              title: "Explore the possibilities",
              description:
                "Consider accommodation, transport, and experiences that suit your plans.",
            },
            {
              title: "Agree on the details",
              description:
                "Discuss availability, costs, and arrangements before confirming your bookings.",
            },
          ].map((step, index) => (
            <li
              key={step.title}
              className="border-t-2 border-emerald-200 pt-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-sm font-semibold text-amber-300">
                {index + 1}
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* FINAL INVITATION */}
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
            Discover how Karisoke Concierge can help you bring it
            together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className={`${buttonStyle} bg-amber-300 text-emerald-950 hover:bg-amber-200`}
            >
              How we plan your journey
            </Link>

            <Link
              href="/destinations"
              className={`${buttonStyle} border border-white/40 hover:bg-white/10`}
            >
              Discover destinations
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/15 bg-emerald-950 px-6 py-8 text-emerald-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm">
            Karisoke Concierge · Your personal connection to Rwanda
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-5 text-sm"
          >
            <Link href="/services" className="hover:text-amber-300">
              Services
            </Link>
            <Link href="/destinations" className="hover:text-amber-300">
              Explore Rwanda
            </Link>
            <Link href="/about" className="hover:text-amber-300">
              About us
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}