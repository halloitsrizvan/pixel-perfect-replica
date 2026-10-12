import { useEffect, useRef, useState } from "react";

/** Observes all .reveal / .fade elements and adds .is-in. Content stays visible without JS. */
export function useRevealAll() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    const els = Array.from(document.querySelectorAll(".reveal, .fade"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target)),
        ),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/** Signature "growth" line that draws as the element scrolls through the viewport. */
export function GrowthLine({ className = "", d }: { className?: string; d: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [draw, setDraw] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setDraw(1);
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.5 + r.height)));
      setDraw(1 - p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <svg
      ref={ref}
      aria-hidden
      className={`growth-line ${className}`}
      viewBox="0 0 100 400"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d={d}
        pathLength={1}
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        style={{ ["--draw" as string]: draw }}
      />
    </svg>
  );
}
