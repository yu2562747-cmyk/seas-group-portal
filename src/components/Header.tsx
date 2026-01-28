"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-wide">
          SEAS GROUP
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-700">
          <Link href="/privacy" className="hover:text-slate-900">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
