"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Bubble = {
  el: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  blur: number;
  alpha: number;
  drift: number;
};

export default function Bubbles() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // reduced-motion 対応（企業品質）
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) return;

    // 既存を掃除
    wrap.innerHTML = "";

    const count = 22;
    const bubbles: Bubble[] = [];

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "absolute rounded-full border border-white/20 bg-white/10 backdrop-blur-[2px]";
      const size = gsap.utils.random(14, 64);
      const x = gsap.utils.random(0, 100);
      const y = gsap.utils.random(0, 100);
      const blur = gsap.utils.random(0, 6);
      const alpha = gsap.utils.random(0.12, 0.35);
      const drift = gsap.utils.random(6, 20);

      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.filter = `blur(${blur}px)`;
      el.style.opacity = `${alpha}`;

      wrap.appendChild(el);
      bubbles.push({ el, x, y, size, blur, alpha, drift });
    }

    const ctx = gsap.context(() => {
      bubbles.forEach((b, idx) => {
        const d = b.drift;
        gsap.to(b.el, {
          x: gsap.utils.random(-d, d),
          y: gsap.utils.random(-d, d),
          scale: gsap.utils.random(0.9, 1.12),
          duration: gsap.utils.random(3.8, 7.2),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: idx * 0.03,
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
}
