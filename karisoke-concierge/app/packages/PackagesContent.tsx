"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, journeys } from "./journeys";

const PHONE = "250789162022";
const container = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3a33d]";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.22em]";

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

export default function PackagesContent() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All packages");
  const filteredJourneys = journeys.filter((journey) => category === "All packages" || journey.category === category);

  return (
    <main className="min-w-0 bg-[#f1eee6] text-[#173d25]">
      <section className="relative isolate flex min-h-[540px] items-end overflow-hidden bg-[#102b20] sm:min-h-[660px]">
        <Image src="/images/gorilla-slider.jpg" alt="Mountain gorilla in Rwanda's lush forest" fill priority unoptimized sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a12]/90 via-[#071a12]/55 to-black/10" />
        <div className={`${container} pb-14 pt-28 sm:pb-20`}>
          <p className={`${eyebrow} text-[#e4bc64]`}>Karisoke Concierge · Rwanda</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.04] text-white sm:text-7xl lg:text-8xl">Wild places.<br />Remarkable journeys.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">From the mountain gorillas of Volcanoes National Park to the open savannahs of Akagera, discover Rwanda at your own pace.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#packages" className={`inline-flex min-h-12 items-center bg-[#e4bc64] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#173d25] transition hover:bg-white ${focus}`}>Explore packages ↓</a>
            <a href={whatsapp("a personalised Rwanda journey")} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center border border-white/65 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10 ${focus}`}>Plan with us ↗</a>
          </div>
        </div>
      </section>

      <section className="border-b border-[#173d25]/10 bg-white py-5">
        <div className={`${container} flex flex-wrap items-center justify-between gap-4`}>
          <p className="font-serif text-xl">Find your kind of Rwanda.</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter travel packages">
            {categories.map((item) => (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`min-h-10 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-wide transition ${focus} ${category === item ? "border-[#173d25] bg-[#173d25] text-white" : "border-[#173d25]/20 bg-white hover:border-[#173d25]"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-24 py-16 sm:py-24">
        <div className={container}>
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className={`${eyebrow} text-[#856326]`}>Curated experiences</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Journeys worth<br className="hidden sm:block" /> travelling for.</h2>
            </div>
            <p className="max-w-xl leading-7 text-[#61675e] md:justify-self-end">Choose a starting point. We will personalise the route, accommodation and activities around your dates, interests and travel style.</p>
          </div>

          <p role="status" aria-live="polite" className="mb-5 text-xs uppercase tracking-widest text-[#61675e]">Showing {filteredJourneys.length} of {journeys.length} journeys</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredJourneys.map((journey, index) => (
              <article key={journey.id} className="group flex min-w-0 flex-col overflow-hidden border border-[#173d25]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Link href={`/packages/${journey.id}`} aria-label={`View details for ${journey.title}`} className={`relative block aspect-[4/4.4] overflow-hidden bg-[#173d25] ${focus}`}>
                  <Image src={journey.image} alt={journey.alt} fill unoptimized sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
                  <span className="absolute left-4 top-4 bg-[#e4bc64] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#173d25]">{journey.category}</span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <p className={`${eyebrow} text-white/75`}>Journey 0{index + 1}</p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight">{journey.title}</h3>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-sm leading-7 text-[#61675e]">{journey.description}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-y border-[#173d25]/10 py-4 text-xs text-[#61675e]">
                    <span><strong className="text-[#173d25]">{journey.days}</strong> days</span>
                    <span><strong className="text-[#173d25]">{journey.nights}</strong> nights</span>
                    <span>Rwanda</span>
                  </div>
                  <p className="mt-4 text-xs text-[#61675e]">{journey.route}</p>
                  <div className="mt-auto pt-6">
                    <p className="text-[10px] uppercase tracking-widest text-[#61675e]">Indicative price · per person</p>
                    <p className="mt-1 font-serif text-2xl">USD {journey.price}</p>
                    <Link href={`/packages/${journey.id}`} className={`mt-5 flex min-h-12 items-center justify-between border border-[#173d25] px-4 text-xs font-bold uppercase tracking-[0.16em] transition group-hover:bg-[#173d25] group-hover:text-white ${focus}`}>
                      View tour <span aria-hidden="true" className="text-lg">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#173d25] py-16 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 opacity-15"><Image src="/images/Gorilla-slider-on-bisoke-mtn.jpg" alt="" fill unoptimized sizes="100vw" className="object-cover" /></div>
        <div className={`${container} grid gap-8 md:grid-cols-[1fr_auto] md:items-center`}>
          <div><p className={`${eyebrow} text-[#e4bc64]`}>Made for you</p><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Your dates. Your pace. Your Rwanda.</h2><p className="mt-5 max-w-2xl leading-8 text-white/75">Need something different? Tell us what you have in mind and we will help shape a journey around you.</p></div>
          <a href={whatsapp("a custom Rwanda itinerary")} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center bg-[#e4bc64] px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#173d25] transition hover:bg-white ${focus}`}>Create my journey ↗</a>
        </div>
      </section>
    </main>
  );
}
