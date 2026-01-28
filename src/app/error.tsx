"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-2xl font-semibold">エラーが発生しました</h1>
      <p className="mt-3 break-words text-slate-700">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 inline-flex items-center rounded-lg border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5"
      >
        再読み込み
      </button>
    </section>
  );
}
