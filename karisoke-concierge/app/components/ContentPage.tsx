type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
};

export default function ContentPage({
  eyebrow,
  title,
  description,
  items,
}: ContentPageProps) {
  return (
    <main className="min-w-0 flex-1 bg-[#faf9f5] text-[#173d25]">
      <section className="bg-[#173d25] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase leading-relaxed tracking-widest text-[#e4bc64] sm:text-sm">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight [overflow-wrap:anywhere]">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      <section
        aria-label={eyebrow}
        className="mx-auto grid max-w-6xl gap-5 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-14 lg:gap-6 lg:px-8 lg:py-16"
      >
        {items.map((item, index) => (
          <article
            key={item.title}
            className="min-w-0 rounded-xl border border-[#173d25]/15 bg-white p-5 sm:p-6 lg:p-8"
          >
            <span className="text-sm font-semibold text-[#907025]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="mt-4 font-serif text-2xl font-bold leading-tight [overflow-wrap:anywhere] lg:text-3xl">
              {item.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-stone-600">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}