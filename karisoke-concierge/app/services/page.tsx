
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Services in Rwanda | Karisoke Concierge",
  description:
    "Discover personalized travel planning, accommodation, airport transfers, gorilla trekking, wildlife safaris, cultural experiences, and travel assistance across Rwanda.",
  alternates: {
    canonical: "/services",
  },
};

const featuredServices = [
  {
    number: "01",
    category: "STAY",
    title: "Find your perfect stay",
    description:
      "From stylish Kigali hotels to peaceful lakeside retreats and wilderness lodges, find a place that fits your journey.",
    tags: ["Hotels", "Safari lodges", "Lake Kivu"],
    symbol: "⌂",
    background: "bg-[#e9e5d9]",
    accent: "text-[#53684d]",
  },
  {
    number: "02",
    category: "EXPLORE",
    title: "Discover the wild",
    description:
      "Plan unforgettable encounters with Rwanda’s wildlife, mountain landscapes, and remarkable national parks.",
    tags: ["Gorilla trekking", "Safaris", "Hiking"],
    symbol: "✳",
    background: "bg-[#dce4d6]",
    accent: "text-[#31553a]",
  },
  {
    number: "03",
    category: "CONNECT",
    title: "Experience local life",
    description:
      "Explore Rwandan culture, cuisine, art, markets, and meaningful experiences beyond the usual tourist stops.",
    tags: ["Culture", "Food", "Local guides"],
    symbol: "◇",
    background: "bg-[#efe0c6]",
    accent: "text-[#8a682e]",
  },
  {
    number: "04",
    category: "GET AROUND",
    title: "Travel with ease",
    description:
      "Coordinate airport pickups, private transport, intercity journeys, and the practical details between destinations.",
    tags: ["Airport transfers", "Drivers", "Day trips"],
    symbol: "↗",
    background: "bg-[#dfe7e7]",
    accent: "text-[#3f6868]",
  },
];

const additionalServices = [
  {
    title: "Personalized itineraries",
    description:
      "A practical travel plan shaped around your dates, interests, and pace.",
  },
  {
    title: "Gorilla trekking arrangements",
    description:
      "Help planning Volcanoes National Park visits, transport, accommodation, and official permit requirements.",
  },
  {
    title: "Wildlife & nature excursions",
    description:
      "Explore Akagera, Nyungwe, birdwatching, forest walks, and scenic landscapes.",
  },
  {
    title: "Kigali city experiences",
    description:
      "Discover museums, art spaces, markets, restaurants, and city highlights.",
  },
  {
    title: "Dining & special occasions",
    description:
      "Find dining options and coordinate memorable celebrations during your stay.",
  },
  {
    title: "Lake Kivu escapes",
    description:
      "Plan lakeside stays, relaxation, scenic drives, and activities around Rubavu or Karongi.",
  },
  {
    title: "Family & group travel",
    description:
      "Coordinate shared itineraries, accommodation, activities, and transport for your group.",
  },
  {
    title: "Business travel assistance",
    description:
      "Arrange travel logistics around meetings, conferences, and professional events.",
  },
  {
    title: "Travel essentials",
    description:
      "Find official entry information and guidance on connectivity, local currency, and practical preparations.",
  },
  {
    title: "On-trip & departure support",
    description:
      "Get help coordinating itinerary changes, additional activities, and your return airport transfer.",
  },
];

const stages = [
  {
    number: "01",
    title: "Tell us your plans",
    description:
      "Share your dates, interests, travel style, and what you hope to experience.",
  },
  {
    number: "02",
    title: "Shape your journey",
    description:
      "We help bring the destinations, stays, transport, and activities together.",
  },
  {
    number: "03",
    title: "Explore Rwanda",
    description:
      "Travel with a plan that feels personal, practical, and made for you.",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f5] text-[#203b29]">
      {/* HERO */}
      <section className="relative isolate min-h-[590px] overflow-hidden bg-[#173d25] sm:min-h-[650px] lg:min-h-[700px]">
        {/* Decorative landscape-inspired background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_80%_25%,rgba(194,173,119,0.28),transparent_32%),radial-gradient(ellipse_at_72%_80%,rgba(94,124,78,0.55),transparent_42%),linear-gradient(120deg,#173d25_10%,#244b32_55%,#65765a_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 top-20 -z-10 h-[420px] w-[420px] rounded-full border border-white/10 sm:h-[570px] sm:w-[570px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-12 top-32 -z-10 h-[330px] w-[330px] rounded-full border border-white/10 sm:h-[470px] sm:w-[470px]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 -z-10 h-1/2 w-full bg-gradient-to-t from-[#102b1b]/60 to-transparent"
        />

        <div className="mx-auto flex min-h-[590px] max-w-[1600px] flex-col justify-center px-5 py-20 sm:min-h-[650px] sm:px-10 lg:min-h-[700px] lg:px-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d8c28c]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e7d7ac] sm:text-xs">
                The Karisoke experience
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] tracking-[-0.045em] text-[#faf9f5] sm:text-6xl lg:text-8xl">
              Rwanda, made
              <span className="block font-normal italic text-[#dfcea0]">
                personal.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              A remarkable journey is made of many little details. From where
              you stay to what you discover, we help bring your Rwanda
              experience together, around you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/enquire"
                className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#e3d0a0] px-7 py-4 text-sm font-semibold text-[#173d25] transition hover:bg-[#f0e3bd]"
              >
                Plan your journey
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <Link
                href="#our-services"
                className="inline-flex min-h-14 items-center justify-center border border-white/35 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Discover our services
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 sm:mt-20">
            <span>Thoughtful planning</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#d8c28c] sm:block" />
            <span>Local experiences</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#d8c28c] sm:block" />
            <span>Across Rwanda</span>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 hidden max-w-[190px] text-right lg:block">
          <p className="font-serif text-xl italic text-white/80">
            The land of a thousand hills
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#e3d0a0]">
            Welcome to Rwanda
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-[1400px] gap-8 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20 lg:px-20 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#907025]">
            More than a booking
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
            The details matter.
            <span className="block italic text-[#75856d]">
              We help connect them.
            </span>
          </h2>
        </div>

        <div className="max-w-2xl lg:pb-2">
          <p className="text-base leading-8 text-[#59665a] sm:text-lg">
            Visiting a new country brings plenty of questions. Where should
            you stay? How do you get between destinations? Which experiences
            belong on your itinerary? Karisoke Concierge helps you explore
            your options and coordinate the details, so your trip feels less
            complicated and more your own.
          </p>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section
        id="our-services"
        className="scroll-mt-24 border-y border-[#203b29]/10 bg-[#f0eee6] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-20">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#907025]">
                How we can help
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-[-0.035em] sm:text-5xl">
                Your journey, from every angle.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#657064]">
              Choose what you need, or let us help you bring the whole
              experience together.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <article
                key={service.number}
                className="group flex flex-col border border-[#203b29]/10 bg-[#faf9f5] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#203b29]/5"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden ${service.background}`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-serif text-[112px] leading-none opacity-25 transition duration-500 group-hover:scale-110 ${service.accent}`}
                  >
                    {service.symbol}
                  </span>

                  <span className="absolute left-5 top-5 text-[10px] font-semibold tracking-[0.2em] text-[#203b29]/65">
                    {service.number}
                  </span>

                  <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#203b29]/75">
                    {service.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-serif text-2xl leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#657064]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#203b29]/10 px-2.5 py-1.5 text-[10px] text-[#59665a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/enquire"
                    className="mt-7 inline-flex items-center justify-between border-t border-[#203b29]/10 pt-5 text-sm font-semibold transition-colors hover:text-[#907025]"
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

      {/* ADDITIONAL SERVICES */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#907025]">
              The finer details
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              And everything
              <span className="block italic text-[#75856d]">
                in between.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#657064]">
              Sometimes it is the little things that make travelling easier.
              Explore more ways we can help you prepare, discover, and enjoy
              your time in Rwanda.
            </p>

            <Link
              href="/enquire"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#907025] pb-2 text-sm font-semibold text-[#203b29] transition-colors hover:text-[#907025]"
            >
              Tell us what you need
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-[#203b29]/15 border-t border-[#203b29]/15">
            {additionalServices.map((service, index) => (
              <Link
                href="/enquire"
                key={service.title}
                className="group grid gap-3 py-6 transition-colors hover:bg-[#f0eee6]/60 sm:grid-cols-[45px_1fr_24px] sm:items-center sm:gap-5 sm:px-4"
              >
                <span className="text-xs tracking-widest text-[#a48b51]">
                  {String(index + 5).padStart(2, "0")}
                </span>

                <span>
                  <span className="block font-serif text-xl transition-colors group-hover:text-[#907025] sm:text-2xl">
                    {service.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-7 text-[#657064]">
                    {service.description}
                  </span>
                </span>

                <ArrowIcon className="hidden h-4 w-4 text-[#907025] transition-transform group-hover:translate-x-1 sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#e9e7dc] px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#907025]">
              Simple by design
            </p>
            <h2 className="mt-5 font-serif text-4xl tracking-[-0.035em] sm:text-5xl">
              From first idea to final day.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#657064] sm:text-base">
              Start with a conversation. We’ll help you work out the details
              that make your trip yours.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
            {stages.map((stage) => (
              <article key={stage.number} className="relative border-t border-[#203b29]/25 pt-6">
                <span className="font-serif text-4xl italic text-[#a48b51]">
                  {stage.number}
                </span>

                <h3 className="mt-5 font-serif text-2xl">
                  {stage.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#657064]">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#173d25] px-5 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-40 h-[400px] w-[400px] rounded-full border border-white/10 sm:h-[550px] sm:w-[550px]"
        />

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3d0a0]">
              Your Rwanda story starts here
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] text-[#faf9f5] sm:text-6xl">
              Have a place in mind?
              <span className="mt-2 block italic text-[#dfcea0]">
                Let’s plan around it.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
              Whether you know exactly what you want or need help discovering
              the possibilities, tell us a little about your trip.
            </p>
          </div>

          <Link
            href="/enquire"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 bg-[#e3d0a0] px-7 py-4 text-sm font-semibold text-[#173d25] transition hover:bg-[#f0e3bd] sm:px-9"
          >
            Plan Your Trip
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
