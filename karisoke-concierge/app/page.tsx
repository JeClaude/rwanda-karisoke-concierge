"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const phone = "250789162022";

function whatsapp(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const slides = [
  {
    image: "/images/gorillas.jpeg",
    alt: "An adult gorilla and a young gorilla in green vegetation",
    eyebrow: "Welcome to the land of a thousand hills",
    title: "Discover Rwanda. We organize the details.",
    description:
      "Hotels, transport, tours, and personal travel assistance. Build a journey around what matters to you.",
    position: "center 55%",
  },
  {
    image: "/images/elephant.jpeg",
    alt: "An elephant walking along a dirt track",
    eyebrow: "Make room for adventure",
    title: "Your next story starts in the wild.",
    description:
      "Let wildlife inspire your itinerary. We help coordinate your transport, accommodation, and experiences.",
    position: "center 55%",
  },
  {
    image: "/images/giraffes.jpeg",
    alt: "Giraffes and zebras in green grassland",
    eyebrow: "Travel at your own pace",
    title: "More discovery. Less organizing.",
    description:
      "From your first arrival to your final day, bring your ideas and let us help bring the details together.",
    position: "center 60%",
  },
  {
    image: "/images/lions.jpeg",
    alt: "A group of lions resting in grassland",
    eyebrow: "Follow your curiosity",
    title: "Leave space for extraordinary moments.",
    description:
      "Create a personal Rwanda journey with time for nature, exploration, and a little relaxation.",
    position: "center 65%",
  },
  {
    image: "/images/buffalo.jpeg",
    alt: "Buffalo surrounded by white birds",
    eyebrow: "A personal connection to Rwanda",
    title: "Your journey. Thoughtfully arranged.",
    description:
      "One local contact to help you explore your options and coordinate the travel services you need.",
    position: "center 55%",
  },
];

const services = [
  {
    number: "01",
    title: "Hotel & accommodation booking",
    description:
      "Find a stay that fits your itinerary, preferences, and budget.",
  },
  {
    number: "02",
    title: "Airport pickup & drop-off",
    description:
      "Plan your arrival and departure with pre-arranged airport transport.",
  },
  {
    number: "03",
    title: "Private car & driver",
    description:
      "Coordinate transport around your schedule and the places you want to visit.",
  },
  {
    number: "04",
    title: "Tours & wildlife experiences",
    description:
      "Discuss guided activities and wildlife experiences that fit your interests.",
  },
  {
    number: "05",
    title: "Personalized itineraries",
    description:
      "Bring your travel ideas together into a practical, personal plan.",
  },
  {
    number: "06",
    title: "Dining & local experiences",
    description:
      "Include time for food, culture, and experiences beyond your accommodation.",
  },
];

const destinations = [
  {
    name: "Kigali",
    theme: "City & culture",
    description:
      "Make time for city exploration, art, dining, and local experiences.",
  },
  {
    name: "Musanze",
    theme: "Mountains & adventure",
    description:
      "Consider a mountain-focused stay and discuss the activities you want to include.",
  },
  {
    name: "Lake Kivu",
    theme: "Lakeside relaxation",
    description:
      "Slow the pace with a lakeside stay and time to unwind.",
  },
  {
    name: "Nyungwe",
    theme: "Forest & nature",
    description:
      "Shape a nature-focused escape around forest scenery and guided activities.",
  },
];

const packages = [
  {
    duration: "3-day idea",
    title: "A taste of Kigali",
    description:
      "A relaxed introduction to the city with room for your own interests.",
    details: [
      "Airport transfer coordination",
      "Accommodation planning",
      "City and dining experiences",
    ],
  },
  {
    duration: "5-day idea",
    title: "Nature & discovery",
    description:
      "A starting point for travelers who want nature at the heart of their trip.",
    details: [
      "A personalized route",
      "Transport and accommodation",
      "Activities discussed with you",
    ],
  },
  {
    duration: "7-day idea",
    title: "Rwanda at your pace",
    description:
      "Combine exploration with slower days, shaped around your travel style.",
    details: [
      "A flexible multi-stop itinerary",
      "Stays matched to your preferences",
      "A mix of activities and downtime",
    ],
  },
];

const steps = [
  {
    title: "Tell us what you need",
    description:
      "Share your dates, group size, interests, and the support you want—from an airport pickup to a complete journey.",
  },
  {
    title: "We prepare your Rwanda travel plan",
    description:
      "We bring together accommodation, transport, experiences, and practical details for you to review.",
  },
  {
    title: "We confirm the arrangements",
    description:
      "Discuss availability, costs, and booking terms before approving the arrangements for your visit.",
  },
];

const button =
  "inline-flex min-h-12 items-center justify-center rounded px-5 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4";

const eyebrow =
  "text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#907025]";

const sectionHeading =
  "mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];

  // Automatically change slides every three seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % slides.length);
      }
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  function selectSlide(index: number) {
    setActiveSlide((index + slides.length) % slides.length);
  }

  return (
    <main className="min-w-0 bg-[#faf9f5] text-[#173d25]">
      {/* HERO SLIDESHOW */}
      <section
        aria-label="Discover Rwanda"
        aria-roledescription="carousel"
        className="relative isolate overflow-hidden bg-[#173d25] text-white"
      >
        <Image
          key={slide.image}
          src={slide.image}
          alt=""
          fill
          unoptimized
          loading="eager"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: slide.position }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,42,23,.94) 0%, rgba(12,42,23,.76) 48%, rgba(12,42,23,.24) 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-14 sm:min-h-[620px] sm:px-6 sm:py-16 lg:min-h-[730px] lg:px-8 lg:py-20">
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeSlide + 1} of ${slides.length}`}
            aria-live="off"
            className="min-w-0 max-w-3xl"
          >
            <span className="sr-only">{slide.alt}</span>

            <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#e4bc64]">
              {slide.eyebrow}
            </p>

            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.25rem,6vw,6rem)] font-bold leading-[1.08] tracking-tight [overflow-wrap:anywhere]">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
              {slide.description}
            </p>
          </div>

          {/* HERO BUTTONS */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/packages"
              className={`${button} bg-[#d3a33d] text-[#173d25] hover:bg-[#e4b754]`}
            >
              Plan your Rwanda experience
            </a>

            <a
              href={whatsapp(
                "Hello Karisoke Concierge! I would like help planning a visit to Rwanda."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button} border border-white/60 bg-black/10 text-white hover:bg-white/15`}
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* SLIDESHOW ARROWS AND DOTS */}
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => selectSlide(activeSlide - 1)}
              aria-label="Previous slide"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div
              role="group"
              aria-label="Choose a slide"
              className="flex items-center"
            >
              {slides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  aria-pressed={activeSlide === index}
                  onClick={() => selectSlide(index)}
                  className="flex h-11 w-8 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all motion-reduce:transition-none ${
                      activeSlide === index
                        ? "w-6 bg-[#e4bc64]"
                        : "w-2.5 bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => selectSlide(activeSlide + 1)}
              aria-label="Next slide"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-[#173d25]/10 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:items-center">
          <h2 className="font-serif text-3xl font-bold leading-tight">
            You enjoy the journey.
            <br />
            We help arrange the details.
          </h2>

          <p className="max-w-xl leading-relaxed text-stone-600">
            Karisoke Concierge brings your Rwanda plans together through
            one local contact. From choosing a stay to organizing
            transport and activities, we help you make the most of your
            time here.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f0eee7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0 max-w-2xl">
              <p className={eyebrow}>Our services</p>

              <h2 className={sectionHeading}>
                Every detail, thoughtfully arranged.
              </h2>

              <p className="mt-5 leading-relaxed text-stone-600">
                From landing in Kigali to your final day, we help
                coordinate the details so you can focus on the experience.
              </p>
            </div>

            <Link
              href="/services"
              className={`${button} border border-[#173d25]/20 bg-white hover:bg-stone-100`}
            >
              View all services
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="flex min-w-0 flex-col rounded-lg border border-[#173d25]/10 bg-white p-5 sm:p-6 lg:p-7"
              >
                <span className="font-serif text-3xl text-[#907025]">
                  {service.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl font-bold leading-tight">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-stone-600">
                  {service.description}
                </p>

                <a
                  href={whatsapp(
                    `Hello Karisoke Concierge! I would like to enquire about ${service.title.toLowerCase()}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${button} mt-7 w-full bg-[#173d25] text-white hover:bg-[#245d38] sm:w-auto sm:self-start`}
                >
                  Enquire about this service
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className={eyebrow}>Across Rwanda</p>

          <h2 className={sectionHeading}>
            Places worth travelling for.
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-stone-600">
            Shape your journey around cities, mountains, forests, and
            quieter days by the water.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="flex min-w-0 flex-col rounded-lg border border-[#173d25]/15 bg-white p-5 sm:p-6 lg:p-7"
              >
                <p className={eyebrow}>{destination.theme}</p>

                <h3 className="mt-4 font-serif text-3xl font-bold leading-tight">
                  {destination.name}
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-stone-600">
                  {destination.description}
                </p>

                <a
                  href={whatsapp(
                    `Hello! I would like to include ${destination.name} in my Rwanda itinerary.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center self-start rounded py-2 font-semibold underline underline-offset-4"
                >
                  Plan a visit
                </a>
              </article>
            ))}
          </div>

          <Link
            href="/destinations"
            className={`${button} mt-8 border border-[#173d25]/25 hover:bg-[#173d25]/5`}
          >
            Explore destinations
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/giraffes.jpeg"
              alt="Giraffes and zebras among trees and green grass"
              fill
              unoptimized
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className={eyebrow}>How it works</p>

            <h2 className={sectionHeading}>
              Your plans, made personal.
            </h2>

            <ol className="mt-8">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 border-b border-[#173d25]/15 py-6 sm:gap-5 sm:py-7"
                >
                  <span className="shrink-0 pt-1 font-serif text-xl font-bold text-[#907025]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-bold leading-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-stone-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}