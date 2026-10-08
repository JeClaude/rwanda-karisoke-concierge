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
    <main className="min-h-screen bg-white text-emerald-950">
      <section className="bg-emerald-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-amber-300">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100">
            {description}
          </p>
        </div>
      </section>

      <section
        aria-label={eyebrow}
        className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2"
      >
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-emerald-950/15 p-8"
          >
            <span className="text-sm font-semibold text-emerald-700">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="mt-4 text-2xl font-semibold">
              {item.title}
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}