
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { journeys } from "../packages/journeys";

const PHONE = "250789162022";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d3a33d]";

const months = [
  "November 2026",
  "December 2026",
  "January 2027",
  "February 2027",
];

const interests = [
  "Gorilla trekking",
  "Big Five safari",
  "Culture",
  "Golden monkeys",
  "Lakeside escape",
  "Hiking",
];

export default function EnquirePage() {
  const [tourId, setTourId] = useState("");
  const [dateMode, setDateMode] = useState<"flexible" | "specific">(
    "flexible",
  );
  const [selectedMonths, setSelectedMonths] = useState<string[]>([
    "November 2026",
  ]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
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

    if (journeys.some((journey) => journey.id === requestedTour)) {
      setTourId(requestedTour);
    }
  }, []);

  const selectedTour = useMemo(
    () => journeys.find((journey) => journey.id === tourId),
    [tourId],
  );

  function toggleMonth(month: string) {
    setSelectedMonths((current) =>
      current.includes(month)
        ? current.filter((item) => item !== month)
        : [...current, month],
    );
  }

  function toggleInterest(interest: string) {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  }

  function goToStep(nextStep: 1 | 2) {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const dateDetails =
      dateMode === "specific"
        ? `Preferred dates: ${startDate} to ${endDate}`
        : `Flexible travel months: ${
            selectedMonths.join(", ") || "Open to suggestions"
          }`;

    const message = [
      "Hello Karisoke Concierge! I would love help planning a Rwanda journey.",
      `Journey: ${selectedTour?.title ?? "Help me choose a journey"}`,
      dateDetails,
      `Travellers: ${adults} adult(s), ${children} child(ren)`,
      `Interests: ${selectedInterests.join(", ") || "Open to suggestions"}`,
      `Additional notes: ${notes || "None"}`,
      "",
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone ? `+250 ${phone}` : "Not provided"}`,
      `Travel inspiration updates: ${subscribe ? "Yes" : "No"}`,
    ].join("\n");

    window.location.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(
      message,
    )}`;
  }

  return (
    <main className="min-h-screen bg-[#f1eee6] text-[#173d25]">
      <header className="bg-[#173d25] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className={`font-serif text-xl sm:text-2xl ${focus}`}
          >
            Karisoke <span className="text-[#e4bc64]">Concierge</span>
          </Link>

          <Link
            href="/packages"
            className={`text-xs font-semibold uppercase tracking-widest text-white/80 transition hover:text-[#e4bc64] ${focus}`}
          >
            Explore journeys ↗
          </Link>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-12">
        <aside className="self-start lg:sticky lg:top-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#856326]">
            Your Rwanda journey
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Let&apos;s plan something remarkable.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#61675e]">
            Tell us what you would love to experience in Rwanda. Whether you
            dream of meeting mountain gorillas, exploring beautiful landscapes,
            discovering local culture, or enjoying a relaxing escape, we will
            help you plan a journey that feels right for you.
          </p>

          <div className="mt-8 overflow-hidden bg-white">
            {selectedTour ? (
              <>
                <div className="relative aspect-[16/10] bg-[#173d25]">
                  <img
                    src={selectedTour.image}
                    alt={selectedTour.alt}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute bottom-3 left-3 bg-[#e4bc64] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-[#173d25]">
                    {selectedTour.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#856326]">
                    Your selected journey
                  </p>

                  <h2 className="mt-2 font-serif text-2xl">
                    {selectedTour.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#61675e]">
                    {selectedTour.days} days · {selectedTour.nights} nights
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#61675e]">
                    We&apos;ll use your preferences to help shape this journey
                    around you.
                  </p>

                  <Link
                    href={`/packages/${selectedTour.id}`}
                    className={`mt-5 inline-flex text-xs font-bold uppercase tracking-widest underline underline-offset-4 ${focus}`}
                  >
                    Review journey details ↗
                  </Link>

                  <button
                    type="button"
                    onClick={() => setTourId("")}
                    className={`mt-4 block text-xs text-[#61675e] underline underline-offset-4 ${focus}`}
                  >
                    Choose a different journey
                  </button>
                </div>
              </>
            ) : (
              <div className="p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#856326]">
                  Start with an idea
                </p>

                <h2 className="mt-3 font-serif text-2xl">
                  Which journey interests you?
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#61675e]">
                  Select a journey to get started, or leave it open and we can
                  help you discover the right experience.
                </p>

                <div className="mt-5 space-y-2">
                  {journeys.map((journey) => (
                    <button
                      key={journey.id}
                      type="button"
                      onClick={() => setTourId(journey.id)}
                      className={`flex min-h-11 w-full items-center justify-between border px-3 py-2 text-left text-sm transition ${
                        tourId === journey.id
                          ? "border-[#173d25] bg-[#173d25] text-white"
                          : "border-[#173d25]/15 hover:border-[#173d25]"
                      }`}
                    >
                      <span>{journey.title}</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="mt-5 text-xs leading-6 text-[#61675e]">
            Every journey begins with a conversation. Your enquiry gives us a
            starting point to understand what matters to you.
          </p>
        </aside>

        <section className="bg-[#faf9f5] p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="flex items-start justify-between gap-4 border-b border-[#173d25]/15 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#856326]">
                Personal trip planning
              </p>

              <h2 className="mt-2 font-serif text-3xl">
                {step === 1
                  ? "What would make your trip special?"
                  : "Let's get in touch"}
              </h2>
            </div>

            <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#856326]">
              0{step} / 02
            </p>
          </div>

          <div className="mt-5 flex gap-2" aria-label="Form progress">
            <div
              className={`h-1.5 flex-1 ${
                step >= 1 ? "bg-[#173d25]" : "bg-[#173d25]/10"
              }`}
            />
            <div
              className={`h-1.5 flex-1 ${
                step >= 2 ? "bg-[#173d25]" : "bg-[#173d25]/10"
              }`}
            />
          </div>

          <form onSubmit={submitEnquiry}>
            {step === 1 ? (
              <div className="space-y-8 pt-7">
                <fieldset>
                  <legend className="font-serif text-2xl">
                    When would you like to travel?
                  </legend>

                  <div className="mt-4 flex gap-5 border-b border-[#173d25]/20">
                    <button
                      type="button"
                      onClick={() => setDateMode("flexible")}
                      className={`border-b-2 px-1 pb-3 text-xs ${
                        dateMode === "flexible"
                          ? "border-[#173d25] font-semibold"
                          : "border-transparent text-[#61675e]"
                      }`}
                    >
                      Flexible dates
                    </button>

                    <button
                      type="button"
                      onClick={() => setDateMode("specific")}
                      className={`border-b-2 px-1 pb-3 text-xs ${
                        dateMode === "specific"
                          ? "border-[#173d25] font-semibold"
                          : "border-transparent text-[#61675e]"
                      }`}
                    >
                      Specific dates
                    </button>
                  </div>

                  {dateMode === "flexible" ? (
                    <>
                      <p className="mt-3 text-xs leading-6 text-[#61675e]">
                        Choose any months that suit you. You can select more
                        than one or leave the choice open.
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {months.map((month) => (
                          <button
                            key={month}
                            type="button"
                            aria-pressed={selectedMonths.includes(month)}
                            onClick={() => toggleMonth(month)}
                            className={`min-h-[66px] border px-2 py-3 text-center text-xs transition ${
                              selectedMonths.includes(month)
                                ? "border-[#173d25] bg-[#e8ede5]"
                                : "border-[#173d25]/20 hover:border-[#173d25]"
                            }`}
                          >
                            <span className="block">
                              {month.split(" ")[0]}
                            </span>
                            <span className="mt-1 block text-[#61675e]">
                              {month.split(" ")[1]}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label className="block text-xs font-semibold">
                        Arrival date
                        <input
                          required
                          type="date"
                          min="2026-10-28"
                          value={startDate}
                          onChange={(event) => {
                            setStartDate(event.target.value);
                            if (
                              endDate &&
                              event.target.value > endDate
                            ) {
                              setEndDate("");
                            }
                          }}
                          className="mt-2 min-h-11 w-full border border-[#173d25]/25 bg-white px-3 text-sm font-normal"
                        />
                      </label>

                      <label className="block text-xs font-semibold">
                        Departure date
                        <input
                          required
                          type="date"
                          min={startDate || "2026-10-28"}
                          value={endDate}
                          onChange={(event) => setEndDate(event.target.value)}
                          className="mt-2 min-h-11 w-full border border-[#173d25]/25 bg-white px-3 text-sm font-normal"
                        />
                      </label>
                    </div>
                  )}
                </fieldset>

                <fieldset>
                  <legend className="font-serif text-2xl">
                    Who will be travelling?
                  </legend>

                  <p className="mt-2 text-xs leading-6 text-[#61675e]">
                    Let us know the size of your group so we can plan
                    appropriately.
                  </p>

                  <div className="mt-4 space-y-4">
                    {(
                      [
                        {
                          label: "Adults",
                          hint: "Age 18 or above",
                          value: adults,
                          set: setAdults,
                          min: 1,
                        },
                        {
                          label: "Children",
                          hint: "Under 18",
                          value: children,
                          set: setChildren,
                          min: 0,
                        },
                      ] as const
                    ).map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4"
                      >
                        <div>
                          <p className="text-sm font-semibold">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs text-[#61675e]">
                            {item.hint}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            aria-label={`Remove ${item.label.toLowerCase()}`}
                            disabled={item.value <= item.min}
                            onClick={() =>
                              item.set((value: number) =>
                                Math.max(item.min, value - 1),
                              )
                            }
                            className="h-8 w-8 rounded-full border border-[#173d25]/20 disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="w-4 text-center text-sm tabular-nums">
                            {item.value}
                          </span>

                          <button
                            type="button"
                            aria-label={`Add ${item.label.toLowerCase()}`}
                            onClick={() =>
                              item.set((value: number) => value + 1)
                            }
                            className="h-8 w-8 rounded-full border border-[#173d25]/20"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-serif text-2xl">
                    What would you love to experience?
                  </legend>

                  <p className="mt-2 text-xs leading-6 text-[#61675e]">
                    Choose as many experiences as you like. This helps us
                    understand what excites you about Rwanda.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={selectedInterests.includes(item)}
                        onClick={() => toggleInterest(item)}
                        className={`min-h-11 border px-2 py-2 text-xs transition ${
                          selectedInterests.includes(item)
                            ? "border-[#173d25] bg-[#173d25] text-white"
                            : "border-[#173d25]/25 hover:border-[#173d25]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-serif text-2xl">
                    Tell us a little more
                  </legend>

                  <p className="mt-2 text-xs leading-6 text-[#61675e]">
                    Is there something you would especially like to see or do?
                    Let us know about your preferences, celebrations, pace of
                    travel, or any questions you have.
                  </p>

                  <label className="mt-4 block text-xs font-semibold">
                    Additional notes{" "}
                    <span className="font-normal text-[#61675e]">
                      Optional
                    </span>
                    <textarea
                      value={notes}
                      onChange={(event) =>
                        setNotes(event.target.value.slice(0, 2000))
                      }
                      maxLength={2000}
                      rows={4}
                      placeholder="Share your ideas, requests or questions..."
                      className="mt-2 w-full resize-y border border-[#173d25]/25 bg-white p-3 text-sm font-normal outline-none focus:border-[#173d25]"
                    />
                  </label>

                  <p className="mt-1 text-right text-[10px] text-[#61675e]">
                    {notes.length} / 2000
                  </p>
                </fieldset>

                <button
                  type="button"
                  onClick={() => goToStep(2)}
                  className={`inline-flex min-h-12 items-center justify-center gap-5 bg-[#173d25] px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#2b5136] ${focus}`}
                >
                  Continue <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : (
              <div className="space-y-5 pt-7">
                <p className="text-sm leading-7 text-[#61675e]">
                  Share your contact details so our team can discuss your ideas
                  and help you put together your Rwanda journey.
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    id="first-name"
                    required
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First name"
                    className="min-h-11 w-full border border-[#b8b0a5] bg-white px-3 text-sm outline-none transition placeholder:text-[#777168] focus:border-[#173d25]"
                  />

                  <label className="sr-only" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    required
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Last name"
                    className="min-h-11 w-full border border-[#b8b0a5] bg-white px-3 text-sm outline-none transition placeholder:text-[#777168] focus:border-[#173d25]"
                  />
                </div>

                <label className="sr-only" htmlFor="enquiry-email">
                  Email
                </label>
                <input
                  id="enquiry-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="min-h-11 w-full border border-[#b8b0a5] bg-white px-3 text-sm outline-none transition placeholder:text-[#777168] focus:border-[#173d25]"
                />

                <label className="sr-only" htmlFor="enquiry-phone">
                  Phone number
                </label>
                <div className="flex min-h-11 items-center border border-[#b8b0a5] bg-white focus-within:border-[#173d25]">
                  <span
                    className="flex h-full shrink-0 items-center gap-2 border-r border-[#b8b0a5] px-3 text-sm"
                    aria-label="Rwanda country code"
                  >
                    <span aria-hidden="true">🇷🇼</span>
                    <span>+250</span>
                  </span>

                  <input
                    id="enquiry-phone"
                    type="tel"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Phone number (optional)"
                    className="min-h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#777168]"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-5 text-[#4e4a44]">
                  <input
                    type="checkbox"
                    checked={subscribe}
                    onChange={(event) => setSubscribe(event.target.checked)}
                    className="mt-0.5 h-3.5 w-3.5 accent-[#173d25]"
                  />
                  <span>
                    I would like to receive travel inspiration and updates from
                    Karisoke Concierge.
                  </span>
                </label>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className={`text-xs text-[#4e4a44] underline underline-offset-4 hover:text-black ${focus}`}
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className={`inline-flex min-h-12 items-center justify-center gap-4 bg-[#173d25] px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#2b5136] ${focus}`}
                  >
                    Continue on WhatsApp{" "}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <p className="text-[10px] leading-5 text-[#615b53]">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline underline-offset-2 hover:text-black"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            )}
          </form>
        </section>
      </div>

      <footer className="bg-[#173d25] py-6 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 text-xs sm:px-8 lg:px-12">
          <span>© {new Date().getFullYear()} Karisoke Concierge · Rwanda</span>

          <Link
            href="/packages"
            className={`transition hover:text-white ${focus}`}
          >
            Back to journeys
          </Link>
        </div>
      </footer>
    </main>
  );
}
