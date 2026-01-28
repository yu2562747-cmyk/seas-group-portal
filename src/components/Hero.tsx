"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="text-sm tracking-wide text-slate-600">SEAS GROUP PORTAL</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
          福祉グループの総合案内
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-slate-700">
          グループの大まかな紹介と、各法人サイトへの導線をまとめたポータルです。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#companies"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white"
          >
            法人一覧を見る
          </a>
          <a
            href="/privacy"
            className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-5 py-2 text-sm font-medium text-slate-800"
          >
            プライバシー
          </a>
        </div>
      </div>

      {/* 背景の薄いグラデ（ASAHI系の上品さの土台） */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(50%_50%_at_80%_20%,rgba(14,165,233,0.10),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.9))]" />
    </section>
  );
}
