"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { journeys } from "../journeys";

const PHONE = "250789162022";
const container = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3a33d]";
const eyebrow = "text-[10px] font-semibold uppercase tracking-[0.22em]";

function whatsapp(title: string) {
  const message = [
    "Hello Karisoke Concierge!",
    `I’m interested in ${title}.`,
    "",
    "My travel dates:",
    "Number of travellers:",
    "Preferred accommodation:",
    "",
    "Please help me personalise the itinerary and get a quote.",
  ].join("\n");
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function TourDetailsPage() {
  const params = useParams<{ id: string }>();
  const journey = journeys.find((item) => item.id === params.id);

  if (!journey) {
    return (
      <main className="min-h-screen bg-[#f1eee6] px-5 py-24 text-[#173d25]">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrow}>Karisoke Concierge</p>
          <h1 className="mt-4 font-serif text-4xl">Tour not found</h1>
          <p className="mt-4 text-[#61675e]">This tour may have moved or is no longer available.</p>
          <Link href="/packages" className={`mt-8 inline-flex min-h-12 items-center bg-[#173d25] px-5 text-white ${focus}`}>Back to packages</Link>
        </div>
      </main>
    );
  }

  const gallery = journey.gallery?.length ? journey.gallery : [journey.image];

  return (
    <main className="min-w-0 bg-[#f1eee6] text-[#173d25]">
      {/* Breadcrumb and photographic gallery */}
      <section className="pt-6 sm:pt-8">
        <div className={container}>
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-[#61675e]">
            <Link href="/" className={`hover:text-[#173d25] ${focus}`}>Home</Link><span>/</span>
            <Link href="/packages" className={`hover:text-[#173d25] ${focus}`}>Rwanda packages</Link><span>/</span>
            <span aria-current="page" className="text-[#173d25]">{journey.title}</span>
          </nav>
          <div className="grid h-[340px] grid-cols-2 gap-2 overflow-hidden sm:h-[470px] lg:grid-cols-4 lg:grid-rows-2">
            <div className="relative col-span-2 row-span-2 min-h-0 overflow-hidden bg-[#173d25]">
              <Image src={gallery[0]} alt={journey.alt} fill priority unoptimized sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover transition duration-700 hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              <span className="absolute bottom-4 left-4 bg-[#e4bc64] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#173d25]">{journey.category}</span>
            </div>
            {gallery.slice(1, 5).map((src, index) => (
              <div key={src} className={`relative min-h-0 overflow-hidden bg-[#173d25] ${index === 3 ? "hidden lg:block" : ""}`}>
                <Image src={src} alt={`${journey.title} photography ${index + 2}`} fill unoptimized sizes="(max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour title and summary */}
      <section className="py-10 sm:py-14">
        <div className={`${container} grid gap-8 lg:grid-cols-[1fr_350px] lg:gap-14`}>
          <div>
            <p className={`${eyebrow} text-[#856326]`}>Karisoke Concierge · Rwanda</p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">{journey.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#61675e] sm:text-lg">{journey.description}</p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#173d25]/15 py-5 text-sm">
              <span><strong>{journey.days}</strong> days</span><span><strong>{journey.nights}</strong> nights</span><span>{journey.route}</span>
            </div>
          </div>
          <aside className="self-start border-t-4 border-[#d3a33d] bg-white p-6 shadow-sm sm:p-7">
            <p className={eyebrow}>Suggested journey</p>
            <p className="mt-4 text-xs text-[#61675e]">Indicative price per person</p>
            <p className="mt-1 font-serif text-3xl">USD {journey.price}</p>
            <p className="mt-3 text-xs leading-6 text-[#61675e]">Final pricing depends on travel dates, group size, availability, accommodation and confirmed activities.</p>
            <a href={whatsapp(journey.title)} target="_blank" rel="noopener noreferrer" className={`mt-5 flex min-h-12 items-center justify-center bg-[#d3a33d] px-5 py-4 text-xs font-bold uppercase tracking-widest text-[#173d25] transition hover:bg-[#e4bc64] ${focus}`}>Enquire about this tour ↗</a>
            <Link href="/packages" className={`mt-4 flex min-h-10 items-center justify-center text-xs font-semibold uppercase tracking-widest text-[#173d25] underline underline-offset-4 ${focus}`}>Explore all journeys</Link>
          </aside>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#191f1b] py-14 text-white sm:py-20">
        <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start`}>
          <div><p className={`${eyebrow} text-[#e4bc64]`}>Why this journey</p><h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">Small moments.<br />Lasting memories.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/65">A considered route through Rwanda’s landscapes, wildlife and local experiences.</p></div>
          <ul className="grid gap-0 sm:grid-cols-2">
            {journey.highlights.map((highlight, index) => (
              <li key={highlight} className="flex gap-4 border-t border-white/20 py-5 sm:px-4">
                <span className="font-serif text-2xl text-[#e4bc64]">0{index + 1}</span><span className="text-sm leading-7 text-white/85">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 sm:py-24">
        <div className={container}>
          <div className="max-w-3xl">
            <p className={`${eyebrow} text-[#856326]`}>Day by day</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">Your itinerary.</h2>
            <p className="mt-5 leading-8 text-[#61675e]">This suggested programme is a starting point. We will confirm timings, accommodation, activities, permits and transfers with you before any booking is finalised.</p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div className="relative">
              <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#173d25]/20" />
              <div className="space-y-4">
                {journey.itinerary.map((step, index) => (
                  <article key={`${journey.id}-${step.day}`} className="relative grid grid-cols-[40px_1fr] gap-4">
                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d3a33d] bg-[#f1eee6] font-serif text-sm">{String(index + 1).padStart(2, "0")}</div>
                    <div className="border border-[#173d25]/10 bg-white p-5 sm:p-7">
                      <p className={`${eyebrow} text-[#856326]`}>{step.day}</p>
                      <h3 className="mt-3 font-serif text-2xl sm:text-3xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#61675e]">{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <aside className="self-start lg:sticky lg:top-8">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#173d25]">
                <Image src={gallery[Math.min(2, gallery.length - 1)]} alt={`Landscape for ${journey.title}`} fill unoptimized sizes="(max-width: 1023px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="bg-white p-6 sm:p-8">
                <p className={`${eyebrow} text-[#856326]`}>The route</p>
                <h3 className="mt-3 font-serif text-2xl">Across Rwanda</h3>
                <p className="mt-3 text-sm leading-7 text-[#61675e]">{journey.route}</p>
                <div className="mt-5 border-t border-[#173d25]/10 pt-5"><p className={`${eyebrow} text-[#856326]`}>Accommodation</p><p className="mt-3 text-sm leading-7 text-[#61675e]">{journey.accommodation}</p></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Planning checklist */}
      <section className="bg-[#e6e1d6] py-14 sm:py-20">
        <div className={`${container} grid gap-10 md:grid-cols-2`}>
          <div><p className={`${eyebrow} text-[#856326]`}>Before you travel</p><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Clear details.<br />A smoother journey.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#61675e]">Your personalised proposal will clearly outline what is included and what is not, based on your selected services and travel dates.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-white p-5 sm:p-6"><h3 className="font-serif text-2xl">To confirm</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-[#61675e]"><li>✓ Accommodation and meal plan</li><li>✓ Transfers and transport</li><li>✓ Activities, park fees and permits</li><li>✓ Final price and availability</li></ul></div>
            <div className="bg-white p-5 sm:p-6"><h3 className="font-serif text-2xl">Personalise</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-[#61675e]"><li>✓ Travel dates and group size</li><li>✓ Preferred accommodation</li><li>✓ Pace and optional experiences</li><li>✓ Dietary or special requests</li></ul></div>
          </div>
        </div>
      </section>

      {/* Final enquiry */}
      <section className="bg-[#12372a] py-14 text-white sm:py-20">
        <div className={`${container} grid gap-8 md:grid-cols-[1fr_auto] md:items-center`}>
          <div><p className={`${eyebrow} text-[#e4bc64]`}>Start your journey</p><h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Let’s make this journey yours.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">Tell us when you want to travel and what matters most. We will help you confirm the details.</p></div>
          <Link href={`/enquire?tour=${journey.id}`} className={`inline-flex min-h-12 items-center justify-center bg-[#e4bc64] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#173d25] transition hover:bg-white ${focus}`}>Enquire now ↗</Link>
        </div>
      </section>

      {/* Persistent tour enquiry bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#211f1f] text-white shadow-[0_-8px_30px_rgba(0,0,0,0.18)]">
        <div className={`${container} flex min-h-[78px] items-center justify-between gap-4 py-3`}>
          <div className="flex min-w-0 flex-wrap items-center gap-x-8 gap-y-2 sm:gap-x-10">
            <div>
              <p className="font-serif text-lg sm:text-xl">{journey.nights}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/70">Nights</p>
            </div>
            <div>
              <p className="font-serif text-lg sm:text-xl">{journey.route.split("·").map((part) => part.trim()).filter(Boolean).length}</p>
              <p className="text-[10px] uppercase tracking-wider text-white/70">Stops</p>
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="font-serif text-lg sm:text-xl">USD {journey.price}</p>
              <p className="text-[10px] text-white/70">Indicative price, per person</p>
            </div>
          </div>
          <Link href={`/enquire?tour=${journey.id}`} className={`inline-flex min-h-12 shrink-0 items-center justify-center bg-[#ff6900] px-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#171717] transition hover:bg-[#ff8b38] sm:px-8 ${focus}`}>
            Enquire <span aria-hidden="true" className="ml-2">↗</span>
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="h-24 sm:h-28" />
    </main>
  );
}
