export default function NotFound() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-semibold">ページが見つかりませんでした</h1>
      <p className="mt-3 text-slate-700">URLをご確認ください。</p>
      <a className="mt-6 inline-block underline" href="/">
        トップへ戻る
      </a>
    </section>
  );
}
