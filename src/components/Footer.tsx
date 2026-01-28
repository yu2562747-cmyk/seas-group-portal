"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SEAS GROUP</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
