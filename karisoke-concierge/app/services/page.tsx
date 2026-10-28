
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Services in Rwanda | Karisoke Concierge",
  description:
    "Plan your Rwanda adventure with personalized travel services, accommodation, gorilla trekking, wildlife safaris, transport, cultural experiences, and local support.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    number: "01",
    category: "STAY",
    title: "Hotels & accommodation",
    description:
      "From intimate boutique hotels to luxury lodges and peaceful lakeside retreats, find a stay that suits your journey.",
    image: "/images/services/accommodation.jpg",
    alt: "Beautiful accommodation overlooking Rwanda's green hills",
  },
  {
    number: "02",
    category: "TRANSPORT",
    title: "Airport transfers & transport",
    description:
      "Arrive comfortably with airport pickup, private transfers, and transport arranged around your itinerary.",
    image: "/images/services/transport.jpg",
    alt: "Airport and travel transport services",
  },
  {
    number: "03",
    category: "ADVENTURE",
    title: "Gorilla trekking & permits",
    description:
      "Prepare for an unforgettable encounter with Rwanda's mountain gorillas, with help coordinating the details.",
    image: "/images/services/gorilla-trekking.jpg",
    alt: "Mountain gorilla in Rwanda's lush forest",
  },
  {
    number: "04",
    category: "WILDLIFE",
    title: "Safaris & national parks",
    description:
      "Discover Akagera's wildlife, Nyungwe's forests, and Rwanda's extraordinary natural landscapes.",
    image: "/images/services/wildlife-safari.jpg",
    alt: "Wildlife roaming through Rwanda's savannah",
  },
  {
    number: "05",
    category: "CULTURE",
    title: "Culture & local experiences",
    description:
      "Meet local communities, explore Rwandan traditions, taste local cuisine, and discover the country's heritage.",
    image: "/images/services/culture.jpg",
    alt: "Local cultural experience in Rwanda",
  },
  {
    number: "06",
    category: "RELAX",
    title: "Lake Kivu escapes",
    description:
      "Slow down beside beautiful waters, enjoy lakeside stays, and explore the peaceful towns along Lake Kivu.",
    image: "/images/services/lake-kivu.jpg",
    alt: "Lake Kivu surrounded by Rwanda's green hills",
  },
  {
    number: "07",
    category: "CITY LIFE",
    title: "Kigali city experiences",
    description:
      "Explore Kigali's restaurants, markets, art spaces, cafés, and important cultural landmarks.",
    image: "/images/services/kigali.jpg",
    alt: "Panoramic view of Kigali city",
  },
  {
    number: "08",
    category: "TRAVEL SUPPORT",
    title: "Essentials & local assistance",
    description:
      "Get practical guidance on connectivity, local currency, entry requirements, and the details that make travel easier.",
    image: "/images/services/travel-support.jpg",
    alt: "Traveler planning a Rwanda itinerary",
  },
];

const planningSteps = [
  {
    number: "01",
    title: "Tell us about your trip",
    description:
      "Share your dates, interests, travel style, group size, and the experiences you hope to enjoy.",
  },
  {
    number: "02",
    title: "We coordinate the details",
    description:
      "We help bring together suitable stays, transport, activities, and local arrangements for your journey.",
  },
  {
    number: "03",
    title: "Experience Rwanda",
    description:
      "Travel with a clearer plan and spend more time enjoying the places, people, and experiences that matter.",
  },
];

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a8752b] sm:text-xs">
      <span>{children}</span>
      <span className="h-px w-10 bg-[#bd914f]" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f5ee] text-[#153b30]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[570px] items-center overflow-hidden bg-[#092c23] sm:min-h-[620px] lg:min-h-[650px]">
        <Image
          src="/images/services/rwanda-hero.jpg"
          alt="A traveler overlooking Rwanda's beautiful lakes and green hills"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06291f]/95 via-[#092e24]/75 to-[#092e24]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092e24]/40 via-transparent to-black/10" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-2xl">
            <Eyebrow>Travel services</Eyebrow>

            <h1 className="font-serif text-4xl leading-[1.08] tracking-[-0.04em] text-[#fffdf7] sm:text-5xl md:text-6xl lg:text-7xl">
              Everything you need for your Rwanda journey.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              From the moment you start planning until the day you depart, we
              help bring the details together. Tell us what you need, and
              we&apos;ll help coordinate your stay, transport, activities, and
              local arrangements.
            </p>

            <Link
              href="/enquire"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-4 rounded-sm bg-[#e9b85f] px-7 py-3 text-sm font-semibold text-[#153629] transition hover:bg-[#f3cc83] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9b85f]"
            >
              Plan your trip
              <ArrowIcon className="h-5 w-5" />
            </Link>

            <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/65">
              Personalised planning · Local knowledge · Rwanda experiences
            </p>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 hidden max-w-56 -rotate-6 text-right font-serif text-xl italic leading-snug text-[#f2cb83] lg:block">
          Real places.
          <br />
          Local knowledge.
          <br />
          Unforgettable journeys.
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-24">
        <div className="max-w-lg">
          <Eyebrow>Our approach</Eyebrow>

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Thoughtful support for every step of your trip.
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#58655e] sm:text-base sm:leading-8">
            Whether this is your first visit or a return to Rwanda, we help
            you navigate the details so you can focus on the moments that
            make your journey meaningful.
          </p>

          <Link
            href="/enquire"
            className="mt-7 inline-flex items-center gap-3 border-b border-[#b58b4b] pb-2 text-sm font-semibold transition hover:text-[#a8752b]"
          >
            Tell us what you need
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative min-h-[270px] overflow-hidden rounded-sm sm:min-h-[360px]">
          <Image
            src="/images/services/gorilla-banner.jpg"
            alt="Mountain gorilla in Rwanda's lush natural habitat"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30" />

          <p className="absolute bottom-6 right-6 max-w-48 text-right font-serif text-xl italic leading-snug text-white drop-shadow sm:bottom-8 sm:right-8 sm:text-2xl">
            Extraordinary experiences.
            <br />
            Made personal.
          </p>
        </div>
      </section>

      {/* SERVICE DIRECTORY */}
      <section
        id="our-services"
        className="border-y border-[#e5e0d5] bg-[#f0eee5] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="mb-10 flex flex-col justify-between gap-7 lg:mb-14 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <Eyebrow>Featured services</Eyebrow>
              <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Find what your Rwanda journey needs.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#647067]">
                Explore the services we can help arrange, from your first
                airport pickup to your final day in Rwanda.
              </p>
            </div>

            <Link
              href="/enquire"
              className="inline-flex w-fit items-center gap-3 border-b border-[#b58b4b] pb-2 text-sm font-semibold"
            >
              Plan a personalised trip
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex flex-col overflow-hidden border border-[#e4e0d6] bg-[#fbfaf6] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b30]/[0.08]"
              >
                <Link
                  href={`/enquire?service=${encodeURIComponent(service.title)}`}
                  aria-label={`Enquire about ${service.title}`}
                  className="relative block aspect-[5/3] overflow-hidden bg-[#d9dfd3]"
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 bg-[#f7f5ee]/95 px-3 py-1.5 text-[9px] font-semibold tracking-[0.17em] text-[#234535]">
                    {service.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-5">
                  <span className="mb-3 text-[10px] tracking-[0.2em] text-[#a8752b]">
                    SERVICE {service.number}
                  </span>

                  <h3 className="font-serif text-xl leading-snug tracking-[-0.02em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-6 text-[#667169] sm:text-sm">
                    {service.description}
                  </p>

                  <Link
                    href={`/enquire?service=${encodeURIComponent(service.title)}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#234535] transition hover:text-[#a8752b]"
                  >
                    Explore this service
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="grid lg:grid-cols-2"
      >
        <div className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-[#082c22] px-6 py-16 sm:px-10 lg:min-h-[570px] lg:px-16 lg:py-20">
          <Image
            src="/images/services/rwanda-hills.jpg"
            alt="Rolling green hills in Rwanda at sunset"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#06291f]/95 via-[#092e24]/75 to-[#092e24]/45" />

          <div className="relative max-w-lg">
            <Eyebrow>Your journey</Eyebrow>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-[#fffdf7] sm:text-5xl">
              Simple steps.
              <br />
              A seamless experience.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Your trip should feel exciting, not complicated. Here&apos;s
              how we help you prepare for Rwanda.
            </p>

            <Link
              href="/enquire"
              className="mt-8 inline-flex min-h-12 items-center gap-4 rounded-sm bg-[#e9b85f] px-6 py-3 text-sm font-semibold text-[#153629] transition hover:bg-[#f3cc83]"
            >
              Start planning
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
          <div className="w-full">
            {planningSteps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-[48px_1fr] gap-5 py-7 sm:grid-cols-[60px_1fr] sm:gap-7 ${
                  index !== planningSteps.length - 1
                    ? "border-b border-[#ded8c9]"
                    : ""
                } ${index === 0 ? "pt-0" : ""} ${
                  index === planningSteps.length - 1 ? "pb-0" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bc914e] font-serif text-lg text-[#a8752b] sm:h-14 sm:w-14">
                  {step.number}
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a8752b]">
                    Step {step.number}
                  </p>

                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-[#647067]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#082c22]">
        <Image
          src="/images/services/rwanda-sunset.jpg"
          alt="Golden sunset over Rwanda's scenic landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06271e]/55 via-[#082c22]/85 to-[#082c22]" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Ready to plan?</Eyebrow>

            <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] text-[#fffdf7] sm:text-5xl lg:text-6xl">
              Let&apos;s create your Rwanda experience.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Tell us what you have in mind. We&apos;ll help you work out
              the details and find the experiences that fit your journey.
            </p>
          </div>

          <Link
            href="/enquire"
            className="inline-flex min-h-14 w-fit items-center justify-center gap-5 rounded-sm bg-[#e9b85f] px-7 py-4 text-sm font-semibold text-[#153629] transition hover:bg-[#f3cc83] sm:px-9"
          >
            Plan your trip
            <ArrowIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
