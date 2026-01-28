"use client";

export default function Companies() {
  return (
    <section id="companies" className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold">法人サイト</h2>
        <p className="text-sm text-slate-600">クリックで各サイトへ移動</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "法人A", url: "https://example.com" },
          { name: "法人B", url: "https://example.com" },
          { name: "法人C", url: "https://example.com" },
        ].map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80"
          >
            <div className="text-base font-semibold">{c.name}</div>
            <div className="mt-2 text-sm text-slate-700">{c.url}</div>
            <div className="mt-4 text-sm text-slate-500 group-hover:text-slate-700">サイトへ →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
