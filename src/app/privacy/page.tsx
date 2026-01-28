import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | SEAS GROUP PORTAL",
  description: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-semibold">プライバシーポリシー</h1>
      <p className="mt-4 text-slate-700 leading-relaxed">
        ここにプライバシーポリシーを記載します（会社の規定に合わせて差し替え）。
      </p>
    </section>
  );
}
