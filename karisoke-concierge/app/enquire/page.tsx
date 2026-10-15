"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { journeys } from "../packages/journeys";

const PHONE = "250789162022";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3a33d]";
const months = ["November 2026", "December 2026", "January 2027", "February 2027"];
const budgets = ["USD 5k–10k", "USD 10k–20k", "USD 20k–40k", "USD 40k+"];
const interests = ["Gorilla trekking", "Big Five safari", "Culture", "Golden monkeys", "Lakeside escape", "Hiking"];

export default function EnquirePage() {
  const [tourId, setTourId] = useState("");
  const [dateMode, setDateMode] = useState<"flexible" | "specific">("flexible");
  const [selectedMonths, setSelectedMonths] = useState<string[]>(["November 2026"]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [budget, setBudget] = useState("USD 10k–20k");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subscribe, setSubscribe] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedTour = params.get("tour") ?? "";
    if (journeys.some((journey) => journey.id === requestedTour)) setTourId(requestedTour);
  }, []);

  const selectedTour = useMemo(
    () => journeys.find((journey) => journey.id === tourId),
    [tourId],
  );

  function toggleMonth(month: string) {
    setSelectedMonths((current) =>
      current.includes(month) ? current.filter((item) => item !== month) : [...current, month],
    );
  }

  function toggleInterest(interest: string) {
    setSelectedInterests((current) =>
      current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest],
    );
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dateDetails = dateMode === "specific"
      ? `Specific dates: ${startDate || "not selected"} to ${endDate || "not selected"}`
      : `Flexible travel months: ${selectedMonths.join(", ") || "not selected"}`;
    const message = [
      "Hello Karisoke Concierge! I would like to enquire about a Rwanda journey.",
      `Tour: ${selectedTour?.title ?? "Help me choose a tour"}`,
      dateDetails,
      `Travellers: ${adults} adult(s), ${children} child(ren)`,
      `Budget per person: ${budget}`,
      `Interests: ${selectedInterests.join(", ") || "Not specified"}`,
      `Additional notes: ${notes || "None"}`,
      "",
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone ? `+250 ${phone}` : "Not provided"}`,
      `Subscribe to travel updates: ${subscribe ? "Yes" : "No"}`,
    ].join("\n");
    window.location.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  }


  return (
    <main className="min-h-screen bg-[#f1eee6] text-[#173d25]">
      <header className="bg-[#173d25] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className={`font-serif text-xl sm:text-2xl ${focus}`}>Karisoke <span className="text-[#e4bc64]">Concierge</span></Link>
          <Link href="/packages" className={`text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-[#e4bc64] ${focus}`}>Explore tours ↗</Link>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-12">
        <aside className="self-start lg:sticky lg:top-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#856326]">Your Rwanda journey</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Let’s plan something remarkable.</h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#61675e]">Share a few details about your trip. We’ll use them to prepare a proposal around your dates, interests, group size and budget.</p>

          <div className="mt-8 overflow-hidden bg-white">
            {selectedTour ? (
              <>
                <div className="relative aspect-[16/10] bg-[#173d25]">
                  <img src={selectedTour.image} alt={selectedTour.alt} className="h-full w-full object-cover" />
                  <span className="absolute bottom-3 left-3 bg-[#e4bc64] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#173d25]">{selectedTour.category}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#856326]">Selected tour</p>
                  <h2 className="mt-2 font-serif text-2xl">{selectedTour.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#61675e]">{selectedTour.days} days · {selectedTour.nights} nights</p>
                  <p className="mt-4 font-serif text-2xl">USD {selectedTour.price}</p>
                  <p className="mt-1 text-xs text-[#61675e]">Indicative price per person</p>
                  <Link href={`/packages/${selectedTour.id}`} className={`mt-5 inline-flex text-xs font-bold uppercase tracking-widest underline underline-offset-4 ${focus}`}>Review tour details ↗</Link>
                </div>
              </>
            ) : (
              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#856326]">Start with a tour</p>
                <h2 className="mt-3 font-serif text-2xl">Which journey interests you?</h2>
                <p className="mt-3 text-sm leading-7 text-[#61675e]">Choose a package below, or leave the selection open and we’ll help you decide.</p>
                <div className="mt-5 space-y-2">
                  {journeys.map((journey) => (
                    <button key={journey.id} type="button" onClick={() => setTourId(journey.id)} className={`flex min-h-11 w-full items-center justify-between border px-3 py-2 text-left text-sm transition ${tourId === journey.id ? "border-[#173d25] bg-[#173d25] text-white" : "border-[#173d25]/15 hover:border-[#173d25]"}`}>
                      <span>{journey.title}</span><span aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#61675e]">Your enquiry is not a confirmed booking. We’ll confirm availability, inclusions and final pricing with you first.</p>
        </aside>

        <section className="bg-[#faf9f5] p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4 border-b border-[#173d25]/15 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#856326]">Trip enquiry</p>
              <h2 className="mt-2 font-serif text-3xl">{step === 1 ? "Tell us about your trip" : "Complete your enquiry"}</h2>
            </div>
            <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#856326]">0{step} / 02</p>
          </div>
          <div className="mt-5 flex gap-2" aria-label="Form progress">
            <div className={`h-1.5 flex-1 ${step >= 1 ? "bg-[#ff6900]" : "bg-[#173d25]/10"}`} />
            <div className={`h-1.5 flex-1 ${step >= 2 ? "bg-[#ff6900]" : "bg-[#173d25]/10"}`} />
          </div>

          <form onSubmit={submitEnquiry}>
            {step === 1 ? (
              <div className="space-y-8 pt-7">
                <fieldset>
                  <legend className="font-serif text-2xl">When would you like to travel?</legend>
                  <div className="mt-4 flex gap-5 border-b border-[#173d25]/20">
                    <button type="button" onClick={() => setDateMode("flexible")} className={`border-b-2 px-1 pb-3 text-xs ${dateMode === "flexible" ? "border-[#ff6900] font-semibold" : "border-transparent text-[#61675e]"}`}>Flexible dates</button>
                    <button type="button" onClick={() => setDateMode("specific")} className={`border-b-2 px-1 pb-3 text-xs ${dateMode === "specific" ? "border-[#ff6900] font-semibold" : "border-transparent text-[#61675e]"}`}>Specific dates</button>
                  </div>
                  {dateMode === "flexible" ? (
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {months.map((month) => (
                        <button key={month} type="button" aria-pressed={selectedMonths.includes(month)} onClick={() => toggleMonth(month)} className={`min-h-[66px] border px-2 py-3 text-center text-xs transition ${selectedMonths.includes(month) ? "border-[#ff6900] bg-[#fff0e6]" : "border-[#173d25]/20 hover:border-[#173d25]"}`}>
                          <span className="block">{month.split(" ")[0]}</span><span className="mt-1 block text-[#61675e]">{month.split(" ")[1]}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label className="block text-xs font-semibold">Arrival date<input required type="date" min="2026-10-15" value={startDate} onChange={(event) => setStartDate(event.target.value)} className="mt-2 min-h-11 w-full border border-[#173d25]/25 bg-white px-3 text-sm font-normal" /></label>
                      <label className="block text-xs font-semibold">Departure date<input required type="date" min={startDate || "2026-10-15"} value={endDate} onChange={(event) => setEndDate(event.target.value)} className="mt-2 min-h-11 w-full border border-[#173d25]/25 bg-white px-3 text-sm font-normal" /></label>
                    </div>
                  )}
                </fieldset>

                <fieldset>
                  <legend className="font-serif text-2xl">Who will be travelling?</legend>
                  <div className="mt-4 space-y-4">
                    {([{ label: "Adults", hint: "Age 18 or above", value: adults, set: setAdults, min: 1 }, { label: "Children", hint: "Under 18", value: children, set: setChildren, min: 0 }] as const).map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4">
                        <div><p className="text-sm font-semibold">{item.label}</p><p className="mt-1 text-xs text-[#61675e]">{item.hint}</p></div>
                        <div className="flex items-center gap-4">
                          <button type="button" aria-label={`Remove ${item.label.toLowerCase()}`} disabled={item.value <= item.min} onClick={() => item.set((value: number) => Math.max(item.min, value - 1))} className="h-8 w-8 rounded-full border border-[#173d25]/20 disabled:opacity-30">−</button>
                          <span className="w-4 text-center text-sm tabular-nums">{item.value}</span>
                          <button type="button" aria-label={`Add ${item.label.toLowerCase()}`} onClick={() => item.set((value: number) => value + 1)} className="h-8 w-8 rounded-full border border-[#173d25]/20">+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-serif text-2xl">What is your budget, per person?</legend>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {budgets.map((item) => <button key={item} type="button" aria-pressed={budget === item} onClick={() => setBudget(item)} className={`min-h-12 border px-2 text-xs transition ${budget === item ? "border-[#ff6900] bg-[#fff0e6]" : "border-[#173d25]/25 hover:border-[#173d25]"}`}>{item}</button>)}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-serif text-2xl">Anything else?</legend>
                  <p className="mt-2 text-xs text-[#61675e]">Select the experiences that interest you. <span className="float-right">Optional</span></p>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {interests.map((item) => <button key={item} type="button" aria-pressed={selectedInterests.includes(item)} onClick={() => toggleInterest(item)} className={`min-h-10 border px-2 py-2 text-xs transition ${selectedInterests.includes(item) ? "border-[#173d25] bg-[#173d25] text-white" : "border-[#173d25]/25 hover:border-[#173d25]"}`}>{item}</button>)}
                  </div>
                  <label className="mt-4 block text-xs font-semibold">Additional notes <span className="font-normal text-[#61675e]">Optional</span><textarea value={notes} onChange={(event) => setNotes(event.target.value.slice(0, 2000))} maxLength={2000} rows={4} placeholder="Share any requests, preferences or questions..." className="mt-2 w-full resize-y border border-[#173d25]/25 bg-[#e7e1d7] p-3 text-sm font-normal outline-none focus:border-[#ff6900]" /></label>
                  <p className="mt-1 text-right text-[10px] text-[#61675e]">{notes.length} / 2000</p>
                </fieldset>

                <button type="button" onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`inline-flex min-h-12 items-center justify-center gap-5 bg-[#ff6900] px-6 text-xs font-bold uppercase tracking-widest text-[#171717] transition hover:bg-[#ff8b38] ${focus}`}>Next <span aria-hidden="true">›</span></button>
              </div>
            ) : (
              <div className="space-y-5 pt-7">
                <p className="text-sm leading-7 text-[#61675e]">An expert Travel Designer will be in touch. Add your contact details to complete your enquiry.</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="first-name">First name</label>
                  <input id="first-name" required autoComplete="given-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First name" className="min-h-11 w-full border border-[#b8b0a5] bg-[#e0d9cf] px-3 text-xs outline-none transition placeholder:text-[#777168] focus:border-[#ff6900] focus:bg-white" />
                  <label className="sr-only" htmlFor="last-name">Last name</label>
                  <input id="last-name" required autoComplete="family-name" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last name" className="min-h-11 w-full border border-[#b8b0a5] bg-[#e0d9cf] px-3 text-xs outline-none transition placeholder:text-[#777168] focus:border-[#ff6900] focus:bg-white" />
                </div>
                <label className="sr-only" htmlFor="enquiry-email">Email</label>
                <input id="enquiry-email" required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="min-h-11 w-full border border-[#b8b0a5] bg-[#e0d9cf] px-3 text-xs outline-none transition placeholder:text-[#777168] focus:border-[#ff6900] focus:bg-white" />
                <label className="sr-only" htmlFor="enquiry-phone">Phone number</label>
                <div className="flex min-h-11 items-center border border-[#b8b0a5] bg-[#e0d9cf] focus-within:border-[#ff6900]">
                  <span className="flex h-full shrink-0 items-center gap-2 border-r border-[#b8b0a5] px-3 text-xs" aria-label="Rwanda country code"><span aria-hidden="true">🇷🇼</span><span>+250</span></span>
                  <input id="enquiry-phone" type="tel" autoComplete="tel-national" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone number" className="min-h-10 min-w-0 flex-1 bg-transparent px-3 text-xs outline-none placeholder:text-[#777168]" />
                </div>
                <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-5 text-[#4e4a44]">
                  <input type="checkbox" checked={subscribe} onChange={(event) => setSubscribe(event.target.checked)} className="mt-0.5 h-3.5 w-3.5 accent-[#ff6900]" />
                  <span>Subscribe for travel inspiration, updates, and exclusive offers.</span>
                </label>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button type="button" onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`text-[11px] text-[#4e4a44] underline underline-offset-4 hover:text-black ${focus}`}>Back</button>
                  <button type="submit" className={`inline-flex min-h-11 items-center justify-center gap-4 bg-[#ff6900] px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#171615] transition hover:bg-[#ff8730] ${focus}`}>Submit enquiry <span aria-hidden="true">›</span></button>
                </div>
                <p className="text-[10px] leading-5 text-[#615b53]">By submitting this form you agree with our <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-black">Privacy Policy</Link>.</p>
              </div>
            )}
          </form>
        </section>
      </div>

      <footer className="bg-[#211f1f] py-6 text-white/65">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 text-xs sm:px-8 lg:px-12">
          <span>© Karisoke Concierge · Rwanda</span>
          <Link href="/packages" className={`hover:text-white ${focus}`}>Back to packages</Link>
        </div>
      </footer>
    </main>
  );
}
