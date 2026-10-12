import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site, waLink } from "@/data/site";

// NOTE: Logo cropped from the supplied brand cover — replace /varatect-logo.png with the official file when supplied.
// The crop is white; on light backgrounds it is inverted via CSS filter (not recoloured artwork).
export function Wordmark({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <img
      src="/varatect-logo.png"
      alt="Varatect"
      width={453}
      height={254}
      className={`h-9 w-auto md:h-10 ${dark ? "invert mix-blend-multiply" : "mix-blend-screen"} ${className}`}
    />
  );
}

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>("a,button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const light = scrolled || solid;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        light
          ? "border-b border-rule bg-ivory/95 text-forest-950 backdrop-blur"
          : "bg-transparent text-on-forest"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link to="/" aria-label="Varatect home">
          <Wordmark dark={light} />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((n) => (
            <Link
              key={n.hash}
              to="/"
              hash={n.hash}
              className="eyebrow opacity-80 transition-opacity hover:opacity-100"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className={`eyebrow border px-5 py-3 transition-colors ${light ? "border-forest-950 hover:bg-forest-950 hover:text-ivory" : "border-on-forest hover:bg-ivory hover:text-forest-950"}`}
          >
            Start a Project
          </a>
        </nav>
        <button
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="section-forest fixed inset-0 z-50 flex flex-col px-6 py-5"
        >
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              className="flex h-11 w-11 items-center justify-center"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-14 flex flex-col">
            {site.nav.map((n, i) => (
              <Link
                key={n.hash}
                to="/"
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-on-forest/15 py-4 font-display text-4xl"
              >
                <span className="eyebrow text-mint">0{i + 1}</span>
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-auto bg-ivory py-4 text-center text-forest-950"
          >
            Start a Project on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
