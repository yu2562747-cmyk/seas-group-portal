"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="ja">
      <body>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-2xl font-semibold">致命的なエラーが発生しました</h1>
          <p className="mt-3 break-words text-slate-700">{error.message}</p>
          <button
            onClick={() => reset()}
            className="mt-6 inline-flex items-center rounded-lg border border-black/10 bg-white px-4 py-2 text-sm hover:bg-black/5"
          >
            再試行
          </button>
        </section>
      </body>
    </html>
  );
}
