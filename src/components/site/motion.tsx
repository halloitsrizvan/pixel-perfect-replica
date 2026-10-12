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
export function GrowthLine({
  className = "",
  d,
  strokeWidth = 2,
  viewBox = "0 0 100 400",
}: {
  className?: string;
  d: string;
  strokeWidth?: number;
  viewBox?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [draw, setDraw] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDraw(0);
      return;
    }

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // Starts drawing when the top of element enters 85% of viewport
      // Fully drawn when the top of element reaches 25% of viewport
      const start = vh * 0.85;
      const end = vh * 0.25;
      const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
      setDraw(1 - progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden
      className={`growth-line ${className}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d={d}
        pathLength={1}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: draw,
          transition: "stroke-dashoffset 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </svg>
  );
}
